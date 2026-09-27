"use client"

import { motion } from "framer-motion"
import { Compass, Palette, Code2, ShieldCheck, Rocket, CheckCircle2 } from "lucide-react"
import { cardReveal, fadeUp, sectionHeader, viewportOnce } from "@/lib/animations"

const steps = [
  {
    icon: Compass,
    step: "01",
    title: "Discovery & Architecture",
    description: "We analyze your project goals, technical requirements, user journeys, and data schemas to engineer the optimal web architecture before writing a line of code.",
    duration: "Week 1",
    deliverables: ["Technical Blueprint", "Component Hierarchy", "Timeline & Milestones"],
  },
  {
    icon: Palette,
    step: "02",
    title: "UI/UX & Design System",
    description: "We craft a bespoke, modern US-standard design system complete with interactive prototypes, dark/light theme tokens, and conversion-oriented visual layouts.",
    duration: "Week 1-2",
    deliverables: ["Interactive Prototypes", "Design System Tokens", "Client Review & Signoff"],
  },
  {
    icon: Code2,
    step: "03",
    title: "Full-Stack Sprint Build",
    description: "Our engineers build in agile milestones using Next.js, React 19, TypeScript, and Tailwind CSS. You receive staging preview links to test progress live.",
    duration: "Week 2-5",
    deliverables: ["Live Staging Previews", "Clean Modular Code", "Database & API Integrations"],
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "QA & Performance Audit",
    description: "We run thorough test suites, cross-device responsiveness checks, accessibility audits, and Core Web Vitals optimizations to guarantee 99+ Lighthouse speed.",
    duration: "Week 5-6",
    deliverables: ["Lighthouse 99+ Audit", "Security & Rate-Limit Check", "Cross-Browser Verification"],
  },
  {
    icon: Rocket,
    step: "05",
    title: "Deployment & Scaling",
    description: "We deploy your web product to global edge networks (Vercel / AWS) with custom domain DNS setup, SSL, automated CI/CD pipelines, and post-launch maintenance.",
    duration: "Ongoing",
    deliverables: ["Global Edge Deployment", "Automated CI/CD Pipeline", "Post-Launch Warranty & Support"],
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            Engineering Lifecycle
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight"
          >
            How We Build <span className="gradient-text">Exceptional Web Products</span>
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A transparent, milestone-driven development process designed to deliver high-quality software on time and within scope.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 overflow-hidden rounded-full bg-primary/10">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full origin-top rounded-full bg-gradient-to-b from-primary via-cyan-400 to-primary/10"
            />
          </div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                variants={cardReveal}
                viewport={viewportOnce}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full gradient-animated items-center justify-center z-10 shadow-lg shadow-primary/20 animate-soft-bounce">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>

                <div className={`w-full lg:w-[calc(50%-4rem)] ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                  <motion.div 
                    whileHover={{ y: -6, scale: 1.015 }}
                    className="interactive-card animated-border p-7 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-sm transition-all group"
                  >
                    <div className="lg:hidden flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full gradient-animated flex items-center justify-center">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        {item.duration}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="hidden lg:flex w-12 h-12 rounded-xl bg-muted group-hover:bg-primary/10 items-center justify-center transition-colors shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-foreground">
                            {item.title}
                          </h3>
                          <span className="hidden lg:inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                          {item.deliverables.map((deliverable) => (
                            <span 
                              key={deliverable} 
                              className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-medium flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden lg:block w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
