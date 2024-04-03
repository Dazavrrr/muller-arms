import { DuskDemon, MontserratFont } from '@/common/fonts'
import clsx from 'clsx'
import '@/styles/globals.scss'
import Providers from '@/store/provider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Muller Arms',
  description: 'Muller Arms booking page',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['nextjs', 'nextjs13', 'next13', 'pwa', 'next-pwa'],
  icons: [
    { rel: "apple-touch-icon", url: "icons/big.png" },
    { rel: "icon", url: "icons/big.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(MontserratFont.variable, DuskDemon.variable)}>
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
    <Providers>
      <main>{children}</main>
    </Providers>
    </body>
    </html>
  )
}
