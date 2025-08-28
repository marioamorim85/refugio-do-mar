"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Camera, Eye, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useLanguage } from "@/contexts/LanguageContext"

const galleryImages = [
  { src: "/images/sala1.avif", altKey: "gallery.images.sala1", category: "Sala" },
  { src: "/images/sala2.jpeg", altKey: "gallery.images.sala2", category: "Sala" },
  { src: "/images/sala3.jpeg", altKey: "gallery.images.sala3", category: "Sala" },
  { src: "/images/sala5.jpeg", altKey: "gallery.images.sala5", category: "Sala" },
  { src: "/images/sala6.avif", altKey: "gallery.images.sala6", category: "Sala" },
  { src: "/images/sala7.jpeg", altKey: "gallery.images.sala7", category: "Sala" },
  { src: "/images/sala8.jpeg", altKey: "gallery.images.sala8", category: "Sala" },
  { src: "/images/quarto2_1.jpeg", altKey: "gallery.images.quarto2_1", category: "Quartos" },
  { src: "/images/quarto2_2.jpeg", altKey: "gallery.images.quarto2_2", category: "Quartos" },
  { src: "/images/quarto4.jpeg", altKey: "gallery.images.quarto4", category: "Quartos" },
  { src: "/images/quarto5.avif", altKey: "gallery.images.quarto5", category: "Quartos" },
  { src: "/images/quarto6.jpeg", altKey: "gallery.images.quarto6", category: "Quartos" },
  { src: "/images/quarto7.avif", altKey: "gallery.images.quarto7", category: "Quartos" },
  { src: "/images/quarto8.jpeg", altKey: "gallery.images.quarto8", category: "Quartos" },
  { src: "/images/cozinha1.jpeg", altKey: "gallery.images.cozinha1", category: "Cozinha" },
  { src: "/images/cozinha2.avif", altKey: "gallery.images.cozinha2", category: "Cozinha" },
  { src: "/images/cozinha3.jpeg", altKey: "gallery.images.cozinha3", category: "Cozinha" },
  { src: "/images/banho1.jpeg", altKey: "gallery.images.banho1", category: "Casa de Banho" },
  { src: "/images/banho2.jpeg", altKey: "gallery.images.banho2", category: "Casa de Banho" },
  { src: "/images/banho3.jpeg", altKey: "gallery.images.banho3", category: "Casa de Banho" },
  { src: "/images/banho4.avif", altKey: "gallery.images.banho4", category: "Casa de Banho" },
  { src: "/images/varanda1.avif", altKey: "gallery.images.varanda1", category: "Varanda" },
  { src: "/images/varanda2.avif", altKey: "gallery.images.varanda2", category: "Varanda" },
  { src: "/images/varanda3.avif", altKey: "gallery.images.varanda3", category: "Varanda" },
  { src: "/images/varanda4.jpg", altKey: "gallery.images.varanda4", category: "Varanda" },
  { src: "/images/piscina.jpg", altKey: "gallery.images.piscina1", category: "Piscina" },
  { src: "/images/piscina2.jpg", altKey: "gallery.images.piscina2", category: "Piscina" },
  { src: "/images/piscina3.jpg", altKey: "gallery.images.piscina3", category: "Piscina" },
  { src: "/images/piscina4.webp", altKey: "gallery.images.piscina4", category: "Piscina" },
  { src: "/images/piscina5.avif", altKey: "gallery.images.piscina5", category: "Piscina" },
  { src: "/images/tasca26.jpg", altKey: "gallery.images.tasca26", category: "Restaurantes" },
  { src: "/images/papa-e-companhia.jpg", altKey: "gallery.images.papa_companhia", category: "Restaurantes" },
  { src: "/images/sapori.jpg", altKey: "gallery.images.sapori", category: "Restaurantes" },
  { src: "/images/praia_armacao_pera.jpg", altKey: "gallery.images.praia_armacao", category: "Praias" },
  { src: "/images/Praia-de-Vale-do-Olival-Algarve.jpg", altKey: "gallery.images.vale_olival", category: "Praias" },
  { src: "/images/beijinhos.jpg", altKey: "gallery.images.beijinhos", category: "Praias" },
  { src: "/images/tremoços.jpg", altKey: "gallery.images.tremocos", category: "Praias" },
  { src: "/images/Nossa-Senhora-da-Rocha-chapel-drone-view.jpg", altKey: "gallery.images.rocha", category: "Praias" },
  { src: "/images/Zoomarine-Algarve-Portugal.jpg", altKey: "gallery.images.zoomarine", category: "Atrações" },
  { src: "/images/slide.jpg", altKey: "gallery.images.slide_splash", category: "Atrações" },
  { src: "/images/aquashow.jpg", altKey: "gallery.images.aquashow", category: "Atrações" },
  { src: "/images/gruta.avif", altKey: "gallery.images.gruta", category: "Atrações" },
  { src: "/images/parque_aquatico_insuflavel.jpg", altKey: "gallery.images.parque_insuflavel", category: "Atrações" },
  { src: "/images/Jet-Ski-Algarve-Watersports-Moments-17B-1-1.webp", altKey: "gallery.images.watersports", category: "Atrações" }
]

const categoryKeys = ["sala", "quartos", "cozinha", "casa_de_banho", "varanda", "piscina", "restaurantes", "praias", "atracoes"]

