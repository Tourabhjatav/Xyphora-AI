"use client"

import { motion } from "framer-motion"
import { Gauge, LayoutDashboard, SearchCheck, ShieldCheck } from "lucide-react"
import { cardReveal, staggerContainer, viewportOnce } from "@/lib/animations"

const trustItems = [
  {
    icon: LayoutDashboard,
    title: "US-Standard UI/UX",
    description: "Tailored design systems, modern spacing, clean typography, and sleek animations that establish instant credibility with clients.",
  },
  {
    icon: SearchCheck,
    title: "SEO & Semantic HTML",
    description: "Built-in Schema.org metadata, OpenGraph tags, semantic hierarchy, and instant edge rendering for search dominance.",
  },
  {
    icon: Gauge,
    title: "Sub-Second Speed",
    description: "Optimized Next.js Turbopack builds, dynamic asset streaming, and responsive layouts for top Lighthouse benchmark scores.",
  },
  {
    icon: ShieldCheck,
    title: "Production Reliability",
    description: "Strict TypeScript type-safety, rate-limited APIs, CSRF defenses, and reliable cloud deployments on Vercel & AWS.",
  },
]

export function TrustSection() {
  return (
    <section aria-label="Engineering trust and performance standards" className="border-y border-border bg-background/80 py-10 backdrop-blur">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"
      >
        {trustItems.map((item) => (
          <motion.article
            key={item.title}
            variants={cardReveal}
            whileHover={{ y: -6, scale: 1.015 }}
            className="interactive-card animated-border rounded-xl border border-border bg-card/80 p-5 shadow-sm"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg gradient-animated text-white shadow-md">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
