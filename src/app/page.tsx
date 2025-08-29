"use client"
import React from "react"

import { motion } from "framer-motion"
import HeroSection from "@/components/HeroSection"
import AmenitiesSection from "@/components/AmenitiesSection"
import DescriptionSection from "@/components/DescriptionSection"
import GallerySection from "@/components/GallerySection"
import ProximitySection from "@/components/ProximitySection"
import ActivitiesSection from "@/components/ActivitiesSection"
import DetailedAmenitiesSection from "@/components/DetailedAmenitiesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FAQSection from "@/components/FAQSection"
import BookingSection from "@/components/BookingSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import CoastalEffects from "@/components/CoastalEffects"
import VacationToasts from "@/components/VacationToasts"
import PortugueseMagic from "@/components/PortugueseMagic"
import PortugueseWelcome from "@/components/PortugueseWelcome"

export default function Home() {
  // Scroll para o hash da URL ao carregar a página
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash) {
        // Aguarda renderização dos componentes
        setTimeout(() => {
          const el = document.getElementById(hash.replace('#', ''))
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }
  }, [])

  return (
    <main className="min-h-screen">
      <CoastalEffects />
      <PortugueseMagic />
      <HeroSection />
      <ScrollToTopButton />
      <AmenitiesSection />
      <DescriptionSection />
      <GallerySection />
      <ProximitySection />
      <ActivitiesSection />
      <DetailedAmenitiesSection />
      <TestimonialsSection />
      <FAQSection />
      <BookingSection />
      <ContactSection />
      <Footer />
      <VacationToasts />
      {/* <PortugueseWelcome /> */}
    </main>
  )
}