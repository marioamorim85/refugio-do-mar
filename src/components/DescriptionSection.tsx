"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Home, Users, MapPin, Maximize2 } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function DescriptionSection() {
  const { t } = useLanguage()
  
  return (
    <section id="description" className="py-20 bg-gradient-to-br from-coral-50/30 via-white to-ocean-50/40 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-coral-200/20 to-transparent rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-ocean-200/25 to-transparent rounded-full blur-3xl transform translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-coral-100 text-coral-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
            {t('description.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-fix mb-6 font-playfair pb-2">
            {t('description.title')} <span style={{color: 'initial', WebkitTextFillColor: 'initial'}}>🏡</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mt-8">
            {t('description.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-coral-400/15 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-ocean-100 text-ocean-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-3 h-3" />
                {t('description.location_badge')}
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                {t('description.location_desc')} 🏖️
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t('description.details')}
              </p>
            
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 group hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:shadow-ocean-500/10"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-r from-coral-500 to-orange-500 rounded-xl shadow-md group-hover:shadow-coral-500/40 transition-all duration-300 mb-3 mx-auto w-fit">
                    <MapPin className="w-5 h-5" style={{color: 'white'}} />
                  </div>
                  <div className="text-2xl font-bold text-coral-600 mb-1">4 min</div>
                  <div className="text-sm text-gray-600 font-medium">{t('description.stats.beach')} 🏖️</div>
                </motion.div>
                <motion.div 
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 group hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:shadow-ocean-500/10"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-md group-hover:shadow-ocean-500/40 transition-all duration-300 mb-3 mx-auto w-fit">
                    <Home className="w-5 h-5" style={{color: 'white'}} />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">2</div>
                  <div className="text-sm text-gray-600 font-medium">{t('description.stats.bedrooms')} 🛏️</div>
                </motion.div>
                <motion.div 
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 group hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:shadow-ocean-500/10"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-md group-hover:shadow-emerald-500/40 transition-all duration-300 mb-3 mx-auto w-fit">
                    <Users className="w-5 h-5" style={{color: 'white'}} />
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-1">4</div>
                  <div className="text-sm text-gray-600 font-medium">{t('description.stats.guests')} 👥</div>
                </motion.div>
                <motion.div 
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 group hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:shadow-ocean-500/10"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-md group-hover:shadow-purple-500/40 transition-all duration-300 mb-3 mx-auto w-fit">
                    <Maximize2 className="w-5 h-5" style={{color: 'white'}} />
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">60m²</div>
                  <div className="text-sm text-gray-600 font-medium">{t('description.stats.area')} 🏠</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/sala1.avif"
                  alt="Sala de estar confortável"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={60}
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/quarto6.jpeg"
                  alt="Quarto com vista"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={60}
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                <Image
                  src="/images/varanda1.avif"
                  alt="Varanda com vista da cidade"
                  fill
                  className="object-cover object-center-bottom"
                  style={{ objectPosition: 'center 80%' }}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={60}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}