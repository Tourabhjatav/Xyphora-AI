"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Logo } from "./logo"

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Industries", href: "/#industries" },
  { name: "Tech Stack", href: "/#tech" },
  { name: "About", href: "/#about" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0)
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/#home" className="group flex min-w-0 items-center gap-3">
            <Logo size="md" className="shrink-0" />
            <span className="truncate text-lg font-bold gradient-text sm:text-xl tracking-tight">Xyphora AI</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {link.name}
                <span className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 rounded-full gradient-purple-cyan transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {mounted && (
              <button
                type="button"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-primary" />}
              </button>
            )}
            <Link href="/#contact" className="shine-button inline-flex h-10 items-center justify-center rounded-lg gradient-animated px-6 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(74,29,150,0.25)] transition-opacity hover:opacity-95">
              Build With Us
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            {mounted && (
              <button
                type="button"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="lg:hidden border-t border-border"
          >
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="shine-button inline-flex h-10 w-full items-center justify-center rounded-lg gradient-animated px-6 text-sm font-semibold text-white"
                >
                  Build With Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
