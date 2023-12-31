import './globals.scss'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ["400", "500"]
})


export const metadata: Metadata = {
  title: 'WeslleyCastro',
  description: 'Portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
