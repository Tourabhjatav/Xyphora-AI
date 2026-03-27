"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Industries", href: "#industries" },
  { name: "Tech", href: "#tech" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <Logo size="md" />
            <span className="text-xl font-bold gradient-text">Xyphora AI</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-primary" />}
              </button>
            )}
            <Button className="gradient-purple-cyan text-white hover:opacity-90 px-6">
              Get a Quote
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="lg:hidden border-t border-border"
          >
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-4">
                <Button className="w-full gradient-purple-cyan text-white">
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}