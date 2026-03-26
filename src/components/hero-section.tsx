"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Sparkles, Bot, Megaphone, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  { icon: Bot, text: "AI Development" },
  { icon: Megaphone, text: "Influencer Marketing" },
  { icon: TrendingUp, text: "Digital Marketing" },
  { icon: Users, text: "Social Media Growth" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Eye-catching Animated Background */}
      <div className="absolute inset-0 overflow-hidden neural-bg">
        {/* High-tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_80%,transparent_100%)] opacity-20" />
        
        {/* Sweeping Auroras / Glowing Orbs */}
        <motion.div 
          className="absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[100px]" 
          animate={{ x: [0, 150, 0], y: [0, -100, 0], scale: [1, 1.3, 1] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} 
        />
        <motion.div 
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-cyan-600/20 blur-[120px]" 
          animate={{ x: [0, -150, 0], y: [0, 100, 0], scale: [1, 1.4, 1] }} 
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} 
        />
        <motion.div 
          className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-[100px]" 
          animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.7, 0.3], rotate: [0, 90, 0] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} 
        />

        {/* Floating Neural Nodes - Optimized for performance */}
        {/* We use predefined positions to prevent React hydration errors and keep DOM light */}
        {[
          { top: "20%", left: "15%", delay: "0s", dur: "7s", size: "6px" },
          { top: "60%", left: "80%", delay: "1s", dur: "8s", size: "8px" },
          { top: "80%", left: "30%", delay: "2s", dur: "6s", size: "5px" },
          { top: "30%", left: "70%", delay: "3s", dur: "9s", size: "7px" },
          { top: "10%", left: "50%", delay: "0.5s", dur: "7s", size: "4px" },
          { top: "75%", left: "60%", delay: "1.5s", dur: "8s", size: "6px" },
          { top: "45%", left: "20%", delay: "2.5s", dur: "6s", size: "8px" },
          { top: "90%", left: "85%", delay: "0.8s", dur: "9s", size: "5px" }
        ].map((node, i) => (
          <div
            key={`node-${i}`}
            className="absolute rounded-full gradient-purple-cyan opacity-50 animate-pulse"
            style={{
              width: node.size,
              height: node.size,
              top: node.top,
              left: node.left,
              animationDelay: node.delay,
              animationDuration: node.dur,
            }}
          />
        ))}

        {/* Holographic Data Streams - Optimized */}
        {[
          { code: "await ai.generate()", top: "40%", left: "20%", delay: 0 },
          { code: "const model = new NeuralNet()", top: "70%", left: "70%", delay: 2 },
          { code: "01100111 01110000", top: "25%", left: "80%", delay: 4 },
          { code: "<Intelligence />", top: "80%", left: "15%", delay: 1 },
          { code: "data.optimize()", top: "50%", left: "60%", delay: 3 }
        ].map((item, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-xs sm:text-sm font-mono text-cyan-500/40 whitespace-nowrap select-none"
            style={{ top: item.top, left: item.left }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 0.4, 0], y: -40 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear"
            }}
          >
            {item.code}
          </motion.div>
        ))}
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
            Top-tier Website Developer & Agency. We build intelligent AI systems, responsive modern websites, and run powerful marketing campaigns. 
            From web development to AI chatbots — we help your business grow.
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
