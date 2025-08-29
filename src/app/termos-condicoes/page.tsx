"use client"

import { motion } from "framer-motion"
import { FileText, Calendar, Clock, Home, Shield, Users, AlertTriangle, Gavel, Mail, ArrowLeft, CreditCard, MapPin, Zap, Copyright, Edit, Scale, Phone, Database, ShieldCheck } from "lucide-react"
import Footer from "@/components/Footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import CoastalEffects from "@/components/CoastalEffects"
import Link from "next/link"
import { useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function TermosCondicoes() {
  const { t } = useLanguage()
  useEffect(() => {
    document.title = 'Termos e Condições | Refúgio no Mar'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Termos e condições do Refúgio no Mar. Conheça as nossas políticas de reserva, cancelamento e regras da propriedade.')
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
    icon: FileText,
    titleKey: "terms.general.title",
    contentKeys: [
      "terms.general.content.1",
      "terms.general.content.2",
      "terms.general.content.3",
      "terms.general.content.4",
    ],
  },
  {
    icon: Calendar,
    titleKey: "terms.booking.title",
    contentKeys: [
      "terms.booking.content.1",
      "terms.booking.content.2",
      "terms.booking.content.3",
      "terms.booking.content.4",
      "terms.booking.content.5", // \u200B
      "terms.booking.content.6",
      "terms.booking.content.7",
      "terms.booking.content.8",
      "terms.booking.content.9",
      "terms.booking.content.10",
    ],
  },
  {
    icon: Clock,
    titleKey: "terms.checkin.title",
    contentKeys: [
      "terms.checkin.content.1",
      "terms.checkin.content.2",
      "terms.checkin.content.3",
      "terms.checkin.content.4",
      "terms.checkin.content.5",
      "terms.checkin.content.6", // \u200B
      "terms.checkin.content.7",
      "terms.checkin.content.8",
      "terms.checkin.content.9",
      "terms.checkin.content.10",
      "terms.checkin.content.11",
    ],
  },
  {
    icon: Home,
    titleKey: "terms.property.title",
    contentKeys: [
      "terms.property.content.1",
      "terms.property.content.2",
      "terms.property.content.3",
      "terms.property.content.4",
      "terms.property.content.5",
      "terms.property.content.6", // \u200B
      "terms.property.content.7",
      "terms.property.content.8",
      "terms.property.content.9",
      "terms.property.content.10",
      "terms.property.content.11",
    ],
  },
  {
    icon: Users,
    titleKey: "terms.responsibilities.title",
    contentKeys: [
      "terms.responsibilities.content.1",
      "terms.responsibilities.content.2",
      "terms.responsibilities.content.3",
      "terms.responsibilities.content.4",
      "terms.responsibilities.content.5",
      "terms.responsibilities.content.6",
      "terms.responsibilities.content.7",
    ],
  },
  {
    icon: Shield,
    titleKey: "terms.cancellation.title",
    contentKeys: [
      "terms.cancellation.content.1",
      "terms.cancellation.content.2",
      "terms.cancellation.content.3",
      "terms.cancellation.content.4",
      "terms.cancellation.content.5",
      "terms.cancellation.content.6", // \u200B
      "terms.cancellation.content.7",
      "terms.cancellation.content.8",
      "terms.cancellation.content.9",
      "terms.cancellation.content.10",
    ],
  },
  {
    icon: AlertTriangle,
    titleKey: "terms.liability.title",
    contentKeys: [
      "terms.liability.content.1",
      "terms.liability.content.2",
      "terms.liability.content.3",
      "terms.liability.content.4",
      "terms.liability.content.5",
      "terms.liability.content.6",
      "terms.liability.content.7", // \u200B
      "terms.liability.content.8",
      "terms.liability.content.9",
      "terms.liability.content.10",
    ],
  },
  {
    icon: Gavel,
    titleKey: "terms.law.title",
    contentKeys: [
      "terms.law.content.1",
      "terms.law.content.2",
      "terms.law.content.3",
      "terms.law.content.4",
      "terms.law.content.5", // \u200B
      "terms.law.content.6",
      "terms.law.content.7",
      "terms.law.content.8",
      "terms.law.content.9",
    ],
  },
  {
    icon: Zap,
    titleKey: "terms.force_majeure.title",
    contentKeys: [
      "terms.force_majeure.intro",
      "terms.force_majeure.natural",
      "terms.force_majeure.pandemic",
      "terms.force_majeure.government",
      "terms.force_majeure.infrastructure",
      "terms.force_majeure.remedy",
    ],
  },
  {
    icon: Copyright,
    titleKey: "terms.intellectual.title",
    contentKeys: [
      "terms.intellectual.ownership",
      "terms.intellectual.images",
      "terms.intellectual.trademark",
      "terms.intellectual.guest_content",
    ],
  },
  {
    icon: Edit,
    titleKey: "terms.modifications.title",
    contentKeys: [
      "terms.modifications.intro",
      "terms.modifications.notification",
      "terms.modifications.effective",
      "terms.modifications.disagreement",
      "terms.modifications.website",
    ],
  },
  {
    icon: Scale,
    titleKey: "terms.severability.title",
    contentKeys: [
      "terms.severability.invalid",
      "terms.severability.replacement",
      "terms.severability.interpretation",
    ],
  },
  {
    icon: Database,
    titleKey: "terms.data_protection.title",
    contentKeys: [
      "terms.data_protection.content.1",
      "terms.data_protection.content.2",
      "terms.data_protection.content.3",
      "terms.data_protection.content.4",
    ],
  },
  {
    icon: ShieldCheck,
    titleKey: "terms.consumer.title",
    contentKeys: [
      "terms.consumer.portuguese_law",
      "terms.consumer.complaints",
      "terms.consumer.authorities",
      "terms.consumer.mediation",
      "terms.consumer.portal",
      "terms.consumer.protection",
    ],
  },
  {
    icon: Phone,
    titleKey: "terms.emergency.title",
    contentKeys: [
      "terms.emergency.contact",
      "terms.emergency.services",
      "terms.emergency.property",
      "terms.emergency.medical",
      "terms.emergency.location",
    ],
  },
];


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
                className="inline-flex items-center gap-4 text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
{t('terms.back_button')}
              </Link>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 p-4 shadow-xl"
              >
                <FileText className="w-full h-full text-white" />
              </motion.div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-fix pb-2">
              {t('terms.title')}
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('terms.subtitle')}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center justify-center gap-4 text-sm"
            >
              <div className="flex items-center gap-2 text-blue-600 bg-blue-50/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100">
                <MapPin className="w-4 h-4" />
                {t('terms.rnal')}
              </div>
              <div className="flex items-center gap-2 text-teal-600 bg-teal-50/50 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-100">
                <Clock className="w-4 h-4" />
                {t('terms.last_updated')}
              </div>
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
                {t('terms.intro')}
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
                    {t('terms.contact.title')}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t('terms.contact.description')}
                </p>
                
                <div className="text-sm text-blue-600 mb-6 space-y-1">
                  <p>{t('terms.contact.booking')}</p>
                  <p>{t('terms.contact.whatsapp')}</p>
                </div>
                
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
                  <p>{t('terms.contact.note')}</p>
                  <p className="font-medium">{t('terms.contact.hours')}</p>
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