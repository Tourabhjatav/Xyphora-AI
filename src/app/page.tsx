"use client"

import dynamic from "next/dynamic"
import { MotionConfig } from "framer-motion"
import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { TrustSection } from "../components/trust-section"
import { SectionSkeleton } from "../components/section-skeleton"
import { contactEmail, siteUrl } from "@/lib/site"

const ServicesSection = dynamic(() => import("../components/services-section").then(mod => mod.ServicesSection), {
  loading: () => <SectionSkeleton tone="muted" items={6} />,
})
const ProcessSection = dynamic(() => import("../components/process-section").then(mod => mod.ProcessSection), {
  loading: () => <SectionSkeleton variant="timeline" items={5} />,
})
const IndustriesSection = dynamic(() => import("../components/industries-section").then(mod => mod.IndustriesSection), {
  loading: () => <SectionSkeleton tone="muted" items={6} />,
})
const TechStackSection = dynamic(() => import("../components/tech-stack-section").then(mod => mod.TechStackSection), {
  loading: () => <SectionSkeleton items={6} />,
})
const WhyChooseUsSection = dynamic(() => import("../components/why-choose-us-section").then(mod => mod.WhyChooseUsSection), {
  loading: () => <SectionSkeleton tone="muted" items={4} />,
})
const FAQSection = dynamic(() => import("../components/faq-section").then(mod => mod.FAQSection), {
  loading: () => <SectionSkeleton variant="list" items={5} />,
})
const AboutSection = dynamic(() => import("../components/about-section").then(mod => mod.AboutSection), {
  loading: () => <SectionSkeleton variant="split" tone="muted" />,
})
const ContactSection = dynamic(() => import("../components/contact-section").then(mod => mod.ContactSection), {
  loading: () => <SectionSkeleton variant="split" tone="muted" />,
})
const Footer = dynamic(() => import("../components/footer").then(mod => mod.Footer))
const ChatBot = dynamic(() => import("../components/chatbot").then(mod => mod.ChatBot))

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Xyphora AI",
    "url": siteUrl,
    "description": "High-performance website development, full-stack web applications, SaaS portals, and AI chatbot engineering for modern businesses.",
    "potentialAction": {
      "@type": "ContactAction",
      "target": `${siteUrl}/#contact`,
      "name": "Request a project consultation"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Xyphora AI",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "email": contactEmail,
    "description": "Xyphora AI engineers US-standard websites, full-stack web applications, SaaS dashboards, and intelligent AI chatbots.",
    "areaServed": "Worldwide",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "engineering",
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
      "Custom Website Development",
      "Full-Stack Web Applications & SaaS",
      "Mobile Application Development",
      "AI Chatbot & Copilot Engineering",
      "Workflow & API Automation",
      "E-Commerce & Digital Storefronts"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Xyphora AI Web Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Performance Website Development",
            "description": "Responsive, SEO-ready Next.js corporate websites and landing pages with sub-second page loads and US-standard visual design."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack Web Applications & SaaS",
            "description": "Interactive customer portals, role-based dashboards, and scalable SaaS platforms with strict TypeScript architecture."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Application Development",
            "description": "Cross-platform mobile applications and responsive progressive web apps with fluid UX and native-like performance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Chatbots & Intelligent Copilots",
            "description": "Custom RAG knowledge-base chatbots and AI assistants that qualify leads and automate customer support 24/7."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow & API Automation",
            "description": "Automated webhook pipelines, CRM sync, document AI processing, and third-party API integrations."
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
        "name": "Why choose custom Next.js web development with Xyphora AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom Next.js & React builds provide sub-second load times, strict type safety, unmatched security, 99+ Lighthouse performance scores, and custom tailored UI/UX."
        }
      },
      {
        "@type": "Question",
        "name": "What web development services does Xyphora AI offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Xyphora AI provides high-performance business websites, full-stack SaaS web applications, customer portals, mobile applications, AI chatbots, and workflow automations."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a website or web app project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A high-performance corporate website takes 2-4 weeks. Complex full-stack web applications and SaaS platforms take 4-8 weeks with weekly staging previews."
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
