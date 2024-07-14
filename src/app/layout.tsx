import type { Metadata } from 'next'
import './globals.css'
import { body, titles } from './fonts'

export const metadata: Metadata = {
  title: 'Mis 15 años ✨',
  description: 'Bienvenidos a mis quinces !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${titles.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  )
}
