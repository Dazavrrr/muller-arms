//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import bottomBg from '../../../public/images/reviews/reviews-bottom-bg.webp'
//icons
import ArrowLeft from '../Icons/ArrowLeft'
import ArrowRight from '../Icons/ArrowRight'

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className={styles.reviews_title_container}>
        <h2 className={styles.reviews_title}>Наші відгуки</h2>

        <div className={styles.reviews_arrows}>
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>

      <div className={styles.reviews_cards}>
        <div className={styles.reviews_card}>
          <p className={styles.reviews_text}>
            “ОЛЕКСАНДР МАЄ ВЕЛИКИЙ ДОСВІД РОБОТИ В СФЕРІ ФІЗИЧНОЇ БЕЗПЕКИ,
            ДОСВІД ПРАКТИЧНОГО ВИКОРИСТАННЯ ЗБРОЇ БІЛЬШЕ 11 РОКІВ. МАЄ
            ВІЙСЬКОВИЙ ДОСВІД БІЛЬШЕ 8 РОКІВ. ПРАЦЮЄ З ВІЙСЬКОВИМИ ПІДРОЗДІЛАМИ,
            МАЄ ДОСВІД ТА ВІДПОВІДНІ“
          </p>
          <p className={styles.reviews_name}>Вадим козачук</p>
        </div>

        <div className={styles.reviews_card}>
          <p className={styles.reviews_text}>
            “ОЛЕКСАНДР МАЄ ВЕЛИКИЙ ДОСВІД РОБОТИ В СФЕРІ ФІЗИЧНОЇ БЕЗПЕКИ,
            ДОСВІД ПРАКТИЧНОГО ВИКОРИСТАННЯ ЗБРОЇ БІЛЬШЕ 11 РОКІВ. МАЄ
            ВІЙСЬКОВИЙ ДОСВІД БІЛЬШЕ 8 РОКІВ. ПРАЦЮЄ З ВІЙСЬКОВИМИ ПІДРОЗДІЛАМИ,
            МАЄ ДОСВІД ТА ВІДПОВІДНІ“
          </p>
          <p className={styles.reviews_name}>Вадим козачук</p>
        </div>

        <div className={styles.reviews_card}>
          <p className={styles.reviews_text}>
            “ОЛЕКСАНДР МАЄ ВЕЛИКИЙ ДОСВІД РОБОТИ В СФЕРІ ФІЗИЧНОЇ БЕЗПЕКИ,
            ДОСВІД ПРАКТИЧНОГО ВИКОРИСТАННЯ ЗБРОЇ БІЛЬШЕ 11 РОКІВ. МАЄ
            ВІЙСЬКОВИЙ ДОСВІД БІЛЬШЕ 8 РОКІВ. ПРАЦЮЄ З ВІЙСЬКОВИМИ ПІДРОЗДІЛАМИ,
            МАЄ ДОСВІД ТА ВІДПОВІДНІ“
          </p>
          <p className={styles.reviews_name}>Вадим козачук</p>
        </div>
      </div>

      <Image
        className={styles.reviews_bottom_bg}
        src={bottomBg}
        alt="MullerArms"
      />
    </section>
  )
}

export default Reviews
