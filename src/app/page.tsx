import type { Metadata } from "next"
import { HomePageClient } from "@/components/home-page-client"
import { contactEmail, siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Xyphora AI | Senior Web Development & AI Engineering",
  description: "Xyphora AI is a premier digital engineering organization powered by a Senior Developer Team. We engineer ultra-fast US-standard websites, custom full-stack SaaS web applications, and intelligent AI workflows.",
  keywords: [
    "custom website development",
    "web application development",
    "Next.js web development agency",
    "full stack web development",
    "senior developer team",
    "AI chatbot engineering",
    "SaaS dashboard development",
    "responsive UI UX design",
    "US standard website development",
    "business workflow automation",
    "customer portal development",
    "TypeScript React developers",
    "high performance websites",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Xyphora AI | Senior Web Development & AI Engineering",
    description: "Ultra-fast US-standard websites, custom web applications, SaaS dashboards, and AI chatbots engineered for conversion and scalability.",
    url: siteUrl,
    siteName: "Xyphora AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xyphora AI - Next-Gen Web Architecture & AI Engineering",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xyphora AI | Senior Web Development & AI Engineering",
    description: "Ultra-fast US-standard websites, custom web applications, SaaS dashboards, and AI chatbots engineered for conversion and scalability.",
    images: ["/og-image.png"],
  },
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "name": "Xyphora AI",
    "alternateName": ["Xyphora", "XyphoraAI"],
    "url": siteUrl,
    "description": "High-performance website development, full-stack web applications, SaaS portals, and AI chatbot engineering handcrafted by a senior developer team.",
    "inLanguage": "en-US",
    "publisher": {
      "@id": `${siteUrl}/#organization`
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "Xyphora AI",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/logo.png`,
      "width": 512,
      "height": 512
    },
    "image": `${siteUrl}/og-image.png`,
    "email": contactEmail,
    "description": "Xyphora AI is a digital engineering organization powered by a senior developer team. We engineer bespoke websites, full-stack SaaS web applications, and intelligent AI workflows.",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Worldwide"
    },
    "knowsAbout": [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Full-Stack Web Development",
      "SaaS Architecture",
      "AI Chatbots & Copilots",
      "PostgreSQL",
      "REST APIs & GraphQL",
      "Cloud Deployment & DevOps"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": contactEmail,
      "availableLanguage": ["English"]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    "name": "Xyphora AI Web Engineering Services",
    "url": siteUrl,
    "image": `${siteUrl}/og-image.png`,
    "email": contactEmail,
    "priceRange": "$$$",
    "areaServed": "Worldwide",
    "parentOrganization": {
      "@id": `${siteUrl}/#organization`
    },
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
      "name": "Xyphora AI Software Engineering Services",
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
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce & Custom Digital Storefronts",
            "description": "Bespoke online commerce storefronts, custom checkout flows, inventory systems, and payment gateway architectures."
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${siteUrl}/#services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Process",
        "item": `${siteUrl}/#process`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Industries",
        "item": `${siteUrl}/#industries`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Tech Stack",
        "item": `${siteUrl}/#tech-stack`
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Why Us",
        "item": `${siteUrl}/#why-choose-us`
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "FAQ",
        "item": `${siteUrl}/#faq`
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "About",
        "item": `${siteUrl}/#about`
      },
      {
        "@type": "ListItem",
        "position": 9,
        "name": "Contact",
        "item": `${siteUrl}/#contact`
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do you build custom Next.js websites instead of WordPress or templates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom Next.js & React builds deliver sub-second page loads, unmatched security (no vulnerable plugins), total design freedom, and 99+ Lighthouse performance scores that significantly outrank generic templates on search engines."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website look great and load fast on all mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every website and web application we engineer is built mobile-first with fluid responsive grids, optimized asset streaming, and touch-optimized micro-interactions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you include search engine optimization (SEO) in website builds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All web builds include semantic HTML5 structure, automated OpenGraph metadata, Schema.org JSON-LD structured data, XML sitemaps, and Core Web Vitals optimization."
        }
      },
      {
        "@type": "Question",
        "name": "How do custom AI chatbots and assistants work on my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We connect OpenAI / Claude LLMs with your private company documentation using Retrieval-Augmented Generation (RAG). The chatbot accurately answers questions, qualifies leads, and hands off inquiries to your team 24/7."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build custom SaaS platforms, portals, and dashboards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We engineer full-stack web applications with secure authentication, role-based permissions, PostgreSQL databases, real-time sync, and third-party payment integrations."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate our existing APIs, CRM, or payment systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We integrate Stripe, HubSpot, Supabase, Salesforce, custom REST/GraphQL endpoints, and automated webhook pipelines into your web product."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a website or web app project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A high-performance business website typically takes 2–4 weeks. Complex full-stack web applications and custom SaaS portals take 4–8 weeks depending on scope."
        }
      },
      {
        "@type": "Question",
        "name": "Will I be able to see progress while you build?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We work in agile weekly sprints. You receive private staging preview links so you can test features live and give feedback before each milestone."
        }
      },
      {
        "@type": "Question",
        "name": "Can you accommodate expedited launch deadlines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. For urgent product launches or time-sensitive events, we offer dedicated acceleration sprints to deliver on tight schedules."
        }
      },
      {
        "@type": "Question",
        "name": "How does your pricing and payment structure work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer transparent, fixed-scope milestone pricing. Payments are divided into clear deliverables (e.g. 50% upfront, 50% upon final staging signoff)."
        }
      },
      {
        "@type": "Question",
        "name": "Where will my website or app be hosted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deploy to high-availability global edge networks such as Vercel, AWS, or your organization's private cloud infrastructure with automated SSL and CI/CD."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide warranty and ongoing maintenance after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every build includes a post-launch warranty period for technical adjustments, bug fixes, and performance monitoring. Ongoing maintenance plans are also available."
        }
      }
    ]
  }
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  )
}