const getCategoryTranslationKey = (originalCategory: string) => {
  const categoryMap: { [key: string]: string } = {
    "Sala": "sala",
    "Quartos": "quartos", 
    "Cozinha": "cozinha",
    "Casa de Banho": "casa_de_banho",
    "Varanda": "varanda",
    "Piscina": "piscina",
    "Restaurantes": "restaurantes",
    "Praias": "praias",
    "Atrações": "atracoes"
  }
  return categoryMap[originalCategory] || "sala"
}

export default function GallerySection() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("Sala")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [imagesPreloaded, setImagesPreloaded] = useState(false)

  // Preload only current category images on demand
  useEffect(() => {
    const preloadCategoryImages = async () => {
      // Only run in browser environment
      if (typeof window === 'undefined') return
      
      const currentCategoryImages = galleryImages.filter(img => img.category === selectedCategory)
      console.log(`Preloading ${currentCategoryImages.length} images for category: ${selectedCategory}`)
      
      let loadedCount = 0
      const totalImages = currentCategoryImages.length

      const preloadPromises = currentCategoryImages.map((image) => {
        return new Promise((resolve) => {
          const img = new window.Image()
          img.onload = () => {
            loadedCount++
            console.log(`Loaded ${loadedCount}/${totalImages}: ${image.src}`)
            resolve(img)
          }
          img.onerror = () => {
            console.error(`Failed to load: ${image.src}`)
            resolve(img) // Resolve anyway to not block others
          }
          img.src = image.src
        })
      })

      try {
        await Promise.all(preloadPromises)
        console.log(`Category ${selectedCategory} images preloaded!`)
        setImagesPreloaded(true)
      } catch (error) {
        console.error('Error preloading images:', error)
        setImagesPreloaded(true) // Set anyway
      }
    }

    // Reset preload state when category changes
    setImagesPreloaded(false)
    preloadCategoryImages()
  }, [selectedCategory])

  // Close lightbox when category changes
  useEffect(() => {
    setSelectedImage(null)
  }, [selectedCategory])

  const filteredImages = galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null && filteredImages.length > 0) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null && filteredImages.length > 0) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-ocean-50/30 via-white to-coral-50/40 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-ocean-200/20 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-coral-200/25 to-transparent rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-coral-100 to-ocean-100 text-coral-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            {t('gallery.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-fix mb-6 font-playfair">
            {t('gallery.title')} <span style={{color: 'initial', WebkitTextFillColor: 'initial'}}>📷</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('gallery.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {!imagesPreloaded && (
            <div className="w-full text-center mb-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg inline-block">
                {t('gallery.loading', { category: selectedCategory })}
              </div>
            </div>
          )}
          {categoryKeys.map((categoryKey, index) => {
            const category = t(`gallery.categories.${categoryKey}`)
            const originalCategory = categoryKey === "sala" ? "Sala" : 
                                  categoryKey === "quartos" ? "Quartos" :
                                  categoryKey === "cozinha" ? "Cozinha" :
                                  categoryKey === "casa_de_banho" ? "Casa de Banho" :
                                  categoryKey === "varanda" ? "Varanda" :
                                  categoryKey === "piscina" ? "Piscina" :
                                  categoryKey === "restaurantes" ? "Restaurantes" :
                                  categoryKey === "praias" ? "Praias" : "Atrações"
            
            return (
            <motion.button
              key={categoryKey}
              onClick={() => setSelectedCategory(originalCategory)}
              className={`px-6 py-3 rounded-2xl transition-all duration-300 font-medium relative overflow-hidden backdrop-blur-sm border ${
                selectedCategory === originalCategory
                  ? "bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 text-white border-white/30 shadow-lg"
                  : "bg-white/60 text-gray-700 hover:bg-white/80 border-white/40 hover:border-blue-200 hover:text-blue-700"
              }`}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-teal-500/20 opacity-0 transition-opacity duration-300 ${
                selectedCategory !== originalCategory ? "hover:opacity-100" : ""
              }`} />
              <span className="relative z-10">{category}</span>
            </motion.button>
            )
          })}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {!imagesPreloaded && (
            // Skeleton loading for gallery
            Array.from({ length: Math.min(8, filteredImages.length) }, (_, index) => (
              <Card key={`skeleton-${index}`} className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                <div className="relative aspect-square">
                  <Skeleton className="w-full h-full" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white/95 backdrop-blur-md rounded-xl p-3">
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="w-2 h-2 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
          {imagesPreloaded && filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${selectedCategory}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Card className="overflow-hidden hover:shadow-2xl hover:shadow-ocean-500/20 transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group/card relative">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean-50/50 via-transparent to-coral-50/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={t(image.altKey)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={index < 4 ? "eager" : "lazy"}
                    priority={index < 4}
                    fetchPriority={index < 4 ? "high" : "auto"}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating view icon */}
                  <div className="absolute top-3 right-3">
                    <motion.div 
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover/card:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4 text-coral-600" />
                    </motion.div>
                  </div>
                  
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 transform translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                      <div className="text-sm font-bold text-gray-800 mb-1 truncate">{t(image.altKey)}</div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-coral-600 font-medium bg-coral-50 px-2 py-1 rounded-full">
                          {t(`gallery.categories.${getCategoryTranslationKey(selectedCategory)}`)}
                        </div>
                        <div className="w-2 h-2 bg-gradient-to-r from-coral-500 to-ocean-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && filteredImages[selectedImage] && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full">
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={t(filteredImages[selectedImage].altKey)}
                  fill
                  className="object-contain"
                  priority
                  sizes="90vw"
                  quality={90}
                />
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded px-4 py-2 text-white">
                  {t(filteredImages[selectedImage].altKey)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}