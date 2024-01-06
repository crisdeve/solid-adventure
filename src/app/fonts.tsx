import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', 
})

export const canela = localFont({
  variable: '--font-canela',
  src: [
    {
      path: '../assets/Canela-Bold.woff2',
    },
    {
      path: '../assets/Canela-Medium.woff2',
    },
  ],
})