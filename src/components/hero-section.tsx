"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Sparkles, Bot, Megaphone, TrendingUp, Users } from "lucide-react"
import { Button } from "./ui/button"

const benefits = [
  { icon: Bot, text: "AI Development" },
  { icon: Megaphone, text: "Influencer Marketing" },
  { icon: TrendingUp, text: "Digital Marketing" },
  { icon: Users, text: "Social Media Growth" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 neural-bg">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl" 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl" 
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-3xl" 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }} 
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <Sparkles className="w-4 h-4" />
              AI Development & Marketing Agency
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          >
            <span className="gradient-text">AI-Powered</span> Solutions
            <br />
            <span className="text-foreground">&</span> <span className="gradient-text-pink">Marketing</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            We build intelligent AI systems and run powerful marketing campaigns. 
            From chatbots to influencer marketing — we help your business grow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button size="lg" className="gradient-purple-cyan text-white hover:opacity-90 group px-8 h-12">
              Get Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group px-8 h-12">
              <Mail className="mr-2 w-4 h-4" />
              Contact Us
            </Button>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
            className="pt-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <div className="w-8 h-8 rounded-lg gradient-purple-cyan flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-sm">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
