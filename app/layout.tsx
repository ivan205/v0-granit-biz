import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'Управляющая Компания Гранит',
  description: 'Управляющая Компания Гранит — надёжное управление многоквартирными домами. Качественное обслуживание, прозрачность, забота о жителях.',
  keywords: 'управляющая компания, ЖКХ, обслуживание домов, коммунальные услуги, гранит',
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
