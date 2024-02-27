"use client"
//libs
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
//styles
import styles from '@/app/(booking)/booking/styles.module.scss'
//images
import spinner from '../../../../../public/images/booking/spinner.svg'
import React, { useEffect, useState } from 'react'
import { BASE_URL, guestInstance } from '@/api'
import logo from '../../../../../public/images/booking/logo.svg'


const MyComponent = () => {
  const params = useSearchParams()
  const [status, setStatus] = useState<'pending' | 'fulfilled' | 'error'>('pending')
  const uuid = params.get('uuid')

  useEffect(() => {
    if (uuid != null) {
      (async () => {
        try {
          await guestInstance.delete(`${BASE_URL}/bookings?uuid=${uuid}`)
          setStatus('fulfilled')
        } catch (err) {
          setStatus('error')
        }
      })()
    }

    //eslint-disable-next-line
  }, [])

  const success = (
    <div className={styles.submited}>
      <p>Бронювання успішно скасовано !</p>
      <Link href={'/'} className={styles.continue}>На головну</Link>
    </div>
  )

  const failed = (
    <div className={styles.submited}>
      <p>Бронювання не знайдено !</p>
      <Link href={'/'} className={styles.continue}>На головну</Link>
    </div>
  )

  return (
    <>
      {status === 'pending' ? <Image src={spinner} alt={'Spinner'} className={styles.spinner} />
        :
        <div className={styles.main}>
          <Image src={logo} alt={'logo'} />
          {status === 'fulfilled' && success}
          {status === 'error' && failed}
        </div>
      }
    </>
  )
}

export default MyComponent
