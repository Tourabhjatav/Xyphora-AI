"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircle, Clock, ShieldCheck, Code2, Globe } from "lucide-react"
import { cardReveal, fadeUp, sectionHeader, viewportOnce } from "@/lib/animations"

const faqCategories = [
  {
    icon: Globe,
    title: "Web Engineering & Architecture",
    faqs: [
      {
        q: "Why do you build custom Next.js websites instead of WordPress or templates?",
        a: "Custom Next.js & React builds deliver sub-second page loads, unmatched security (no vulnerable plugins), total design freedom, and 99+ Lighthouse performance scores that significantly outrank generic templates on search engines.",
      },
      {
        q: "Will my website look great and load fast on all mobile devices?",
        a: "Yes. Every website and web application we engineer is built mobile-first with fluid responsive grids, optimized asset streaming, and touch-optimized micro-interactions.",
      },
      {
        q: "Do you include search engine optimization (SEO) in website builds?",
        a: "Yes. All web builds include semantic HTML5 structure, automated OpenGraph metadata, Schema.org JSON-LD structured data, XML sitemaps, and Core Web Vitals optimization.",
      },
    ],
  },
  {
    icon: Code2,
    title: "AI Integration & Full-Stack Apps",
    faqs: [
      {
        q: "How do custom AI chatbots and assistants work on my website?",
        a: "We connect OpenAI / Claude LLMs with your private company documentation using Retrieval-Augmented Generation (RAG). The chatbot accurately answers questions, qualifies leads, and hands off inquiries to your team 24/7.",
      },
      {
        q: "Can you build custom SaaS platforms, portals, and dashboards?",
        a: "Yes. We engineer full-stack web applications with secure authentication, role-based permissions, PostgreSQL databases, real-time sync, and third-party payment integrations.",
      },
      {
        q: "Can you integrate our existing APIs, CRM, or payment systems?",
        a: "Yes. We integrate Stripe, HubSpot, Supabase, Salesforce, custom REST/GraphQL endpoints, and automated webhook pipelines into your web product.",
      },
    ],
  },
  {
    icon: Clock,
    title: "Timelines & Agile Sprints",
    faqs: [
      {
        q: "How long does a website or web app project take?",
        a: "A high-performance business website typically takes 2–4 weeks. Complex full-stack web applications and custom SaaS portals take 4–8 weeks depending on scope.",
      },
      {
        q: "Will I be able to see progress while you build?",
        a: "Yes. We work in agile weekly sprints. You receive private staging preview links so you can test features live and give feedback before each milestone.",
      },
      {
        q: "Can you accommodate expedited launch deadlines?",
        a: "Yes. For urgent product launches or time-sensitive events, we offer dedicated acceleration sprints to deliver on tight schedules.",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Pricing, Hosting & Support",
    faqs: [
      {
        q: "How does your pricing and payment structure work?",
        a: "We offer transparent, fixed-scope milestone pricing. Payments are divided into clear deliverables (e.g. 50% upfront, 50% upon final staging signoff).",
      },
      {
        q: "Where will my website or app be hosted?",
        a: "We deploy to high-availability global edge networks such as Vercel, AWS, or your organization's private cloud infrastructure with automated SSL and CI/CD.",
      },
      {
        q: "Do you provide warranty and ongoing maintenance after launch?",
        a: "Yes. Every build includes a post-launch warranty period for technical adjustments, bug fixes, and performance monitoring. Ongoing maintenance plans are also available.",
      },
    ],
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "0-0": true, // open first item by default for quick engagement
  })

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section id="faq" className="py-24 lg:py-32 bg-muted/30 relative">
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
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-4 border border-primary/20"
          >
            Got Questions?
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know about our web build methodology, tech stacks, delivery timelines, and support.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: categoryIndex * 0.08, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-purple-cyan flex items-center justify-center shadow-md">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-3 sm:ml-12">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`
                  const isOpen = !!openItems[key]
                  const contentId = `faq-content-${categoryIndex}-${faqIndex}`
                  const buttonId = `faq-btn-${categoryIndex}-${faqIndex}`

                  return (
                    <motion.div
                      key={faq.q}
                      initial={false}
                      whileHover={{ y: -2 }}
                      className="interactive-card rounded-xl bg-card border border-border overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                        onClick={() => toggleItem(categoryIndex, faqIndex)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-semibold text-sm sm:text-base pr-4 text-foreground">{faq.q}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={contentId}
                            role="region"
                            aria-labelledby={buttonId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                          >
                            <div className="px-4 sm:px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-3">
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
          transition={{ delay: 0.3, duration: 0.6 }}
          variants={cardReveal}
          className="animated-border text-center mt-14 p-8 rounded-2xl bg-card border border-border shadow-md"
        >
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-bold text-xl mb-2 text-foreground">Have a specific technical question?</h3>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-md mx-auto">
            Our engineering team is here to help. Reach out directly or start an instant chat.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/#contact" 
              className="shine-button px-8 py-3 rounded-xl gradient-animated text-white font-semibold hover:opacity-95 transition-opacity shadow-md"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
