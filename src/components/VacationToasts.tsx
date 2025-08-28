"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

interface ToastMessage {
  id: number
  messageKey: string
  emoji: string
  type: 'success' | 'info' | 'celebration'
  duration?: number
}

const toastMessageKeys = [
  { messageKey: "toasts.messages.pool_photos", emoji: "👀", type: 'info' as const },
  { messageKey: "toasts.messages.july_booking", emoji: "🎆", type: 'success' as const },
  { messageKey: "toasts.messages.lisbon_interest", emoji: "❤️", type: 'info' as const },
  { messageKey: "toasts.messages.sea_view_comment", emoji: "😍", type: 'celebration' as const },
  { messageKey: "toasts.messages.swiss_family", emoji: "🎉", type: 'success' as const },
  { messageKey: "toasts.messages.best_apartment", emoji: "⭐", type: 'celebration' as const },
  { messageKey: "toasts.messages.beach_walk", emoji: "🏖️", type: 'info' as const },
  { messageKey: "toasts.messages.sunset_photos", emoji: "🌅", type: 'celebration' as const },
  { messageKey: "toasts.messages.pool_time", emoji: "☀️", type: 'info' as const },
  { messageKey: "toasts.messages.algarve_lover", emoji: "💙", type: 'celebration' as const },
  { messageKey: "toasts.messages.perfect_location", emoji: "📍", type: 'info' as const },
  { messageKey: "toasts.messages.family_memories", emoji: "👨‍👩‍👧‍👦", type: 'success' as const },
  { messageKey: "toasts.messages.romantic_getaway", emoji: "💕", type: 'celebration' as const },
  { messageKey: "toasts.messages.morning_coffee", emoji: "☕", type: 'info' as const },
  { messageKey: "toasts.messages.german_couple", emoji: "🇩🇪", type: 'success' as const }
]

let toastCounter = 0

export default function VacationToasts() {
  const { t } = useLanguage()
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      // Random chance to show a toast (social proof)
      if (Math.random() < 0.3 && toasts.length < 2) {
        const randomMessage = toastMessageKeys[Math.floor(Math.random() * toastMessageKeys.length)]
        const newToast: ToastMessage = {
          id: ++toastCounter,
          ...randomMessage,
          duration: 4000
        }
        
        setToasts(prev => [...prev, newToast])
        
        setTimeout(() => {
          setToasts(prev => prev.filter(toast => toast.id !== newToast.id))
        }, newToast.duration)
      }
    }, 15000 + Math.random() * 20000) // Random interval between 15-35 seconds

    return () => clearInterval(interval)
  }, [toasts.length])

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  return (
    <div className="fixed bottom-24 left-4 z-40 max-w-sm">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            className={`
              mb-3 p-4 rounded-2xl shadow-2xl backdrop-blur-md border cursor-pointer
              ${toast.type === 'success' 
                ? 'bg-green-500/90 border-green-400 text-white' 
                : toast.type === 'celebration'
                ? 'bg-gradient-to-r from-coral-500 to-coral-600 border-coral-400 text-white'
                : 'bg-ocean-500/90 border-ocean-400 text-white'
              }
            `}
            onClick={() => removeToast(toast.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl animate-bounce">{toast.emoji}</div>
              <div className="flex-1">
                <p className="text-sm font-medium leading-relaxed">
                  {t(toast.messageKey)}
                </p>
                <div className="mt-2 text-xs opacity-75">
                  {t('toasts.time_suffix')}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// Special celebration toasts for specific actions
export const showCelebrationToast = (message: string, emoji: string = "🎉") => {
  // This would integrate with a global toast system
  console.log(`🎉 ${message} ${emoji}`)
}