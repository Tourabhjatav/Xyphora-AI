import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"
export const maxDuration = 10

type ContactPayload = {
  source?: string
  name?: string
  email?: string
  phone?: string
  company?: string
  service?: string
  message?: string
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
  body: { message: string },
  status = 200,
  headers: HeadersInit = {},
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...headers,
    },
  })
}

function getClientIp(request: NextRequest) {
  return request.headers.get("cf-connecting-ip")
    || request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown"
}

function normalizeOrigin(value: string | null | undefined) {
  if (!value) return ""

  try {
    return new URL(value).origin
  } catch {
    return ""
  }
}

function isAllowedOrigin(request: NextRequest) {
  const requestOrigin = request.headers.get("origin")
  if (!requestOrigin) return true

  const allowedOrigins = new Set(
    [
      normalizeOrigin(request.url),
      normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL),
      normalizeOrigin(process.env.SITE_URL),
      process.env.VERCEL_URL ? normalizeOrigin(`https://${process.env.VERCEL_URL}`) : "",
    ].filter(Boolean),
  )

  return allowedOrigins.has(normalizeOrigin(requestOrigin))
}

function cleanExpiredRateLimits(now: number) {
  if (now < nextRateLimitCleanupAt) return

  for (const [ip, entry] of rateLimitStore) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(ip)
    }
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

function clean(value: unknown, maxLength: number) {
  if (typeof value !== "string") return ""
  return value.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, maxLength)
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
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
      response: json({ message: "Invalid request." }, 400, headers),
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

  if (payload.botcheck) {
    return json({ message: "Message sent." }, 200, limitHeaders)
  }

  const source = clean(payload.source, 40) === "AI Chatbot"
    ? "AI Chatbot"
    : "Website Contact Form"
  const name = clean(payload.name, 80)
  const email = clean(payload.email, 120)
  const phone = clean(payload.phone, 40)
  const company = clean(payload.company, 100)
  const service = clean(payload.service, 100)
  const message = clean(payload.message, 2_000)
  const turnstileToken = clean(payload.turnstileToken, 2_048)

  const turnstile = await verifyTurnstile(turnstileToken, ip)
  if (!turnstile.ok) {
    return turnstile.response
  }

  if (!name || !email || !isEmail(email)) {
    return json(
      { message: "Please provide a valid name and email." },
      400,
      limitHeaders,
    )
  }

  if (source !== "AI Chatbot" && !message) {
    return json(
      { message: "Please add a project message." },
      400,
      limitHeaders,
    )
  }

  if (source === "AI Chatbot" && !service) {
    return json(
      { message: "Please select a service." },
      400,
      limitHeaders,
    )
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return json(
      { message: "Message service is not available. Please email us directly." },
      503,
      limitHeaders,
    )
  }

  const form = new FormData()
  form.append("access_key", accessKey)
  form.append("subject", `New Lead from ${source}: ${name}`)
  form.append("from_name", "Xyphora Website")
  form.append("replyto", email)
  form.append("Name", name)
  form.append("Email", email)
  form.append("Company", company || "Not Provided")

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
      { message: "Message service is unavailable. Please try again later." },
      502,
      limitHeaders,
    )
  }

  const data = await response.json().catch(() => ({}))
  const upstreamMessage = data && typeof data === "object" && "message" in data && typeof data.message === "string"
    ? data.message
    : "Message could not be sent."

  if (!response.ok) {
    return json(
      { message: upstreamMessage },
      response.status,
      limitHeaders,
    )
  }

  return json({ message: "Message sent." }, 200, limitHeaders)
}
