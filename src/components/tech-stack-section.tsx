"use client"

import { motion } from "framer-motion"
import { Brain, Code2, Cloud, Sparkles } from "lucide-react"
import { cardReveal, fadeUp, sectionHeader, viewportOnce } from "@/lib/animations"

const aiTech = [
  { name: "OpenAI GPT-4o", desc: "Advanced reasoning & chat" },
  { name: "Claude 3.5 Sonnet", desc: "Complex code & analysis" },
  { name: "LangChain / LlamaIndex", desc: "AI orchestration & RAG" },
  { name: "Pinecone / Qdrant", desc: "Vector similarity search" },
  { name: "Ollama / Local LLMs", desc: "Private AI inference" },
  { name: "Embeddings API", desc: "Semantic search vectors" },
]

const webTech = [
  { name: "Next.js 16 (Turbopack)", desc: "React Server Components" },
  { name: "TypeScript 5.x", desc: "Strict end-to-end typing" },
  { name: "Node.js / Bun", desc: "High-throughput runtimes" },
  { name: "PostgreSQL & Prisma", desc: "Relational database schema" },
  { name: "Redis / Upstash", desc: "Sub-millisecond caching" },
  { name: "REST & GraphQL", desc: "Robust API contracts" },
]

const frontendTech = [
  { name: "React 19", desc: "Concurrent UI engine" },
  { name: "Tailwind CSS v4", desc: "Modern CSS design system" },
  { name: "Framer Motion", desc: "Physics-based animations" },
  { name: "Radix UI / Shadcn", desc: "Accessible UI primitives" },
  { name: "Lucide & SVG Assets", desc: "Crisp vector iconography" },
  { name: "Canvas & WebGL", desc: "Interactive rich media" },
]

const cloudTech = [
  { name: "Vercel Edge Network", desc: "Global CDN & Serverless" },
  { name: "AWS Cloud", desc: "S3, Lambda & CloudFront" },
  { name: "Docker", desc: "Containerized workflows" },
  { name: "GitHub Actions", desc: "Automated CI/CD testing" },
]

export function TechStackSection() {
  return (
    <section id="tech" className="py-24 lg:py-32 bg-background relative">
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
            Engineering Stack
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight"
          >
            Built With <span className="gradient-text">Modern Web Standards</span>
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We curate an enterprise-grade technology stack that guarantees speed, strict type-safety, visual elegance, and long-term scalability.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Frontend & UI Engineering */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardReveal}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="interactive-card animated-border p-7 rounded-2xl bg-card border border-border shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-md">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Frontend & UI Architecture</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Silky animations, responsive design & design tokens</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {frontendTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-3 rounded-xl bg-muted/50 hover:bg-pink-500/10 border border-border/40 transition-all cursor-default"
                >
                  <p className="font-semibold text-sm text-foreground">{tech.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Full-Stack Web Development */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardReveal}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="interactive-card animated-border p-7 rounded-2xl bg-card border border-border shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Full-Stack & Backend Systems</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Type-safe APIs, performant databases & caching</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {webTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-3 rounded-xl bg-muted/50 hover:bg-blue-500/10 border border-border/40 transition-all cursor-default"
                >
                  <p className="font-semibold text-sm text-foreground">{tech.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI & Vector Intelligence */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardReveal}
            viewport={viewportOnce}
            transition={{ delay: 0.15, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="interactive-card animated-border p-7 rounded-2xl bg-card border border-border shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-purple-cyan flex items-center justify-center shadow-md">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">AI Models & Vector Search</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">LLM reasoning, context retrieval & embeddings</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {aiTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-3 rounded-xl bg-muted/50 hover:bg-primary/10 border border-border/40 transition-all cursor-default"
                >
                  <p className="font-semibold text-sm text-foreground">{tech.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cloud & DevOps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardReveal}
            viewport={viewportOnce}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="interactive-card animated-border p-7 rounded-2xl bg-card border border-border shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-md">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Cloud & Global Edge Delivery</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Automated CI/CD, SSL, edge caching & 99.99% uptime</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {cloudTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-3 rounded-xl bg-muted/50 hover:bg-orange-500/10 border border-border/40 transition-all cursor-default"
                >
                  <p className="font-semibold text-sm text-foreground">{tech.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="animated-border mt-14 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 border border-primary/30 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text">100%</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">TypeScript Strict Mode</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text">&lt;0.4s</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">Average Edge TTFB</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text">99+</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">Lighthouse Benchmark</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text">24/7</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">Continuous Monitoring</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
