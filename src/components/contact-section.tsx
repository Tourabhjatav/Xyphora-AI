"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Clock, Twitter, Linkedin, Github, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Contact Us</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Build <span className="gradient-text">Together</span></h2>
              <p className="text-muted-foreground text-lg">Ready to start your AI project? Get in touch and let's discuss how we can help.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-purple-cyan flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5 text-white" /></div>
                <div><h3 className="font-semibold mb-1">Email Us</h3><p className="text-muted-foreground">hello@xyphora.ai</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-purple-cyan flex items-center justify-center flex-shrink-0"><Phone className="w-5 h-5 text-white" /></div>
                <div><h3 className="font-semibold mb-1">Call Us</h3><p className="text-muted-foreground">+1 (555) 123-4567</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-purple-cyan flex items-center justify-center flex-shrink-0"><Clock className="w-5 h-5 text-white" /></div>
                <div><h3 className="font-semibold mb-1">Response Time</h3><p className="text-muted-foreground">Within 24 hours</p></div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium mb-2">Name</label><Input placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /></div>
                <div><label className="block text-sm font-medium mb-2">Email</label><Input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required /></div>
              </div>
              <div><label className="block text-sm font-medium mb-2">Company</label><Input placeholder="Your company name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} /></div>
              <div><label className="block text-sm font-medium mb-2">Message</label><Textarea placeholder="Tell us about your project..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required /></div>
              <Button type="submit" size="lg" className="w-full gradient-purple-cyan text-white hover:opacity-90">Send Message <Send className="ml-2 w-4 h-4" /></Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}