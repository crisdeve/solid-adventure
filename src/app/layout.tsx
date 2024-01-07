import type { Metadata } from 'next'
import './globals.css'
import { body, titles } from './fonts'

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
      <body className={`${titles.variable} ${body.variable}`}>{children}</body>
    </html>
  )
}
