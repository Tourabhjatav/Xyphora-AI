"use client"

import { useEffect, useRef } from "react"

type TurnstileWidgetProps = {
  onVerify: (token: string) => void
  onExpire?: () => void
}

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string
      callback: (token: string) => void
      "expired-callback": () => void
      "error-callback": () => void
    },
  ) => string
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
const scriptSrc = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"

let turnstileScriptPromise: Promise<void> | null = null

function loadTurnstileScript() {
  if (typeof window === "undefined") return Promise.resolve()
  if (window.turnstile) return Promise.resolve()

  if (!turnstileScriptPromise) {
    turnstileScriptPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${scriptSrc}"]`)

      if (existingScript) {
        existingScript.addEventListener("load", () => resolve(), { once: true })
        existingScript.addEventListener("error", () => reject(new Error("Turnstile failed to load.")), { once: true })
        return
      }

      const script = document.createElement("script")
      script.src = scriptSrc
      script.async = true
      script.defer = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error("Turnstile failed to load."))
      document.head.appendChild(script)
    })
  }

  return turnstileScriptPromise
}

export function TurnstileWidget({ onVerify, onExpire }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!siteKey || !containerRef.current) return

    let cancelled = false
    let widgetId: string | null = null

    loadTurnstileScript()
      .then(() => {
        if (cancelled || !window.turnstile || !containerRef.current) return

        widgetId = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: onVerify,
          "expired-callback": () => onExpire?.(),
          "error-callback": () => onExpire?.(),
        })
      })
      .catch(() => onExpire?.())

    return () => {
      cancelled = true
      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId)
      }
    }
  }, [onExpire, onVerify])

  if (!siteKey) return null

  return <div ref={containerRef} className="min-h-[65px]" />
}
