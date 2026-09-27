"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ChevronRight, Sparkles, Code2, Database, Workflow, Globe, Layers, ShieldCheck } from "lucide-react"
import { cardReveal, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations"

const aiStack = [
  { name: "OpenAI GPT-4o", icon: Sparkles, desc: "Reasoning & Chat Logic" },
  { name: "Claude 3.5 Sonnet", icon: Code2, desc: "Deep Analysis & Code" },
  { name: "LangChain / RAG", icon: Workflow, desc: "Knowledge Vector DBs" },
  { name: "Custom API Connectors", icon: Globe, desc: "Seamless Webhooks" },
]

const webArchitectureStack = [
  { name: "Next.js 16 + React 19", icon: Layers, desc: "Server Components & Edge" },
  { name: "TypeScript 5", icon: Code2, desc: "Strict Type Safety" },
  { name: "PostgreSQL & Redis", icon: Database, desc: "High-Performance Data" },
  { name: "Global Edge Hosting", icon: ShieldCheck, desc: "Sub-Second Latency" },
]

const coreCompetencies = [
  "Bespoke Business Websites",
  "Full-Stack Web Apps & SaaS",
  "Mobile Application Portals",
  "AI Chatbots & Semantic Copilots",
  "Workflow & API Automations",
  "Core Web Vitals & SEO Perfection",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
            viewport={viewportOnce}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold border border-primary/20">
              About Xyphora AI
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
              Your <span className="gradient-text">Web Engineering</span> &amp; Digital Product Partner
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Xyphora AI engineers bespoke websites, full-stack web applications, SaaS dashboards, and AI integrations—delivering robust digital systems designed to scale.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We specialize in custom Next.js development, strict TypeScript architectures, pixel-perfect responsive UX, and custom AI workflows engineered to US and global standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {coreCompetencies.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Link 
                href="/#contact"
                className="shine-button inline-flex h-12 items-center justify-center rounded-xl gradient-animated px-8 font-semibold text-white shadow-[0_14px_35px_rgba(74,29,150,0.28)] transition-opacity hover:opacity-95"
              >
                <span>Discuss Your Project</span>
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Architecture Stacks */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            viewport={viewportOnce}
            className="space-y-8"
          >
            {/* Modern Web Architecture */}
            <div>
              <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-foreground">
                <Layers className="w-5 h-5 text-primary" />
                Modern Web Architecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {webArchitectureStack.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={cardReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="interactive-card animated-border p-4 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-sm transition-all group"
                  >
                    <item.icon className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-sm text-foreground">{item.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Engineering Stack */}
            <div>
              <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-foreground">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                AI &amp; Automation Frameworks
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aiStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial="hidden"
                    whileInView="visible"
                    variants={cardReveal}
                    viewport={viewportOnce}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="interactive-card animated-border p-4 rounded-2xl bg-card border border-border hover:border-cyan-500/50 shadow-sm transition-all group"
                  >
                    <tech.icon className="w-6 h-6 text-cyan-400 mb-2" />
                    <h4 className="font-semibold text-sm text-foreground">{tech.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
