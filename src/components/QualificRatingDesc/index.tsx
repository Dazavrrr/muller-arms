//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//images
import img from '../../../public/images/qualifications/qualific-desc-image.webp'

const QualificRatingDesc = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
          <div className={styles.text_wrapper}>
            <h2 className={styles.title}>
              03. Кваліфікація /рейтинг спортсменів клубу
            </h2>
            <p className={styles.text}>
              Класифікація це фіксований і стандартизований комплекс вправ, який
              усі бажаючі можуть прострілювати із певною періодичнстю, та
              спостерігати за власною прогресією чи навпаки, виявляти,
              аналізувати та опрацьовувати помилки.
            </p>
          </div>
          <div className={styles.button_wrapper}>
            <Link href="/rating" className={styles.link}>
              ДЕТАЛЬНІШЕ
            </Link>
            <button className={styles.button} type="button">
              ЗАРЕЄСТРУВАТИСЯ НА ТРЕНУВАННЯ
            </button>
          </div>
        </div>

        <Image className={styles.image} src={img} alt="MullerArms training" />
      </div>
    </div>
  )
}

export default QualificRatingDesc
