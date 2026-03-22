"use client"

import { motion } from "framer-motion"
import { MessageCircle, FileText, Code, Rocket, HeadphonesIcon, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Free Consultation",
    description: "We start with a detailed discussion to understand your business needs, goals, and challenges. This helps us craft the perfect solution for you.",
    duration: "1-2 Days",
    deliverables: ["Discovery Call", "Requirements Analysis", "Initial Recommendations"],
  },
  {
    icon: FileText,
    step: "02",
    title: "Strategy & Proposal",
    description: "Based on our consultation, we create a detailed proposal with project scope, timeline, and transparent pricing. No hidden costs, ever.",
    duration: "2-3 Days",
    deliverables: ["Project Roadmap", "Technical Architecture", "Detailed Quote"],
  },
  {
    icon: Code,
    step: "03",
    title: "Development & Creation",
    description: "Our team gets to work using agile methodology. You'll receive regular updates and can track progress through our collaborative approach.",
    duration: "2-8 Weeks",
    deliverables: ["Weekly Updates", "Demo Sessions", "Progress Reports"],
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Delivery",
    description: "We thoroughly test everything and deploy your solution. For marketing campaigns, we execute the strategy and monitor performance.",
    duration: "1-3 Days",
    deliverables: ["Quality Assurance", "Deployment", "Campaign Launch"],
  },
  {
    icon: HeadphonesIcon,
    step: "05",
    title: "Support & Growth",
    description: "We don't just deliver and disappear. We provide ongoing support, maintenance, and optimization to ensure long-term success.",
    duration: "Ongoing",
    deliverables: ["24/7 Support", "Regular Updates", "Performance Optimization"],
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-background">
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
            How We Work
          </motion.span>
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            Our Simple <span className="gradient-text">5-Step Process</span>
          </motion.h2>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            From initial consultation to ongoing support, we follow a proven process that ensures your project succeeds.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full gradient-purple-cyan items-center justify-center z-10 shadow-lg">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>

                <div className={`w-full lg:w-[calc(50%-4rem)] ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="lg:hidden flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full gradient-purple-cyan flex items-center justify-center">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {item.duration}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="hidden lg:block w-12 h-12 rounded-xl bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <span className="hidden lg:inline-block text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.deliverables.map((deliverable) => (
                            <span 
                              key={deliverable} 
                              className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-3 h-3" />
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden lg:block w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}