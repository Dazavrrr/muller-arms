'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'

import image from '../../../public/images/archive-card-image.webp'

const MainModal = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('mainModal') !== 'Y') {
      setOpen(true)
      localStorage.setItem('mainModal', 'Y')
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  return (
    <>
      {open && (
        <>
          <div className={styles.container}></div>
          <div className={styles.modal}>
            <span
              onClick={() => {
                setOpen(false)
              }}
              className={styles.close}
            >
              X
            </span>

            <Image
              className={styles.image}
              src={image}
              alt="img"
              width={701}
              height={608}
            />

            <div className={styles.info}>
              <h1 className={styles.title}>мілітарі класифікація</h1>
              <p className={styles.text}>
                Розкрийте світ техніки стрільби та освоюйте найважливіші аспекти
                цієї мистецької дисципліни. У цій вичерпній статті ми розглянемо
                ключові аспекти майстерності в стрільбі, відділимо міфи від
                реальності та надамо конкретні поради для поліпшення вашого
                вогневого майстерства
              </p>
              <Link
                className={`${global.primaryBtn} ${styles.button}`}
                href="/military"
              >
                ДЕТАЛЬНІШЕ
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default MainModal
