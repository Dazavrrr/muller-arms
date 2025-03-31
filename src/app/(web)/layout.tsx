import clsx from 'clsx'
import Head from 'next/head'
import { MontserratFont, DuskDemon } from '@/common/fonts'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import 'swiper/css'
import 'swiper/css/navigation'
import '@/styles/globals.scss'

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
      <Head>
        <link rel="icon" href="/icons/favicon.ico" type="image/icon" />
        <title>{metadata?.title || 'Default Title'}</title>
        <meta
          name="description"
          content={metadata?.description || 'Default Description'}
        />
      </Head>

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
