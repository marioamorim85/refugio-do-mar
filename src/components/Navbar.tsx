"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Waves, Globe, Languages } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { usePathname, useRouter } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    // Fechar menu de idiomas ao clicar fora
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isLanguageMenuOpen && !target.closest('.language-selector')) {
        setIsLanguageMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isLanguageMenuOpen])

  useEffect(() => {
    // Bloquear/desbloquear scroll quando menu mobile está aberto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup ao desmontar componente
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleSectionChange = () => {
      const sections = ['amenities', 'description', 'gallery', 'proximity', 'activities', 'detailed-amenities', 'testimonials', 'faq', 'contact']
      
      // Se estamos no topo da página (antes das secções), não há secção ativa
      if (window.scrollY < 300) {
        setActiveSection('')
        return
      }

      let foundActiveSection = false
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            foundActiveSection = true
            break
          }
        }
      }
      
      // Se não encontrou nenhuma secção ativa, limpa o estado
      if (!foundActiveSection) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleSectionChange)
    handleScroll()
    handleSectionChange()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleSectionChange)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, redirect to home with hash
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      setIsMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId.replace('/#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-gradient-to-r from-white/95 via-white/90 to-blue-50/95 backdrop-blur-xl border-b border-blue-100/50 shadow-lg shadow-blue-500/5' 
          : 'bg-gradient-to-r from-white/80 via-white/75 to-blue-50/80 backdrop-blur-lg border-b border-white/20'
      }`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-lg md:text-xl lg:text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-sky-400 to-teal-300 bg-clip-text tracking-tight hover:from-blue-600 hover:via-sky-500 hover:to-teal-400 transition-all duration-300 transform hover:scale-105"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <span className="inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-teal-300">
                <Waves className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-white transition-all duration-300 group-hover:rotate-12" />
              </span>
            </div>
            <span className="relative font-bold whitespace-nowrap text-gradient-fix">
              Refúgio no Mar
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-sky-400 to-teal-300 group-hover:w-full transition-all duration-300 ease-out"></div>
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-2 xl:gap-3 items-center font-medium">
            <li><button onClick={() => scrollToSection('amenities')} className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-blue-50/80 group ${
              activeSection === 'amenities' 
                ? 'text-blue-700 bg-blue-50/60 shadow-sm' 
                : 'text-gray-700 hover:text-blue-700'
            }`}>
              <span className="relative z-10">{t('nav.amenities')}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button></li>
            <li><button onClick={() => scrollToSection('description')} className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-blue-50/80 group ${
              activeSection === 'description' 
                ? 'text-blue-700 bg-blue-50/60 shadow-sm' 
                : 'text-gray-700 hover:text-blue-700'
            }`}>
              <span className="relative z-10">{t('nav.description')}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button></li>
            <li><button onClick={() => scrollToSection('gallery')} className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-blue-50/80 group ${
              activeSection === 'gallery' 
                ? 'text-blue-700 bg-blue-50/60 shadow-sm' 
                : 'text-gray-700 hover:text-blue-700'
            }`}>
              <span className="relative z-10">{t('nav.gallery')}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button></li>
            <li><button onClick={() => scrollToSection('proximity')} className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-blue-50/80 group ${
              activeSection === 'proximity' 
                ? 'text-blue-700 bg-blue-50/60 shadow-sm' 
                : 'text-gray-700 hover:text-blue-700'
            }`}>
              <span className="relative z-10">{t('nav.location')}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button></li>
            <li><button onClick={() => scrollToSection('activities')} className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-blue-50/80 group ${
              activeSection === 'activities' 
                ? 'text-blue-700 bg-blue-50/60 shadow-sm' 
                : 'text-gray-700 hover:text-blue-700'
            }`}>
              <span className="relative z-10">{t('nav.activities')}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button></li>
            <li><button onClick={() => scrollToSection('detailed-amenities')} className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-blue-50/80 group ${
              activeSection === 'detailed-amenities' 
                ? 'text-blue-700 bg-blue-50/60 shadow-sm' 
                : 'text-gray-700 hover:text-blue-700'
            }`}>
              <span className="relative z-10">Detalhes</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button></li>
            <li><button onClick={() => scrollToSection('testimonials')} className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-blue-50/80 group ${
              activeSection === 'testimonials' 
                ? 'text-blue-700 bg-blue-50/60 shadow-sm' 
                : 'text-gray-700 hover:text-blue-700'
            }`}>
              <span className="relative z-10">{t('nav.testimonials')}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button></li>
            <li><button onClick={() => scrollToSection('faq')} className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-blue-50/80 group ${
              activeSection === 'faq' 
                ? 'text-blue-700 bg-blue-50/60 shadow-sm' 
                : 'text-gray-700 hover:text-blue-700'
            }`}>
              <span className="relative z-10">FAQ</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button></li>
            <li><button onClick={() => scrollToSection('contact')} className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-blue-50/80 group ${
              activeSection === 'contact' 
                ? 'text-blue-700 bg-blue-50/60 shadow-sm' 
                : 'text-gray-700 hover:text-blue-700'
            }`}>
              <span className="relative z-10">{t('nav.contact')}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button></li>
          </ul>
          
          {/* Language Selector + Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Language Selector */}
            <div className="hidden lg:block relative language-selector">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="relative p-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-blue-100/50 hover:bg-blue-50/70 hover:border-blue-200/50 transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md group"
                aria-label={t('nav.language')}
              >
                <Languages size={16} className="text-gray-700 group-hover:text-blue-700 transition-colors" />
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-blue-100/50 py-2 z-50">
                  <button
                    onClick={() => { setLanguage('pt'); setIsLanguageMenuOpen(false) }}
                    className={`w-full px-4 py-2 text-left hover:bg-blue-50/50 transition-colors flex items-center gap-3 ${
                      language === 'pt' ? 'text-blue-700 bg-blue-50/30' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">🇵🇹</span> Português
                  </button>
                  <button
                    onClick={() => { setLanguage('en'); setIsLanguageMenuOpen(false) }}
                    className={`w-full px-4 py-2 text-left hover:bg-blue-50/50 transition-colors flex items-center gap-3 ${
                      language === 'en' ? 'text-blue-700 bg-blue-50/30' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">🇬🇧</span> English
                  </button>
                  <button
                    onClick={() => { setLanguage('es'); setIsLanguageMenuOpen(false) }}
                    className={`w-full px-4 py-2 text-left hover:bg-blue-50/50 transition-colors flex items-center gap-3 ${
                      language === 'es' ? 'text-blue-700 bg-blue-50/30' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">🇪🇸</span> Español
                  </button>
                  <button
                    onClick={() => { setLanguage('fr'); setIsLanguageMenuOpen(false) }}
                    className={`w-full px-4 py-2 text-left hover:bg-blue-50/50 transition-colors flex items-center gap-3 ${
                      language === 'fr' ? 'text-blue-700 bg-blue-50/30' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">🇫🇷</span> Français
                  </button>
                  <button
                    onClick={() => { setLanguage('de'); setIsLanguageMenuOpen(false) }}
                    className={`w-full px-4 py-2 text-left hover:bg-blue-50/50 transition-colors flex items-center gap-3 ${
                      language === 'de' ? 'text-blue-700 bg-blue-50/30' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">🇩🇪</span> Deutsch
                  </button>
                </div>
              )}
            </div>
            <Button 
              className="hidden lg:block relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 hover:from-blue-700 hover:via-blue-600 hover:to-teal-600 text-white px-4 lg:px-6 py-2 lg:py-2.5 text-sm font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 group"
              onClick={() => scrollToSection('booking')}
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('nav.booking')}
                <div className="w-1.5 h-1.5 bg-white rounded-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative p-3 rounded-full bg-white/60 backdrop-blur-sm border border-blue-100/50 hover:bg-blue-50/70 hover:border-blue-200/50 transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md group"
              aria-label="Menu"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isMenuOpen ? 
                <X size={20} className="relative z-10 text-gray-700 group-hover:text-blue-700 transition-colors transform group-hover:rotate-90 duration-300" /> : 
                <Menu size={20} className="relative z-10 text-gray-700 group-hover:text-blue-700 transition-colors" />
              }
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-16 left-0 w-full transition-all duration-500 ease-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} style={{ height: 'calc(100vh - 4rem)' }}>
          <div className="h-full border-t border-blue-100/50 bg-gradient-to-b from-white/95 via-white/90 to-blue-50/95 backdrop-blur-xl overflow-y-auto">
            <div className="container mx-auto py-6 px-4">
              <ul className="space-y-1">
                <li><button onClick={() => scrollToSection('amenities')} className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeSection === 'amenities' 
                    ? 'bg-blue-50/80 text-blue-700 shadow-sm border border-blue-100/50' 
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/60'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-medium">{t('nav.amenities')}</span>
                </button></li>
                <li><button onClick={() => scrollToSection('description')} className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeSection === 'description' 
                    ? 'bg-blue-50/80 text-blue-700 shadow-sm border border-blue-100/50' 
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/60'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-medium">Descrição</span>
                </button></li>
                <li><button onClick={() => scrollToSection('gallery')} className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeSection === 'gallery' 
                    ? 'bg-blue-50/80 text-blue-700 shadow-sm border border-blue-100/50' 
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/60'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-medium">{t('nav.gallery')}</span>
                </button></li>
                <li><button onClick={() => scrollToSection('proximity')} className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeSection === 'proximity' 
                    ? 'bg-blue-50/80 text-blue-700 shadow-sm border border-blue-100/50' 
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/60'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-medium">{t('nav.location')}</span>
                </button></li>
                <li><button onClick={() => scrollToSection('activities')} className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeSection === 'activities' 
                    ? 'bg-blue-50/80 text-blue-700 shadow-sm border border-blue-100/50' 
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/60'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-medium">{t('nav.activities')}</span>
                </button></li>
                <li><button onClick={() => scrollToSection('detailed-amenities')} className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeSection === 'detailed-amenities' 
                    ? 'bg-blue-50/80 text-blue-700 shadow-sm border border-blue-100/50' 
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/60'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-medium">Detalhes</span>
                </button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeSection === 'testimonials' 
                    ? 'bg-blue-50/80 text-blue-700 shadow-sm border border-blue-100/50' 
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/60'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-medium">{t('nav.testimonials')}</span>
                </button></li>
                <li><button onClick={() => scrollToSection('faq')} className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeSection === 'faq' 
                    ? 'bg-blue-50/80 text-blue-700 shadow-sm border border-blue-100/50' 
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/60'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-medium">FAQ</span>
                </button></li>
                <li><button onClick={() => scrollToSection('contact')} className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeSection === 'contact' 
                    ? 'bg-blue-50/80 text-blue-700 shadow-sm border border-blue-100/50' 
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/60'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-medium">{t('nav.contact')}</span>
                </button></li>
              </ul>
              
              {/* Mobile Language Selector */}
              <div className="mt-6 mb-6">
                <h3 className="text-sm font-medium text-gray-600 mb-3">{t('nav.language')}</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => { setLanguage('pt'); setIsMenuOpen(false) }}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                      language === 'pt' ? 'bg-blue-50/80 text-blue-700 border border-blue-100/50' : 'bg-white/60 text-gray-700 hover:bg-blue-50/60 hover:text-blue-700'
                    }`}
                  >
                    <span className="text-lg">🇵🇹</span> Português
                  </button>
                  <button
                    onClick={() => { setLanguage('en'); setIsMenuOpen(false) }}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                      language === 'en' ? 'bg-blue-50/80 text-blue-700 border border-blue-100/50' : 'bg-white/60 text-gray-700 hover:bg-blue-50/60 hover:text-blue-700'
                    }`}
                  >
                    <span className="text-lg">🇬🇧</span> English
                  </button>
                  <button
                    onClick={() => { setLanguage('es'); setIsMenuOpen(false) }}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                      language === 'es' ? 'bg-blue-50/80 text-blue-700 border border-blue-100/50' : 'bg-white/60 text-gray-700 hover:bg-blue-50/60 hover:text-blue-700'
                    }`}
                  >
                    <span className="text-lg">🇪🇸</span> Español
                  </button>
                  <button
                    onClick={() => { setLanguage('fr'); setIsMenuOpen(false) }}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                      language === 'fr' ? 'bg-blue-50/80 text-blue-700 border border-blue-100/50' : 'bg-white/60 text-gray-700 hover:bg-blue-50/60 hover:text-blue-700'
                    }`}
                  >
                    <span className="text-lg">🇫🇷</span> Français
                  </button>
                  <button
                    onClick={() => { setLanguage('de'); setIsMenuOpen(false) }}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                      language === 'de' ? 'bg-blue-50/80 text-blue-700 border border-blue-100/50' : 'bg-white/60 text-gray-700 hover:bg-blue-50/60 hover:text-blue-700'
                    }`}
                  >
                    <span className="text-lg">🇩🇪</span> Deutsch
                  </button>
                </div>
              </div>

              <Button 
                className="w-full mt-6 relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 hover:from-blue-700 hover:via-blue-600 hover:to-teal-600 text-white py-4 font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 transform hover:scale-[1.02] group"
                onClick={() => scrollToSection('booking')}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
{t('nav.booking')} Agora
                  <div className="w-2 h-2 bg-white rounded-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
