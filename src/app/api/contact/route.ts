import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"
export const maxDuration = 10

const isDev = process.env.NODE_ENV !== "production"

type ContactPayload = {
  source?: string
  name?: string
  email?: string
  phone?: string
  company?: string
  service?: string
  message?: string
  consent?: boolean
  botcheck?: string
  turnstileToken?: string
}

type RateLimitResult = {
  limited: boolean
  limit: number
  remaining: number
  resetAt: number
}

type TurnstileResponse = {
  success?: boolean
  "error-codes"?: string[]
}

const rateLimitWindowSeconds = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_SECONDS || 60)
const maxRequestsPerWindow = Number(process.env.CONTACT_RATE_LIMIT_MAX || 5)
const requestBodyLimitBytes = Number(process.env.CONTACT_BODY_LIMIT_BYTES || 10_000)
const upstreamTimeoutMs = Number(process.env.CONTACT_UPSTREAM_TIMEOUT_MS || 8_000)
const MAX_RATE_LIMIT_STORE_ENTRIES = 5_000

const rateLimitStore = new Map<string, { count: number; resetAt: number }>()
let nextRateLimitCleanupAt = Date.now() + rateLimitWindowSeconds * 1000

const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null

const distributedRateLimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(maxRequestsPerWindow, `${rateLimitWindowSeconds} s`),
      analytics: true,
      prefix: "xyphora:contact",
    })
  : null

function json(
  body: { message?: string; error?: string; success?: boolean },
  status = 200,
  headers: HeadersInit = {},
) {
  const isOk = status >= 200 && status < 300
  return NextResponse.json(
    {
      success: isOk,
      message: body.message || (isOk ? "Message sent successfully." : "An error occurred."),
      error: !isOk ? (body.error || body.message || "An error occurred.") : undefined,
      ...body,
    },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
        ...headers,
      },
    },
  )
}

function getClientIp(request: NextRequest): string {
  const rawIp = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("cf-connecting-ip")
    || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown"

  // Sanitize IP format to prevent log/store injection
  return /^[a-fA-F0-9:.]+$/.test(rawIp) ? rawIp.slice(0, 45) : "unknown"
}

function normalizeOrigin(value: string | null | undefined): string {
  if (!value) return ""

  try {
    return new URL(value).origin.toLowerCase()
  } catch {
    return ""
  }
}

function isAllowedOrigin(request: NextRequest): boolean {
  // Reject cross-site metadata if provided by browser
  const secFetchSite = request.headers.get("sec-fetch-site")
  if (secFetchSite === "cross-site") {
    return false
  }

  const requestOrigin = request.headers.get("origin")
  const referer = request.headers.get("referer")

  const allowedOrigins = new Set(
    [
      normalizeOrigin(request.url),
      normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL),
      normalizeOrigin(process.env.SITE_URL),
      process.env.VERCEL_URL ? normalizeOrigin(`https://${process.env.VERCEL_URL}`) : "",
    ].filter(Boolean),
  )

  if (requestOrigin) {
    return allowedOrigins.has(normalizeOrigin(requestOrigin))
  }

  if (referer) {
    return allowedOrigins.has(normalizeOrigin(referer))
  }

  // Allow non-browser / direct API calls only in development
  return isDev
}

function cleanExpiredRateLimits(now: number, force = false) {
  if (!force && now < nextRateLimitCleanupAt && rateLimitStore.size < MAX_RATE_LIMIT_STORE_ENTRIES) return

  for (const [ip, entry] of rateLimitStore) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(ip)
    }
  }

  // Prevent memory exhaustion attacks: clear store if abnormally oversized
  if (rateLimitStore.size >= MAX_RATE_LIMIT_STORE_ENTRIES) {
    rateLimitStore.clear()
  }

  nextRateLimitCleanupAt = now + rateLimitWindowSeconds * 1000
}

