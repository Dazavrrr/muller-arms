//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//img
import img from '../../../public/images/blog/blog-hero.webp'
import bgBottom from '../../../public/images/blog/hero-bg-bottom.webp'
import bgMob from '../../../public/images/blog/hero-bg-mob.webp'

const AnnouncementsHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_title}>АНОНСИ</h1>
        <p className={styles.hero_subtitle}>
          Захопливі статті: навчайтеся стріляти та забезпечуйте свою безпеку
        </p>
      </div>
      <Image className={styles.hero_image} src={img} alt="MullerArms" />
      <Image
        className={styles.hero_bg_bottom}
        src={bgBottom}
        alt="MullerArms"
      />
      <Image className={styles.hero_bg_mob} src={bgMob} alt="MullerArms" />
    </div>
  )
}

export default AnnouncementsHero
