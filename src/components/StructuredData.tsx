"use client"

import { useEffect } from 'react'

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Accommodation",
      "@id": "https://refugionomar.com/#accommodation",
      "name": "Refúgio no Mar - Armação de Pêra",
      "description": "Apartamento com vista mar em Armação de Pêra, a 4 minutos a pé da praia. Disponibiliza piscina exterior sazonal, Wi-Fi gratuito, ar condicionado e estacionamento privado. RNAL nº 163178/AL.",
      "url": "https://refugionomar.com",
      "identifier": "RNAL 163178/AL",
      "telephone": "+41765830782",
      "email": "refugionomar2025@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua da Sardinha, 3",
        "addressLocality": "Armação de Pêra",
        "postalCode": "8365-101",
        "addressCountry": "PT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.101706,
        "longitude": -8.363409
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Wi-Fi gratuito",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Ar condicionado",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Piscina exterior",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Estacionamento privado",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Vista mar",
          "value": true
        }
      ],
      "numberOfRooms": 2,
      "maximumAttendeeCapacity": 4,
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": 40,
        "unitCode": "MTK"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://refugionomar.com/#business",
      "name": "Refúgio no Mar",
      "image": "https://refugionomar.com/images/sala5.jpeg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua da Sardinha, 3",
        "addressLocality": "Armação de Pêra",
        "postalCode": "8365-101",
        "addressCountry": "PT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.101706,
        "longitude": -8.363409
      },
      "url": "https://refugionomar.com",
      "telephone": "+41765830782",
      "email": "refugionomar2025@gmail.com",
      "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
      "priceRange": "€€"
    },
    {
      "@type": "WebSite",
      "@id": "https://refugionomar.com/#website",
      "url": "https://refugionomar.com",
      "name": "Refúgio no Mar - Armação de Pêra",
      "description": "Apartamento com vista mar para aluguer de férias em Armação de Pêra, Algarve",
      "inLanguage": "pt-PT"
    }
  ]
}

export default function StructuredData() {
  useEffect(() => {
    // Add structured data to head
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      // Cleanup
      document.head.removeChild(script)
    }
  }, [])

  return null
}