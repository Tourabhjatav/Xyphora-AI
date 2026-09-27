"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Globe, Smartphone, Brain, Code2, ArrowRight, CheckCircle2, ShoppingBag, Workflow } from "lucide-react"
import { cardReveal, fadeUp, sectionHeader, staggerContainer, viewportOnce } from "@/lib/animations"

const services = [
  {
    icon: Globe,
    title: "High-Performance Business Websites",
    description: "Tailored Next.js corporate websites and landing pages built with pixel-perfect UI, clear copywriting, top-tier SEO, and sub-second load times.",
    features: ["Custom UI/UX Design", "Conversion-Engineered Layouts", "Schema.org & Technical SEO", "Sub-Second Global Edge Delivery"],
    outcome: "Built to impress & convert",
    tag: "Next.js 16 + Tailwind",
  },
  {
    icon: Code2,
    title: "Full-Stack Web Apps & SaaS",
    description: "Interactive customer portals, scalable SaaS platforms, and enterprise dashboards with real-time sync, auth, and rock-solid architecture.",
    features: ["Complex Dashboards & Portals", "Role-Based Authentication", "PostgreSQL / MongoDB / Redis", "High-Speed API Endpoints"],
    outcome: "Scalable product UI",
    tag: "React 19 + TypeScript",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Responsive, native-feeling mobile applications and customer portals engineered for fluid gestures, offline support, and high retention.",
    features: ["iOS & Android Experiences", "Cross-Platform Performance", "Smooth Micro-Interactions", "Push & Device Integration"],
    outcome: "Apps users love",
    tag: "Mobile-First UX",
  },
  {
    icon: Brain,
    title: "AI Chatbots & Smart Copilots",
    description: "Context-aware AI chatbots and knowledge-base copilots that answer client questions, qualify prospects, and automate support 24/7.",
    features: ["RAG Knowledge Retrieval", "Lead Qualification Logic", "OpenAI & Claude LLM Connectors", "Custom Conversational UI"],
    outcome: "Automated customer support",
    tag: "AI & Vector Search",
  },
  {
    icon: Workflow,
    title: "Workflow & API Automation",
    description: "Eliminate repetitive manual tasks by integrating CRM systems, payment gateways, notification webhooks, and automated document pipelines.",
    features: ["Custom API Integrations", "CRM & Webhook Pipelines", "Automated Client Notifications", "Document Generation & Sync"],
    outcome: "Hours saved daily",
    tag: "Automated Workflows",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Digital Storefronts",
    description: "Modern, high-converting digital storefronts and checkout workflows designed for smooth purchasing, rapid search, and seamless inventory sync.",
    features: ["Stripe / LemonSqueezy Checkout", "Instant Product Filtering", "Customer Account Portals", "Lightning-Fast Cart UX"],
    outcome: "Maximized checkout conversion",
    tag: "Modern Commerce",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={sectionHeader} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-4 border border-primary/20">
            What We Build
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Websites, Web Apps & <span className="gradient-text">AI Solutions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We engineer high-performance web products that combine world-class visual aesthetics with robust full-stack architecture and intelligent AI capabilities.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardReveal}
              whileHover={{ y: -8, scale: 1.015 }}
              className="interactive-card animated-border group flex h-full flex-col rounded-2xl bg-card border border-border p-7 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="w-13 h-13 rounded-xl gradient-animated flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md p-3">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">{service.outcome}</span>
                  <span className="text-[11px] font-mono text-muted-foreground">{service.tag}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.description}</p>

              <div className="mt-auto grid grid-cols-1 gap-2.5 pt-4 border-t border-border/60">
                {service.features.map((feature) => (
                  <span key={feature} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{feature}</span>
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
          className="animated-border mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-primary/30 bg-card/80 p-8 text-center shadow-lg md:flex-row md:text-left backdrop-blur-sm"
        >
          <div>
            <h3 className="text-xl font-bold text-foreground">Have a unique web or software project in mind?</h3>
            <p className="text-muted-foreground text-sm sm:text-base mt-1">Book a free technical discovery consultation. We will evaluate your requirements and provide a clear architectural roadmap.</p>
          </div>
          <Link href="/#contact" className="shine-button inline-flex h-12 shrink-0 items-center justify-center rounded-xl gradient-animated px-8 font-semibold text-white shadow-[0_14px_35px_rgba(74,29,150,0.28)] transition-opacity hover:opacity-95">
            Discuss Your Specs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
