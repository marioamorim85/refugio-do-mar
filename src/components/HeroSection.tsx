"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import TrustBadges from "@/components/TrustBadges"
import { WaveRipple } from "@/components/CoastalEffects"
import { useLanguage } from "@/contexts/LanguageContext"

export default function HeroSection() {
  const { t } = useLanguage()
  
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking')
    bookingSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 md:-mt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sala5.jpeg"
          alt="Sala principal do Refúgio no Mar - Armação de Pêra"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-8 md:pt-0">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight"
        >
          <span className="text-white drop-shadow-2xl">Refúgio no</span>{' '}
          <span className="drop-shadow-2xl text-gradient-fix">Mar</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 mb-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">{t('hero.badge')}</span>
          </div>
          <p className="text-lg md:text-xl text-gray-100 font-light">
            {t('hero.title')} • {t('hero.subtitle')}
          </p>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 font-light text-white drop-shadow-lg leading-relaxed"
        >
{t('hero.description')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <WaveRipple className="rounded-full">
              <Button 
              size="lg" 
              className="relative overflow-hidden text-lg px-11 py-6 min-w-[180px] bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 hover:from-blue-700 hover:via-blue-600 hover:to-teal-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 group border-2 border-white/40"
              onClick={scrollToBooking}
              >
                <span className="relative z-10 flex items-center gap-2">
{t('hero.cta')}
                  <div className="w-1.5 h-1.5 bg-white rounded-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Button>
            </WaveRipple>
            <WaveRipple className="rounded-full">
              <Button 
              size="lg" 
              className="relative overflow-hidden text-lg px-10 py-6 min-w-[180px] bg-white/25 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/35 hover:border-white/60 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-xl hover:shadow-white/25 group"
              onClick={() => {
                const gallerySection = document.getElementById('gallery')
                gallerySection?.scrollIntoView({ behavior: 'smooth' })
              }}
              >
                <span className="relative z-10 flex items-center gap-2">
{t('hero.gallery')}
                  <div className="w-1.5 h-1.5 bg-white rounded-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Button>
            </WaveRipple>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <motion.div 
              className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 coastal-cursor"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl font-bold text-white mb-1">60m²</div>
              <div className="text-sm text-gray-200">{t('hero.features.area')}</div>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 coastal-cursor"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl font-bold text-yellow-300 mb-1"><span style={{color: '#ffd700'}}>⭐</span> 5.0</div>
              <div className="text-sm text-gray-200">{t('hero.features.rating')}</div>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 coastal-cursor"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl font-bold text-white mb-1">4min 🚶</div>
              <div className="text-sm text-gray-200">{t('hero.features.beach')}</div>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 coastal-cursor"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl font-bold text-blue-300 mb-1">100% 🌊</div>
              <div className="text-sm text-gray-200">{t('hero.features.seaview')}</div>
            </motion.div>
          </div>
          
          <TrustBadges />
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        onClick={() => {
          const amenitiesSection = document.getElementById('amenities')
          amenitiesSection?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <div className="animate-bounce">
          <ArrowDown size={32} />
        </div>
      </motion.div>
    </section>
  )
}