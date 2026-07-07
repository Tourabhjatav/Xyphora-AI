"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Brain, Code, ArrowRight, CheckCircle2, Megaphone, Workflow } from "lucide-react"
import { cardReveal, fadeUp, sectionHeader, staggerContainer, viewportOnce } from "@/lib/animations"

const services = [
  {
    icon: Globe,
    title: "US-Standard Website Development",
    description: "Premium business websites, landing pages, and company sites with polished UI, clear content, strong CTAs, and SEO-ready structure.",
    features: ["Business Websites", "Landing Pages", "SEO Foundation", "Fast Loading"],
    outcome: "Premium first impression",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description: "Clean, user-friendly mobile app experiences for customer portals, booking flows, dashboards, internal tools, and service apps.",
    features: ["iOS & Android UX", "Customer Portals", "Secure Login", "Scalable Product UI"],
    outcome: "Apps people enjoy using",
  },
  {
    icon: Brain,
    title: "AI-Driven Solutions",
    description: "AI chatbots, assistants, recommendation flows, and smart business features that make your website or app more useful.",
    features: ["AI Chatbots", "Smart Assistants", "RAG Search", "Lead Qualification"],
    outcome: "Smarter customer experience",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Automate repetitive sales, support, document, and reporting tasks so your team can focus on higher-value work.",
    features: ["CRM Flows", "Email Automation", "Document AI", "Dashboards"],
    outcome: "Less manual follow-up",
  },
  {
    icon: Megaphone,
    title: "Brand & Growth Marketing",
    description: "Digital campaigns, creator outreach, content direction, and conversion tracking designed to support your website or app launch.",
    features: ["Campaign Strategy", "Content Planning", "Creator Outreach", "Performance Reports"],
    outcome: "More attention and leads",
  },
  {
    icon: Code,
    title: "AI Integration",
    description: "Connect OpenAI, Claude, vector databases, and third-party APIs to your existing website or business tools.",
    features: ["API Integration", "Legacy Systems", "Data Pipelines", "Monitoring"],
    outcome: "AI added without rebuilding everything",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={sectionHeader} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium mb-4">Services</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-4">Websites, Apps, and <span className="gradient-text">AI Products</span></motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">We design and develop digital products with a clean US-standard look, strong usability, SEO-friendly structure, and AI features where they create real value.</motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardReveal}
              whileHover={{ y: -8, scale: 1.015 }}
              className="interactive-card animated-border group flex h-full flex-col rounded-lg bg-card border border-border p-6 hover:border-primary/50"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-lg gradient-animated flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{service.outcome}</span>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{service.description}</p>

              <div className="mt-auto grid grid-cols-1 gap-2">
                {service.features.map((feature) => (
                  <span key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {feature}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="animated-border mt-12 flex flex-col items-center justify-between gap-5 rounded-lg border border-primary/20 bg-background p-6 text-center shadow-sm md:flex-row md:text-left"
        >
          <div>
            <h3 className="text-lg font-semibold">Not sure what your business needs first?</h3>
            <p className="text-muted-foreground">Start with a short discovery call. We will identify the fastest customer-facing improvement.</p>
          </div>
          <a href="#contact" className="shine-button inline-flex h-11 shrink-0 items-center justify-center rounded-lg gradient-animated px-6 font-medium text-white shadow-[0_14px_35px_rgba(74,29,150,0.22)] transition-opacity hover:opacity-95">
            Ask for a recommendation
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
