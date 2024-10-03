//libs
import React from "react";
import Image from "next/image";
//styles
import styles from './styles.module.scss'
//images
import heroBg from '../../../public/images/services/services-hero.webp'
import heroBgBottom from '../../../public/images/services/services-hero-bottom-bc.webp'
import mobBg from '../../../public/images/services/services-hero-mob-bg.webp'

const ServicesHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_title}>
          Широкий Вибір
          <br />
          Послуг для Вас
        </h1>
        <p className={styles.hero_subtitle}>
          велика кількість навчальних програм за
          <br />
          різними напрямками підготовки
        </p>

        <button className={styles.hero_book_btn}>Зареєструватися</button>
      </div>
    
    <Image
      priority
      className={styles.hero_bg}
      src={heroBg}
      alt="MullerArms"
      placeholder={'blur'}
        loading={'eager'}
        width={1920}
        height={1000}
    />
    <Image
      priority
      className={styles.hero_bg_bottom}
      src={heroBgBottom}
      alt="MullerArms"
      placeholder={'blur'}
      loading={'eager'}
      />
      
      <Image src={mobBg} priority loading={'eager'} placeholder={'blur'} alt={"Muller Arms instructors"} className={styles.hero_mob_bg}/>
  </section>
  )
}

export default ServicesHero


