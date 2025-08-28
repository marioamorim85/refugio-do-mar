"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Cookie } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function CookieBanner() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookies-accepted')
    if (!hasAccepted) {
      // Show after 2 seconds
      setTimeout(() => setIsVisible(true), 2000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true')
    setIsVisible(false)
  }

  const dismissBanner = () => {
    setIsVisible(false)
    // Show again after 1 hour if not accepted
    setTimeout(() => setIsVisible(true), 3600000)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-r from-white/95 to-blue-50/95 backdrop-blur-md border border-blue-200/50 rounded-2xl shadow-lg shadow-blue-500/10 p-4">
            <div className="flex items-center justify-between gap-4">
              {/* Content */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <Cookie className="w-5 h-5 text-coral-500 flex-shrink-0" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t('cookies.banner.message')}
                  <button 
                    onClick={() => window.open('/privacy-policy', '_blank')} 
                    className="text-blue-600 hover:text-blue-700 underline decoration-blue-300 hover:decoration-blue-500 transition-colors mx-1"
                  >
                    {t('cookies.banner.policy_link')}
                  </button>
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={acceptCookies}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  {t('cookies.banner.accept')}
                </button>
                <button
                  onClick={dismissBanner}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label={t('cookies.banner.close_label')}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}