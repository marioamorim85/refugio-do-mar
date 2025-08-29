"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Share2, UserCheck, Mail, ArrowLeft, Lock, Database, Clock, AlertCircle, Scale, Globe, Cookie, Baby, Bot, AlertTriangle, RefreshCw } from "lucide-react"
import Footer from "@/components/Footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import CoastalEffects from "@/components/CoastalEffects"
import Link from "next/link"
import { useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function PoliticaPrivacidade() {
  const { t } = useLanguage()
  useEffect(() => {
    document.title = 'Política de Privacidade | Refúgio no Mar'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Política de privacidade do Refúgio no Mar. Saiba como protegemos os seus dados pessoais em conformidade com o RGPD.')
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

  const sections = [
    {
      icon: Database,
      titleKey: "privacy.data_collection.title",
      contentKeys: [
        "privacy.data_collection.intro",
        "privacy.data_collection.personal",
        "privacy.data_collection.booking",
        "privacy.data_collection.payment",
        "privacy.data_collection.navigation",
        "privacy.data_collection.communications"
      ]
    },
    {
      icon: Eye,
      titleKey: "privacy.purpose.title",
      contentKeys: [
        "privacy.purpose.intro",
        "privacy.purpose.process_bookings",
        "privacy.purpose.communicate",
        "privacy.purpose.improve_services",
        "privacy.purpose.legal_obligations",
        "privacy.purpose.marketing",
        "privacy.purpose.analytics"
      ]
    },
    {
      icon: Share2,
      titleKey: "privacy.data_sharing.title",
      contentKeys: [
        "privacy.data_sharing.intro",
        "privacy.data_sharing.payment_partners",
        "privacy.data_sharing.tax_authorities",
        "privacy.data_sharing.service_providers",
        "privacy.data_sharing.booking_platforms",
        "privacy.data_sharing.no_selling",
        "privacy.data_sharing.partner_standards"
      ]
    },
    {
      icon: UserCheck,
      titleKey: "privacy.rights.title",
      contentKeys: [
        "privacy.rights.intro",
        "privacy.rights.access",
        "privacy.rights.rectify",
        "privacy.rights.erasure",
        "privacy.rights.restrict",
        "privacy.rights.portability",
        "privacy.rights.object",
        "privacy.rights.withdraw"
      ]
    },
    {
      icon: Lock,
      titleKey: "privacy.security.title",
      contentKeys: [
        "privacy.security.intro",
        "privacy.security.ssl",
        "privacy.security.servers",
        "privacy.security.backups",
        "privacy.security.training",
        "privacy.security.audits",
        "privacy.security.passwords"
      ]
    },
    {
      icon: Clock,
      titleKey: "privacy.retention.title",
      contentKeys: [
        "privacy.retention.intro",
        "privacy.retention.booking_data",
        "privacy.retention.marketing_data",
        "privacy.retention.navigation_data",
        "privacy.retention.communications",
        "privacy.retention.deletion"
      ]
    },
    {
      icon: Scale,
      titleKey: "privacy.legal_basis.title",
      contentKeys: [
        "privacy.legal_basis.contract",
        "privacy.legal_basis.legitimate",
        "privacy.legal_basis.consent",
        "privacy.legal_basis.legal",
        "privacy.legal_basis.vital"
      ]
    },
    {
      icon: Globe,
      titleKey: "privacy.international.title",
      contentKeys: [
        "privacy.international.policy",
        "privacy.international.analytics",
        "privacy.international.whatsapp",
        "privacy.international.safeguards",
        "privacy.international.rights"
      ]
    },
    {
      icon: Cookie,
      titleKey: "privacy.cookies.title",
      contentKeys: [
        "privacy.cookies.essential",
        "privacy.cookies.analytics",
        "privacy.cookies.marketing",
        "privacy.cookies.control",
        "privacy.cookies.duration"
      ]
    },
    {
      icon: Baby,
      titleKey: "privacy.children.title",
      contentKeys: [
        "privacy.children.policy",
        "privacy.children.parental",
        "privacy.children.removal",
        "privacy.children.contact"
      ]
    },
    {
      icon: Bot,
      titleKey: "privacy.automated.title",
      contentKeys: [
        "privacy.automated.none",
        "privacy.automated.fraud",
        "privacy.automated.human"
      ]
    },
    {
      icon: AlertTriangle,
      titleKey: "privacy.breach.title",
      contentKeys: [
        "privacy.breach.notification",
        "privacy.breach.authorities",
        "privacy.breach.users",
        "privacy.breach.measures",
        "privacy.breach.prevention"
      ]
    },
    {
      icon: RefreshCw,
      titleKey: "privacy.updates.title",
      contentKeys: [
        "privacy.updates.notification",
        "privacy.updates.methods",
        "privacy.updates.website",
        "privacy.updates.date",
        "privacy.updates.continue"
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
                {t('privacy.back_button')}
              </Link>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 p-4 shadow-xl"
              >
                <Shield className="w-full h-full text-white" />
              </motion.div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-fix pb-2">
              {t('privacy.title')}
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('privacy.subtitle')}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-600 bg-blue-50/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100"
            >
              <AlertCircle className="w-4 h-4" />
              {t('privacy.last_updated')}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
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
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('privacy.intro')}
              </p>
            </motion.div>

            {/* Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-12"
              >
                <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 p-3 shadow-lg">
                      <section.icon className="w-full h-full text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gradient-fix">
                      {t(section.titleKey)}
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {section.contentKeys.map((contentKey, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed">
                        {t(contentKey)}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-teal-600/10 backdrop-blur-sm border border-blue-200/50 shadow-lg"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gradient-fix">
                    {t('privacy.contact.title')}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t('privacy.contact.description')}
                </p>
                
                <p className="text-sm text-blue-600 mb-6 leading-relaxed">
                  {t('privacy.contact.dpo')}
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
                
                <div className="text-sm text-gray-600 mt-6 space-y-2">
                  <p>{t('privacy.contact.response_time')}</p>
                  <p className="text-red-600 font-medium">{t('privacy.contact.complaint')}</p>
                </div>
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