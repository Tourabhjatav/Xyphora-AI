"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Bot, Sparkles, Send, User, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getContactStatusMessage } from "@/lib/contact-errors"
import { contactEmail } from "@/lib/site"
import { submitWeb3FormsLead } from "@/lib/web3forms-client"

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
  "What services do you offer?",
  "How does your process work?",
  "I need a mobile app",
  "I need an AI solution",
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<"chat" | "form" | "success">("chat")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "bot",
      content: "Hi, welcome to Xyphora AI. I can help you choose between website development, mobile app development, AI-driven solutions, automation, and marketing support. What are you trying to build?",
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
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messageIdRef = useRef(1)

  const createMessageId = () => {
    messageIdRef.current += 1
    return messageIdRef.current.toString()
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("what do you")) {
      return "We help with five practical areas:\n\n1. US-standard business websites and landing pages.\n2. Mobile applications and customer portals.\n3. AI chatbots and AI-driven product features.\n4. Workflow automation for sales, support, and operations.\n5. Digital and influencer marketing support.\n\nIf you share your goal, we can recommend the best starting point."
    }

    if (lowerMessage.includes("mobile") || lowerMessage.includes("app") || lowerMessage.includes("application")) {
      return "For mobile application projects, we start with the user journey, core features, login needs, dashboard or portal screens, and launch goals. The focus is a clean app experience that feels professional and easy to use."
    }

    if (lowerMessage.includes("influencer") || lowerMessage.includes("marketing") || lowerMessage.includes("campaign")) {
      return "For marketing work, we usually start with your audience, offer, channels, and budget. Then we plan content, outreach, campaign structure, and performance tracking so the work is measurable."
    }

    if (lowerMessage.includes("chatbot") || lowerMessage.includes("ai bot") || lowerMessage.includes("assistant")) {
      return "For AI projects, we look at your website or app goals, customer questions, workflows, data, and business tools. A useful AI solution should improve the user experience, qualify visitors, reduce manual work, or make your product smarter."
    }

    if (lowerMessage.includes("process") || lowerMessage.includes("work") || lowerMessage.includes("how do you")) {
      return "Our process is simple: discovery call, clear proposal, design and build, review, launch, then post-launch support. You get regular updates so scope and next steps stay clear."
    }

    if (lowerMessage.includes("time") || lowerMessage.includes("long") || lowerMessage.includes("timeline")) {
      return "Timelines depend on scope. A focused landing page or basic chatbot can move quickly, while custom AI apps and integrations need more planning. Share your goal and deadline, and we will give a realistic timeline."
    }

    if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("call")) {
      return `You can email us at ${contactEmail} or use the quote form here. We usually reply within 24 hours with the next best step.`
    }

    if (lowerMessage.includes("start") || lowerMessage.includes("begin") || lowerMessage.includes("hire")) {
      return "The fastest way to start is to share your name, email, service area, and a short project note. We will review it and reply with the recommended next step."
    }

    return "That sounds like something we can help scope. Tell me your business type, whether you need a website, mobile app, AI feature, or automation, and what outcome you want. You can also click Get a Free Quote to send the details directly."
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
    }, 700)
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
    }, 700)
  }

  const handleFormSubmit = async () => {
    if (!userDetails.name || !userDetails.email || !userDetails.service) {
      setStatusMessage("Please add your name, email, and service interest.")
      return
    }

    setIsSubmitting(true)
    setStatusMessage("")

    try {
      const response = await submitWeb3FormsLead({
        source: "AI Chatbot",
        name: userDetails.name,
        email: userDetails.email,
        phone: userDetails.phone,
        company: userDetails.company,
        service: userDetails.service,
      })

      if (response.ok) {
        setStep("success")
      } else {
        setStatusMessage(getContactStatusMessage(false, response.message))
      }
    } catch (error) {
      console.error("Failed to send email summary:", error)
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
        transition={{ delay: 1, type: "spring", damping: 20 }}
        style={{ willChange: "transform" }}
      >
        <button
          type="button"
          aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-lg shadow-xl transition-all ${isOpen ? "bg-muted-foreground hover:bg-muted-foreground/80" : "gradient-purple-cyan hover:opacity-90 hover:scale-105"}`}
        >
          {isOpen ? <X className="w-6 h-6 text-white mx-auto" /> : <MessageCircle className="w-6 h-6 text-white mx-auto" />}
        </button>
        {!isOpen && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 ring-4 ring-background" />}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="fixed bottom-24 right-4 z-50 w-[400px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-lg border border-border bg-card shadow-2xl sm:right-6"
          >
            <div className="gradient-purple-cyan p-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Xyphora AI</h3>
                  <p className="text-sm text-white/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    Website and AI assistant
                  </p>
                </div>
              </div>
            </div>

            {step === "chat" && (
              <>
                <div className="h-[300px] overflow-y-auto p-4 space-y-4 bg-background">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.role === "bot" && (
                        <div className="w-8 h-8 rounded-lg gradient-purple-cyan flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div className={`max-w-[85%] p-3 rounded-lg text-sm ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                        <p className="whitespace-pre-line leading-relaxed">{message.content}</p>
                      </div>
                      {message.role === "user" && (
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2 items-center">
                      <div className="w-8 h-8 rounded-lg gradient-purple-cyan flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {messages.length <= 2 && (
                  <div className="px-4 pb-3 flex flex-wrap gap-2 border-t border-border pt-3">
                    {quickQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => handleQuickQuestion(question)}
                        className="text-xs px-3 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all text-muted-foreground"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                )}

                <div className="p-4 border-t border-border bg-card">
                  <Button
                    onClick={() => setStep("form")}
                    className="w-full gradient-purple-cyan text-white hover:opacity-90 mb-3"
                  >
                    Get a Free Quote
                  </Button>
                  <form onSubmit={(e) => { e.preventDefault(); handleSend() }} className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask a question..."
                      className="flex-1"
                    />
                    <Button type="submit" size="icon" className="gradient-purple-cyan hover:opacity-90" aria-label="Send message">
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </>
            )}

            {step === "form" && (
              <div className="p-6 bg-background">
                <h4 className="font-semibold text-lg mb-2">Request a consultation</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Share your details and we will reply with the next best step.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Name *</label>
                    <Input value={userDetails.name} onChange={(e) => handleInputChange("name", e.target.value)} placeholder="Your name" disabled={isSubmitting} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email *</label>
                    <Input type="email" value={userDetails.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="your@email.com" disabled={isSubmitting} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Phone</label>
                    <Input value={userDetails.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="Your phone number" disabled={isSubmitting} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Company</label>
                    <Input value={userDetails.company} onChange={(e) => handleInputChange("company", e.target.value)} placeholder="Your company name" disabled={isSubmitting} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Service Interested In *</label>
                    <select
                      value={userDetails.service}
                      onChange={(e) => handleInputChange("service", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      <option value="">Select a service</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile Application">Mobile Application Development</option>
                      <option value="AI Chatbot">AI Chatbot Development</option>
                      <option value="AI-Driven Solution">AI-Driven Solution</option>
                      <option value="Automation">Business Automation</option>
                      <option value="AI Web App">AI-Powered Web App</option>
                      <option value="Influencer Marketing">Influencer Marketing</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {statusMessage && (
                    <p className="rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">{statusMessage}</p>
                  )}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" onClick={() => setStep("chat")} className="flex-1" disabled={isSubmitting}>
                      Back
                    </Button>
                    <Button onClick={handleFormSubmit} className="flex-1 gradient-purple-cyan text-white hover:opacity-90" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Sending
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {step === "success" && (
              <div className="p-8 bg-background text-center">
                <div className="w-16 h-16 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Thank you</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We received your inquiry and will reply within 24 hours.
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {userDetails.email}
                </p>
                <Button
                  onClick={() => {
                    setStep("chat")
                    setUserDetails({ name: "", email: "", phone: "", company: "", service: "" })
                  }}
                  variant="outline"
                  className="w-full"
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
