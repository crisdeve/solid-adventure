/* import localFont from 'next/font/local' */
import { Karla, Libre_Baskerville } from 'next/font/google'

export const body = Karla({
  subsets: ['latin'],
  variable: '--font-inter', 
})

export const titles = Libre_Baskerville({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-canela',
})