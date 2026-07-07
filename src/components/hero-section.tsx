"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Bot, Smartphone, Globe2, Workflow, CheckCircle2, ShieldCheck, MousePointerClick, Search, MessageSquare } from "lucide-react"
import { Logo } from "./logo"
import { fadeUp, sectionHeader } from "@/lib/animations"
import { contactEmail } from "@/lib/site"

const benefits = [
  { icon: Globe2, text: "Premium websites" },
  { icon: Smartphone, text: "Mobile applications" },
  { icon: Bot, text: "AI-driven products" },
  { icon: Workflow, text: "Business automation" },
]

const proofPoints = [
  "US-standard visual quality",
  "SEO-friendly structure",
  "Mobile-first experience",
  "Launch and support included",
]

const outcomeCards = [
  { label: "Websites", value: "Modern brand presence", detail: "Fast, responsive websites designed to earn trust and generate inquiries." },
  { label: "Mobile Apps", value: "App experiences users keep", detail: "Customer portals, dashboards, and mobile apps with clean product UX." },
  { label: "AI Systems", value: "Smarter operations", detail: "AI chatbots, automations, and workflows that reduce manual work." },
]

const journeySteps = [
  { icon: Search, label: "Discover", detail: "SEO-ready pages" },
  { icon: MessageSquare, label: "Understand", detail: "Clear service story" },
  { icon: MousePointerClick, label: "Convert", detail: "Quote-ready CTA" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 overflow-hidden neural-bg" aria-hidden="true">
        <div className="motion-grid animate-grid-pan absolute -inset-[30px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_80%,transparent_100%)] opacity-50" />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(120deg,rgba(74,29,150,0.22),rgba(0,212,255,0.16),transparent)] animate-aurora" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(320deg,rgba(236,72,153,0.14),transparent_60%)]" />
        <div className="absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-cyan-400/15 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[12%] right-[10%] h-56 w-56 rounded-full bg-fuchsia-500/12 blur-3xl animate-float-slower" />

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

        {[
          { top: "40%", left: "20%", delay: 0, width: "130px" },
          { top: "70%", left: "70%", delay: 2, width: "180px" },
          { top: "25%", left: "80%", delay: 4, width: "110px" },
          { top: "80%", left: "15%", delay: 1, width: "150px" },
          { top: "50%", left: "60%", delay: 3, width: "120px" }
        ].map((item, i) => (
          <motion.div
            key={`signal-${i}`}
            className="absolute h-px rounded-full bg-gradient-to-r from-transparent via-cyan-500/45 to-transparent"
            style={{ top: item.top, left: item.left, width: item.width }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 0.4, 0], y: -40 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionHeader}
          className="grid min-w-0 grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center"
        >
          <div className="min-w-0 space-y-8 text-center lg:text-left">
            <motion.div variants={fadeUp}>
              <span className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-4 py-2 text-center text-sm font-medium leading-snug text-primary shadow-sm backdrop-blur lg:justify-start">
                <Logo size="sm" animated={false} className="shadow-none bg-transparent rounded-none" />
                <span className="min-w-0">Websites, mobile apps, and AI-driven solutions</span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mx-auto max-w-[11ch] text-4xl font-bold leading-tight tracking-tight sm:max-w-none sm:text-5xl lg:mx-0 lg:text-7xl"
            >
              We build
              <span className="gradient-text"> websites, apps, and AI</span> that make your business look premium.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Xyphora AI creates US-standard websites, mobile applications, AI chatbots, and automation systems that look professional, feel easy to use, and help clients trust your business faster.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2"
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="shine-button inline-flex h-12 items-center justify-center rounded-lg gradient-animated px-8 text-base font-medium text-white shadow-[0_18px_45px_rgba(74,29,150,0.28)] transition-opacity hover:opacity-95 group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={`mailto:${contactEmail}`}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background/70 px-8 text-base font-medium shadow-sm backdrop-blur transition-colors hover:bg-muted"
              >
                <Mail className="mr-2 w-4 h-4" />
                Email Us
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto lg:mx-0"
            >
              {proofPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.65 + index * 0.08, duration: 0.38 }}
                  className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative min-w-0"
          >
            <div className="animate-float-slow premium-panel animated-border rounded-lg border border-border bg-background/80 p-5 shadow-2xl backdrop-blur">
              <div className="pointer-events-none absolute inset-x-4 top-0 h-24 overflow-hidden rounded-lg">
                <div className="h-1/2 w-full bg-gradient-to-b from-cyan-400/18 to-transparent animate-scan-line" />
              </div>

              <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <Logo size="md" animated={false} />
                  <div>
                    <p className="text-sm font-semibold">Growth Command Center</p>
                    <p className="text-xs text-muted-foreground">Websites + Apps + AI</p>
                  </div>
                </div>
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>

              <div className="space-y-4">
                {outcomeCards.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.12, duration: 0.4 }}
                    whileHover={{ x: 4, scale: 1.01 }}
                    className="interactive-card rounded-lg border border-border bg-card p-4"
                  >
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="text-xs font-medium uppercase text-muted-foreground">{item.label}</span>
                      <span className="h-2 w-20 rounded-full bg-primary/20">
                        <span className="metric-bar block h-2 rounded-full gradient-animated" style={{ width: `${72 + index * 9}%`, animationDelay: `${0.65 + index * 0.12}s` }} />
                      </span>
                    </div>
                    <h3 className="font-semibold">{item.value}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4">
                {journeySteps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    whileHover={{ y: -3 }}
                    className="rounded-lg bg-muted/50 p-3 text-center"
                    transition={{ delay: index * 0.04 }}
                  >
                    <step.icon className="mx-auto mb-2 h-4 w-4 text-primary" />
                    <p className="text-xs font-semibold">{step.label}</p>
                    <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{step.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="interactive-card flex min-h-16 items-center gap-3 rounded-lg border border-border bg-background/70 px-4 py-3 backdrop-blur"
                >
                  <div className="w-9 h-9 rounded-lg gradient-purple-cyan flex items-center justify-center shrink-0">
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-sm leading-snug">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
