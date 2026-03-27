"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  animated?: boolean
}

export function Logo({ className, size = "md", animated = true }: LogoProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20"
  }

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-10 h-10",
    xl: "w-14 h-14"
  }

  return (
    <motion.div
      className={cn(
        "relative rounded-xl gradient-purple-cyan flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(74,29,150,0.3)]",
        sizes[size],
        className
      )}
      whileHover={animated ? { scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" } : {}}
      initial={animated ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
      animate={animated ? { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
      } : {}}
    >
      {/* Background Pulse Effect */}
      {animated && (
        <motion.div
          className="absolute inset-0 bg-white/20"
          animate={{
            opacity: [0, 0.2, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Main Logo Image */}
      <motion.img
        src="/logo.png"
        alt="Xyphora AI Logo"
        className={cn("relative z-10 object-contain", iconSizes[size])}
        animate={animated ? {
          filter: ["brightness(1) contrast(1)", "brightness(1.2) contrast(1.1)", "brightness(1) contrast(1)"],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shimmer Effect */}
      {animated && (
        <motion.div
          className="absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
          initial={{ x: "-100%", skewX: -20 }}
          animate={{ x: "200%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  )
}
