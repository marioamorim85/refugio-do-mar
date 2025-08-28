"use client"

import React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

const getContactInfo = (t: (key: string) => string) => [
  {
    icon: Mail,
    title: t('contact.email.title'),
    content: "refugionomar2025@gmail.com",
    action: "mailto:refugionomar2025@gmail.com"
  },
  {
    icon: Phone,
    title: t('contact.whatsapp.title'), 
    content: "+41 76 583 0782",
    action: "https://wa.me/41765830782"
  },
  {
    icon: MapPin,
    title: t('contact.location.title'),
    content: t('contact.location.address'),
    action: null
  },
  {
    icon: Clock,
    title: t('contact.hours.title'),
    content: t('contact.hours.time'),
    action: null
  }
]

export default function ContactSection() {
  const { t } = useLanguage()
  const contactInfo = getContactInfo(t)
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-ocean-50/40 via-white to-coral-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-ocean-200/20 to-transparent rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-coral-200/25 to-transparent rounded-full blur-3xl transform translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-ocean-100 text-ocean-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-ocean-500 rounded-full animate-pulse"></div>
{t('contact.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-fix mb-6 font-playfair">
{t('contact.title')} <span style={{color: 'initial', WebkitTextFillColor: 'initial'}}>📞</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
{t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {contact.action ? (
                <a
                  href={contact.action}
                  target={contact.action.startsWith("http") ? "_blank" : undefined}
                  rel={contact.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full"
                >
                  <Card className="h-full hover:shadow-2xl hover:shadow-ocean-500/20 transition-all duration-500 border-0 bg-white/85 backdrop-blur-sm group relative overflow-hidden cursor-pointer">
                    <CardContent className="p-6 text-center relative z-10">
                      <div className="mb-4 flex justify-center">
                        <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <contact.icon className="w-6 h-6" style={{color: 'white'}} />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-ocean-700 transition-colors font-playfair mb-3">
                        {contact.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors font-medium">
                        {contact.content}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ) : (
                <Card className="h-full hover:shadow-xl hover:shadow-ocean-500/15 transition-all duration-500 border-0 bg-white/85 backdrop-blur-sm group relative overflow-hidden">
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <contact.icon className="w-6 h-6" style={{color: 'white'}} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-ocean-700 transition-colors font-playfair mb-3">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors font-medium">
                      {contact.content}
                    </p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}