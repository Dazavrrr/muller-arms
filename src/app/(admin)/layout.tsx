'use client'
import '@/styles/utils/_reset.scss'
import './styles.scss'
import clsx from 'clsx'
import { DuskDemon, MontserratFont } from '@/common/fonts'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk" className={clsx(MontserratFont.variable, DuskDemon.variable)}>
      <body>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      </body>
    </html>
  )
}
