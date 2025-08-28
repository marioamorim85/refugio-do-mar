"use client"

import { motion } from "framer-motion"
import { Star, Heart, Award, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

const getTestimonials = (t: (key: string) => string) => [
  {
    name: t('testimonials.guest1.name'),
    location: t('testimonials.guest1.location'),
    rating: 5,
    comment: t('testimonials.guest1.comment'),
    date: t('testimonials.guest1.date')
  },
  {
    name: t('testimonials.guest2.name'),
    location: t('testimonials.guest2.location'),
    rating: 5,
    comment: t('testimonials.guest2.comment'),
    date: t('testimonials.guest2.date')
  },
  {
    name: t('testimonials.guest3.name'),
    location: t('testimonials.guest3.location'),
    rating: 5,
    comment: t('testimonials.guest3.comment'),
    date: t('testimonials.guest3.date')
  }
]

export default function TestimonialsSection() {
  const { t } = useLanguage()
  const testimonials = getTestimonials(t)
  
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-ocean-50/30 via-white to-coral-50/40 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br froo  m-ocean-200/15 to-transparent rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-coral-200/20 to-transparent rounded-full blur-3xl transform translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-coral-100 to-ocean-100 text-coral-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            {t('testimonials.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-fix mb-6 font-playfair">
            {t('testimonials.title')} <span style={{color: 'initial', WebkitTextFillColor: 'initial'}}>😍</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((testimonial, index) => {
            const getTestimonialGradient = (index: number) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-coral-500 to-orange-500', 
                'from-purple-500 to-pink-500'
              ]
              return gradients[index % gradients.length]
            }
            
            const getLocationEmoji = (location: string) => {
              // Use base location names for emoji mapping
              if (location.includes('Lisboa') || location.includes('Lisbon')) return '🏤'
              if (location.includes('Porto')) return '🌉'
              if (location.includes('Coimbra')) return '🏗️'
              return '🇺🇸'
            }

            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-2xl hover:shadow-ocean-500/20 transition-all duration-500 border-0 bg-white/85 backdrop-blur-sm group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${getTestimonialGradient(index)} opacity-0 group-hover:opacity-8 transition-opacity duration-500`}></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className={`flex p-2 bg-gradient-to-r ${getTestimonialGradient(index)} rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-white text-white" />
                        ))}
                      </motion.div>
                      <div className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                        <span className="text-xs font-medium text-gray-600">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-white/30 mb-6 group-hover:bg-white/60 transition-all duration-300">
                    <p className="text-gray-800 italic leading-relaxed font-medium relative">
                      <span className="text-4xl text-coral-300 absolute -top-2 -left-2 opacity-50">“</span>
                      {testimonial.comment}
                      <span className="text-4xl text-coral-300 opacity-50">”</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="font-bold text-gray-800 group-hover:text-ocean-700 transition-colors font-playfair">{testimonial.name}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{testimonial.location}</span>
                        <span className="text-lg">{getLocationEmoji(testimonial.location)}</span>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )})}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative z-10"
        >
          <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-coral-400/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-ocean-400/20 to-transparent rounded-full blur-xl"></div>
            
            <div className="text-center relative z-10">
              <div className="inline-flex items-center gap-2 bg-coral-100 text-coral-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                {t('testimonials.stats.badge')}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <motion.div 
                  className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 group hover:bg-white/80 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex mb-3 p-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-white text-white" />
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-yellow-600 mb-1">4.9/5</div>
                  <div className="text-sm text-gray-600 font-medium">{t('testimonials.stats.rating')}</div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 group hover:bg-white/80 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-3">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600 font-medium">{t('testimonials.stats.guests')}</div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 group hover:bg-white/80 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-3">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600 font-medium">{t('testimonials.stats.recommendations')}</div>
                </motion.div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-ocean-100/50 to-coral-100/50 backdrop-blur-sm rounded-2xl border border-white/30">
                <p className="text-gray-700 font-medium">
                  <span className="font-bold text-ocean-700">"{t('testimonials.quote')}"</span> 
                  - {t('testimonials.feedback')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}