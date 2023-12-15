/* eslint-disable import/prefer-default-export */
import { Montserrat } from 'next/font/google'

export const MontserratFont = Montserrat({
  display: 'swap',
  variable: '--font-Montserrat',
  adjustFontFallback: true,
  subsets: ['cyrillic', 'latin'],
  fallback: ['Arial', 'sans-serif'],
})
