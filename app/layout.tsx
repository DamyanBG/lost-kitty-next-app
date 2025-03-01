import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '../components/header/header'
import Footer from '@/components/footer/footer'
import AuthProvider from '@/context/AuthProvider'

import './globals.css'
import 'boxicons/css/boxicons.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Изгубено коте',
  keywords: ["котка", "коте", "изгубено", "намерено",],
    robots: "index, follow",
    metadataBase: new URL("https://izgubeno-kote.fun"),
    verification: {
        google: "kIf1iyYrsUbfU8RDLu24WJW7U_nNY_0STrBsdcuQnwg"
    },
  description: 'Платформа за публикуване на намерени и изгубени котки.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
