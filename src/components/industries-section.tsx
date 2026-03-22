"use client"

import { motion } from "framer-motion"
import { 
  ShoppingBag, 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  UtensilsCrossed, 
  Plane, 
  Car, 
  HeartPulse,
  Landmark,
  Gamepad2
} from "lucide-react"

const industries = [
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    description: "AI chatbots for customer support, product recommendations, inventory management, and personalized shopping experiences.",
    aiUse: "Chatbots, Recommendation Engines",
    marketingUse: "Influencer partnerships",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Wellness",
    description: "AI-powered appointment scheduling, patient query handling, document processing, and health chatbots.",
    aiUse: "Document AI, Health Assistants",
    marketingUse: "Health influencer campaigns",
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    description: "AI tutors, automated grading, content generation, and student support chatbots.",
    aiUse: "AI Tutors, Content Generation",
    marketingUse: "Student community building",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property search assistants, document processing for contracts, and lead qualification chatbots.",
    aiUse: "Lead Bots, Document Processing",
    marketingUse: "Property showcase campaigns",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Restaurant",
    description: "Order-taking chatbots, reservation systems, menu assistants, and food delivery automation.",
    aiUse: "Order Bots, Voice Assistants",
    marketingUse: "Food influencer partnerships",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Booking assistants, travel planning AI, customer support, and itinerary generation.",
    aiUse: "Travel Assistants, Booking AI",
    marketingUse: "Travel influencer campaigns",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Vehicle recommendation systems, service scheduling, customer support automation.",
    aiUse: "Recommendation Systems",
    marketingUse: "Auto enthusiast outreach",
  },
  {
    icon: HeartPulse,
    title: "Fitness & Sports",
    description: "AI workout planners, nutrition assistants, progress tracking, and community engagement.",
    aiUse: "Fitness AI, Chatbots",
    marketingUse: "Fitness influencer network",
  },
  {
    icon: Landmark,
    title: "Finance & Banking",
    description: "Document intelligence for KYC, fraud detection, customer service chatbots, and data analysis.",
    aiUse: "Document AI, Fraud Detection",
    marketingUse: "Financial literacy content",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Entertainment",
    description: "NPC AI, game assistants, community management, and player engagement systems.",
    aiUse: "Game AI, Player Support",
    marketingUse: "Gaming influencer campaigns",
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-muted/30">
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
            Industries We Serve
          </motion.span>
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            Solutions for <span className="gradient-text">Every Industry</span>
          </motion.h2>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            From healthcare to gaming, we deliver AI and marketing solutions tailored to your industry.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
                <industry.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {industry.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                {industry.description}
              </p>
              <div className="space-y-1.5">
                <div className="text-xs">
                  <span className="text-primary font-medium">AI:</span>{" "}
                  <span className="text-muted-foreground">{industry.aiUse}</span>
                </div>
                <div className="text-xs">
                  <span className="text-orange-500 font-medium">Marketing:</span>{" "}
                  <span className="text-muted-foreground">{industry.marketingUse}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Don't see your industry? We work with businesses of all types!
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Let's discuss your specific needs
          </a>
        </motion.div>
      </div>
    </section>
  )
}