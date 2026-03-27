"use client"

import { Sparkles, Twitter, Linkedin, Github } from "lucide-react"
import { Logo } from "./logo"

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
            <p className="text-muted-foreground mb-4 max-w-md">A new AI development startup passionate about building intelligent solutions. Intelligence Evolved.</p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"><Icon className="w-4 h-4" /></a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">{["Services", "About", "Contact"].map((link) => (<li key={link}><a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">{link}</a></li>))}</ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">{["AI Web Development", "AI App Development", "AI Integration", "Custom AI Solutions"].map((service) => (<li key={service}><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">{service}</a></li>))}</ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Xyphora AI. All rights reserved. Intelligence Evolved.</p>
        </div>
      </div>
    </footer>
  )
}