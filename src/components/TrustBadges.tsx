"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"


export default function TrustBadges() {
  const { t } = useLanguage()
  
  const trustBadges = [
    {
      icon: Shield,
      title: t('trust.secure.title'),
      description: t('trust.secure.description'),
      color: "text-green-600",
      emoji: "🛡️",
      hoverMessage: t('trust.secure.hover')
    },
    {
      icon: Award,
      title: t('trust.stars.title'),
      description: t('trust.stars.description'),
      color: "text-yellow-600",
      emoji: "🏆",
      hoverMessage: t('trust.stars.hover')
    },
    {
      icon: Users,
      title: t('trust.guests.title'),
      description: t('trust.guests.description'),
      color: "text-blue-600",
      emoji: "😍",
      hoverMessage: t('trust.guests.hover')
    },
    {
      icon: Clock,
      title: t('trust.response.title'),
      description: t('trust.response.description'),
      color: "text-orange-600",
      emoji: "⚡",
      hoverMessage: t('trust.response.hover')
    }
  ]
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {trustBadges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
          className="flex flex-col items-center text-center p-4 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300 group cursor-pointer coastal-cursor relative"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          title={badge.hoverMessage}
        >
          <motion.div 
            className={`p-3 rounded-full bg-white/20 mb-2 ${badge.color} relative`}
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <badge.icon className="w-6 h-6" style={{color: 'white'}} />
            <div className="absolute -top-1 -right-1 text-lg group-hover:animate-bounce">
              {badge.emoji}
            </div>
          </motion.div>
          <div className="text-white text-sm font-semibold mb-1 group-hover:text-yellow-200 transition-colors">
            {badge.title}
          </div>
          <div className="text-gray-200 text-xs group-hover:text-gray-100 transition-colors">
            {badge.description}
          </div>
        </motion.div>
      ))}
    </div>
  )
}