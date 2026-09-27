"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Clock, Send, Loader2, CheckCircle2, MessageSquareText, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cardReveal, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations"
import { contactEmail } from "@/lib/site"

const projectTypes = [
  "High-performance business website",
  "Custom web app / customer portal",
  "AI chatbot or knowledge assistant",
  "Workflow & API automation pipeline",
]

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" })
  const [hasConsented, setHasConsented] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitText, setSubmitText] = useState("Send Message")
  const [statusMessage, setStatusMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!hasConsented) {
      setIsSuccess(false)
      setStatusMessage("Please confirm consent to process your information under the DPDP Act before submitting.")
      return
    }

    setIsSubmitting(true)
    setSubmitText("Sending message...")
    setStatusMessage("")
    setIsSuccess(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          source: "Website Contact Form",
          consent: true,
          botcheck: "",
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setIsSuccess(true)
        setStatusMessage(data.message || "Thank you! Your message has been sent successfully. We will get back to you within 24 hours.")
        setFormData({ name: "", email: "", company: "", message: "" })
        setHasConsented(false)
      } else {
        setIsSuccess(false)
        setStatusMessage(data.error || "Failed to send message. Please check your information and try again.")
      }
    } catch (error) {
      console.error("Failed to send message:", error)
      setIsSuccess(false)
      setStatusMessage(`Something went wrong. Please try again or email us directly at ${contactEmail}.`)
    } finally {
      setIsSubmitting(false)
      setSubmitText("Send Message")
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeInLeft} viewport={viewportOnce} className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-4 border border-primary/20">
                Let&apos;s Build Together
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-foreground">
                Start With a <span className="gradient-text">Clear Blueprint</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Tell us about your project vision, target timeline, and feature requirements. We will review your specs and reply with an actionable architectural roadmap within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div variants={cardReveal} className="interactive-card flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl gradient-animated flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">Direct Email</h3>
                  <a href={`mailto:${contactEmail}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {contactEmail}
                  </a>
                </div>
              </motion.div>

              <motion.div variants={cardReveal} className="interactive-card flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl gradient-purple-cyan flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">Rapid Response Guarantee</h3>
                  <p className="text-sm text-muted-foreground">Detailed reply within 24 business hours</p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={cardReveal} className="animated-border rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <MessageSquareText className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-base text-foreground">Core Project Types</h3>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {projectTypes.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" variants={fadeInRight} viewport={viewportOnce}>
            <form onSubmit={handleSubmit} className="premium-panel animated-border p-8 rounded-2xl bg-card border border-border space-y-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-border pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-inner">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Request a Project Consultation</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Share your project specifications and requirements.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <Input 
                    id="contact-name"
                    placeholder="Jane Doe" 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                    Work Email <span className="text-primary">*</span>
                  </label>
                  <Input 
                    id="contact-email"
                    type="email" 
                    placeholder="jane@company.com" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    required 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-company" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  Company / Project Name
                </label>
                <Input 
                  id="contact-company"
                  placeholder="Acme Corp (optional)" 
                  value={formData.company} 
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })} 
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  Project Description &amp; Scope <span className="text-primary">*</span>
                </label>
                <Textarea 
                  id="contact-message"
                  placeholder="Tell us about the website or web application you'd like to build, desired features, and timeline..." 
                  rows={4} 
                  value={formData.message} 
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                  required 
                />
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-muted/40 border border-border/80">
                <input
                  type="checkbox"
                  id="dpdp-contact-consent"
                  checked={hasConsented}
                  onChange={(e) => setHasConsented(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer accent-primary"
                  required
                />
                <label htmlFor="dpdp-contact-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer select-none">
                  I consent to Xyphora AI collecting and processing my contact details for project evaluation under the{" "}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary font-medium underline hover:text-primary/80">
                    DPDP Act 2023 &amp; Privacy Policy
                  </a>.
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="shine-button w-full gradient-animated text-white font-semibold hover:opacity-95 shadow-[0_14px_35px_rgba(74,29,150,0.28)] h-12 rounded-xl"
                disabled={isSubmitting || !hasConsented}
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
                <div className={`rounded-xl px-4 py-3 text-sm font-medium border ${
                  isSuccess 
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
                    : "bg-red-500/10 border-red-500/30 text-red-400"
                }`}>
                  {statusMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
