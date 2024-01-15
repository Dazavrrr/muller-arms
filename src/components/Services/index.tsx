import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

const Services = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.services_title}>Наші послуги</h2>
      <p className={styles.services_text}>
        Навчайтесь та здобувайте безцінний досвід зі стрільби
      </p>

      <div className={styles.services_cards}>
        <div className={styles.services_card}>
          <div className={styles.services_photo}>
            <Image
              className={styles.services_image}
              src="/images/services/services-photo1.webp"
              alt="Базове тренування з автоматом"
              width={267}
              height={200}
            />
          </div>
          <div className={styles.services_info}>
            <h3 className={styles.services_infoTitle}>
              Базове тренування з автоматом
            </h3>
            <div className={styles.services_infoPrice}>
              <p>ВАРТІСТЬ:</p>
              <p className={styles.services_infoPriceOrange}>1 400 ГРН</p>
            </div>
            <div className={styles.services_infoBtn}>
              <a className={styles.services_btn} href="">ДІЗНАТИСЬ БІЛЬШЕ</a>
            </div>
          </div>
        </div>

      <div className={styles.services_card}>
        <div className={styles.services_photo}>
          <Image
            className={styles.services_image}
          src='/images/services/services-photo2.webp'
          alt='Групові тренування'
          width={267}
          height={200}
        />
        </div>
        <div className={styles.services_info}>
          <h3 className={styles.services_infoTitle}>Групові тренування</h3>
          <div className={styles.services_infoPrice}>
            <p>ВАРТІСТЬ:</p>
            <p className={styles.services_infoPriceOrange}>1 500 ГРН</p>
            </div>
            <div className={styles.services_infoBtn}>
              <a className={styles.services_btn} href="">ДІЗНАТИСЬ БІЛЬШЕ</a>
            </div>
          </div>
        </div>
        
      <div className={styles.services_card}>
        <div className={styles.services_photo}>
          <Image
            className={styles.services_image}
          src='/images/services/services-photo3.webp'
          alt='Індивідуальні тренування'
          width={267}
          height={200}
        />
        </div>
        <div className={styles.services_info}>
          <h3 className={styles.services_infoTitle}>Індивідуальні тренування</h3>
          <div className={styles.services_infoPrice}>
            <p>ВАРТІСТЬ:</p>
            <p className={styles.services_infoPriceOrange}>1 500 ГРН</p>
            </div>
            <div className={styles.services_infoBtn}>
              <a className={styles.services_btn} href="">ДІЗНАТИСЬ БІЛЬШЕ</a>
            </div>
          </div>
        </div>

      <div className={styles.services_card}>
        <div className={styles.services_photo}>
          <Image
            className={styles.services_image}
          src='/images/services/services-photo4.webp'
          alt='КУРC МАЙБУТНЬОГО БІЙЦЯ'
          width={267}
          height={200}
        />
        </div>
        <div className={styles.services_info}>
          <h3 className={styles.services_infoTitle}>КУРC МАЙБУТНЬОГО БІЙЦЯ</h3>
          <div className={styles.services_infoPrice}>
            <p>ВАРТІСТЬ:</p>
            <p className={styles.services_infoPriceOrange}>9 900 ГРН</p>
          </div>
            <div className={styles.services_infoBtn}>
              <a className={styles.services_btn} href="">ДІЗНАТИСЬ БІЛЬШЕ</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
