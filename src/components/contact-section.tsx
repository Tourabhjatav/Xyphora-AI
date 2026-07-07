"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Clock, Send, Loader2, CheckCircle2, MessageSquareText, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cardReveal, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations"
import { getContactStatusMessage } from "@/lib/contact-errors"
import { contactEmail } from "@/lib/site"
import { submitWeb3FormsLead } from "@/lib/web3forms-client"

const projectTypes = [
  "New business website",
  "AI chatbot or assistant",
  "Automation workflow",
  "Marketing campaign",
]

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitText, setSubmitText] = useState("Send Message")
  const [statusMessage, setStatusMessage] = useState("")
  const [botcheck, setBotcheck] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setSubmitText("Sending...")
    setStatusMessage("")

    try {
      const response = await submitWeb3FormsLead({
        source: "Website Contact Form",
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        botcheck,
      })

      if (response.ok) {
        setStatusMessage(getContactStatusMessage(true, response.message))
        setFormData({ name: "", email: "", company: "", message: "" })
        setBotcheck("")
      } else {
        setStatusMessage(getContactStatusMessage(false, response.message))
      }
    } catch (error) {
      console.error("Failed to send message:", error)
      setStatusMessage(`Something went wrong. Please try again or email ${contactEmail}.`)
    } finally {
      setIsSubmitting(false)
      setSubmitText("Send Message")
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div initial="hidden" whileInView="visible" variants={fadeInLeft} viewport={viewportOnce} className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium mb-4">Contact Us</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Start with a <span className="gradient-text">Clear Plan</span></h2>
              <p className="text-muted-foreground text-lg">Tell us what you want customers to do on your site. We will recommend the fastest way to improve the experience.</p>
            </div>

            <div className="space-y-6">
              <motion.div variants={cardReveal} className="interactive-card flex items-start gap-4 rounded-lg border border-transparent p-2">
                <div className="w-12 h-12 rounded-lg gradient-animated flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5 text-white" /></div>
                <div><h3 className="font-semibold mb-1">Email Us</h3><p className="text-muted-foreground">{contactEmail}</p></div>
              </motion.div>
              <motion.div variants={cardReveal} className="interactive-card flex items-start gap-4 rounded-lg border border-transparent p-2">
                <div className="w-12 h-12 rounded-lg gradient-animated flex items-center justify-center flex-shrink-0"><Clock className="w-5 h-5 text-white" /></div>
                <div><h3 className="font-semibold mb-1">Response Time</h3><p className="text-muted-foreground">Within 24 hours</p></div>
              </motion.div>
            </div>

            <motion.div variants={cardReveal} className="animated-border rounded-lg border border-border bg-card p-5">
              <div className="mb-4 flex items-center gap-3">
                <MessageSquareText className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Good fit for</h3>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {projectTypes.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" variants={fadeInRight} viewport={viewportOnce}>
            <form onSubmit={handleSubmit} className="premium-panel animated-border p-8 rounded-lg bg-card border border-border space-y-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-border pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Request a free consultation</h3>
                  <p className="text-sm text-muted-foreground">Share a few details and we will reply with next steps.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium mb-2">Name</label><Input placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /></div>
                <div><label className="block text-sm font-medium mb-2">Email</label><Input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required /></div>
              </div>
              <div><label className="block text-sm font-medium mb-2">Company</label><Input placeholder="Your company name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} /></div>
              <div><label className="block text-sm font-medium mb-2">Message</label><Textarea placeholder="Tell us about your project..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required /></div>
              <input
                type="text"
                name="website"
                value={botcheck}
                onChange={(e) => setBotcheck(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <Button
                type="submit"
                size="lg"
                className="shine-button w-full gradient-animated text-white hover:opacity-95 shadow-[0_14px_35px_rgba(74,29,150,0.22)]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    {submitText}
                  </>
                ) : (
                  <>
                    {submitText} <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
              {statusMessage && (
                <p className="rounded-lg bg-muted px-4 py-3 text-sm text-muted-foreground">
                  {statusMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
