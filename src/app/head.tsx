export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Refúgio no Mar - Armação de Pêra",
            "description": "Apartamento com vista mar, piscina e a 4 minutos da praia em Armação de Pêra, Algarve",
            "url": "https://refugionomar.com",
            "telephone": "+41765830782",
            "email": "refugionomar2025@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua da Sardinha, 3",
              "postalCode": "8365-101",
              "addressLocality": "Armação de Pêra",
              "addressRegion": "Algarve",
              "addressCountry": "PT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.101706",
              "longitude": "-8.363409"
            },
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Wi-Fi gratuito" },
              { "@type": "LocationFeatureSpecification", "name": "Ar condicionado" },
              { "@type": "LocationFeatureSpecification", "name": "Piscina exterior" },
              { "@type": "LocationFeatureSpecification", "name": "Estacionamento gratuito" },
              { "@type": "LocationFeatureSpecification", "name": "Vista mar" },
              { "@type": "LocationFeatureSpecification", "name": "Kitchenette" }
            ],
            "starRating": {
              "@type": "Rating",
              "ratingValue": "4.9",
              "bestRating": "5"
            },
            "priceRange": "€€",
            "image": "https://refugionomar.com/images/sala5.jpeg"
          })
        }}
      />
      
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="PT-08" />
      <meta name="geo.placename" content="Rua da Sardinha, 3, 8365-101 Armação de Pêra" />
      <meta name="geo.position" content="37.101706;-8.363409" />
      <meta name="ICBM" content="37.101706, -8.363409" />
    </>
  )
}