"use client"

import dynamic from "next/dynamic"
import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { SplashScreen } from "../components/splash-screen"

const ServicesSection = dynamic(() => import("../components/services-section").then(mod => mod.ServicesSection))
const ProcessSection = dynamic(() => import("../components/process-section").then(mod => mod.ProcessSection))
const IndustriesSection = dynamic(() => import("../components/industries-section").then(mod => mod.IndustriesSection))
const TechStackSection = dynamic(() => import("../components/tech-stack-section").then(mod => mod.TechStackSection))
const WhyChooseUsSection = dynamic(() => import("../components/why-choose-us-section").then(mod => mod.WhyChooseUsSection))
const FAQSection = dynamic(() => import("../components/faq-section").then(mod => mod.FAQSection))
const AboutSection = dynamic(() => import("../components/about-section").then(mod => mod.AboutSection))
const ContactSection = dynamic(() => import("../components/contact-section").then(mod => mod.ContactSection))
const Footer = dynamic(() => import("../components/footer").then(mod => mod.Footer))
const ChatBot = dynamic(() => import("../components/chatbot").then(mod => mod.ChatBot))

// JSON-LD Structured Data for SEO
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Xyphora AI",
    "url": "https://xyphora-ai.vercel.app"
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Xyphora AI",
    "alternateName": "Xyphora",
    "url": "https://xyphora-ai.vercel.app",
    "logo": "https://xyphora-ai.vercel.app/logo.png",
  "description": "AI Development & Marketing Agency specializing in custom chatbots, document AI, and influencer marketing campaigns.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "Xyphora.ai@gmail.com",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://twitter.com/xyphora_ai",
    "https://linkedin.com/company/xyphora-ai",
    "https://github.com/xyphora-ai"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "Website Development",
      "description": "Professional website developer services, creating fast, responsive, and SEO-optimized web applications."
    },
    {
      "@type": "Service",
      "name": "AI Chatbot Development",
      "description": "Custom AI chatbots powered by GPT-4 and Claude for customer support, sales, and automation."
    },
    {
      "@type": "Service",
      "name": "Influencer Marketing",
      "description": "End-to-end influencer marketing campaigns including research, outreach, and performance tracking."
    },
    {
      "@type": "Service",
      "name": "Document AI",
      "description": "AI systems for document processing, OCR, data extraction, and intelligent search."
    },
    {
      "@type": "Service",
      "name": "Digital Marketing",
      "description": "Data-driven digital marketing strategies including social media, content marketing, and paid advertising."
    }
  ]
}
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <SplashScreen />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />
      <HeroSection />
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
  )
}