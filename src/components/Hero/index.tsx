import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_title}>
          Стрілецький клуб
          <br />
          <span className={styles.orange}>“Muller arms”</span>
        </h1>
        <p className={styles.hero_text}>
          Сучасні, професійні методики навчання із пістолетів, напівавтоматичних
          карабінів та гладкоствольних рушниць.
        </p>

        <div className={styles.hero_form}>
          <input
            className={styles.hero_formField}
            type="text"
            placeholder="Ім'я"
          />
          <input
            className={styles.hero_formField}
            type="text"
            placeholder="Номер телефону"
          />
          <button className={styles.hero_button} type="button">
            Передзвоніть мені
          </button>
        </div>
      </div>
      <Image
        priority
        className={styles.hero_image}
        src="/images/test2.png"
        width={1920}
        alt="dsds"
        height={1000}
      />
      <Image
        priority
        className={styles.hero_image}
        src="/images/test2.png"
        width={1920}
        alt="dsds"
        height={1000}
      />
    </section>
  )
}

export default Hero
