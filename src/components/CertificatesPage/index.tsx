'use client'

import { useState } from 'react'
//styles
import styles from './styles.module.scss'
import { useSearchParams } from 'next/navigation'

const prices = ['1500', '3500', '6500']

const CertificatesPage = () => {
  const params = useSearchParams()
  const [currentPrice, setCurrentPrice] = useState(params.get('price') || '')
  const [customPrice, setCustomPrice] = useState('')

  const handleChangePrice = (price: string) => {
    setCurrentPrice(price)
    setCustomPrice('')
  }

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.certificate_image}>
          <p className={styles.image}>подарунковий сертифікат</p>
        </div>

        <div className={styles.content}>
          <div className={styles.content_wrapper}>
            <div className={styles.text_wrapper}>
              <h1 className={styles.title}>сертифікат</h1>
              <p className={styles.text}>
                Ця нашивка представляє собою вражаючий вигляд космічної
                галактики, яка розкриває перед вами таємничі глибини всесвіту.
                Вона виготовлена з високоякісних матеріалів, які надають їй
                довговічність та стійкість до впливу зовнішніх чинників.
              </p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.price_wrapper}>
              <h2 className={styles.price_title}>сума</h2>
              <div className={styles.price}>
                {prices.map((price, i) => (
                  <p
                    key={i}
                    onClick={() => handleChangePrice(price)}
                    className={`${styles.price_text} ${
                      currentPrice === price && !customPrice
                        ? styles.price_text_active
                        : ''
                    }`}
                  >
                    {price} грн
                  </p>
                ))}
                <input
                  className={styles.price_input}
                  placeholder="вкажіть вашу суму"
                  value={customPrice}
                  onChange={(e) => setCustomPrice(e.target.value)}
                  type="number"
                />
              </div>
            </div>
          </div>

          <button className={styles.button}>КУПИТИ</button>
        </div>
      </div>
    </div>
  )
}

export default CertificatesPage
