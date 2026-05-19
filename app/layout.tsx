import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'Granit.biz — Природный камень и гранит',
  description: 'Granit.biz — ваш надежный поставщик природного камня, гранита, мрамора и изделий из камня. Высокое качество, выгодные цены, доставка по России.',
  keywords: 'гранит, мрамор, природный камень, гранитные изделия, памятники, столешницы, брусчатка',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
