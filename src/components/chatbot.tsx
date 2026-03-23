"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Bot, Sparkles, Send, User, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

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
  "I need AI chatbot development",
  "I need marketing services",
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<"chat" | "form" | "success">("chat")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "bot",
      content: "Hi! Welcome to Xyphora AI. I'm here to help you with AI Development and Marketing services. What would you like to know?",
      timestamp: new Date()
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("what do you")) {
      return "We offer TWO main service categories:\n\n🤖 AI DEVELOPMENT:\n   • AI Chatbots & Assistants\n   • Document Intelligence\n   • AI Search & RAG Systems\n   • AI-Powered Web Apps\n\n📢 MARKETING SERVICES:\n   • Influencer Marketing\n   • Social Media Management\n   • Digital Marketing\n   • Content Strategy\n\nWould you like to discuss a project? Click 'Get a Quote' to share your details!"
    }

    if (lowerMessage.includes("influencer") || lowerMessage.includes("marketing") || lowerMessage.includes("campaign")) {
      return "📢 INFLUENCER MARKETING SERVICES:\n\nWe help brands connect with the right influencers:\n\n🔍 Influencer Research\n   Finding perfect influencers for your niche\n\n📱 Campaign Strategy\n   End-to-end campaign planning\n\n🤝 Outreach & Negotiation\n   We handle all communications\n\n📊 Performance Tracking\n   Real-time analytics and ROI reports\n\nWant to start a campaign? Click 'Get a Quote' below!"
    }

    if (lowerMessage.includes("chatbot") || lowerMessage.includes("ai bot") || lowerMessage.includes("assistant")) {
      return "🤖 AI CHATBOT DEVELOPMENT:\n\nWe build custom AI chatbots:\n   • GPT-4 & Claude integration\n   • Custom training for your business\n   • Multi-language support\n   • CRM integrations\n   • 24/7 automated support\n\nWe create chatbots for:\n   • Customer support\n   • Lead generation\n   • Sales assistance\n   • Internal operations\n\nInterested? Click 'Get a Quote' to discuss your needs!"
    }

    if (lowerMessage.includes("process") || lowerMessage.includes("work") || lowerMessage.includes("how do you")) {
      return "🔧 OUR PROCESS:\n\nStep 1: Free Consultation\n   We discuss your needs and goals\n\nStep 2: Detailed Proposal\n   Clear scope, timeline, and pricing\n\nStep 3: Development\n   Regular updates and demos\n\nStep 4: Launch & Support\n   Deployment and ongoing maintenance\n\nWe work in sprints with weekly updates!\n\nReady to start? Click 'Get a Quote'!"
    }

    if (lowerMessage.includes("time") || lowerMessage.includes("long") || lowerMessage.includes("timeline")) {
      return "⏱️ PROJECT TIMELINES:\n\n🤖 AI PROJECTS:\n   • Basic Chatbot: 2-3 weeks\n   • Advanced AI: 4-6 weeks\n   • Enterprise Solutions: 8-16 weeks\n\n📢 MARKETING CAMPAIGNS:\n   • Campaign Setup: 1-2 weeks\n   • Full Execution: 2-4 weeks\n   • Ongoing Management: Continuous\n\nLet's discuss your project! Click 'Get a Quote'."
    }

    if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("call")) {
      return "📞 CONTACT US:\n\nEmail: hello@xyphora.ai\nPhone: +1 (555) 123-4567\n\nOr fill out our quick form by clicking 'Get a Quote' below, and we'll get back to you within 24 hours!\n\nWe're excited to work with you! 🚀"
    }

    if (lowerMessage.includes("social") || lowerMessage.includes("instagram") || lowerMessage.includes("tiktok") || lowerMessage.includes("youtube")) {
      return "📱 SOCIAL MEDIA SERVICES:\n\nWe manage ALL platforms:\n   • Instagram\n   • TikTok\n   • YouTube\n   • Twitter/X\n   • LinkedIn\n   • Facebook\n\n🎯 OUR SERVICES:\n   • Content creation & posting\n   • Community engagement\n   • Growth strategy\n   • Analytics & reports\n\nNeed social media help? Click 'Get a Quote'!"
    }

    if (lowerMessage.includes("start") || lowerMessage.includes("begin") || lowerMessage.includes("hire")) {
      return "🚀 LET'S GET STARTED!\n\n1. Click 'Get a Quote' below\n2. Fill in your details\n3. We'll contact you within 24 hours\n4. Free consultation call\n5. Receive your custom proposal\n\nWe're excited to help grow your business!"
    }

    return "Thanks for your interest! 🙌\n\nI can help you with:\n\n🤖 AI Development\n   • Chatbots & Assistants\n   • Document Processing\n   • AI Search Systems\n\n📢 Marketing Services\n   • Influencer Marketing\n   • Social Media\n   • Digital Marketing\n\nFor a detailed discussion, please click 'Get a Quote' below and share your contact details!"
  }

  const handleSend = async () => {
    if (!input.trim()) return
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date()
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: getBotResponse(input),
        timestamp: new Date()
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
    setTimeout(() => handleSend(), 100)
  }

  const handleFormSubmit = async () => {
    if (!userDetails.name || !userDetails.email || !userDetails.service) {
      return
    }

    setIsSubmitting(true)

    try {
      const form = new FormData();
      form.append("access_key", "b72142e0-b7bb-4249-862f-1f74d6594cf6");
      form.append("subject", `New Lead from AI Chatbot: ${userDetails.name}`);
      form.append("from_name", "Xyphora Website");
      form.append("replyto", userDetails.email);
      form.append("Name", userDetails.name);
      form.append("Email", userDetails.email);
      form.append("Phone", userDetails.phone || "Not Provided");
      form.append("Company", userDetails.company || "Not Provided");
      form.append("Service", userDetails.service);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Lead captured:", userDetails)
        setStep("success")
      } else {
        alert("Error: " + data.message)
      }
    } catch (error) {
      console.error("Failed to send email summary:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof UserDetails, value: string) => {
    setUserDetails(prev => ({ ...prev, [field]: value }))
  }

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-xl transition-all ${isOpen ? "bg-muted-foreground hover:bg-muted-foreground/80" : "gradient-purple-cyan hover:opacity-90 hover:scale-105"
            }`}
        >
          {isOpen ? <X className="w-6 h-6 text-white mx-auto" /> : <MessageCircle className="w-6 h-6 text-white mx-auto" />}
        </button>
        {!isOpen && <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full animate-pulse" />}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="gradient-purple-cyan p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Xyphora AI</h3>
                  <p className="text-sm text-white/80 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    AI & Marketing Assistant
                  </p>
                </div>
              </div>
            </div>

            {step === "chat" && (
              <>
                {/* Messages */}
                <div className="h-[300px] overflow-y-auto p-4 space-y-4 bg-background">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.role === "bot" && (
                        <div className="w-8 h-8 rounded-full gradient-purple-cyan flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                        }`}>
                        <p className="whitespace-pre-line leading-relaxed">{message.content}</p>
                      </div>
                      {message.role === "user" && (
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2 items-center">
                      <div className="w-8 h-8 rounded-full gradient-purple-cyan flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-muted p-3 rounded-2xl rounded-bl-sm">
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

                {/* Quick Questions */}
                {messages.length <= 2 && (
                  <div className="px-4 pb-3 flex flex-wrap gap-2 border-t border-border pt-3">
                    {quickQuestions.map((question) => (
                      <button
                        key={question}
                        onClick={() => handleQuickQuestion(question)}
                        className="text-xs px-3 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all text-muted-foreground"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                )}

                {/* Get a Quote Button */}
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
                    <Button type="submit" size="icon" className="gradient-purple-cyan hover:opacity-90">
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </>
            )}

            {step === "form" && (
              <div className="p-6 bg-background">
                <h4 className="font-semibold text-lg mb-4">Let's Connect! 🚀</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Share your details and we'll get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Name *</label>
                    <Input
                      value={userDetails.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email *</label>
                    <Input
                      type="email"
                      value={userDetails.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Phone</label>
                    <Input
                      value={userDetails.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Company</label>
                    <Input
                      value={userDetails.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                      disabled={isSubmitting}
                    />
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
                      <option value="AI Chatbot">AI Chatbot Development</option>
                      <option value="AI Document">Document AI Solutions</option>
                      <option value="AI Search">AI Search & RAG Systems</option>
                      <option value="AI Web App">AI-Powered Web App</option>
                      <option value="Influencer Marketing">Influencer Marketing</option>
                      <option value="Social Media">Social Media Management</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      onClick={() => setStep("chat")}
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleFormSubmit}
                      className="flex-1 gradient-purple-cyan text-white hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Submitting...
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
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Thank You! 🎉</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We've received your inquiry. Our team will contact you within 24 hours!
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  📧 {userDetails.email}<br />
                  📱 {userDetails.phone || "No phone provided"}
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