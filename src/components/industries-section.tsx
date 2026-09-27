"use client"

import Link from "next/link"
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
  Gamepad2,
  ArrowRight
} from "lucide-react"
import { cardReveal, fadeUp, sectionHeader, staggerContainer, viewportOnce } from "@/lib/animations"

const industries = [
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    description: "Custom headless storefronts, smart product recommendation engines, and seamless checkout flows.",
    aiFeature: "Smart Search & RAG Chatbots",
    webSolution: "Custom Headless Storefront",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Clinics",
    description: "HIPAA-compliant patient portals, automated appointment scheduling, and patient inquiry assistants.",
    aiFeature: "Triage & FAQ Chatbots",
    webSolution: "Secure Patient Dashboard",
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    description: "Interactive learning management systems (LMS), student portals, automated grading, and course platforms.",
    aiFeature: "AI Learning Assistants",
    webSolution: "Custom LMS & Portals",
  },
  {
    icon: Building2,
    title: "Real Estate & Housing",
    description: "High-converting property listing websites, MLS/IDX integrations, interactive maps, and lead qualification.",
    aiFeature: "Lead Qualification Bot",
    webSolution: "MLS/IDX Property Portal",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality & Restaurants",
    description: "Online ordering engines, dynamic digital menus, real-time table booking, and delivery integrations.",
    aiFeature: "Order & Reservation AI",
    webSolution: "Direct Ordering Web App",
  },
  {
    icon: Plane,
    title: "Travel & Tourism",
    description: "Bespoke itinerary planners, tour booking platforms, multi-currency checkouts, and customer portals.",
    aiFeature: "Itinerary Copilot",
    webSolution: "Booking & Pricing Engine",
  },
  {
    icon: Car,
    title: "Automotive & Logistics",
    description: "Vehicle inventory management, interactive finance calculators, and service appointment scheduling.",
    aiFeature: "Vehicle Finder Assistant",
    webSolution: "Real-Time Inventory System",
  },
  {
    icon: HeartPulse,
    title: "Fitness & Wellness",
    description: "Subscription membership web apps, class booking schedules, workout logging, and client metrics portals.",
    aiFeature: "Workout & Plan Generator",
    webSolution: "Member SaaS Dashboard",
  },
  {
    icon: Landmark,
    title: "Finance & Professional Services",
    description: "Ultra-secure client document vaults, loan/mortgage calculators, CRM onboarding, and compliance portals.",
    aiFeature: "Document Intelligence AI",
    webSolution: "Encrypted Client Portal",
  },
  {
    icon: Gamepad2,
    title: "SaaS & Digital Products",
    description: "High-converting software landing pages, interactive product documentation, and customer web consoles.",
    aiFeature: "In-App AI Assistant",
    webSolution: "SaaS App & Documentation",
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-muted/30 relative">
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
            Specialized Domain Solutions
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight"
          >
            Engineered for <span className="gradient-text">Your Industry</span>
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We customize our web architecture, data models, and user flows to solve the specific operational and conversion challenges of your sector.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={cardReveal}
              whileHover={{ y: -7, scale: 1.02 }}
              className="interactive-card animated-border group p-5 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-sm transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
                <industry.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors text-foreground">
                {industry.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                {industry.description}
              </p>
              <div className="space-y-1.5 pt-3 border-t border-border/50 text-xs">
                <div>
                  <span className="text-primary font-semibold">Web:</span>{" "}
                  <span className="text-muted-foreground font-medium">{industry.webSolution}</span>
                </div>
                <div>
                  <span className="text-cyan-500 font-semibold">AI:</span>{" "}
                  <span className="text-muted-foreground font-medium">{industry.aiFeature}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Don&apos;t see your specific niche? We architect bespoke web solutions for virtually any industry.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-sm sm:text-base"
          >
            <span>Request a customized project proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
