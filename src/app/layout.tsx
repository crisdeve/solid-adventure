import type { Metadata } from 'next'
import './globals.css'
import { fg, canela } from './fonts'

export const metadata: Metadata = {
  title: 'D & C 🤵👰',
  description: 'Bienvenidos a nuestra boda !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fg.variable} ${canela.variable}`}>{children}</body>
    </html>
  )
}
