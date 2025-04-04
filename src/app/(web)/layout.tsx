import clsx from 'clsx'
import Head from 'next/head'
import { MontserratFont, DuskDemon } from '@/common/fonts'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.scss'
import 'swiper/css'
import 'swiper/css/navigation'

import type { Metadata as NextMetadata } from 'next'

interface Metadata extends NextMetadata {
  title?: string
  description?: string
}

export default function RootLayout({
  children,
  metadata,
}: {
  children: React.ReactNode
  metadata?: Metadata
}) {
  return (
    <html
      lang="uk"
      className={clsx(MontserratFont.variable, DuskDemon.variable)}
    >
      <body>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          button, textarea, input {
            font-family: ${MontserratFont.style.fontFamily}
          }
            `,
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
