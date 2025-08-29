"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Waves,
  Clock,
  Users,
  Languages,
  Shield,
  CalendarX
} from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  // Wave animation variants
  const waveVariants = {
    animate: {
      x: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Coastal Background with Glass-morphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-teal-900/95" />
      <div className="absolute inset-0 backdrop-blur-sm" />
      
      {/* Decorative Wave Patterns */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-10">
        <motion.div
          variants={waveVariants}
          animate="animate"
          className="absolute inset-0"
        >
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity="0.25" 
              fill="currentColor" 
              className="text-white"
            />
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity="0.5" 
              fill="currentColor" 
              className="text-white"
            />
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              fill="currentColor" 
              className="text-white"
            />
          </svg>
        </motion.div>
      </div>
      <div className="relative container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Logo with Animation */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 p-2.5 backdrop-blur-sm border border-white/20">
                    <motion.div
                      variants={waveVariants}
                      animate="animate"
                    >
                      <Waves className="w-full h-full text-white" />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-teal-400/20 blur-lg animate-pulse" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Refúgio no Mar
                  </h3>
                  <p className="text-blue-200/80 text-sm font-medium">{t('footer.brand.subtitle')}</p>
                </div>
              </div>

              <p className="text-blue-100/90 leading-relaxed text-lg">
                {t('footer.brand.description')}
              </p>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.a 
                  href="https://goo.gl/maps/your-location"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-coral-400 to-coral-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{t('footer.contact.location.title')}</p>
                    <p className="text-blue-200/80 text-sm">{t('footer.contact.location.address')}</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="mailto:refugionomar2025@gmail.com"
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{t('footer.contact.email.title')}</p>
                    <p className="text-blue-200/80 text-sm">refugionomar2025@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://wa.me/41765830782"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{t('footer.contact.whatsapp.title')}</p>
                    <p className="text-blue-200/80 text-sm">+41 76 583 0782</p>
                  </div>
                </motion.a>
              </div>

            </motion.div>

            {/* Navigation Links */}
            <motion.div variants={itemVariants}>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-coral-400 to-coral-500" />
                  {t('footer.navigation.title')}
                </h4>
                <ul className="space-y-3">
                  {[
                    { href: "/#amenities", labelKey: "footer.navigation.amenities" },
                    { href: "/#gallery", labelKey: "footer.navigation.gallery" },
                    { href: "/#booking", labelKey: "footer.navigation.booking" },
                    { href: "https://www.google.com/maps/place/Rua+da+Sardinha,+3,+8365-101+Armação+de+Pêra,+Portugal", labelKey: "footer.navigation.location", external: true },
                    { href: "https://www.turismodeportugal.pt/pt", labelKey: "footer.navigation.tourism", external: true }
                  ].map((link, index) => (
                    <li key={index}>
                      <motion.a 
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        whileHover={{ x: 4 }}
                        className="text-blue-100/80 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50 group-hover:bg-coral-400 transition-colors" />
                        {t(link.labelKey)}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Legal Information */}
            <motion.div variants={itemVariants}>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  {t('footer.legal.title')}
                </h4>
                
                {/* RNAL Badge */}
                <div className="mb-6 p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-400/30">
                  <div className="text-white font-semibold text-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    {t('footer.legal.rnal')}
                  </div>
                  <p className="text-blue-200/80 text-xs mt-1">{t('footer.legal.rnal_description')}</p>
                </div>
                
                <ul className="space-y-3">
                  {[
                    { href: "/politica-privacidade", labelKey: "footer.legal.privacy" },
                    { href: "/politica-cookies", labelKey: "footer.legal.cookies" },
                    { href: "/termos-condicoes", labelKey: "footer.legal.terms" },
                    { href: "/politica-cancelamento", labelKey: "footer.legal.cancellation" }
                  ].map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} legacyBehavior passHref>
                        <motion.a 
                          whileHover={{ x: 4 }}
                          className="text-blue-100/70 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group"
                        >
                          <div className="w-1 h-1 rounded-full bg-blue-400/50 group-hover:bg-coral-400 transition-colors" />
                          {t(link.labelKey)}
                        </motion.a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Divider with Wave Pattern */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
              <div className="relative flex justify-center">
                <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-900 px-6 py-2 rounded-full border border-white/10">
                  <motion.div
                    variants={waveVariants}
                    animate="animate"
                  >
                    <Waves className="w-6 h-6 text-blue-300" />
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-blue-200/80 text-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                © {currentYear} Refúgio no Mar. {t('footer.copyright')}.
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-blue-200/80 text-sm bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
              >
                <span>{t('footer.made_with')}</span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-4 h-4 fill-coral-500 text-coral-500" />
                </motion.div>
                <span>{t('footer.made_by')}</span>
                <motion.a 
                  href="https://portfolio.marioamorim.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="text-coral-400 hover:text-coral-300 transition-colors font-medium"
                >
                  Mário Amorim
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Cookie Notice */}
      <div className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        <div className="relative container mx-auto px-4 py-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-blue-200/60 text-xs max-w-4xl mx-auto leading-relaxed">
              {t('footer.cookie_notice')} <motion.a 
                href="/politica-cookies"
                whileHover={{ scale: 1.05 }}
                className="text-coral-400 hover:text-coral-300 transition-colors underline underline-offset-2"
              >{t('footer.cookie_policy')}</motion.a>.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}