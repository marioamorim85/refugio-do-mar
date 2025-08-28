"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, Calendar, Phone } from "lucide-react"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showFAB, setShowFAB] = useState(false)
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isFormInteracting, setIsFormInteracting] = useState(false)
  
  const bookingObserver = useRef<IntersectionObserver | null>(null)

  // Smart scroll detection
  const handleScroll = useCallback(() => {
    const currentScrollY = window.pageYOffset
    
    // Basic scroll to top visibility
    setIsVisible(currentScrollY > 300)
    
    // Detect scroll direction
    setIsScrollingUp(currentScrollY < lastScrollY)
    setLastScrollY(currentScrollY)
    
    // Show FAB after hero section, but with smart logic
    const heroHeight = window.innerHeight * 0.5
    const shouldShowFAB = currentScrollY > heroHeight
    
    setShowFAB(shouldShowFAB)
  }, [lastScrollY])

  // Intersection Observer for booking form
  useEffect(() => {
    const bookingForm = document.getElementById('booking-form')
    
    if (bookingForm) {
      bookingObserver.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries
          setIsBookingFormVisible(entry.isIntersecting)
        },
        {
          threshold: 0.3, // Form is considered visible when 30% is in view
          rootMargin: '0px 0px -50px 0px' // Offset to account for mobile keyboard
        }
      )
      
      bookingObserver.current.observe(bookingForm)
    }
    
    return () => {
      if (bookingObserver.current) {
        bookingObserver.current.disconnect()
      }
    }
  }, [])

  // Handle form interaction detection
  useEffect(() => {
    const bookingForm = document.getElementById('booking-form')
    
    if (bookingForm) {
      const handleFocusIn = () => setIsFormInteracting(true)
      const handleFocusOut = () => {
        // Delay to prevent flickering when moving between form fields
        setTimeout(() => {
          const activeElement = document.activeElement
          const isStillInForm = bookingForm.contains(activeElement)
          setIsFormInteracting(isStillInForm)
        }, 150)
      }
      
      bookingForm.addEventListener('focusin', handleFocusIn)
      bookingForm.addEventListener('focusout', handleFocusOut)
      
      return () => {
        bookingForm.removeEventListener('focusin', handleFocusIn)
        bookingForm.removeEventListener('focusout', handleFocusOut)
      }
    }
  }, [])

  useEffect(() => {
    let ticking = false
    
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scrollHandler, { passive: true })
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking')
    bookingSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Smart Floating Action Buttons - Mobile */}
      <AnimatePresence>
        {showFAB && !isBookingFormVisible && !isFormInteracting && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: isScrollingUp || lastScrollY < 200 ? 1 : 0.7,
              y: 0,
              scale: isScrollingUp || lastScrollY < 200 ? 1 : 0.9
            }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="lg:hidden fixed bottom-24 right-4 z-40 flex flex-col gap-3"
          >
            {/* Enhanced WhatsApp Button */}
            <motion.a
              href="https://wa.me/41765830782"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl relative overflow-hidden touch-target"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              aria-label="Contactar via WhatsApp - Resposta rápida"
              style={{ minWidth: '44px', minHeight: '44px' }} // iOS touch target guidelines
            >
              <Phone className="w-7 h-7" />
              {/* Animated notification dot */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">!</span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.a>

            {/* Enhanced Booking Button */}
            <motion.button
              onClick={scrollToBooking}
              className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 hover:from-blue-700 hover:via-blue-600 hover:to-teal-600 text-white rounded-full shadow-2xl animate-pulse-glow relative overflow-hidden group touch-target"
              whileHover={{ scale: 1.1, y: -2, rotate: [0, -2, 2, 0] }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              aria-label="Reservar agora - Melhor preço garantido"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              <Calendar className="w-7 h-7 relative z-10" />
              <div className="absolute -top-1 -right-1 text-sm z-10">🌊</div>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && !isFormInteracting && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: isScrollingUp ? 1 : 0.8,
              scale: isScrollingUp ? 1 : 0.9
            }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 hover:from-blue-700 hover:via-blue-600 hover:to-teal-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group coastal-cursor touch-target"
            whileHover={{ scale: 1.1, y: -5, rotate: [0, -2, 2, 0] }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            aria-label="Voltar ao topo"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            <div className="relative">
              <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
              <div className="absolute -top-2 -right-2 text-sm group-hover:animate-bounce" style={{ animationDelay: '0.1s' }}>🦆</div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
