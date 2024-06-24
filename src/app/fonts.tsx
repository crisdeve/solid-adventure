/* import localFont from 'next/font/local' */
import { Amatic_SC as Body, Pacifico as Title } from 'next/font/google'

export const body = Body({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter', 
})

export const titles = Title({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-canela',
})