"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, 
  Code2, 
  Sparkles, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Cpu, 
  Globe2, 
  Terminal
} from "lucide-react"
import { fadeUp, sectionHeader } from "@/lib/animations"

const proofPoints = [
  "100/100 Performance & SEO",
  "Pixel-Perfect Responsive UI",
  "Modern Next.js & TypeScript",
  "Tailored AI & Automations Built-In",
]

const showcaseTabs = [
  {
    id: "websites",
    label: "Web Engineering",
    icon: Globe2,
    badge: "Next.js 16 + Tailwind v4",
    title: "US-Standard Business Websites",
    description: "Ultra-fast, conversion-engineered corporate websites and modern landing pages with silky animations and crisp visual hierarchy.",
    metrics: [
      { label: "Performance", value: "99/100", progress: 99 },
      { label: "SEO Indexing", value: "100%", progress: 100 },
      { label: "Load Speed", value: "0.38s", progress: 96 },
    ],
    features: ["Responsive Grid System", "Full Schema.org JSON-LD", "Instant Edge Caching"],
  },
  {
    id: "apps",
    label: "Web Apps & Portals",
    icon: Layers,
    badge: "Full-Stack SaaS",
    title: "Custom Dashboards & Portals",
    description: "Scalable customer portals, real-time client dashboards, and interactive SaaS platforms engineered for high reliability and engagement.",
    metrics: [
      { label: "Uptime SLA", value: "99.99%", progress: 100 },
      { label: "Type Safety", value: "Strict TS", progress: 100 },
      { label: "API Latency", value: "<45ms", progress: 94 },
    ],
    features: ["Real-time Data Sync", "Role-Based Access Control", "Clean Component Architecture"],
  },
  {
    id: "ai",
    label: "AI Copilots",
    icon: Cpu,
    badge: "OpenAI + Claude RAG",
    title: "Smart AI Chatbots & Workflows",
    description: "Custom-trained AI chatbots, semantic search assistants, and workflow automations that qualify leads and answer customer inquiries 24/7.",
    metrics: [
      { label: "Response Time", value: "<1.2s", progress: 92 },
      { label: "Automation Rate", value: "85%+", progress: 85 },
      { label: "Availability", value: "24/7", progress: 100 },
    ],
    features: ["RAG Vector Retrieval", "Lead Qualification Flow", "Automated CRM Hand-off"],
  },
]

const floatingTech = [
  { name: "Next.js 16", color: "from-blue-500/20 to-cyan-500/20 text-cyan-400" },
  { name: "React 19", color: "from-cyan-500/20 to-teal-500/20 text-teal-400" },
  { name: "TypeScript", color: "from-blue-600/20 to-indigo-600/20 text-blue-400" },
  { name: "Framer Motion", color: "from-purple-500/20 to-pink-500/20 text-pink-400" },
  { name: "Tailwind CSS v4", color: "from-cyan-500/20 to-blue-500/20 text-cyan-300" },
  { name: "AI Copilots", color: "from-emerald-500/20 to-teal-500/20 text-emerald-400" },
]

