//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import bottomBc from '../../../public/images/hero/hero-bottom-bc.webp'

//images
import mobBc from '../../../public/images/hero/hero-mob-bc.webp'
import bc from '../../../public/images/hero/hero-bg.webp'

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
        <div className={styles.hero_book_btn}>ЗАПИСАТИСЬ ДО ІНСТРУКТОРА</div>
      </div>
      <Image
        priority
        className={styles.hero_image}
        placeholder={'blur'}
        loading={'eager'}
        src={bc}
        width={1920}
        alt="Muller Arms instructors"
        height={1000}
      />
      <Image priority loading={'eager'} src={bottomBc} alt="Muller Arms" className={styles.hero_bottom_bc}/>
      <Image src={mobBc} priority loading={'eager'} placeholder={'blur'} alt={"Muller Arms instructors"} className={styles.hero_mob_bc}/>
    </section>
  )
}

export default Hero
