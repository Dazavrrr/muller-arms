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
          історія
          <br />
          та цінності
        </h1>
        <p className={styles.hero_text}>
          Навчання на всіх рівнях. Безпека та задоволення. Приєднуйтесь сьогодні!
        </p>
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
