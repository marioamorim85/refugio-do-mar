import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import StructuredData from "@/components/StructuredData"
import Navbar from "@/components/Navbar"
import VacationToasts from "@/components/VacationToasts"
import CookieBanner from "@/components/CookieBanner"
import Analytics from "@/components/Analytics"
import { LanguageProvider } from "@/contexts/LanguageContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://refugionomar.com'),
  title: "Refúgio no Mar - Armação de Pêra | Apartamento com vista mar",
  description: "Apartamento com vista mar, piscina e a 4 minutos da praia em Armação de Pêra, Algarve. Reservas diretas com Wi-Fi gratuito, ar condicionado e estacionamento. RNAL nº 163178/AL.",
  keywords: [
    "apartamento armação de pêra",
    "férias algarve", 
    "vista mar",
    "piscina",
    "reservas diretas",
    "alojamento local",
    "praia armação de pêra",
    "turismo rural algarve",
    "short term rental",
    "holiday apartment portugal"
  ].join(", "),
  authors: [{ name: "Refúgio no Mar" }],
  creator: "Refúgio no Mar",
  publisher: "Refúgio no Mar",
  category: "Travel & Tourism",
  classification: "Accommodation",
  openGraph: {
    title: "Refúgio no Mar - Armação de Pêra | Apartamento com vista mar",
    description: "Apartamento com vista mar, piscina e a 4 minutos da praia em Armação de Pêra, Algarve. Reservas diretas com Wi-Fi gratuito, ar condicionado e estacionamento.",
    images: [
      {
        url: "/images/sala5.jpeg",
        width: 1200,
        height: 630,
        alt: "Sala principal do Refúgio no Mar - Armação de Pêra"
      }
    ],
    locale: "pt_PT",
    type: "website",
    siteName: "Refúgio no Mar",
    url: "https://refugionomar.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "Refúgio no Mar - Armação de Pêra | Apartamento com vista mar",
    description: "Apartamento com vista mar, piscina e a 4 minutos da praia em Armação de Pêra, Algarve.",
    images: ["/images/sala5.jpeg"],
    creator: "@refugionomar",
    site: "@refugionomar"
  },
  alternates: {
    canonical: "https://refugionomar.com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=abc123", // NOTA: Substituir pelo código real do Google Search Console
    yandex: "yandex-verification=xyz789", // NOTA: Substituir pelo código real do Yandex Webmaster
    yahoo: "yahoo-site-verification=def456", // NOTA: Substituir pelo código real do Yahoo
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="preload" as="image" href="/images/sala5.jpeg" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="msapplication-TileImage" content="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Analytics />
        <LanguageProvider>
          <StructuredData />
          <Navbar />
          <VacationToasts />
          <CookieBanner />
          <div className="pt-20">{/* Espaço para a navbar fixa */}
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}