import Navbar from '@/lib/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Footer from '@/lib/components/footer'
import ProgressIndicator from '@/lib/components/progress-indicator'

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
        <Footer/>
        <ProgressIndicator/>
      </body>
    </html>
  )
}
