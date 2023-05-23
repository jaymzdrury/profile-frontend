import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export const metadata: Metadata = {
  openGraph: {
    title: 'Portfolio | Haija Bintu',
    description: 'The Portfolio of Hajia Bintu',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