function checkMemoryRateLimit(ip: string): RateLimitResult {
  const now = Date.now()
  cleanExpiredRateLimits(now)

  const current = rateLimitStore.get(ip)

  if (!current || current.resetAt <= now) {
    const resetAt = now + rateLimitWindowSeconds * 1000
    rateLimitStore.set(ip, { count: 1, resetAt })
    return {
      limited: false,
      limit: maxRequestsPerWindow,
      remaining: maxRequestsPerWindow - 1,
      resetAt,
    }
  }

  current.count += 1
  return {
    limited: current.count > maxRequestsPerWindow,
    limit: maxRequestsPerWindow,
    remaining: Math.max(maxRequestsPerWindow - current.count, 0),
    resetAt: current.resetAt,
  }
}

async function checkRateLimit(ip: string): Promise<RateLimitResult> {
  if (!distributedRateLimit) {
    return checkMemoryRateLimit(ip)
  }

  try {
    const result = await distributedRateLimit.limit(ip)

    return {
      limited: !result.success,
      limit: result.limit,
      remaining: result.remaining,
      resetAt: result.reset,
    }
  } catch {
    return checkMemoryRateLimit(ip)
  }
}

function rateLimitHeaders(rateLimit: RateLimitResult): HeadersInit {
  return {
    "RateLimit-Limit": String(rateLimit.limit),
    "RateLimit-Remaining": String(rateLimit.remaining),
    "RateLimit-Reset": String(Math.ceil(rateLimit.resetAt / 1000)),
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
}

function cleanSingleLine(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return ""
  return escapeHtml(
    value
      .replace(/[\u0000-\u001f\u007f]/g, "")
      .replace(/[\r\n]+/g, " ")
      .trim()
      .slice(0, maxLength)
  )
}

function cleanMultiline(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return ""
  return escapeHtml(
    value
      .replace(/[\u0000-\u0009\u000b\u000c\u000e-\u001f\u007f]/g, "")
      .trim()
      .slice(0, maxLength)
  )
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 120
}

async function readJsonPayload(request: NextRequest, headers: HeadersInit) {
  const body = await request.text()
  const bodySize = new TextEncoder().encode(body).byteLength

  if (bodySize > requestBodyLimitBytes) {
    return {
      ok: false as const,
      response: json({ message: "Request body is too large." }, 413, headers),
    }
  }

  try {
    const payload = JSON.parse(body)

    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      throw new Error("Invalid payload")
    }

    return {
      ok: true as const,
      payload: payload as ContactPayload,
    }
  } catch {
    return {
      ok: false as const,
      response: json({ message: "Invalid request format." }, 400, headers),
    }
  }
}

async function fetchWithTimeout(url: string, init: RequestInit, timeoutMs: number) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)

  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
    })
  } finally {
    clearTimeout(timeout)
  }
}

