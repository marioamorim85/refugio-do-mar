"use client"

import { useEffect } from 'react'

// Imagens críticas que devem ser pré-carregadas
const criticalImages = [
  '/images/sala5.jpeg', // Hero image
  '/images/sala1.avif',  // First gallery image
  '/images/sala2.jpeg',  // Second gallery image
]

export default function ImagePreloader() {
  useEffect(() => {
    // Preload critical images
    criticalImages.forEach((src) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })

    // Cleanup
    return () => {
      criticalImages.forEach((src) => {
        const link = document.querySelector(`link[href="${src}"]`)
        if (link) {
          document.head.removeChild(link)
        }
      })
    }
  }, [])

  return null
}