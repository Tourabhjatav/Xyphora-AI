"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircle, Clock, Shield, CreditCard, Rocket } from "lucide-react"
import { cardReveal, fadeUp, sectionHeader, viewportOnce } from "@/lib/animations"

const faqCategories = [
  {
    icon: Rocket,
    title: "Getting Started",
    faqs: [
      {
        q: "How do I get started with Xyphora AI?",
        a: "Fill out the contact form or use the assistant. We review your goal, ask a few practical questions, then reply with the best next step for your website, AI, or marketing project.",
      },
      {
        q: "What information do you need to provide a quote?",
        a: "For AI projects: describe your use case, expected users, and integration needs. For marketing: share your industry, target audience, and campaign goals. The more details you provide, the more accurate our quote will be.",
      },
      {
        q: "Do you work with startups and small businesses?",
        a: "Yes. We can start with a focused MVP, landing page, chatbot, or campaign plan, then expand once the first version proves useful.",
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Pricing & Payment",
    faqs: [
      {
        q: "What is your pricing structure?",
        a: "Pricing depends on scope, integrations, timeline, and support needs. After discovery, we provide a clear quote with deliverables, timeline, and payment milestones.",
      },
      {
        q: "Do you require upfront payment?",
        a: "Most projects use milestone-based payment so both sides have clear expectations. The exact structure is included in the proposal before work begins.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, credit/debit cards, PayPal, and Wise for international clients. All payments are secured and you'll receive detailed invoices for your records.",
      },
    ],
  },
  {
    icon: Clock,
    title: "Timeline & Process",
    faqs: [
      {
        q: "How long does an AI chatbot project take?",
        a: "A simple chatbot can be delivered quickly, while a custom assistant with integrations needs more planning and testing. We provide a realistic timeline after reviewing your content and workflow.",
      },
      {
        q: "How long do marketing campaigns take to launch?",
        a: "Influencer outreach campaigns can start within 1-2 weeks. Full campaign strategy and execution typically takes 2-4 weeks to launch. Ongoing management continues for the campaign duration.",
      },
      {
        q: "Can you work with tight deadlines?",
        a: "We can accommodate rush projects with dedicated resources. Rush fees may apply for expedited timelines. Let us know your deadline during consultation and we'll do our best to meet it.",
      },
    ],
  },
  {
    icon: Shield,
    title: "Support & Guarantees",
    faqs: [
      {
        q: "Do you provide ongoing support after project completion?",
        a: "Yes. Projects include a post-launch support period for fixes and practical adjustments. Ongoing maintenance and optimization can be added when needed.",
      },
      {
        q: "What if I'm not satisfied with the results?",
        a: "We work with review points, demos, and clear approval steps so issues are caught early. If something misses the agreed scope, we revise it before launch.",
      },
      {
        q: "How do you handle data privacy and security?",
        a: "We take security seriously. All data is encrypted, we sign NDAs upon request, and we follow industry best practices. Your data is never shared or used for other clients. We can work within your compliance requirements.",
      },
    ],
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section id="faq" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewportOnce}
          variants={sectionHeader}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeUp}
            className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Got questions? We have answers. If you do not find what you are looking for, chat with us!
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-purple-cyan flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="space-y-3 ml-13">
                {category.faqs.map((faq, faqIndex) => {
                  const isOpen = openItems[`${categoryIndex}-${faqIndex}`]
                  return (
                    <motion.div
                      key={faq.q}
                      initial={false}
                      whileHover={{ y: -2 }}
                      className="interactive-card rounded-lg bg-card border border-border overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, faqIndex)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-medium pr-4">{faq.q}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={cardReveal}
          className="animated-border text-center mt-12 p-6 rounded-lg bg-card border border-border"
        >
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Chat with our AI assistant or schedule a free consultation call.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a 
              href="#contact" 
              className="shine-button px-6 py-2.5 rounded-lg gradient-animated text-white font-medium hover:opacity-95 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
