"use client"

import { motion } from "framer-motion"
import { Zap, Target, Brain, Heart } from "lucide-react"

const features = [
  { icon: Zap, title: "Fast Delivery", description: "On-time delivery with agile methodology and regular updates." },
  { icon: Target, title: "Results-Driven", description: "Focused on measurable outcomes that impact your business." },
  { icon: Brain, title: "AI Expertise", description: "Deep knowledge of the latest AI technologies." },
  { icon: Heart, title: "Client Focused", description: "Your success is our priority. We're invested in your outcome." },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="text-center mb-16">
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-3xl lg:text-4xl font-bold mb-4">Why Choose <span className="gradient-text">Xyphora AI</span>?</motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-muted-foreground text-lg max-w-2xl mx-auto">As a new startup, we're hungry to prove ourselves. You'll get our full attention and dedication.</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-xl gradient-purple-cyan flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}