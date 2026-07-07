"use client"

import dynamic from "next/dynamic"
import { MotionConfig } from "framer-motion"
import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { TrustSection } from "../components/trust-section"
import { contactEmail, siteUrl } from "@/lib/site"

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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Xyphora AI",
    "url": siteUrl,
    "description": "Website development, mobile application development, AI chatbot, and AI-driven automation services for businesses that want a premium digital presence.",
    "potentialAction": {
      "@type": "ContactAction",
      "target": `${siteUrl}/#contact`,
      "name": "Request a free consultation"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Xyphora AI",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "email": contactEmail,
    "description": "Xyphora AI builds US-standard websites, mobile applications, AI chatbots, and AI-driven automation systems.",
    "areaServed": "Worldwide",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": contactEmail,
      "availableLanguage": ["English"]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Xyphora AI",
    "url": siteUrl,
    "image": `${siteUrl}/og-image.png`,
    "email": contactEmail,
    "areaServed": "Worldwide",
    "serviceType": [
      "AI Website Development",
      "Mobile Application Development",
      "AI Chatbot Development",
      "Business Automation",
      "Digital Marketing",
      "Influencer Marketing"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Xyphora AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "US-Standard Website Development",
            "description": "Responsive, SEO-ready business websites and landing pages with premium UI, clear messaging, and strong conversion paths."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Application Development",
            "description": "User-friendly mobile applications, customer portals, dashboards, and app experiences for growing businesses."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Driven Solutions",
            "description": "Custom AI chatbots, smart assistants, AI app features, lead qualification flows, and automation systems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Automation",
            "description": "Workflow automation for sales, support, documents, reporting, and internal operations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital and Influencer Marketing",
            "description": "Campaign strategy, creator outreach, content planning, and performance tracking."
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get started with Xyphora AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fill out the contact form or use the assistant. Xyphora AI reviews your goal and replies with the recommended next step for your website, mobile app, AI, automation, or marketing project."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Xyphora AI offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Xyphora AI offers US-standard website development, mobile application development, AI-driven solutions, AI chatbot development, business automation, digital marketing, and influencer marketing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with startups and small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Xyphora AI can start with a focused MVP, landing page, chatbot, or campaign plan, then expand after the first version proves useful."
        }
      }
    ]
  }
]

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      <main className="min-h-screen bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

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
