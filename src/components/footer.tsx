"use client"

import { Mail } from "lucide-react"
import { Logo } from "./logo"
import { contactEmail } from "@/lib/site"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo size="md" />
              <span className="text-xl font-bold gradient-text">Xyphora AI</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Websites, mobile applications, and AI-driven systems built with a premium, user-friendly, SEO-ready standard.
            </p>
            <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              <Mail className="h-4 w-4" />
              {contactEmail}
            </a>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Services", "About", "Contact", "Privacy"].map((link) => (
                <li key={link}>
                  <a
                    href={link === "Privacy" ? "/privacy" : `#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link === "Privacy" ? "Privacy Policy" : link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Website Development", "Mobile Applications", "AI-Driven Solutions", "Business Automation"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>Copyright {new Date().getFullYear()} Xyphora AI. All rights reserved. Intelligence Evolved.</p>
        </div>
      </div>
    </footer>
  )
}
