import localFont from 'next/font/local'

export const fg = localFont({
  variable: '--font-fg',
  src: '../assets/FoundersGrotesk-Medium.woff2'
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