import { contactEmail } from "@/lib/site"

const fallbackMessage = `We could not send this form right now. Please email us directly at ${contactEmail}.`

export function getContactStatusMessage(responseOk: boolean, message: unknown) {
  if (responseOk) {
    return "Success. Your message has been sent. We will get back to you within 24 hours."
  }

  if (typeof message !== "string" || !message.trim()) {
    return fallbackMessage
  }

  if (
    message.includes("service is not available")
    || message.includes("Contact form is not configured")
    || message.includes("Message service is unavailable")
    || message.includes("could not be sent")
  ) {
    return fallbackMessage
  }

  return `Error: ${message}`
}
