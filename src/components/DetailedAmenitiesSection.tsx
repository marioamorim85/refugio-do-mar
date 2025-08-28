"use client"

import { motion } from "framer-motion"
import { 
  Waves, 
  Car, 
  Wifi, 
  Snowflake, 
  ChefHat, 
  Bed, 
  Users,
  Clock,
  Globe,
  Cigarette
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

const getDetailedAmenities = (t: (key: string) => string) => [
  {
    category: t('detailed.amenities.pool.category'),
    icon: Waves,
    items: [
      t('detailed.amenities.pool.seasonal'),
      t('detailed.amenities.pool.beach'),
      t('detailed.amenities.pool.seaview')
    ]
  },
  {
    category: t('detailed.amenities.parking.category'),
    icon: Car,
    items: [
      t('detailed.amenities.parking.free'),
      t('detailed.amenities.parking.elevator')
    ]
  },
  {
    category: t('detailed.amenities.internet.category'), 
    icon: Wifi,
    items: [
      t('detailed.amenities.internet.wifi'),
      t('detailed.amenities.internet.tv'),
      t('detailed.amenities.internet.cable')
    ]
  },
  {
    category: t('detailed.amenities.climate.category'),
    icon: Snowflake,
    items: [
      t('detailed.amenities.climate.ac'),
      t('detailed.amenities.climate.nonsmoking')
    ]
  },
  {
    category: t('detailed.amenities.kitchen.category'),
    icon: ChefHat,
    items: [
      t('detailed.amenities.kitchen.kitchenette'),
      t('detailed.amenities.kitchen.microwave'),
      t('detailed.amenities.kitchen.washing'), 
      t('detailed.amenities.kitchen.stove'),
      t('detailed.amenities.kitchen.fridge'),
      t('detailed.amenities.kitchen.kettle'),
      t('detailed.amenities.kitchen.coffee'),
      t('detailed.amenities.kitchen.toaster')
    ]
  },
  {
    category: t('detailed.amenities.comfort.category'),
    icon: Bed,
    items: [
      t('detailed.amenities.comfort.bedding'),
      t('detailed.amenities.comfort.towels'),
      t('detailed.amenities.comfort.bedrooms'),
      t('detailed.amenities.comfort.bathroom')
    ]
  }
]


export default function DetailedAmenitiesSection() {
  const { t } = useLanguage()
  const detailedAmenities = getDetailedAmenities(t)
  
  const propertyRules = [
    {
      icon: Clock,
      title: t('property.rules.house.title'),
      rules: [
        t('property.rules.house.checkin'),
        t('property.rules.house.checkout'),
        t('property.rules.house.guests')
      ]
    },
    {
      icon: Users,
      title: t('property.rules.guests.title'),
      rules: [
        t('property.rules.guests.children'),
        t('property.rules.guests.crib'),
        t('property.rules.guests.age'),
        t('property.rules.guests.quiet')
      ]
    },
    {
      icon: Globe,
      title: t('property.rules.languages.title'),
      rules: [
        t('property.rules.languages.pt'),
        t('property.rules.languages.en'),
        t('property.rules.languages.es'),
        t('property.rules.languages.fr'),
        t('property.rules.languages.de')
      ]
    },
    {
      icon: Cigarette,
      title: t('property.rules.restrictions.title'),
      rules: [
        t('property.rules.restrictions.smoking'),
        t('property.rules.restrictions.parties')
      ]
    }
  ]
  
  return (
    <section id="detailed-amenities" className="py-20 bg-gradient-to-br from-ocean-50/30 via-white to-sand-50/40 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-ocean-200/20 to-transparent rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-coral-200/25 to-transparent rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-ocean-100 text-ocean-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-ocean-500 rounded-full"></div>
            {t('detailed.amenities.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-fix mb-6 font-playfair">
            {t('detailed.amenities.title')} <span style={{color: 'initial', WebkitTextFillColor: 'initial'}}>✨</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('detailed.amenities.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {detailedAmenities.map((category, index) => {
            const getIconGradient = (categoryName: string) => {
              switch(categoryName) {
                case 'Piscina e Lazer': return 'from-cyan-500 to-blue-500'
                case 'Estacionamento e Transporte': return 'from-green-500 to-emerald-500'
                case 'Internet e Entretenimento': return 'from-purple-500 to-indigo-500'
                case 'Climatização': return 'from-blue-400 to-cyan-400'
                case 'Cozinha e Equipamentos': return 'from-orange-500 to-red-500'
                case 'Conforto e Comodidades': return 'from-pink-500 to-rose-500'
                default: return 'from-ocean-500 to-ocean-600'
              }
            }

            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-2xl hover:shadow-ocean-500/20 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm group overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${getIconGradient(category.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardHeader className="text-center relative z-10">
                  <div className="mb-4 flex justify-center">
                    <motion.div 
                      className={`p-4 bg-gradient-to-br ${getIconGradient(category.category)} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <category.icon className="w-7 h-7" style={{color: 'white'}} />
                    </motion.div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-ocean-700 transition-colors font-playfair">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex} 
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/60 transition-all duration-200 group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${getIconGradient(category.category)} rounded-full flex-shrink-0 group-hover/item:animate-pulse`} />
                        <span className="text-gray-700 group-hover/item:text-gray-900 font-medium transition-colors">
                          {item}
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
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 relative z-10"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-coral-100 text-coral-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
              {t('property.rules.badge')}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gradient-fix font-playfair">
              {t('property.rules.title')} <span style={{color: 'initial', WebkitTextFillColor: 'initial'}}>📋</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyRules.map((rule, index) => {
              const getIconColor = (title: string) => {
                if (title === t('property.rules.house.title')) return 'from-blue-500 to-cyan-500'
                if (title === t('property.rules.guests.title')) return 'from-green-500 to-emerald-500'
                if (title === t('property.rules.languages.title')) return 'from-purple-500 to-indigo-500'
                if (title === t('property.rules.restrictions.title')) return 'from-red-500 to-pink-500'
                return 'from-gray-500 to-slate-500'
              }

              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-xl hover:shadow-coral-500/20 transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${getIconColor(rule.title)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <CardHeader className="text-center pb-4 relative z-10">
                    <div className="mb-3 flex justify-center">
                      <motion.div 
                        className={`p-3 bg-gradient-to-br ${getIconColor(rule.title)} rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <rule.icon className="w-5 h-5" style={{color: 'white'}} />
                      </motion.div>
                    </div>
                    <CardTitle className="text-base font-bold text-gray-800 group-hover:text-coral-700 transition-colors font-playfair">
                      {rule.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-2">
                      {rule.rules.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex} 
                          className="text-sm text-gray-600 text-center p-1 rounded hover:bg-white/50 transition-colors"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )})}
          </div>
        </motion.div>
      </div>
    </section>
  )
}