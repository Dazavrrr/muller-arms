import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

const Services = () => {
  return (
    <div className={styles.services}>
      <h1 className={styles.services_title}>Наші послуги</h1>
      <p className={styles.services_text}>
        Навчайтесь та здобувайте безцінний досвід зі стрільби
      </p>

      <div className={styles.services_cards}>
        <div className={styles.services_card}>
          <div className={styles.services_photo}>
            <Image
              className={styles.services_image}
              src="/images/servicesPhoto1.png"
              alt="Базове тренування з автоматом"
              width={267}
              height={200}
            />
          </div>
          <div className={styles.services_info}>
            <h1 className={styles.services_infoTitle}>
              Базове тренування з автоматом
            </h1>
            <div className={styles.services_infoPrice}>
              <p>ВАРТІСТЬ:</p>
              <p className={styles.services_infoPriceOrange}>1 400 ГРН</p>
            </div>
            <div className={styles.services_infoBtn}>
              <a href="">ДІЗНАТИСЬ БІЛЬШЕ</a>
            </div>
          </div>
        </div>

      <div className={styles.services_card}>
        <div className={styles.services_photo}>
          <Image
            className={styles.services_image}
          src='/images/Services_Photo2.jpg'
          alt='Групові тренування'
          width={267}
          height={200}
        />
        </div>
        <div className={styles.services_info}>
          <h1 className={styles.services_infoTitle}>Групові тренування</h1>
          <div className={styles.services_infoPrice}>
            <p>ВАРТІСТЬ:</p>
            <p className={styles.services_infoPriceOrange}>1 500 ГРН</p>
            </div>
            <div className={styles.services_infoBtn}>
              <a href="">ДІЗНАТИСЬ БІЛЬШЕ</a>
            </div>
          </div>
        </div>
        
      </div>
      <div className={styles.services_card}>
        <div className={styles.services_photo}>
          <Image
            className={styles.services_image}
          src='/images/Services_Photo3.jpg'
          alt='Індивідуальні тренування'
          width={267}
          height={200}
        />
        </div>
        <div className={styles.services_info}>
          <h1 className={styles.services_infoTitle}>Індивідуальні тренування</h1>
          <div className={styles.services_infoPrice}>
            <p>ВАРТІСТЬ:</p>
            <p className={styles.services_infoPriceOrange}>1 500 ГРН</p>
            </div>
            <div className={styles.services_infoBtn}>
              <a href="">ДІЗНАТИСЬ БІЛЬШЕ</a>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.services_card}>
        <div className={styles.services_photo}>
          <Image
            className={styles.services_image}
          src='/images/Services_Photo4.jpg'
          alt='КУРC МАЙБУТНЬОГО БІЙЦЯ'
          width={267}
          height={200}
        />
        </div>
        <div className={styles.services_info}>
          <h1 className={styles.services_infoTitle}>КУРC МАЙБУТНЬОГО БІЙЦЯ</h1>
          <div className={styles.services_infoPrice}>
            <p>ВАРТІСТЬ:</p>
            <p className={styles.services_infoPriceOrange}>9 900 ГРН</p>
            </div>
            <div className={styles.services_infoBtn}>
              <a href="">ДІЗНАТИСЬ БІЛЬШЕ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
