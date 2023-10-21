import Navbar from '@/lib/components/navbar'
import type { Metadata } from 'next'
import Footer from '@/lib/components/footer'
import { ProgressBar } from '@lexz451/next-nprogress'

import './globals.css'
import { Suspense } from 'react'
import { avenir, avenirCondensed } from '@/lib/utils/fonts'


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
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#015C6B"></link>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      </head>
      <body className={`${avenir.variable} ${avenirCondensed.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <Suspense fallback={null}>
          <ProgressBar
            color='#015C6B'
            height='2px'
          />
        </Suspense>
      </body>
    </html>
  )
}
