"use client"

import { motion } from "framer-motion"
import { Brain, Code2, Cloud, BarChart3 } from "lucide-react"

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
  { name: "TikTok Ads", desc: "Short-form video" },
  { name: "Analytics", desc: "Data insights" },
]

export function TechStackSection() {
  return (
    <section id="tech" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }} 
          className="text-center mb-16"
        >
          <motion.span 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Technology Stack
          </motion.span>
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            Powered by <span className="gradient-text">Modern Technology</span>
          </motion.h2>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We use the latest and most reliable technologies to build solutions that are fast, secure, and scalable.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-purple-cyan flex items-center justify-center">
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
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors cursor-default"
                >
                  <p className="font-medium text-sm">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
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
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-xl bg-muted/50 hover:bg-blue-500/10 transition-colors cursor-default"
                >
                  <p className="font-medium text-sm">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
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
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-xl bg-muted/50 hover:bg-orange-500/10 transition-colors cursor-default"
                >
                  <p className="font-medium text-sm">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
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
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-xl bg-muted/50 hover:bg-pink-500/10 transition-colors cursor-default"
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
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 border border-primary/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text">20+</div>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime SLA</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <p className="text-sm text-muted-foreground">Monitoring</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">Auto</div>
              <p className="text-sm text-muted-foreground">Scaling</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}