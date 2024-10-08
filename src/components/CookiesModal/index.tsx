'use client'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//libs
import { useState, useEffect } from 'react'

const CookiesModal = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('cookiesModal') !== 'Y') {
      setOpen(true)
      localStorage.setItem('cookiesModal', 'Y')
    }
  }, [])

  return (
    <>
      {open && (
        <div className={styles.container}>
          <div className={styles.section}>
            <p className={styles.text}>
              Ми використовуємо файли{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop"
                className={styles.link}
              >
                cookies
              </a>{' '}
              для покращення вашого досвіду використання сайту
            </p>

            <div className={styles.buttons}>
              <button className={styles.accept} onClick={() => setOpen(false)}>
                ПРИЙНЯТИ
              </button>
              <button className={styles.cancel} onClick={() => setOpen(false)}>
                СКАСУВАТИ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookiesModal
