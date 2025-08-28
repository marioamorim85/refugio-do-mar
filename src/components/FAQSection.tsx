"use client"

import { motion } from "framer-motion"
import { HelpCircle, CheckCircle, MessageCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/contexts/LanguageContext"

const getFAQs = (t: (key: string) => string) => [
  {
    question: t('faq.q1'),
    answer: t('faq.a1')
  },
  {
    question: t('faq.q2'),
    answer: t('faq.a2')
  },
  {
    question: t('faq.q3'),
    answer: t('faq.a3')
  },
  {
    question: t('faq.q4'),
    answer: t('faq.a4')
  },
  {
    question: t('faq.q5'),
    answer: t('faq.a5')
  },
  {
    question: t('faq.q6'),
    answer: t('faq.a6')
  },
  {
    question: t('faq.q7'),
    answer: t('faq.a7')
  },
  {
    question: t('faq.q8'),
    answer: t('faq.a8')
  },
  {
    question: t('faq.q9'),
    answer: t('faq.a9')
  },
  {
    question: t('faq.q10'),
    answer: t('faq.a10')
  },
  {
    question: t('faq.q11'),
    answer: t('faq.a11')
  },
  {
    question: t('faq.q12'),
    answer: t('faq.a12')
  }
]

export default function FAQSection() {
  const { t } = useLanguage()
  const faqs = getFAQs(t)
  
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-coral-50/40 via-white to-ocean-50/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-coral-200/25 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-ocean-200/20 to-transparent rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-coral-100 text-coral-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            {t('faq.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-fix mb-6 font-playfair pb-2">
            {t('faq.title')} <span style={{color: 'initial', WebkitTextFillColor: 'initial'}}>❓</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('faq.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-coral-400/15 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-ocean-400/15 to-transparent rounded-full blur-xl"></div>
            
            <Accordion type="single" collapsible className="w-full space-y-4 relative z-10">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-0 bg-white/60 backdrop-blur-sm rounded-2xl mb-4 overflow-hidden group hover:bg-white/80 hover:shadow-lg hover:shadow-ocean-500/10 transition-all duration-300">
                    <AccordionTrigger className="text-left hover:text-coral-700 transition-colors p-6 hover:no-underline group-hover:bg-white/40 font-semibold text-gray-800 [&[data-state=open]]:text-coral-700">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-coral-500 to-orange-500 rounded-full group-hover:animate-pulse"></div>
                        <span className="font-playfair">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed px-6 pb-6 pt-0">
                      <div className="flex items-start gap-3 bg-white/40 p-4 rounded-xl border border-white/30">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="font-medium">{faq.answer}</span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative z-10"
        >
          <div className="bg-gradient-to-br from-ocean-100/80 to-coral-100/80 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/30 to-transparent rounded-full blur-xl"></div>
            
            <div className="text-center relative z-10">
              <div className="inline-flex items-center gap-2 bg-ocean-200 text-ocean-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MessageCircle className="w-4 h-4" />
                {t('faq.contact.badge')}
              </div>
              <h3 className="text-2xl font-bold text-gradient-fix mb-4 font-playfair">
                {t('faq.contact.title')} <span style={{color: 'initial', WebkitTextFillColor: 'initial'}}>🤔</span>
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
                {t('faq.contact.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a 
                  href="mailto:refugionomar2025@gmail.com"
                  className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/30 hover:bg-white/80 hover:shadow-lg hover:shadow-ocean-500/20 transition-all duration-300 font-semibold text-ocean-700 hover:text-ocean-800 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:animate-pulse"></div>
                  refugionomar2025@gmail.com 📧
                </motion.a>
                <motion.a 
                  href="https://wa.me/41765830782"
                  className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/30 hover:bg-white/80 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 font-semibold text-green-700 hover:text-green-800 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
                  WhatsApp: +41 76 583 0782 💬
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}