async function verifyTurnstile(token: string, ip: string) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY

  if (!secretKey) {
    return { ok: true as const }
  }

  if (!token) {
    return {
      ok: false as const,
      response: json({ message: "Bot verification is required." }, 400),
    }
  }

  const form = new FormData()
  form.append("secret", secretKey)
  form.append("response", token)
  if (ip !== "unknown") form.append("remoteip", ip)

  try {
    const response = await fetchWithTimeout(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: form,
      },
      5_000,
    )
    const data = await response.json().catch(() => ({})) as TurnstileResponse

    if (response.ok && data.success) {
      return { ok: true as const }
    }

    return {
      ok: false as const,
      response: json({ message: "Bot verification failed." }, 400),
    }
  } catch {
    return {
      ok: false as const,
      response: json({ message: "Bot verification is unavailable. Please try again." }, 503),
    }
  }
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return json({ message: "Request origin is not allowed." }, 403)
  }

  const contentType = request.headers.get("content-type") || ""
  if (!contentType.toLowerCase().includes("application/json")) {
    return json({ message: "Content-Type must be application/json." }, 415)
  }

  const contentLength = Number(request.headers.get("content-length") || 0)
  if (contentLength > requestBodyLimitBytes) {
    return json({ message: "Request body is too large." }, 413)
  }

  const ip = getClientIp(request)
  const rateLimit = await checkRateLimit(ip)
  const limitHeaders = rateLimitHeaders(rateLimit)

  if (rateLimit.limited) {
    return json(
      { message: "Too many requests. Please try again in a minute." },
      429,
      {
        ...limitHeaders,
        "Retry-After": String(Math.max(Math.ceil((rateLimit.resetAt - Date.now()) / 1000), 1)),
      },
    )
  }

  const parsed = await readJsonPayload(request, limitHeaders)
  if (!parsed.ok) {
    return parsed.response
  }

  const payload = parsed.payload

  // Honeypot bot protection
  if (payload.botcheck) {
    return json({ message: "Message sent." }, 200, limitHeaders)
  }

  // Statutory DPDP Act Consent Check
  if (!payload.consent) {
    return json(
      { message: "Explicit consent under the DPDP Act 2023 is required to submit personal contact data." },
      400,
      limitHeaders,
    )
  }

  const rawSource = cleanSingleLine(payload.source, 60)
  const isChatbot = rawSource.toLowerCase().includes("chatbot") || rawSource.toLowerCase().includes("assistant")
  const source = isChatbot ? (rawSource || "AI Chatbot") : "Website Contact Form"
  const name = cleanSingleLine(payload.name, 80)
  const email = cleanSingleLine(payload.email, 120)
  const phone = cleanSingleLine(payload.phone, 40)
  const company = cleanSingleLine(payload.company, 100)
  const service = cleanSingleLine(payload.service, 100)
  const message = cleanMultiline(payload.message, 2_000)
  const turnstileToken = cleanSingleLine(payload.turnstileToken, 2_048)

  const turnstile = await verifyTurnstile(turnstileToken, ip)
  if (!turnstile.ok) {
    return turnstile.response
  }

  if (!name || !email || !isEmail(email)) {
    return json(
      { message: "Please provide a valid name and email address." },
      400,
      limitHeaders,
    )
  }

  if (!isChatbot && !message) {
    return json(
      { message: "Please provide your project description." },
      400,
      limitHeaders,
    )
  }

  if (isChatbot && !service && !message) {
    return json(
      { message: "Please select an engineering service or provide a message." },
      400,
      limitHeaders,
    )
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return json(
      { message: "Message service is not configured. Please contact us directly by email." },
      503,
      limitHeaders,
    )
  }

  const form = new FormData()
  form.append("access_key", accessKey)
  form.append("subject", `[DPDP Consented Lead] ${source}: ${name}`)
  form.append("from_name", "Xyphora Website")
  form.append("replyto", email)
  form.append("Name", name)
  form.append("Email", email)
  form.append("Company", company || "Not Provided")
  form.append("DPDP_Consent", "Confirmed Affirmative Consent (DPDP Act 2023)")

  if (phone) form.append("Phone", phone)
  if (service) form.append("Service", service)
  if (message) form.append("Message", message)

  let response: Response

  try {
    response = await fetchWithTimeout(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: form,
      },
      upstreamTimeoutMs,
    )
  } catch {
    return json(
      { message: "Message service is temporarily unavailable. Please try again later." },
      502,
      limitHeaders,
    )
  }

  if (!response.ok) {
    return json(
      { message: "Message delivery failed. Please try again or reach out via email." },
      response.status,
      limitHeaders,
    )
  }

  return json({ message: "Thank you! Your message has been sent successfully." }, 200, limitHeaders)
}

export async function GET() {
  return new NextResponse(null, {
    status: 405,
    headers: { Allow: "POST", "Cache-Control": "no-store" },
  })
}

export async function PUT() {
  return new NextResponse(null, {
    status: 405,
    headers: { Allow: "POST", "Cache-Control": "no-store" },
  })
}

export async function DELETE() {
  return new NextResponse(null, {
    status: 405,
    headers: { Allow: "POST", "Cache-Control": "no-store" },
  })
}

export async function PATCH() {
  return new NextResponse(null, {
    status: 405,
    headers: { Allow: "POST", "Cache-Control": "no-store" },
  })
}
