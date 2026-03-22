"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Brain, Code } from "lucide-react"

const services = [
  { icon: Globe, title: "AI Web Development", description: "Custom websites with AI features, intelligent chatbots, and automated workflows.", features: ["Smart Chatbots", "Personalization", "SEO Optimized", "Fast Loading"] },
  { icon: Smartphone, title: "AI App Development", description: "Mobile and web applications powered by machine learning and NLP.", features: ["Cross-Platform", "ML Integration", "Real-time AI", "Intuitive UX"] },
  { icon: Code, title: "AI Integration", description: "Seamlessly integrate AI capabilities into your existing systems.", features: ["API Integration", "Legacy Systems", "Data Pipelines", "Automation"] },
  { icon: Brain, title: "Custom AI Solutions", description: "Bespoke AI products tailored to your unique business needs.", features: ["Custom Models", "RAG Systems", "Fine-tuning", "Scalable"] },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="text-center mb-16">
          <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Services</motion.span>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-3xl lg:text-4xl font-bold mb-4">What We <span className="gradient-text">Build</span></motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-muted-foreground text-lg max-w-2xl mx-auto">Cutting-edge AI technology meets beautiful design.</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl gradient-purple-cyan flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (<span key={feature} className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium">{feature}</span>))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}