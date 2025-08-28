"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Portuguese Seagull that flies across screen when clicked
const SeagullEasterEgg = () => {
  const [showSeagull, setShowSeagull] = useState(false)
  const [seagullCount, setSeagullCount] = useState(0)
  
  const triggerSeagull = () => {
    if (!showSeagull) {
      setShowSeagull(true)
      setSeagullCount(prev => prev + 1)
      
      // Play a subtle sound effect (optional)
      if (typeof window !== 'undefined' && window.AudioContext) {
        const audioContext = new AudioContext()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1)
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
        
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.3)
      }
      
      setTimeout(() => setShowSeagull(false), 15000)
    }
  }
  
  return (
    <>
      {/* Hidden trigger - triple click anywhere */}
      <div 
        onClick={triggerSeagull}
        className="fixed inset-0 z-0 pointer-events-none"
        onDoubleClick={triggerSeagull}
      />
      
      <AnimatePresence>
        {showSeagull && (
          <motion.div
            initial={{ x: -50, y: Math.random() * 200 + 100 }}
            animate={{ x: window.innerWidth + 50, y: Math.random() * 100 + 150 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 15, ease: "linear" }}
            className="fixed top-0 z-50 pointer-events-none"
            style={{ fontSize: '2rem' }}
          >
            🦆
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Achievement notification for multiple seagulls */}
      <AnimatePresence>
        {seagullCount >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed bottom-20 right-4 bg-gradient-to-r from-ocean-500 to-coral-500 text-white p-4 rounded-2xl shadow-2xl z-50"
          >
            <div className="text-center">
              <div className="text-2xl mb-2">🏆</div>
              <div className="font-bold text-sm">Descobridor da Costa!</div>
              <div className="text-xs opacity-90">Encontraste {seagullCount} gaivotas!</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Floating Portuguese Azulejo tiles
const FloatingAzulejos = () => {
  const [azulejos, setAzulejos] = useState<Array<{id: number, x: number, y: number, delay: number}>>([])
  
  useEffect(() => {
    const tiles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }))
    setAzulejos(tiles)
  }, [])
  
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {azulejos.map((tile) => (
        <motion.div
          key={tile.id}
          className="absolute w-8 h-8 opacity-10"
          style={{
            left: `${tile.x}%`,
            top: `${tile.y}%`,
            background: 'linear-gradient(45deg, #0ea5e9 25%, transparent 25%), linear-gradient(-45deg, #0ea5e9 25%, transparent 25%)',
            backgroundSize: '8px 8px'
          }}
          animate={{
            y: [0, -20, 10, 0],
            rotate: [0, 2, -1, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: tile.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Wave effect for buttons
export const WaveRipple = ({ children, className = "", onClick }: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) => {
  const [ripples, setRipples] = useState<Array<{id: number, x: number, y: number}>>([])
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    }
    
    setRipples(prev => [...prev, newRipple])
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 600)
    
    onClick?.()
  }
  
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {children}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-wave-ripple pointer-events-none"
          style={{
            left: ripple.x - 2,
            top: ripple.y - 2,
            width: 4,
            height: 4
          }}
        />
      ))}
    </div>
  )
}

// Confetti celebration for successful booking
export const VacationConfetti = ({ trigger }: { trigger: boolean }) => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, emoji: string, delay: number}>>([])
  
  useEffect(() => {
    if (trigger) {
      const vacationEmojis = ['🏖️', '🌊', '☀️', '🐚', '🦀', '🏄‍♀️', '🍹', '🌺', '🏝️', '⭐']
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10,
        emoji: vacationEmojis[Math.floor(Math.random() * vacationEmojis.length)],
        delay: Math.random() * 1
      }))
      
      setParticles(newParticles)
      
      setTimeout(() => setParticles([]), 3000)
    }
  }, [trigger])
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute text-2xl"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`
            }}
            initial={{ y: -50, opacity: 1, scale: 0 }}
            animate={{
              y: window.innerHeight + 50,
              opacity: 0,
              scale: [0, 1, 1, 0],
              rotate: Math.random() * 360
            }}
            transition={{
              duration: 2.5,
              delay: particle.delay,
              ease: "easeOut"
            }}
            exit={{ opacity: 0 }}
          >
            {particle.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// Main coastal effects component
export default function CoastalEffects() {
  return (
    <>
      <SeagullEasterEgg />
      <FloatingAzulejos />
    </>
  )
}

// Portuguese coastal loading animation
export const PortugueseWaveLoader = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-ocean-50/90 backdrop-blur-md z-50 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-4 border-ocean-300 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4
                  }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center text-3xl">
                🌊
              </div>
            </div>
            <motion.p
              className="text-ocean-600 font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              A preparar as suas férias de sonho...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}