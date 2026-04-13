"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShieldCheck, FileText, Lock, Eye, Mail, Info } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 rounded-2xl bg-primary/10 mb-4">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg">Last updated: April 13, 2026</p>
        </motion.div>

        <div className="prose prose-invert max-w-none space-y-12">
          {/* Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Introduction</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              At Xyphora AI ("we," "us," or "our"), we value your privacy. This Privacy Policy outlines how we handle information across our official website (<a href="https://xyphora-ai.vercel.app" className="text-primary hover:underline">xyphora-ai.vercel.app</a>) and our mobile application, <strong>GymTracker</strong>.
            </p>
          </section>

          {/* Website Collection */}
          <section className="bg-muted/30 p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0 text-foreground">Website Information Collection</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              When you visit our website, we may collect the following information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Contact Information:</strong> If you use our contact form, we collect your name, email address, and any details you provide.</li>
              <li><strong>Cookies & Analytics:</strong> We use minimal cookies to improve your browsing experience and analyze site traffic via standard tools.</li>
            </ul>
          </section>

          {/* GymTracker Specifics */}
          <section className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0 text-foreground">GymTracker App Privacy</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              <strong>GymTracker</strong> is designed as an offline-first tool to respect your privacy.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Offline Storage:</strong> All workout data, progress tracking, and personal metrics are stored locally on your device.</li>
              <li><strong>No Cloud Syncing:</strong> By default, GymTracker does not upload your fitness data to any external servers.</li>
              <li><strong>No Mandatory Accounts:</strong> You are not required to create an account to use the application.</li>
              <li><strong>Permissions:</strong> The app may request minimal local storage permissions to save your stats on your device.</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">How We Use Your Data</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              For information collected via the website, we use it solely to respond to your inquiries and provide the requested AI development or marketing services. For GymTracker, your data stays under your control on your own device.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We <strong>never sell</strong> your personal information to third parties.
            </p>
          </section>

          {/* Contact */}
          <section className="text-center pt-8 border-t border-border">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Questions?</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about our privacy practices, please contact us.
              </p>
              <a 
                href="mailto:Xyphora.ai@gmail.com" 
                className="text-primary font-bold text-lg hover:underline"
              >
                Xyphora.ai@gmail.com
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
