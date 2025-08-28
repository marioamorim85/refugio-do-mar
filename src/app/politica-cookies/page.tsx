"use client"

import { motion } from "framer-motion"
import { Cookie, Settings, BarChart3, Cog, Users, Clock, Shield, Mail, ArrowLeft, Globe, Monitor } from "lucide-react"
import Footer from "@/components/Footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import CoastalEffects from "@/components/CoastalEffects"
import Link from "next/link"
import { useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function PoliticaCookies() {
  const { t } = useLanguage()
  
  useEffect(() => {
    document.title = 'Política de Cookies | Refúgio no Mar'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Política de cookies do Refúgio no Mar. Saiba como utilizamos cookies para melhorar a sua experiência no nosso website.')
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const cookieTypes = [
    {
      icon: Shield,
      titleKey: "cookies.essential.title",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-600/10 to-emerald-600/10",
      contentKeys: [
        "cookies.essential.content.1",
        "cookies.essential.content.2",
        "cookies.essential.content.3",
        "cookies.essential.content.4",
        "cookies.essential.content.5",
        "cookies.essential.content.6"
      ]
    },
    {
      icon: BarChart3,
      titleKey: "cookies.analytics.title",
      color: "from-blue-600 to-teal-600",
      bgColor: "from-blue-600/10 to-teal-600/10",
      contentKeys: [
        "cookies.analytics.content.1",
        "cookies.analytics.content.2",
        "cookies.analytics.content.3",
        "cookies.analytics.content.4",
        "cookies.analytics.content.5",
        "cookies.analytics.content.6",
        "cookies.analytics.content.7"
      ]
    },
    {
      icon: Cog,
      titleKey: "cookies.functional.title",
      color: "from-purple-600 to-indigo-600",
      bgColor: "from-purple-600/10 to-indigo-600/10",
      contentKeys: [
        "cookies.functional.content.1",
        "cookies.functional.content.2",
        "cookies.functional.content.3",
        "cookies.functional.content.4",
        "cookies.functional.content.5",
        "cookies.functional.content.6",
        "cookies.functional.content.7"
      ]
    },
    {
      icon: Users,
      titleKey: "cookies.thirdparty.title",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/10 to-red-600/10",
      contentKeys: [
        "cookies.thirdparty.content.1",
        "cookies.thirdparty.content.2",
        "cookies.thirdparty.content.3",
        "cookies.thirdparty.content.4",
        "cookies.thirdparty.content.5",
        "cookies.thirdparty.content.6",
        "cookies.thirdparty.content.7"
      ]
    }
  ]

  return (
    <>
      <CoastalEffects />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0 md:-mt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-teal-600/5" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100/30 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-teal-100/20 rounded-full blur-2xl" />
        
        <div className="relative container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {t('cookies.back_button')}
              </Link>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 p-4 shadow-xl"
              >
                <Cookie className="w-full h-full text-white" />
              </motion.div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-fix">
              {t('cookies.title')}
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('cookies.subtitle')}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-600 bg-blue-50/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100"
            >
              <Clock className="w-4 h-4" />
              {t('cookies.last_updated')}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What are Cookies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            {/* Introduction */}
            <motion.div
              variants={itemVariants}
              className="mb-16 p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-blue-100/50 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 p-3 shadow-lg">
                  <Globe className="w-full h-full text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gradient-fix">
                  {t('cookies.intro.title')}
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t('cookies.intro.paragraph1')}
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                {t('cookies.intro.paragraph2')}
              </p>
            </motion.div>

            {/* Cookie Types */}
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-12"
              >
                <div className={`p-8 rounded-3xl bg-gradient-to-r ${type.bgColor} backdrop-blur-sm border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${type.color} p-3 shadow-lg`}>
                      <type.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gradient-fix">
                      {t(type.titleKey)}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {type.contentKeys.map((contentKey, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed">
                        {t(contentKey)}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Cookie Management */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-gray-600 to-slate-600 p-3 shadow-lg">
                    <Settings className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient-fix">
                    {t('cookies.management.title')}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-blue-600" />
                      {t('cookies.management.browser.title')}
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p>{t('cookies.management.browser.1')}</p>
                      <p>{t('cookies.management.browser.2')}</p>
                      <p>{t('cookies.management.browser.3')}</p>
                      <p>{t('cookies.management.browser.4')}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
{t('cookies.management.advanced.title')}
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p>{t('cookies.management.advanced.1')}</p>
                      <p>{t('cookies.management.advanced.2')}</p>
                      <p>{t('cookies.management.advanced.3')}</p>
                      <p>{t('cookies.management.advanced.4')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-amber-50/50 rounded-2xl border border-amber-200/50">
                  <p className="text-amber-800 text-sm">
                    <strong>Nota:</strong> {t('cookies.management.note')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Duration and Legal Basis */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-800">{t('cookies.duration.title')}</h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Sessão:</strong> {t('cookies.duration.session')}</p>
                      <p><strong>Essenciais:</strong> {t('cookies.duration.essential')}</p>
                      <p><strong>Análise:</strong> {t('cookies.duration.analytics')}</p>
                      <p><strong>Funcionais:</strong> {t('cookies.duration.functional')}</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold text-gray-800">{t('cookies.legal.title')}</h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Essenciais:</strong> {t('cookies.legal.essential')}</p>
                      <p><strong>Análise:</strong> {t('cookies.legal.analytics')}</p>
                      <p><strong>Funcionais:</strong> {t('cookies.legal.functional')}</p>
                      <p><strong>Terceiros:</strong> {t('cookies.legal.thirdparty')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-teal-600/10 backdrop-blur-sm border border-blue-200/50 shadow-lg"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gradient-fix">
{t('cookies.contact.title')}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
{t('cookies.contact.description')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="mailto:refugionomar2025@gmail.com"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    refugionomar2025@gmail.com
                  </motion.a>
                  
                  <motion.a
                    href="https://wa.me/41765830782"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    📱
                    +41 76 583 0782
                  </motion.a>
                </div>
                
                <p className="text-sm text-gray-600 mt-6">
{t('cookies.contact.note')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </>
  )
}