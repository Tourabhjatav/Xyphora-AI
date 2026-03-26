"use client"

import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { ServicesSection } from "../components/services-section"
import { ProcessSection } from "../components/process-section"
import { IndustriesSection } from "../components/industries-section"
import { TechStackSection } from "../components/tech-stack-section"
import { WhyChooseUsSection } from "../components/why-choose-us-section"
import { FAQSection } from "../components/faq-section"
import { AboutSection } from "../components/about-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"
import { ChatBot } from "../components/chatbot"
import { SplashScreen } from "../components/splash-screen"

// JSON-LD Structured Data for SEO
const jsonLd = {
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