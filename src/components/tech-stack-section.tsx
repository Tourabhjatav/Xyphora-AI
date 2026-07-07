"use client"

import { motion } from "framer-motion"
import { Brain, Code2, Cloud, BarChart3 } from "lucide-react"
import { cardReveal, fadeUp, sectionHeader, viewportOnce } from "@/lib/animations"

const aiTech = [
  { name: "OpenAI GPT-4", desc: "Advanced language AI" },
  { name: "Claude API", desc: "Thoughtful AI responses" },
  { name: "LangChain", desc: "AI application framework" },
  { name: "Pinecone", desc: "Vector database for RAG" },
  { name: "Hugging Face", desc: "ML models & tools" },
  { name: "Stable Diffusion", desc: "Image generation" },
]

const webTech = [
  { name: "Next.js", desc: "React framework" },
  { name: "TypeScript", desc: "Type-safe JavaScript" },
  { name: "Tailwind CSS", desc: "Utility-first CSS" },
  { name: "Node.js", desc: "Backend runtime" },
  { name: "PostgreSQL", desc: "Relational database" },
  { name: "MongoDB", desc: "NoSQL database" },
]

const cloudTech = [
  { name: "AWS", desc: "Cloud infrastructure" },
  { name: "Vercel", desc: "Deployment platform" },
  { name: "Docker", desc: "Containerization" },
  { name: "GitHub Actions", desc: "CI/CD pipeline" },
]

const marketingTech = [
  { name: "Meta Ads", desc: "Facebook & Instagram" },
  { name: "Google Ads", desc: "Search & Display" },
  { name: "LinkedIn Ads", desc: "B2B campaigns" },
  { name: "Analytics", desc: "Data insights" },
]

export function TechStackSection() {
  return (
    <section id="tech" className="py-24 lg:py-32 bg-background">
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
            className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Technology Stack
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            Powered by <span className="gradient-text">Modern Technology</span>
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We choose stable tools that match the job, then keep the implementation maintainable, measurable, and ready to scale.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardReveal}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="interactive-card animated-border p-6 rounded-lg bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg gradient-purple-cyan flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI & Machine Learning</h3>
                <p className="text-sm text-muted-foreground">Intelligent systems that learn and adapt</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {aiTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors cursor-default"
                >
                  <p className="font-medium text-sm">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardReveal}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="interactive-card animated-border p-6 rounded-lg bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Web Development</h3>
                <p className="text-sm text-muted-foreground">Modern frameworks & databases</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {webTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-lg bg-muted/50 hover:bg-blue-500/10 transition-colors cursor-default"
                >
                  <p className="font-medium text-sm">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardReveal}
            viewport={viewportOnce}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="interactive-card animated-border p-6 rounded-lg bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Cloud & Infrastructure</h3>
                <p className="text-sm text-muted-foreground">Scalable & reliable deployment</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {cloudTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-lg bg-muted/50 hover:bg-orange-500/10 transition-colors cursor-default"
                >
                  <p className="font-medium text-sm">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardReveal}
            viewport={viewportOnce}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="interactive-card animated-border p-6 rounded-lg bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Marketing Platforms</h3>
                <p className="text-sm text-muted-foreground">Data-driven campaign tools</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {marketingTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-lg bg-muted/50 hover:bg-pink-500/10 transition-colors cursor-default"
                >
                  <p className="font-medium text-sm">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="animated-border mt-12 p-6 rounded-lg bg-gradient-to-r from-primary/10 via-transparent to-primary/10 border border-primary/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text">20+</div>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">Secure</div>
              <p className="text-sm text-muted-foreground">Implementation</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">Clear</div>
              <p className="text-sm text-muted-foreground">Documentation</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">Scalable</div>
              <p className="text-sm text-muted-foreground">Architecture</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
