//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//images
import image from '../../../public/images/records-register/records-register-image.webp'
import bgTop from '../../../public/images/records-register/records-register-bg-top.webp'
import bgBottom from '../../../public/images/records-register/records-register-bg-bottom.webp'

const RecordsRegister = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text_wrapper}>
          <h2 className={styles.title}>бажаєте покращити свої навички?</h2>
          <p className={styles.text}>
            Запишіться на наше тренування, де ви зможете отримати цінні знання
            та вдосконалити свої навички. Розвивайте свій потенціал разом з нами
          </p>
        </div>

        <Link href="/booking" className={styles.button}>
          ЗАРЕЄСТРУВАТИСЯ
        </Link>
      </div>

      <Image className={styles.image} src={image} alt="MullerArms" />
      <Image className={styles.bg_top} src={bgTop} alt="MullerArms" />
      <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" />
    </div>
  )
}

export default RecordsRegister
