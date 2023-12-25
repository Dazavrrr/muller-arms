/* eslint-disable import/prefer-default-export */
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

export const MontserratFont = Montserrat({
  display: 'swap',
  variable: '--font-Montserrat',
  adjustFontFallback: true,
  subsets: ['cyrillic', 'latin'],
  fallback: ['Arial', 'sans-serif'],
})

export const DuskDemon = localFont({
  display: 'swap',
  variable: '--font-DuskDemon',
  adjustFontFallback: 'Arial',
  src: [
    {
      path: '../../public/fonts/DuskDemon.woff2',
      weight: '400',
      style: 'normal',
    }
  ],
})