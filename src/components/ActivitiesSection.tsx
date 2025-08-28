"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Waves, Camera, Anchor, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"


export default function ActivitiesSection() {
  const { t } = useLanguage()
  
  const activitiesData = [
    {
      icon: Waves,
      title: t('activities.water.title'),
      description: t('activities.water.description'),
      activities: [
        t('activities.water.1'),
        t('activities.water.2'),
        t('activities.water.3'),
        t('activities.water.4')
      ]
    },
    {
      icon: Zap,
      title: t('activities.extreme.title'),
      description: t('activities.extreme.description'),
      activities: [
        t('activities.extreme.1'),
        t('activities.extreme.2'),
        t('activities.extreme.3'),
        t('activities.extreme.4'),
        t('activities.extreme.5')
      ]
    },
    {
      icon: Camera,
      title: t('activities.parks.title'),
      description: t('activities.parks.description'),
      activities: [
        t('activities.parks.1'),
        t('activities.parks.2'),
        t('activities.parks.3'),
        t('activities.parks.4')
      ]
    },
    {
      icon: Anchor,
      title: t('activities.culture.title'),
      description: t('activities.culture.description'),
      activities: [
        t('activities.culture.1'),
        t('activities.culture.2'),
        t('activities.culture.3'),
        t('activities.culture.4')
      ]
    }
  ]
  
  return (
    <section id="activities" className="py-20 bg-gradient-to-br from-ocean-50/40 via-white to-coral-50/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-ocean-200/25 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-coral-200/20 to-transparent rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-ocean-100 to-coral-100 text-ocean-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Waves className="w-4 h-4" />
            {t('activities.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-fix mb-6 font-playfair">
            {t('activities.title')} <span style={{color: 'initial', WebkitTextFillColor: 'initial'}}>🏄‍♂️</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            {t('activities.description')}
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('activities.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative z-10">
          {activitiesData.map((category, index) => {
            const getActivityGradient = (title: string) => {
              if (title === t('activities.water.title')) return 'from-cyan-500 to-blue-500'
              if (title === t('activities.extreme.title')) return 'from-orange-500 to-red-500'
              if (title === t('activities.parks.title')) return 'from-purple-500 to-pink-500'
              if (title === t('activities.culture.title')) return 'from-green-500 to-emerald-500'
              return 'from-ocean-500 to-ocean-600'
            }

            const getActivityEmoji = (title: string) => {
              if (title === t('activities.water.title')) return '🌊'
              if (title === t('activities.extreme.title')) return '🏄‍♂️'
              if (title === t('activities.parks.title')) return '🎢'
              if (title === t('activities.culture.title')) return '🏛️'
              return '⭐'
            }

            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-2xl hover:shadow-ocean-500/20 transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${getActivityGradient(category.title)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className={`p-4 bg-gradient-to-br ${getActivityGradient(category.title)} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ scale: 1.05, rotate: [0, -3, 3, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <category.icon className="w-7 h-7" style={{color: 'white'}} />
                    </motion.div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-ocean-700 transition-colors font-playfair flex items-center gap-2">
                        {category.title} {getActivityEmoji(category.title)}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-4">
                    {category.activities.map((activity, actIndex) => (
                      <motion.li 
                        key={actIndex} 
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/60 transition-all duration-300 group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: actIndex * 0.05 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${getActivityGradient(category.title)} rounded-full mt-2 flex-shrink-0 group-hover/item:animate-pulse`} />
                        <span className="text-gray-700 group-hover/item:text-gray-900 leading-relaxed font-medium transition-colors">
                          {activity}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            </motion.div>
          )})}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-400/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-full blur-xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Zap className="w-3 h-3" />
                  {t('activities.moments.badge')}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gradient-fix mb-4 font-playfair">
                  {t('activities.moments.title')} <span style={{color: 'initial', WebkitTextFillColor: 'initial'}}>🚤</span>
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed" dangerouslySetInnerHTML={{
                  __html: t('activities.moments.description').replace('{distance}', `<strong class="text-orange-600">${t('activities.moments.distance')}</strong>`)
                }} />
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { name: t('activities.moments.sports.jetski'), emoji: "🏍️" },
                    { name: t('activities.moments.sports.wakeboard'), emoji: "🏄" },
                    { name: t('activities.moments.sports.sofa'), emoji: "🛋️" },
                    { name: t('activities.moments.sports.ski'), emoji: "🎿" },
                    { name: t('activities.moments.sports.biscuit'), emoji: "🍪" },
                    { name: t('activities.moments.sports.kayak'), emoji: "🛶" }
                  ].map((sport, index) => (
                    <motion.div 
                      key={sport.name}
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-white/60 transition-all duration-300 group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform">
                        {sport.emoji}
                      </span>
                      <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors">
                        {sport.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-orange-700 bg-orange-50 px-3 py-2 rounded-full">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  {t('activities.moments.booking')}
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/images/Jet-Ski-Algarve-Watersports-Moments-17B-1-1.webp"
                    alt="Desportos náuticos com Moments WaterSports - Jet Ski no Algarve"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-sm font-bold text-gray-800">{t('activities.moments.guarantee')}</div>
                      <div className="text-xs text-gray-600">{t('activities.moments.location')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}