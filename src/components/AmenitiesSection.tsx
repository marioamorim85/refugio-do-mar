"use client"

import { motion } from "framer-motion"
import { 
  Home, 
  SquareGanttChart, 
  Car, 
  Waves, 
  Bath, 
  Mountain, 
  Wifi, 
  Snowflake,
  ChefHat 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

const getAmenities = (t: (key: string) => string) => [
  {
    icon: Home,
    title: t('amenities.items.private'),
    description: t('amenities.items.private_desc')
  },
  {
    icon: SquareGanttChart,
    title: t('amenities.items.size'),
    description: t('amenities.items.size_desc')
  },
  {
    icon: Car,
    title: t('amenities.items.parking'),
    description: t('amenities.items.parking_desc')
  },
  {
    icon: Waves,
    title: t('amenities.items.pool'),
    description: t('amenities.items.pool_desc')
  },
  {
    icon: Bath,
    title: t('amenities.items.bathroom'),
    description: t('amenities.items.bathroom_desc')
  },
  {
    icon: Mountain,
    title: t('amenities.items.balcony'),
    description: t('amenities.items.balcony_desc')
  },
  {
    icon: Wifi,
    title: t('amenities.items.wifi'),
    description: t('amenities.items.wifi_desc')
  },
  {
    icon: Snowflake,
    title: t('amenities.items.ac'),
    description: t('amenities.items.ac_desc')
  },
  {
    icon: ChefHat,
    title: t('amenities.items.kitchen'),
    description: t('amenities.items.kitchen_desc')
  }
]

export default function AmenitiesSection() {
  const { t } = useLanguage()
  const amenities = getAmenities(t)
  
  return (
    <section id="amenities" className="py-20 bg-gradient-to-br from-blue-50 via-white to-sand-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-ocean-200/30 to-transparent rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-coral-200/20 to-transparent rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-ocean-100 text-ocean-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-ocean-500 rounded-full"></div>
            {t('amenities.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-fix mb-6 font-playfair">
            {t('amenities.title')} <span style={{color: 'initial', WebkitTextFillColor: 'initial'}}>🏨</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('amenities.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-2xl hover:shadow-ocean-500/20 transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean-50/50 via-transparent to-coral-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-6 flex justify-center">
                    <motion.div 
                      className="p-4 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-2xl shadow-lg group-hover:shadow-ocean-500/40 transition-all duration-300"
                      whileHover={{ scale: 1.05, rotate: [0, -3, 3, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <amenity.icon className="w-7 h-7" style={{color: 'white'}} />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-ocean-700 transition-colors font-playfair">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {amenity.description}
                  </p>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}