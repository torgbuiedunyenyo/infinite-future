
import { Inter,Lato, B612_Mono } from 'next/font/google'

const inter = Lato({
  subsets: ['latin'],
  weight: ['100','300','400','700','900'],
})

import '@/styles/globals.css';

export const metadata = {
  metadataBase: new URL('https://infinite-future.vercel.app'),
  title: ' Infinite Future',
  publisher: 'Handshake Consulting LLC',
  openGraph:{
    title: ' Infinite Future',
  url: 'https://infinite-future.vercel.app'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}