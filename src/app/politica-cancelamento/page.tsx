"use client"

import { motion } from "framer-motion"
import { Cookie, RotateCcw, Euro, Clock, Mail, ArrowLeft } from "lucide-react"
import Footer from "@/components/Footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import CoastalEffects from "@/components/CoastalEffects"
import Link from "next/link"
import { useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function PoliticaCancelamento() {
  const { t } = useLanguage()
  
  useEffect(() => {
    document.title = 'Política de Cancelamento | Refúgio no Mar'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Política de cancelamento do Refúgio no Mar. Conheça as condições e procedimentos para cancelamento e reembolso de reservas.')
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

  const cancellationTypes = [
    {
      icon: RotateCcw,
      titleKey: "cancellation.new.free.title",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-600/10 to-emerald-600/10",
      contentKeys: [
        "cancellation.new.free.content.1",
        "cancellation.new.free.content.2",
        "cancellation.new.free.content.3",
        "cancellation.new.free.content.4"
      ]
    },
    {
      icon: Euro,
      titleKey: "cancellation.new.partial.title",
      color: "from-orange-600 to-yellow-500",
      bgColor: "from-orange-600/10 to-yellow-500/10",
      contentKeys: [
        "cancellation.new.partial.content.1",
        "cancellation.new.partial.content.2",
        "cancellation.new.partial.content.3",
        "cancellation.new.partial.content.4"
      ]
    },
    {
      icon: Clock,
      titleKey: "cancellation.new.no_refund.title",
      color: "from-red-600 to-pink-600",
      bgColor: "from-red-600/10 to-pink-600/10",
      contentKeys: [
        "cancellation.new.no_refund.content.1",
        "cancellation.new.no_refund.content.2",
        "cancellation.new.no_refund.content.3",
        "cancellation.new.no_refund.content.4"
      ]
    }
  ]

  return (
    <>
      <CoastalEffects />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0 md:-mt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-teal-600/5 dark:from-blue-400/10 dark:via-transparent dark:to-teal-400/10" />
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100/30 dark:bg-blue-400/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-teal-100/20 dark:bg-teal-400/20 rounded-full blur-2xl" />
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
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {t('cancellation.new.back_button')}
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white text-gradient-fix pb-2">
              {t('cancellation.new.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('cancellation.new.subtitle')}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100 dark:border-blue-800"
            >
              <Clock className="w-4 h-4" />
              {t('cancellation.new.last_updated')}
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
              className="mb-16 p-8 rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-blue-100/50 dark:border-blue-800/50 shadow-lg"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('cancellation.new.introduction')}
              </p>
            </motion.div>
            {/* Cancellation Types */}
            {cancellationTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-12"
              >
                <div className={`p-8 rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-blue-100/50 dark:border-blue-800/50 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${type.color} p-3 shadow-lg`}>
                      <type.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-gradient-fix">
                      {t(type.titleKey)}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {type.contentKeys.map((contentKey, pIndex) => (
                      <p key={pIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {t(contentKey)}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Special Conditions */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div className="p-8 rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-blue-100/50 dark:border-blue-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 p-3 shadow-lg">
                    <Clock className="w-full h-full text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-gradient-fix mb-0">
                    {t('cancellation.new.special.title')}
                  </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 text-gray-900 dark:text-white"><RotateCcw className="w-5 h-5 text-blue-600 dark:text-blue-400" /> {t('cancellation.new.medical.title')}</h3>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                      <li>{t('cancellation.new.medical.description')}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 text-gray-900 dark:text-white"><Euro className="w-5 h-5 text-blue-600 dark:text-blue-400" /> {t('cancellation.new.travel.title')}</h3>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                      <li>{t('cancellation.new.travel.description')}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 text-gray-900 dark:text-white"><Cookie className="w-5 h-5 text-blue-600 dark:text-blue-400" /> {t('cancellation.new.weather.title')}</h3>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                      <li>{t('cancellation.new.weather.description')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Process and Refunds */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div className="p-8 rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-blue-100/50 dark:border-blue-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 p-3 shadow-lg">
                    <RotateCcw className="w-full h-full text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-gradient-fix mb-0">
                    {t('cancellation.new.process.title')}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 text-gray-900 dark:text-white"><Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" /> {t('cancellation.new.steps.title')}</h3>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300">
                      <li>{t('cancellation.new.steps.1')}</li>
                      <ul className="list-disc pl-6 mb-2">
                        <li>Email: refugionomar2025@gmail.com</li>
                        <li>WhatsApp: +41 76 583 0782</li>
                      </ul>
                      <li>{t('cancellation.new.steps.2')}</li>
                      <li>{t('cancellation.new.steps.3')}</li>
                      <li>{t('cancellation.new.steps.4')}</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 text-gray-900 dark:text-white"><Euro className="w-5 h-5 text-blue-600 dark:text-blue-400" /> {t('cancellation.new.refund_process.title')}</h3>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                      <li>{t('cancellation.new.refund_process.1')}</li>
                      <li>{t('cancellation.new.refund_process.2')}</li>
                      <li>{t('cancellation.new.refund_process.3')}</li>
                    </ul>
                    <div className="mt-6 p-4 bg-amber-50/50 dark:bg-amber-900/30 rounded-2xl border border-amber-200/50 dark:border-amber-700/50">
                      <p className="text-amber-800 dark:text-amber-200 text-sm">
                        <strong>Nota:</strong> {t('cancellation.new.refund_note')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Rescheduling */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div className="p-8 rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-blue-100/50 dark:border-blue-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 p-3 shadow-lg">
                    <RotateCcw className="w-full h-full text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-gradient-fix mb-0">
                    {t('cancellation.new.reschedule.title')}
                  </h2>
                </div>
                <div className="grid md:grid-cols-1 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 text-gray-900 dark:text-white"><Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" /> {t('cancellation.new.reschedule.how.title')}</h3>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                      <li>{t('cancellation.new.reschedule.1')}</li>
                      <li>{t('cancellation.new.reschedule.2')}</li>
                      <li>{t('cancellation.new.reschedule.3')}</li>
                      <li>{t('cancellation.new.reschedule.4')}</li>
                      <li>{t('cancellation.new.reschedule.5')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-teal-600/10 dark:from-blue-400/10 dark:via-blue-300/5 dark:to-teal-400/10 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 shadow-lg"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-gradient-fix">
                    {t('cancellation.new.contact.title')}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('cancellation.new.contact.description')}
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
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-6">
                  {t('cancellation.new.contact.note')}
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