export function HeroSection() {
  const [activeTab, setActiveTab] = useState(showcaseTabs[0].id)
  const currentShowcase = showcaseTabs.find((t) => t.id === activeTab) || showcaseTabs[0]

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-20">
      {/* Background Ambience & Aurora */}
      <div className="absolute inset-0 overflow-hidden neural-bg" aria-hidden="true">
        <div className="motion-grid animate-grid-pan absolute -inset-[30px] [mask-image:radial-gradient(ellipse_85%_65%_at_50%_0%,#000_80%,transparent_100%)] opacity-45" />
        <div className="absolute inset-x-0 top-0 h-3/5 bg-[linear-gradient(135deg,rgba(74,29,150,0.28),rgba(0,212,255,0.18),transparent)] animate-aurora" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(320deg,rgba(147,51,234,0.12),transparent_70%)]" />
        <div className="absolute left-[5%] top-[15%] h-52 w-52 rounded-full bg-cyan-400/15 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[15%] right-[8%] h-64 w-64 rounded-full bg-fuchsia-600/15 blur-3xl animate-float-slower" />

        {/* Ambient floating nodes */}
        {[
          { top: "18%", left: "12%", delay: "0s", dur: "7s", size: "6px" },
          { top: "62%", left: "82%", delay: "1s", dur: "8s", size: "7px" },
          { top: "78%", left: "28%", delay: "2s", dur: "6s", size: "5px" },
          { top: "28%", left: "74%", delay: "3s", dur: "9s", size: "6px" },
          { top: "12%", left: "48%", delay: "0.5s", dur: "7s", size: "4px" },
          { top: "84%", left: "64%", delay: "1.5s", dur: "8s", size: "6px" },
        ].map((node, i) => (
          <div
            key={`node-${i}`}
            className="absolute rounded-full gradient-purple-cyan opacity-60 animate-pulse"
            style={{
              width: node.size,
              height: node.size,
              top: node.top,
              left: node.left,
              animationDelay: node.delay,
              animationDuration: node.dur,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionHeader}
          className="grid min-w-0 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-14 items-center"
        >
          {/* Left Column: Headline & Value Prop */}
          <div className="min-w-0 space-y-8 text-center lg:text-left">
            <motion.div variants={fadeUp}>
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-cyan-400 animate-spin-slow" />
                <span>Next-Gen Web Architecture & AI Engineering</span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.12] tracking-tight text-foreground"
            >
              We Build <span className="gradient-text">World-Class Websites</span> That Clients Love.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              From custom high-converting business websites and customer portals to full-stack web applications and AI workflows. Handcrafted by our senior developer team—not automated AI code—delivering ultra-fast, visually stunning US-standard digital experiences designed to scale.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-1"
            >
              <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/#contact"
                  className="shine-button inline-flex h-13 items-center justify-center rounded-xl gradient-animated px-8 text-base font-semibold text-white shadow-[0_16px_36px_rgba(74,29,150,0.3)] transition-opacity hover:opacity-95 group w-full sm:w-auto"
                >
                  Start Your Project
                  <ArrowRight className="ml-2.5 h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/#services"
                  className="inline-flex h-13 items-center justify-center rounded-xl border border-border bg-card/70 px-7 text-base font-medium shadow-sm backdrop-blur hover:bg-muted/70 hover:border-primary/40 transition-all w-full sm:w-auto"
                >
                  <Code2 className="mr-2.5 h-4 w-4 text-primary" />
                  Explore Capabilities
                </Link>
              </motion.div>
            </motion.div>

            {/* Proof Points */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto lg:mx-0 pt-2"
            >
              {proofPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.07, duration: 0.35 }}
                  className="flex items-center justify-center lg:justify-start gap-2.5 text-sm font-medium text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Showcase Console */}
          <motion.div
            variants={fadeUp}
            className="relative min-w-0"
          >
            <div className="premium-panel animated-border rounded-2xl border border-border bg-card/90 p-6 shadow-2xl backdrop-blur-xl">
              {/* Scanline Effect */}
              <div className="pointer-events-none absolute inset-x-4 top-0 h-28 overflow-hidden rounded-xl">
                <div className="h-1/2 w-full bg-gradient-to-b from-cyan-400/20 to-transparent animate-scan-line" />
              </div>

              {/* Console Header */}
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-2 pl-2 text-xs font-mono text-muted-foreground">
                    <Terminal className="h-3.5 w-3.5 text-primary" />
                    <span>xyphora-engine v2.0</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Architecture
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex gap-2 rounded-xl bg-muted/60 p-1.5 mb-5 border border-border/60">
                {showcaseTabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold rounded-lg transition-all ${
                        isActive
                          ? "bg-primary text-white shadow-md"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span className="truncate">{tab.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Active Tab Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentShowcase.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-foreground">{currentShowcase.title}</h3>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                      {currentShowcase.badge}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {currentShowcase.description}
                  </p>

                  {/* Real-time Metrics Bars */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {currentShowcase.metrics.map((metric, idx) => (
                      <div key={metric.label} className="rounded-xl border border-border/80 bg-background/80 p-3 text-center">
                        <p className="text-xs font-medium text-muted-foreground">{metric.label}</p>
                        <p className="text-base font-bold text-foreground mt-0.5">{metric.value}</p>
                        <div className="mt-2 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.progress}%` }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="h-full rounded-full gradient-animated"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 pt-2 border-t border-border/60">
                    {currentShowcase.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Floating Technology Pills */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {floatingTech.map((tech, idx) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + idx * 0.05 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-border/80 bg-card/60 backdrop-blur-sm text-xs font-medium ${tech.color} shadow-sm cursor-default`}
                >
                  <Zap className="h-3 w-3" />
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
