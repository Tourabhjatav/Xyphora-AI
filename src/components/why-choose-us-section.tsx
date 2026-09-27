"use client"

import { motion } from "framer-motion"
import { Zap, Code2, Cpu, ShieldCheck, CheckCircle2 } from "lucide-react"
import { cardReveal, fadeUp, sectionHeader, staggerContainer, viewportOnce } from "@/lib/animations"

const features = [
  { 
    icon: Zap, 
    title: "Sub-Second Performance", 
    description: "Next.js Turbopack, Edge caching, and asset optimization engineered for 99+ Google Lighthouse scores and rapid conversions." 
  },
  { 
    icon: Code2, 
    title: "Clean Modular Code", 
    description: "Strict TypeScript, reusable React components, and maintainable architecture that scales effortlessly without technical debt." 
  },
  { 
    icon: Cpu, 
    title: "Intelligent AI Features", 
    description: "Custom conversational copilots, semantic RAG search, and automated workflows seamlessly integrated into your web product." 
  },
  { 
    icon: ShieldCheck, 
    title: "Direct Engineering Access", 
    description: "Collaborate directly with the developers building your software. Fast iteration loops, staging previews, and zero middlemen." 
  },
]

const standards = [
  "Strict mobile-first responsive design across all devices",
  "Semantic HTML & Schema.org structured data for SEO supremacy",
  "Rate-limited APIs and enterprise security protection",
  "Automated CI/CD deployment pipelines on Vercel or AWS",
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-24 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={sectionHeader} className="text-center mb-16">
          <motion.span 
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-4 border border-primary/20"
          >
            Engineering Standards
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Why Build With <span className="gradient-text">Xyphora AI</span>?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We blend world-class visual design, robust full-stack engineering, and AI capabilities to build websites and web apps that deliver measurable business results.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <motion.div 
              key={feature.title} 
              variants={cardReveal} 
              whileHover={{ y: -7, scale: 1.02 }} 
              className="interactive-card animated-border text-center p-7 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-sm transition-all"
            >
              <div className="w-14 h-14 rounded-xl gradient-animated flex items-center justify-center mx-auto mb-5 shadow-md">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="animated-border mt-12 grid grid-cols-1 gap-4 rounded-2xl border border-primary/20 bg-muted/40 p-6 md:grid-cols-2 shadow-sm"
        >
          {standards.map((standard, index) => (
            <motion.div
              key={standard}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span>{standard}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
