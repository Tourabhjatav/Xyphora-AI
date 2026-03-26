"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Terminal, CheckCircle2 } from "lucide-react"

const searchSteps = [
  "Initializing neural pathways...",
  "Connecting to AI core...",
  "Scanning global data models...",
  "Optimizing algorithms...",
  "System Ready."
]

export function SplashScreen() {
  const [mounted, setMounted] = useState(false)
  const [show, setShow] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    setMounted(true)
    
    // Cycle through searchSteps
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < searchSteps.length - 1) return prev + 1
        clearInterval(interval)
        return prev
      })
    }, 500) // 500ms per step

    // Total animation time based on steps
    const timer = setTimeout(() => {
      setShow(false)
    }, 3800) // 3.8s allows full list to read + delay
    
    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[100] bg-background" />
    )
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 neural-bg opacity-30">
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]" 
              animate={{ scale: [0.9, 1.1, 0.9] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
            />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-lg w-full px-6">
            
            {/* Header/Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-14 h-14 rounded-2xl gradient-purple-cyan flex items-center justify-center shadow-[0_0_30px_rgba(74,29,150,0.5)]">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                <span className="gradient-text">Xyphora</span> AI
              </h1>
            </motion.div>

            {/* Searching Terminal Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full bg-card/50 backdrop-blur-md border border-border/50 rounded-xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">System Boot Sequence</span>
              </div>
              
              <div className="space-y-3 font-mono text-sm min-h-[160px]">
                {searchSteps.map((step, index) => {
                  const isActive = index === currentStep;
                  const isPast = index < currentStep;
                  const isVisible = index <= currentStep;

                  return (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: isVisible ? 1 : 0, 
                        x: isVisible ? 0 : -10,
                      }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5">
                        {isPast ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ) : isActive ? (
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full"
                          />
                        ) : (
                          <div className="w-4 h-4 opacity-0" />
                        )}
                      </div>
                      <span className={`${isPast ? 'text-muted-foreground' : isActive ? 'text-foreground' : 'text-transparent'}`}>
                        {step}
                      </span>
                    </motion.div>
                  )
                })}
              </div>

              {/* Progress Bar under the terminal */}
              <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-4">
                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full gradient-purple-cyan rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(currentStep / (searchSteps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <span className="text-xs font-mono text-muted-foreground w-8 text-right">
                  {Math.round((currentStep / (searchSteps.length - 1)) * 100)}%
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
