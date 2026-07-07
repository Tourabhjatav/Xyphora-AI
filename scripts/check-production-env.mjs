const required = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY",
]

const missing = required.filter((name) => !process.env[name])
const failures = []

if (missing.length > 0) {
  failures.push(`Missing required production environment variables: ${missing.join(", ")}`)
}

if (process.env.NEXT_PUBLIC_SITE_URL) {
  try {
    const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL)

    if (siteUrl.protocol !== "https:") {
      failures.push("NEXT_PUBLIC_SITE_URL must use https:// in production.")
    }
  } catch {
    failures.push("NEXT_PUBLIC_SITE_URL must be a valid absolute URL.")
  }
}

if (process.env.SITE_URL) {
  try {
    const siteUrl = new URL(process.env.SITE_URL)

    if (siteUrl.protocol !== "https:") {
      failures.push("SITE_URL must use https:// in production.")
    }
  } catch {
    failures.push("SITE_URL must be a valid absolute URL when provided.")
  }
}

if (failures.length > 0) {
  console.error("Production environment check failed:")
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log("Production environment check passed.")
