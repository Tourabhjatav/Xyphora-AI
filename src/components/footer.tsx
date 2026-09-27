"use client"

import { Mail } from "lucide-react"
import { Logo } from "./logo"
import { contactEmail } from "@/lib/site"

const quickLinks = [
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Tech Stack", href: "/#tech" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
  { name: "Privacy Policy", href: "/privacy" },
]

const servicesList = [
  { name: "Custom Business Websites", href: "/#services" },
  { name: "Full-Stack Web Apps & SaaS", href: "/#services" },
  { name: "Mobile App Development", href: "/#services" },
  { name: "AI Chatbots & Copilots", href: "/#services" },
  { name: "Workflow & API Automation", href: "/#services" },
]

export function Footer() {
  return (
    <footer className="py-16 border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo size="md" />
              <span className="text-xl font-bold gradient-text tracking-tight">Xyphora AI</span>
            </div>
            <p className="text-muted-foreground mb-5 max-w-md text-sm sm:text-base leading-relaxed">
              Xyphora AI is an Indian software development organization. Our senior developer team engineers ultra-fast, visually stunning US-standard websites, custom full-stack web applications, and tailored AI systems.
            </p>
            <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              <Mail className="h-4 w-4 text-primary" />
              <span>{contactEmail}</span>
            </a>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground mb-4">Services</h3>
            <ul className="space-y-2.5">
              {servicesList.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 text-center text-muted-foreground text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Xyphora AI (India). Handcrafted by Senior Developers. All rights reserved.</p>
          <p className="font-medium gradient-text">Indian Software Engineering Organization</p>
        </div>
      </div>
    </footer>
  )
}
