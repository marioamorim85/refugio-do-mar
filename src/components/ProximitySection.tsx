"use client"

import { motion } from "framer-motion"
import { MapPin, Utensils, Plane, Train, Navigation, Clock, Star, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"


export default function ProximitySection() {
  const { t } = useLanguage()
  
  const proximityData = [
    {
      icon: MapPin,
      title: t('proximity.beaches'),
      items: [
        { name: "Praia Armação de Pêra", distance: "300 m" },
        { name: "Praia do Vale do Olival", distance: "650 m" },
        { name: "Praia dos Beijinhos", distance: "1,1 km" },
        { name: "Praia dos Tremoços", distance: "1,3 km" },
        { name: "Praia Nossa Senhora da Rocha", distance: "2,5 km" }
      ]
    },
    {
      icon: Utensils,
      title: t('proximity.restaurants'),
      items: [
        { name: "Papa e Companhia", distance: "150 m" },
        { name: "Sapori da Giovanni", distance: "150 m" },
        { name: "Tasca 26 - Restaurante & Tapas Bar", distance: "1,6 km" }
      ]
    },
    {
      icon: MapPin,
      title: t('proximity.attractions'),
      items: [
        { name: "Zoomarine", distance: "7 km" },
        { name: "Slide & Splash", distance: "12 km" },
        { name: "Aquashow", distance: "40 km" }
      ]
    },
    {
      icon: Train,
      title: t('proximity.transport'),
      items: [
        { name: "Estação Alcantarilha", distance: "9 km" },
        { name: "Terminal Albufeira", distance: "14 km" }
      ]
    },
    {
      icon: Plane,
      title: t('proximity.airports'),
      items: [
        { name: "Portimão", distance: "23 km" },
        { name: "Faro", distance: "53 km" }
      ]
    }
  ]
  
  return (
    <section id="proximity" className="py-20 bg-gradient-to-b from-blue-50/50 via-white to-sand-50 relative overflow-hidden">
      {/* Decorative coastal elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-coral-300/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Navigation className="w-4 h-4" />
            {t('proximity.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-fix mb-6 font-playfair">
            {t('proximity.title')} <span style={{color: 'initial', WebkitTextFillColor: 'initial'}}>🏖️</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('proximity.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proximityData.map((category, index) => {
            const getGradient = (title: string) => {
              switch(title) {
                case 'Praias': return 'from-blue-500 to-cyan-500'
                case 'Restaurantes': return 'from-coral-500 to-orange-500'
                case 'Atrações': return 'from-purple-500 to-pink-500'
                case 'Transportes': return 'from-green-500 to-emerald-500'
                case 'Aeroportos': return 'from-gray-500 to-slate-500'
                default: return 'from-blue-500 to-cyan-500'
              }
            }
            
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:shadow-ocean-500/20 transition-all duration-300 overflow-hidden relative">
                {/* Decorative gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(category.title)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardHeader className="text-center relative z-10">
                  <div className="mb-4 flex justify-center">
                    <motion.div 
                      className={`p-4 bg-gradient-to-r ${getGradient(category.title)} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ rotate: [0, -3, 3, 0], scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <category.icon className="w-7 h-7" style={{color: 'white'}} />
                    </motion.div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 font-playfair">
                    {category.title}
                  </CardTitle>
                  
                  {/* Trust badge for beaches */}
                  {category.title === t('proximity.beaches') && (
                    <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mt-2">
                      <Star className="w-3 h-3 fill-current" />
                      {t('proximity.blue_flag')}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex} 
                        className="flex justify-between items-center p-3 bg-white/40 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/60 transition-all duration-300 group/item"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover/item:animate-pulse" />
                          <span className="text-gray-700 group-hover/item:text-gray-900 font-medium transition-colors">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-gray-500" />
                          <span className="text-blue-600 font-bold text-sm bg-blue-50 px-2 py-1 rounded-full whitespace-nowrap">
                            {item.distance}
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )})}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-coral-400/20 to-orange-400/20 rounded-full blur-xl" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Shield className="w-4 h-4" />
                  {t('proximity.location_badge')}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-playfair">
                  {t('proximity.location_address')} 📍
                </h3>
                <p className="text-gray-600">8365-101 Armação de Pêra, Portugal</p>
              </div>
              
              {/* Location highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-white/30">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <span className="font-medium text-gray-800">{t('proximity.location_highlights.beach')}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-white/30">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-medium text-gray-800">{t('proximity.location_highlights.center')}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-white/30">
                  <div className="w-3 h-3 bg-coral-500 rounded-full animate-pulse" />
                  <span className="font-medium text-gray-800">{t('proximity.location_highlights.seaview')}</span>
                </div>
              </div>
              
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1!2d-8.363409!3d37.101706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20da%20Sardinha%2C%203%2C%208365-101%20Arma%C3%A7%C3%A3o%20de%20P%C3%AAra%2C%20Portugal!5e0!3m2!1spt!2spt!4v1635123456789"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-110 saturate-110"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}