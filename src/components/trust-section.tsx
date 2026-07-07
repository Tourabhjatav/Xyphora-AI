"use client"

import { motion } from "framer-motion"
import { Gauge, LayoutDashboard, SearchCheck, ShieldCheck } from "lucide-react"
import { cardReveal, staggerContainer, viewportOnce } from "@/lib/animations"

const trustItems = [
  {
    icon: LayoutDashboard,
    title: "US-standard UI design",
    description: "Modern layouts, premium spacing, clean typography, and polished visuals that feel credible to clients.",
  },
  {
    icon: SearchCheck,
    title: "SEO-friendly build",
    description: "Semantic headings, focused service content, metadata, and structured data for stronger discoverability.",
  },
  {
    icon: Gauge,
    title: "Fast and responsive",
    description: "Websites and apps designed for mobile-first browsing, quick loading, and smooth interactions.",
  },
  {
    icon: ShieldCheck,
    title: "Built for real clients",
    description: "Clear service pages, simple contact paths, and user-friendly forms that help people take action.",
  },
]

export function TrustSection() {
  return (
    <section aria-label="Website trust and SEO benefits" className="border-y border-border bg-background/80 py-10 backdrop-blur">
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
            className="interactive-card animated-border rounded-lg border border-border bg-card p-5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg gradient-animated text-white">
              <item.icon className="h-5 w-5" />
            </div>
            <h2 className="text-base font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
