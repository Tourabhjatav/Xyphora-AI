"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Bot, Sparkles, Send, User, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { contactEmail } from "@/lib/site"

interface ChatMessage {
  id: string
  role: "user" | "bot"
  content: string
  timestamp: Date
}

interface UserDetails {
  name: string
  email: string
  phone: string
  company: string
  service: string
}

const quickQuestions = [
  "What web stacks do you use?",
  "How fast can you build my site?",
  "Can you build a custom SaaS / app?",
  "How does AI chatbot integration work?",
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<"chat" | "form" | "success">("chat")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "bot",
      content: "Hello! Welcome to Xyphora AI. I'm your digital engineering assistant. I can answer technical questions regarding custom websites, full-stack web applications, SaaS dashboards, AI chatbots, and workflow automations. What are you looking to build?",
      timestamp: new Date()
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
  })
  const [hasConsented, setHasConsented] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messageIdRef = useRef(1)

  const createMessageId = () => {
    messageIdRef.current += 1
    return messageIdRef.current.toString()
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false)
    }
  }, [isOpen])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("what do you")) {
      return "We specialize exclusively in high-end web & software engineering:\n\n1. Custom Next.js Business Websites & Landing Pages\n2. Full-Stack Web Applications, SaaS & Customer Portals\n3. Mobile Application UX & Responsive Progressive Web Apps\n4. Tailored AI Chatbots, Assistants & RAG Search\n5. Workflow & API Automations (CRM, Webhooks, Payments)\n\nTell me about your project and I can recommend the optimal technical architecture!"
    }

    if (lowerMessage.includes("tech") || lowerMessage.includes("stack") || lowerMessage.includes("framework")) {
      return "We build with modern industry standards: Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4, Framer Motion, PostgreSQL, Prisma, Redis/Upstash, Docker, and OpenAI / Claude API integrations. All hosted on ultra-fast global edge CDNs."
    }

    if (lowerMessage.includes("mobile") || lowerMessage.includes("app") || lowerMessage.includes("saas") || lowerMessage.includes("portal") || lowerMessage.includes("dashboard")) {
      return "For web apps, customer portals, and SaaS dashboards, we design clean component-driven interfaces with secure role-based auth, real-time database synchronization, type-safe API contracts, and responsive mobile-first UX."
    }

    if (lowerMessage.includes("chatbot") || lowerMessage.includes("ai") || lowerMessage.includes("copilot") || lowerMessage.includes("rag")) {
      return "Our AI chatbots connect OpenAI / Claude models directly with your company's knowledge base using vector embeddings (RAG). They answer client inquiries accurately, qualify prospects, and sync leads into your CRM 24/7."
    }

    if (lowerMessage.includes("process") || lowerMessage.includes("how do you build") || lowerMessage.includes("steps")) {
      return "Our 5-step engineering process is: 1) Discovery & Architecture, 2) UI/UX Design System, 3) Agile Development Sprints with live staging previews, 4) QA & Lighthouse 99+ Speed Optimization, and 5) Global Edge Deployment & Post-Launch Support."
    }

    if (lowerMessage.includes("time") || lowerMessage.includes("long") || lowerMessage.includes("timeline") || lowerMessage.includes("fast")) {
      return "Business websites typically take 2–4 weeks, while full-stack web applications and custom SaaS portals take 4–8 weeks. We also offer dedicated rush sprints for time-sensitive launches."
    }

    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("quote") || lowerMessage.includes("fee")) {
      return "We provide transparent, fixed-scope milestone quotes based on your required features, complexity, and timeline. Click 'Get a Free Quote' below or send us your project details to receive an exact roadmap."
    }

    if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
      return `You can reach our engineering team directly at ${contactEmail} or submit the consultation form right here. We respond within 24 business hours.`
    }

    return "That sounds like a great project. Tell me more about your requirements, expected features, and target timeline—or click 'Get a Free Quote' to connect directly with our engineering team!"
  }

  const handleSend = async () => {
    if (!input.trim()) return
    const currentInput = input
    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content: currentInput,
      timestamp: new Date()
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: createMessageId(),
        role: "bot",
        content: getBotResponse(currentInput),
        timestamp: new Date()
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 600)
  }

  const handleQuickQuestion = (question: string) => {
    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content: question,
      timestamp: new Date()
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: createMessageId(),
          role: "bot",
          content: getBotResponse(question),
          timestamp: new Date()
        },
      ])
      setIsTyping(false)
    }, 600)
  }

  const handleFormSubmit = async () => {
    if (!userDetails.name || !userDetails.email || !userDetails.service) {
      setStatusMessage("Please provide your name, email, and service interest.")
      return
    }

    if (!hasConsented) {
      setStatusMessage("Please confirm consent under the DPDP Act before submitting.")
      return
    }

    setIsSubmitting(true)
    setStatusMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "AI Assistant Lead Drawer",
          name: userDetails.name,
          email: userDetails.email,
          phone: userDetails.phone,
          company: userDetails.company,
          message: `Interested in: ${userDetails.service}. Phone: ${userDetails.phone || "N/A"}`,
          consent: true,
          botcheck: "",
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStep("success")
        setHasConsented(false)
      } else {
        setStatusMessage(data.error || "Failed to submit. Please try again.")
      }
    } catch (error) {
      console.error("Failed to send consultation inquiry:", error)
      setStatusMessage(`Something went wrong. Please try again or email ${contactEmail}.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof UserDetails, value: string) => {
    setUserDetails(prev => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring", damping: 20 }}
        style={{ willChange: "transform" }}
      >
        <button
          type="button"
          aria-label={isOpen ? "Close engineering chat assistant" : "Open engineering chat assistant"}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-2xl shadow-2xl transition-all flex items-center justify-center ${
            isOpen 
              ? "bg-card border border-border text-foreground hover:bg-muted" 
              : "gradient-animated text-white hover:opacity-95 hover:scale-105 shadow-[0_10px_30px_rgba(74,29,150,0.4)]"
          }`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 border-2 border-background" />
          </span>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="fixed bottom-24 right-4 z-50 w-[420px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:right-6 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="gradient-purple-cyan p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-inner">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Xyphora Engineering AI</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Web Architecture &amp; App Copilot
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {step === "chat" && (
              <>
                <div className="h-[320px] overflow-y-auto p-4 space-y-3.5 bg-background/95">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2.5 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.role === "bot" && (
                        <div className="w-7 h-7 rounded-lg gradient-purple-cyan flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Sparkles className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                      <div className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm ${
                        message.role === "user" 
                          ? "gradient-animated text-white rounded-br-none shadow-sm" 
                          : "bg-muted/80 text-foreground border border-border/50 rounded-bl-none leading-relaxed"
                      }`}>
                        <p className="whitespace-pre-line">{message.content}</p>
                      </div>
                      {message.role === "user" && (
                        <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5 border border-border">
                          <User className="w-3.5 h-3.5 text-muted-foreground" />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2 items-center">
                      <div className="w-7 h-7 rounded-lg gradient-purple-cyan flex items-center justify-center shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="bg-muted p-2.5 rounded-xl border border-border/40">
                        <div className="flex gap-1.5 items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {messages.length <= 2 && (
                  <div className="px-4 pb-3 flex flex-wrap gap-1.5 border-t border-border/60 pt-2.5 bg-card/50">
                    {quickQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => handleQuickQuestion(question)}
                        className="text-[11px] px-2.5 py-1.5 bg-muted hover:bg-primary hover:text-white rounded-lg transition-all text-muted-foreground font-medium border border-border/60 text-left"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                )}

                <div className="p-3.5 border-t border-border bg-card">
                  <Button
                    onClick={() => setStep("form")}
                    className="shine-button w-full gradient-animated text-white font-semibold hover:opacity-95 mb-2.5 h-10 rounded-xl shadow-md"
                  >
                    Request Project Quote
                  </Button>
                  <form onSubmit={(e) => { e.preventDefault(); handleSend() }} className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about tech stacks, features, pricing..."
                      className="flex-1 h-10 text-xs sm:text-sm rounded-xl"
                    />
                    <Button type="submit" size="icon" className="h-10 w-10 gradient-purple-cyan text-white hover:opacity-90 shrink-0 rounded-xl" aria-label="Send message">
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </>
            )}

            {step === "form" && (
              <div className="p-5 bg-background max-h-[480px] overflow-y-auto">
                <h4 className="font-bold text-base text-foreground mb-1">Request a Project Consultation</h4>
                <p className="text-xs text-muted-foreground mb-4">
                  Share your technical requirements and our engineering team will respond within 24 hours.
                </p>
                <div className="space-y-3.5">
                  <div>
                    <label htmlFor="cb-name" className="text-xs font-semibold text-foreground mb-1 block">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <Input id="cb-name" value={userDetails.name} onChange={(e) => handleInputChange("name", e.target.value)} placeholder="Jane Doe" disabled={isSubmitting} className="h-9 text-xs" />
                  </div>
                  <div>
                    <label htmlFor="cb-email" className="text-xs font-semibold text-foreground mb-1 block">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <Input id="cb-email" type="email" value={userDetails.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="jane@company.com" disabled={isSubmitting} className="h-9 text-xs" />
                  </div>
                  <div>
                    <label htmlFor="cb-phone" className="text-xs font-semibold text-foreground mb-1 block">
                      Phone Number (Optional)
                    </label>
                    <Input id="cb-phone" value={userDetails.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="+1 (555) 000-0000" disabled={isSubmitting} className="h-9 text-xs" />
                  </div>
                  <div>
                    <label htmlFor="cb-company" className="text-xs font-semibold text-foreground mb-1 block">
                      Company / Project Name
                    </label>
                    <Input id="cb-company" value={userDetails.company} onChange={(e) => handleInputChange("company", e.target.value)} placeholder="Acme Inc." disabled={isSubmitting} className="h-9 text-xs" />
                  </div>
                  <div>
                    <label htmlFor="cb-service" className="text-xs font-semibold text-foreground mb-1 block">
                      Primary Service Focus <span className="text-primary">*</span>
                    </label>
                    <select
                      id="cb-service"
                      value={userDetails.service}
                      onChange={(e) => handleInputChange("service", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      <option value="">Select an engineering solution</option>
                      <option value="High-Performance Business Website">High-Performance Business Website</option>
                      <option value="Full-Stack Web App / SaaS">Full-Stack Web App / SaaS</option>
                      <option value="Customer Portal & Dashboard">Customer Portal &amp; Dashboard</option>
                      <option value="AI Chatbot & Knowledge Assistant">AI Chatbot &amp; Knowledge Assistant</option>
                      <option value="Workflow & API Automation">Workflow &amp; API Automation</option>
                      <option value="E-Commerce & Digital Storefront">E-Commerce &amp; Digital Storefront</option>
                      <option value="Other Web Engineering">Other Web Engineering</option>
                    </select>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-muted/40 border border-border/80">
                    <input
                      type="checkbox"
                      id="cb-dpdp-consent"
                      checked={hasConsented}
                      onChange={(e) => setHasConsented(e.target.checked)}
                      className="mt-0.5 h-3.5 w-3.5 rounded border-border text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer accent-primary"
                      required
                    />
                    <label htmlFor="cb-dpdp-consent" className="text-[11px] text-muted-foreground leading-tight cursor-pointer select-none">
                      I consent to Xyphora AI processing my details under the{" "}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary font-medium underline hover:text-primary/80">
                        DPDP Act 2023 &amp; Privacy Policy
                      </a>.
                    </label>
                  </div>

                  {statusMessage && (
                    <p className="rounded-lg bg-red-500/10 border border-red-500/30 px-3 py-2 text-xs font-medium text-red-400">
                      {statusMessage}
                    </p>
                  )}

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" onClick={() => setStep("chat")} className="flex-1 h-10 rounded-xl text-xs font-semibold" disabled={isSubmitting}>
                      Back to Chat
                    </Button>
                    <Button onClick={handleFormSubmit} className="shine-button flex-1 gradient-animated text-white font-semibold hover:opacity-90 h-10 rounded-xl text-xs" disabled={isSubmitting || !hasConsented}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-1.5 w-3.5 h-3.5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {step === "success" && (
              <div className="p-8 bg-background text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle className="w-7 h-7 text-emerald-400" />
                </div>
                <h4 className="font-bold text-lg text-foreground mb-1">Inquiry Received</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                  Thank you! Our engineering team will review your specifications and email you back within 24 hours.
                </p>
                <p className="text-xs font-mono text-primary bg-primary/10 py-1.5 px-3 rounded-lg inline-block mb-6">
                  {userDetails.email}
                </p>
                <Button
                  onClick={() => {
                    setStep("chat")
                    setUserDetails({ name: "", email: "", phone: "", company: "", service: "" })
                  }}
                  variant="outline"
                  className="w-full h-10 rounded-xl text-xs font-semibold"
                >
                  Start New Conversation
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
