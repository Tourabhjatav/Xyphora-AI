# Vercel Production Checklist

Use this checklist before moving the Xyphora AI website to production on Vercel.

## 1. Project Settings

- Framework preset: `Next.js`
- Install command: `npm ci`
- Build command: `npm run validate`
- Output directory: `.next`
- Production branch: `main` or your chosen release branch

These values are also defined in `vercel.json`.

## 2. Required Environment Variables

Set these in Vercel Project Settings > Environment Variables.

Production:

```text
NEXT_PUBLIC_SITE_URL=https://xyphora-ai.vercel.app
SITE_URL=https://xyphora-ai.vercel.app
WEB3FORMS_ACCESS_KEY=...
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=...
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
NEXT_PUBLIC_TURNSTILE_SITE_KEY=...
TURNSTILE_SECRET_KEY=...
CONTACT_RATE_LIMIT_MAX=5
CONTACT_RATE_LIMIT_WINDOW_SECONDS=60
CONTACT_BODY_LIMIT_BYTES=10000
CONTACT_UPSTREAM_TIMEOUT_MS=8000
```

Preview:

Use the same security variables, but set `NEXT_PUBLIC_SITE_URL` and `SITE_URL` to the preview domain only when you need canonical preview testing. Otherwise, Vercel preview URLs are still accepted by the contact API through Vercel's deployment URL.

No custom domain is required. `https://xyphora-ai.vercel.app` can be your production domain.

## 3. External Services

- Web3Forms: required for contact form delivery. The free Web3Forms flow uses the public `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` from the browser.
- Upstash Redis: optional for distributed server-side API rate limiting if the internal `/api/contact` route is used.
- Cloudflare Turnstile: optional if the internal `/api/contact` route is used for server-verified bot checks.

## 4. Pre-Deploy Checks

Run locally:

```bash
npm run validate
```

Run with production-like environment variables:

```bash
npm run check:prod
```

## 5. Post-Deploy Checks

After Vercel deployment:

- Open `/` and confirm the site loads over HTTPS.
- Open `/robots.txt` and confirm the sitemap URL uses the production domain.
- Open `/sitemap.xml` and confirm canonical URLs use the production domain.
- Submit the contact form once and confirm delivery.
- Submit 6 invalid contact requests from the same IP and confirm the 6th returns `429`.
- Confirm the response headers include `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, and `X-Content-Type-Options`.

## 6. VAPT Notes

The contact API now enforces:

- Same-origin POST requests.
- `application/json` only.
- Request body size limit.
- Distributed rate limiting when Upstash env vars are configured.
- Honeypot field.
- Turnstile bot verification when Turnstile env vars are configured.
- Upstream timeout for the Web3Forms call.
- No-store API responses.
