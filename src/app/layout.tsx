import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

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
    default: "Xyphora AI | AI Development, Website Developer & Marketing Agency",
    template: "%s | Xyphora AI",
  },
  description: "Xyphora AI is a leading AI development, website developer, and marketing agency. We build custom AI chatbots, responsive websites, document intelligence systems, and run influencer marketing campaigns.",
  keywords: [
    "Website Developer",
    "Web Development",
    "AI development",
    "AI chatbot",
    "influencer marketing",
    "digital marketing agency",
    "AI solutions",
    "chatbot development",
    "document AI",
    "RAG systems",
    "social media marketing",
    "AI agency",
    "marketing agency",
    "AI automation",
    "GPT-4 integration",
    "Claude AI",
    "business automation",
  ],
  authors: [{ name: "Xyphora AI" }],
  creator: "Xyphora AI",
  publisher: "Xyphora AI",
  
  // URL
  metadataBase: new URL("https://xyphora-ai.vercel.app"),
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
    url: "https://xyphora-ai.vercel.app",
    siteName: "Xyphora AI",
    title: "Xyphora AI | AI Development & Marketing Agency",
    description: "Transform your business with AI-powered solutions and strategic marketing. Custom chatbots, document AI, influencer campaigns & more.",
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
    title: "Xyphora AI | AI Development & Marketing Agency",
    description: "Transform your business with AI-powered solutions and strategic marketing. Custom chatbots, document AI, influencer campaigns & more.",
    images: ["/og-image.png"],
    creator: "@xyphora_ai",
  },
  
  // Verification (add your codes here)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
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
      <body className={inter.className}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9601701476836928"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
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
