import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { siteUrl } from "@/lib/site"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1628" },
  ],
}

export const metadata: Metadata = {
  // Basic Meta
  title: {
    default: "Xyphora AI | Websites, Mobile Apps & AI-Driven Solutions",
    template: "%s | Xyphora AI",
  },
  description: "Xyphora AI builds US-standard websites, mobile applications, AI chatbots, and AI-driven automation systems with attractive UI, user-friendly UX, and SEO-ready structure.",
  keywords: [
    "website development agency",
    "mobile application development",
    "AI driven solutions",
    "AI app development",
    "US standard website design",
    "website developer",
    "AI chatbot development",
    "business automation",
    "digital marketing agency",
    "influencer marketing",
    "lead generation website",
    "AI automation agency",
    "conversion website design",
    "user friendly web design",
  ],
  authors: [{ name: "Xyphora AI" }],
  creator: "Xyphora AI",
  publisher: "Xyphora AI",
  
  // URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Xyphora AI",
    title: "Xyphora AI | Websites, Mobile Apps & AI-Driven Solutions",
    description: "US-standard websites, mobile applications, AI chatbots, and automation systems with attractive UI and SEO-ready structure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xyphora AI - Intelligence Evolved",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Xyphora AI | Websites, Mobile Apps & AI-Driven Solutions",
    description: "US-standard websites, mobile applications, AI chatbots, and automation systems with attractive UI and SEO-ready structure.",
    images: ["/og-image.png"],
  },
  
  // Category
  category: "technology",
  
  // Icons
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon-v2.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  
  // Other
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  applicationName: "Xyphora AI",
  appleWebApp: {
    capable: true,
    title: "Xyphora AI",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
