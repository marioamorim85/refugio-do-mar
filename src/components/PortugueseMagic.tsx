"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

// Portuguese vacation magic effects
const portugalEmojis = [
  '🌊', // wave
  '🐚', // shell
  '☀️', // sun
  '🇪🇺', // EU flag
  '🍹', // tropical drink
  '🏝️', // island
  '🦀', // crab
  '🌺', // hibiscus
  '⭐', // star
  '🎅' // relaxed emoji
]

interface MagicParticle {
  id: number
  x: number
  y: number
  emoji: string
  velocity: { x: number; y: number }
}

let particleId = 0

export const PortugueseMagic = () => {
  const { t } = useLanguage()
  const [particles, setParticles] = useState<MagicParticle[]>([])
  const [konami, setKonami] = useState<string[]>([])
  const [showSecret, setShowSecret] = useState(false)
  
  // Konami code: ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, KeyB, KeyA
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']
  
  // Create magic particles on click
  const createMagicParticles = (x: number, y: number) => {
    const newParticles: MagicParticle[] = []
    
    for (let i = 0; i < 5; i++) {
      newParticles.push({
        id: ++particleId,
        x,
        y,
        emoji: portugalEmojis[Math.floor(Math.random() * portugalEmojis.length)],
        velocity: {
          x: (Math.random() - 0.5) * 200,
          y: Math.random() * -150 - 50
        }
      })
    }
    
    setParticles(prev => [...prev, ...newParticles])
    
    // Remove particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.includes(p)))
    }, 2000)
  }
  
  // Konami code detection
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      setKonami(prev => {
        const newKonami = [...prev, event.code].slice(-10)
        
        if (JSON.stringify(newKonami) === JSON.stringify(konamiCode)) {
          setShowSecret(true)
          setTimeout(() => setShowSecret(false), 10000)
          return []
        }
        
        return newKonami
      })
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])
  
  // Global click handler for magic
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Only trigger on certain elements or with special key held
      if (e.altKey || (e.target as HTMLElement).classList.contains('magic-trigger')) {
        createMagicParticles(e.clientX, e.clientY)
      }
    }
    
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  
  return (
    <>
      {/* Magic Particles */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute text-2xl"
            style={{ left: particle.x, top: particle.y }}
            animate={{
              x: particle.velocity.x,
              y: particle.velocity.y,
              scale: [1, 1.5, 0],
              rotate: Math.random() * 360
            }}
            transition={{
              duration: 2,
              ease: "easeOut"
            }}
          >
            {particle.emoji}
          </motion.div>
        ))}
      </div>
      
      {/* Secret Konami Mode */}
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-ocean-500/20 to-coral-500/20 backdrop-blur-sm z-40 flex items-center justify-center"
          >
            <div className="text-center text-white p-8 bg-black/50 rounded-3xl max-w-md mx-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-6xl mb-4"
              >
                🇪🇺
              </motion.div>
              <h2 className="text-2xl font-bold mb-4 text-gradient">
                {t('magic.secret.title')}
              </h2>
              <p className="text-lg mb-6">
                {t('magic.secret.message')}
                <br />
                <span className="text-sand-400">
                  {t('magic.secret.discount')}
                </span>
              </p>
              <div className="text-sm opacity-75">
                {t('magic.secret.code')}
                <br />
                {t('magic.secret.instructions')}
              </div>
              <motion.div
                className="mt-6 flex justify-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {portugalEmojis.map((emoji, index) => (
                  <motion.span
                    key={index}
                    className="text-2xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity, 
                      delay: index * 0.1 
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Hook for adding magic trigger to components
export const useMagicTrigger = () => {
  const { t } = useLanguage()
  return {
    className: "magic-trigger",
    title: t('magic.trigger_title')
  }
}

export default PortugueseMagic