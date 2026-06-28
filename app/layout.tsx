import type { Metadata } from 'next'
import './globals.css'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Yue Woh Hop Kee 裕和合記',
  description: 'A long-standing dried seafood and provisions shop in Sheung Wan, preserving the flavours and merchant heritage of Hong Kong.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-HK">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
