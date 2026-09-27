import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { SplashScreen } from "../components/splash-screen"
import { ConsentBanner } from "../components/consent-banner"
import { siteUrl } from "@/lib/site"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

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
    default: "Xyphora AI | Custom Web Development & AI Engineering",
    template: "%s | Xyphora AI",
  },
  description: "Xyphora AI engineers ultra-fast, US-standard websites, custom full-stack web applications, SaaS dashboards, and intelligent AI chatbots designed to scale.",
  keywords: [
    "custom website development",
    "web application development",
    "Next.js web development agency",
    "full stack web development",
    "AI chatbot engineering",
    "SaaS dashboard development",
    "responsive UI UX design",
    "US standard website development",
    "business workflow automation",
    "customer portal development",
    "TypeScript React developers",
    "high performance websites",
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
    title: "Xyphora AI | Premium Websites, Web Applications & AI Solutions",
    description: "Ultra-fast US-standard websites, custom web applications, SaaS dashboards, and AI chatbots engineered for conversion and scalability.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xyphora AI - Next-Gen Web Architecture & AI Engineering",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Xyphora AI | Premium Websites, Web Applications & AI Solutions",
    description: "Ultra-fast US-standard websites, custom web applications, SaaS dashboards, and AI chatbots engineered for conversion and scalability.",
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />
          <ConsentBanner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
