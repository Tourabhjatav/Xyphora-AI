export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xyphora-ai.vercel.app"

export const contactEmail = "xyphora.ai@gmail.com"

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString()
}
