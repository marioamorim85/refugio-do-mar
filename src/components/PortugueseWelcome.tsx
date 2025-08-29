"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function PortugueseWelcome() {
  const { t } = useLanguage()
  const [showWelcome, setShowWelcome] = useState(false)
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    // Check if user has visited before
    const visited = localStorage.getItem('refugio-visited')
    
    if (!visited) {
      // First time visitor - show welcome after 3 seconds
      const timer = setTimeout(() => {
        setShowWelcome(true)
      }, 3000)
      
      return () => clearTimeout(timer)
    } else {
      setHasVisited(true)
    }
  }, [])

  const handleClose = () => {
    setShowWelcome(false)
    localStorage.setItem('refugio-visited', 'true')
    setHasVisited(true)
  }

  const handleBookingClick = () => {
    handleClose()
    const bookingSection = document.getElementById('booking')
    bookingSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative"
          >
            {/* Header with Portuguese coastal pattern */}
            <div className="bg-gradient-to-r from-blue-500 via-sky-400 to-teal-300 h-2" />
            
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            
            <div className="p-8 text-center">
              {/* Animated Portuguese elements */}
              <motion.div
                className="text-6xl mb-4"
                animate={{ 
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                🇪🇺
              </motion.div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {t('welcome.title')}
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('welcome.description')}
                <br />
                <span className="font-semibold text-ocean-600">
                  {t('welcome.direct_booking')}
                </span>
              </p>
              
              {/* Special welcome offer */}
              <div className="bg-gradient-to-r from-coral-50 to-sand-50 rounded-2xl p-4 mb-6 border-2 border-coral-200">
                <div className="text-lg font-bold text-coral-600 mb-1">
                  {t('welcome.offer.title')}
                </div>
                <div className="text-sm text-gray-700">
                  {t('welcome.offer.discount')}
                  <br />
                  <span className="font-semibold">{t('welcome.offer.code')}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <motion.button
                  onClick={handleBookingClick}
                  className="w-full bg-gradient-to-r from-ocean-600 to-ocean-700 hover:from-ocean-700 hover:to-ocean-800 text-white py-3 px-6 rounded-xl font-semibold shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('welcome.booking_button')}
                </motion.button>
                
                <button
                  onClick={handleClose}
                  className="w-full text-gray-500 hover:text-gray-700 py-2 text-sm transition-colors"
                >
                  {t('welcome.explore_button')}
                </button>
              </div>
              
              {/* Floating emojis */}
              <div className="absolute top-2 left-2 text-2xl animate-float-gentle">
                🐚
              </div>
              <div className="absolute bottom-2 right-2 text-2xl animate-wave-gentle">
                🌊
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}