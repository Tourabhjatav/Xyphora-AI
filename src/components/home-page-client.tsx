"use client"

import dynamic from "next/dynamic"
import { MotionConfig } from "framer-motion"
import { Navigation } from "./navigation"
import { HeroSection } from "./hero-section"
import { TrustSection } from "./trust-section"
import { SectionSkeleton } from "./section-skeleton"

const ServicesSection = dynamic(() => import("./services-section").then(mod => mod.ServicesSection), {
  loading: () => <SectionSkeleton tone="muted" items={6} />,
})
const ProcessSection = dynamic(() => import("./process-section").then(mod => mod.ProcessSection), {
  loading: () => <SectionSkeleton variant="timeline" items={5} />,
})
const IndustriesSection = dynamic(() => import("./industries-section").then(mod => mod.IndustriesSection), {
  loading: () => <SectionSkeleton tone="muted" items={6} />,
})
const TechStackSection = dynamic(() => import("./tech-stack-section").then(mod => mod.TechStackSection), {
  loading: () => <SectionSkeleton items={6} />,
})
const WhyChooseUsSection = dynamic(() => import("./why-choose-us-section").then(mod => mod.WhyChooseUsSection), {
  loading: () => <SectionSkeleton tone="muted" items={4} />,
})
const FAQSection = dynamic(() => import("./faq-section").then(mod => mod.FAQSection), {
  loading: () => <SectionSkeleton variant="list" items={5} />,
})
const AboutSection = dynamic(() => import("./about-section").then(mod => mod.AboutSection), {
  loading: () => <SectionSkeleton variant="split" tone="muted" />,
})
const ContactSection = dynamic(() => import("./contact-section").then(mod => mod.ContactSection), {
  loading: () => <SectionSkeleton variant="split" tone="muted" />,
})
const Footer = dynamic(() => import("./footer").then(mod => mod.Footer))
const ChatBot = dynamic(() => import("./chatbot").then(mod => mod.ChatBot))

export function HomePageClient() {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <IndustriesSection />
        <TechStackSection />
        <WhyChooseUsSection />
        <FAQSection />
        <AboutSection />
        <ContactSection />
        <Footer />
        <ChatBot />
      </main>
    </MotionConfig>
  )
}
