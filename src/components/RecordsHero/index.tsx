//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import bg from '../../../public/images/qualifications/qualifications-hero.webp'
import bgMob from '../../../public/images/blog/hero-bg-mob.webp'
import bgBottom from '../../../public/images/blog/hero-bg-bottom.webp'

const RecordsHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_title}>
          рекорди <br /> КЛУБУ
        </h1>
        <p className={styles.hero_subtitle}>
          Захопливі статті: навчайтеся стріляти та забезпечуйте свою безпеку
        </p>
      </div>

      <Image className={styles.hero_bg} src={bg} alt="MullerArms" />
      <Image className={styles.hero_bg_mob} src={bgMob} alt="MullerArms" />
      <Image
        className={styles.hero_bg_bottom}
        src={bgBottom}
        alt="MullerArms"
      />
    </div>
  )
}

export default RecordsHero
