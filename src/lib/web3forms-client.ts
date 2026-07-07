type Web3FormsLead = {
  source: "Website Contact Form" | "AI Chatbot"
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message?: string
  botcheck?: string
}

export async function submitWeb3FormsLead(lead: Web3FormsLead) {
  if (lead.botcheck) {
    return { ok: true, message: "Message sent." }
  }

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return {
      ok: false,
      message: "Message service is not available. Please email us directly.",
    }
  }

  const form = new FormData()
  form.append("access_key", accessKey)
  form.append("subject", `New Lead from ${lead.source}: ${lead.name}`)
  form.append("from_name", "Xyphora Website")
  form.append("name", lead.name)
  form.append("email", lead.email)
  form.append("company", lead.company || "Not Provided")

  if (lead.phone) form.append("phone", lead.phone)
  if (lead.service) form.append("service", lead.service)
  if (lead.message) form.append("message", lead.message)

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    })
    const data = await response.json().catch(() => ({}))
    const message = typeof data.message === "string" ? data.message : "Message could not be sent."

    return {
      ok: response.ok && data.success !== false,
      message,
    }
  } catch {
    return {
      ok: false,
      message: "Message service is unavailable. Please try again later.",
    }
  }
}
