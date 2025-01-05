//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import bottomBc from '../../../public/images/hero/hero-bottom-bc.webp'

//images
import mobBg from '../../../public/images/hero/hero-bg-mob.webp'
import hero from '../../../public/images/hero/hero.webp'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_title}>
          історія
          <br />
          та цінності
        </h1>
        <p className={styles.hero_text}>
          Навчання на всіх рівнях. <br />
          Безпека та професіоналізм. <br />
          Приєднуйтесь сьогодні!
        </p>

        <button className={styles.hero_book_btn}>Зареєструватися</button>
      </div>
      <Image
        priority
        className={styles.hero_image}
        placeholder={'blur'}
        loading={'eager'}
        src={hero}
        width={1920}
        alt="Muller Arms instructors"
        height={1000}
      />
      <Image
        priority
        loading={'eager'}
        src={bottomBc}
        alt="Muller Arms"
        className={styles.hero_bottom_bc}
      />
      <Image
        src={mobBg}
        priority
        loading={'eager'}
        placeholder={'blur'}
        alt={'Muller Arms instructors'}
        className={styles.hero_mob_bc}
      />
    </section>
  )
}

export default Hero
