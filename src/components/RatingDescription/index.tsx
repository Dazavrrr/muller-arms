//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//images
import img from '../../../public/images/rating-desc-image.webp'
import NavArrow from '../Icons/NavArrow'

const RatingDescription = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Link href="/qualifications" className={styles.nav_prev}>
            кваліфікація клубу
          </Link>
          <NavArrow />
          <p className={styles.nav_current}>
            КВАЛІФІКАЦІЯ/РЕЙТИНГ СПОРТСМЕНІВ КЛУБУ
          </p>
        </div>

        <div className={styles.pages}>
          <Link href="/military" className={styles.page}>
            01. мілітарі класифікація
          </Link>

          <Link href="/records" className={styles.page}>
            02. Рекорди клубу
          </Link>

          <div className={styles.active}>
            <p className={styles.page_active}>
              03. Кваліфікація /рейтинг <br /> спортсменів клубу
            </p>
            <div className={styles.border}></div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.content_wrapper}>
            <h3 className={styles.title}>
              що таке КВАЛІФІКАЦІЯ/РЕЙТИНГ СПОРТСМЕНІВ КЛУБУ?
            </h3>

            <p className={styles.text}>
              Дана кваліфікація складіється лише із однієї вправи середньої
              складності та показує загальний рейтинг й рівень усіх стрільців
              нашого клубу. Це по суті головний рекорд клубу, який визначає
              кращих спортсменів для формування команд в регіональних
              чемпіонатах та кубках, чемпіонатах та кубках України а також для
              прийняття участі в заходах за кордоном.
            </p>

            <button className={styles.button} type="button">
              ЗАРЕЄСТРУВАТИСЯ
            </button>
          </div>
          <Image className={styles.image} src={img} alt="MullerArms training" />
        </div>
      </div>
    </div>
  )
}

export default RatingDescription
