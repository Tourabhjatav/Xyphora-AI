"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { BicycleLoader } from "./bicycle-loader"

export function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && sessionStorage.getItem("xyphora_splash_shown")) {
        const skipTimer = setTimeout(() => setShow(false), 0)
        return () => clearTimeout(skipTimer)
      }
    } catch {
      // Ignore storage errors
    }

    const minVisibleMs = 700
    const maxVisibleMs = 3200
    const startedAt = Date.now()
    let minTimer: ReturnType<typeof setTimeout> | undefined

    const hideAfterMinimum = () => {
      const elapsed = Date.now() - startedAt
      const remaining = Math.max(minVisibleMs - elapsed, 0)
      minTimer = setTimeout(() => {
        try {
          sessionStorage.setItem("xyphora_splash_shown", "true")
        } catch {
          // Ignore storage errors
        }
        setShow(false)
      }, remaining)
    }

    if (document.readyState === "complete") {
      hideAfterMinimum()
    } else {
      window.addEventListener("load", hideAfterMinimum, { once: true })
    }

    const maxTimer = setTimeout(() => {
      try {
        sessionStorage.setItem("xyphora_splash_shown", "true")
      } catch {
        // Ignore storage errors
      }
      setShow(false)
    }, maxVisibleMs)

    return () => {
      window.removeEventListener("load", hideAfterMinimum)
      if (minTimer) clearTimeout(minTimer)
      if (maxTimer) clearTimeout(maxTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="bicycle-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <BicycleLoader />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
