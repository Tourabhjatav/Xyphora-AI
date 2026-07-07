"use client"

import { motion } from "framer-motion"
import { CheckCircle, ChevronRight, Cpu, Sparkles, Code2, Database, Workflow, MessageSquare, Search, Globe, Megaphone, TrendingUp, Users, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cardReveal, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations"

const techStack = [
  { name: "OpenAI GPT-4", icon: Sparkles, desc: "Language AI" },
  { name: "Claude API", icon: MessageSquare, desc: "Conversational AI" },
  { name: "LangChain", icon: Workflow, desc: "AI Framework" },
  { name: "Vector DB", icon: Database, desc: "Semantic Search" },
  { name: "Next.js", icon: Code2, desc: "Web Framework" },
  { name: "Python", icon: Cpu, desc: "AI Development" },
  { name: "RAG Systems", icon: Search, desc: "Knowledge AI" },
  { name: "API Integration", icon: Globe, desc: "Connect Everything" },
]

const marketingStack = [
  { name: "Creator Outreach", icon: Users, desc: "Niche research" },
  { name: "Campaign Strategy", icon: Megaphone, desc: "Data-driven" },
  { name: "Social Media", icon: Share2, desc: "All Platforms" },
  { name: "Analytics", icon: TrendingUp, desc: "ROI Tracking" },
]

const services = [
  "Business Websites",
  "Mobile Applications",
  "AI Chatbots & Assistants",
  "AI Automation",
  "SEO-Friendly Builds",
  "Growth Marketing",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
            viewport={viewportOnce}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              About Xyphora AI
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Your <span className="gradient-text">Digital Product</span> Partner
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Xyphora AI builds websites, mobile applications, and AI-driven systems for businesses that want a stronger digital presence and a more professional customer experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From premium business websites to mobile apps, AI chatbots, and automation workflows, we focus on clean design, user-friendly flows, SEO-ready structure, and practical business value.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {services.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button className="shine-button gradient-animated text-white hover:opacity-95 mt-4 shadow-[0_14px_35px_rgba(74,29,150,0.22)]" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Discuss Your Project <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            viewport={viewportOnce}
            className="space-y-6"
          >
            {/* AI Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                AI Technologies
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={cardReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="interactive-card animated-border p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
                  >
                    <tech.icon className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-medium text-sm">{tech.name}</h4>
                    <p className="text-xs text-muted-foreground">{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Marketing Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-pink-500" />
                Marketing Capabilities
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {marketingStack.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial="hidden"
                    whileInView="visible"
                    variants={cardReveal}
                    viewport={viewportOnce}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="interactive-card animated-border p-4 rounded-lg bg-card border border-border hover:border-pink-500/50 transition-all group"
                  >
                    <item.icon className="w-6 h-6 text-pink-500 mb-2" />
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
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
