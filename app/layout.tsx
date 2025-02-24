import "./globals.css"
import { Poppins } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import type React from "react" // Import React
import PageTransition from "./components/PageTransition"
import type { Metadata } from 'next'

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Colegio Las Margaritas | Alianza Educativa",
  description: "Sitio web oficial del Colegio Las Margaritas",
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={poppins.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

