import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ali Hamza | CRM Tool Developer & Full-Stack Engineer',
  description: 'Full-stack developer specializing in CRM tools, MERN stack, and Next.js. Building scalable solutions for marketing agencies and SaaS platforms.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title: 'Ali Hamza | CRM Tool Developer & Full-Stack Engineer',
    description: 'Full-stack developer specializing in CRM tools, MERN stack, and Next.js. Building scalable solutions for marketing agencies and SaaS platforms.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#141414' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <head>
        <style>{`
          :root {
            --font-sans: ${geist.style.fontFamily};
            --font-mono: ${geistMono.style.fontFamily};
          }
        `}</style>
      </head>
      <body className={`${geist.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
