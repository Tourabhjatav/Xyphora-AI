"use client"

import { motion } from "framer-motion"
import { Zap, Target, Brain, Heart, CheckCircle2 } from "lucide-react"
import { cardReveal, fadeUp, sectionHeader, staggerContainer, viewportOnce } from "@/lib/animations"

const features = [
  { icon: Zap, title: "Launch Faster", description: "Focused sprints, clear milestones, and frequent previews so your project keeps moving." },
  { icon: Target, title: "Built for Leads", description: "Every page, chatbot, and campaign is shaped around the customer action you want." },
  { icon: Brain, title: "Practical AI", description: "AI features are tied to real workflows, not added just because they look impressive." },
  { icon: Heart, title: "Direct Attention", description: "You work with a responsive team that keeps scope, decisions, and next steps clear." },
]

const standards = [
  "Responsive design across mobile and desktop",
  "Conversion-focused forms and calls to action",
  "Analytics-ready launches",
  "Post-launch improvements and support",
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={sectionHeader} className="text-center mb-16">
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-4">Why Choose <span className="gradient-text">Xyphora AI</span>?</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">We combine design, development, AI, and marketing so customers get a smoother path from first visit to first conversation.</motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <motion.div key={feature.title} variants={cardReveal} whileHover={{ y: -7, scale: 1.02 }} className="interactive-card animated-border text-center p-7 rounded-lg bg-card border border-border hover:border-primary/50">
              <div className="w-14 h-14 rounded-lg gradient-animated flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="animated-border mt-10 grid grid-cols-1 gap-3 rounded-lg border border-border bg-muted/30 p-5 md:grid-cols-2"
        >
          {standards.map((standard, index) => (
            <motion.div
              key={standard}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>{standard}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
