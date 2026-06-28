import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Yue Woh Hop Kee — Since 1973',
  description: 'Authentic Hong Kong lap cheong from Sai Ying Pun, handcrafted since 1973.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, fontFamily: 'Georgia, serif', background: '#fdf6ee', minHeight: '100vh' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
