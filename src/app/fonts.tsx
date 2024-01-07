import localFont from 'next/font/local'
import { Karla } from 'next/font/google'

export const body = Karla({
  subsets: ['latin'],
  variable: '--font-inter', 
})

export const titles = localFont({
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