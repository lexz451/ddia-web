import Navbar from '@/lib/components/navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Footer from '@/lib/components/footer'
import { ProgressBar } from 'next-nprogress'

import './globals.css'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })
const avenir = localFont({
  preload: true,
  src: '../lib/assets/fonts/AvenirLTProBook.otf',
})

export const metadata: Metadata = {
  title: 'DdIA - Digital Democracy Institute of the Americas',
  description: 'Digital Democracy Institute of the Americas website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Suspense fallback={null}>
          <ProgressBar
            color='#333'
            height='2px'
            options={{}}
            delay={0}
          />
        </Suspense>
      </body>
    </html>
  )
}
