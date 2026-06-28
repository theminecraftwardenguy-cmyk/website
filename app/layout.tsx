import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yue Woh Hop Kee — 裕和合記臘味',
  description: 'Established in 1973 in Sai Ying Pun, Yue Woh Hop Kee is a Hong Kong family shop known for traditional handmade preserved meats.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
