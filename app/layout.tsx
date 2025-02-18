import "./globals.css"
import { Poppins } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import type React from "react" // Import React

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Colegio Las Margaritas",
  description: "Sitio web oficial del Colegio Las Margaritas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={poppins.className}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

