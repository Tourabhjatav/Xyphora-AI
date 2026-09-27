"use client"

import { useState, useSyncExternalStore } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldCheck, X } from "lucide-react"

const STORAGE_KEY = "xyphora_dpdp_consent"

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback)
  return () => window.removeEventListener("storage", callback)
}

function getSnapshot(): boolean {
  try {
    return !localStorage.getItem(STORAGE_KEY)
  } catch {
    return true
  }
}

function getServerSnapshot(): boolean {
  return false
}

export function ConsentBanner() {
  const [isDismissed, setIsDismissed] = useState(false)
  const isNeeded = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted_" + new Date().toISOString())
    } catch {
      // ignore storage failure
    }
    setIsDismissed(true)
  }

  if (!isNeeded || isDismissed) return null

  return (
    <AnimatePresence>
      <motion.aside
        aria-label="Privacy and Cookie Notice"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 p-4 sm:p-5 rounded-2xl bg-card/95 backdrop-blur-md border border-border shadow-2xl"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary flex-shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          
          <div className="flex-1 text-xs text-muted-foreground leading-relaxed">
            <p className="font-semibold text-foreground text-sm mb-1">
              Privacy &amp; Data Notice
            </p>
            <p className="mb-3">
              We respect your digital privacy in full compliance with the <strong>DPDP Act 2023</strong>. We use strictly essential storage for your theme preferences and never track or sell your personal data.
            </p>
            
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleAccept}
                className="px-3.5 py-1.5 rounded-lg gradient-animated text-white font-medium text-xs hover:opacity-90 shadow-sm transition-opacity"
              >
                Accept &amp; Close
              </button>
              <a
                href="/privacy"
                className="text-primary hover:underline font-medium text-xs"
              >
                Learn More
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAccept}
            className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg"
            aria-label="Close Notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.aside>
    </AnimatePresence>
  )
}
