//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import img from '../../../public/images/shooter-classes-image.webp'
import bgTop from '../../../public/images/qualifications/experience-bg-top.webp'
import bgBottom from '../../../public/images/qualifications/experience-bg-bottom.webp'

const ShooterClasses = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={img}
          alt="MullerArms"
          width={385}
          height={567}
        />
        <div className={styles.content}>
          <h2 className={styles.title}>класи стрільця</h2>
          <div className={styles.text_wrapper}>
            <p className={styles.text}>
              класи стільця — це показник, який визначає ефективність та
              швидкість певного стільця в наших вправах із карабіну
            </p>
            <div className={styles.classes}>
              <div className={styles.class}>
                <p className={styles.text}>майстер</p>
                <p className={styles.text}>Експерт</p>
                <p className={styles.text}>Влучний стрілець</p>
                <p className={styles.text}>Стрілець</p>
                <p className={styles.text}>Новачок</p>
              </div>
              <div className={styles.results}>
                <p className={styles.text}>менше 135 сек.</p>
                <p className={styles.text}>135.01 – 165.00 сек.</p>
                <p className={styles.text}>165.01 – 195.00 сек.</p>
                <p className={styles.text}>195.01 – 225.00 сек.</p>
                <p className={styles.text}>Більше 225,01 сек.</p>
              </div>
            </div>
          </div>
        </div>

        <Image className={styles.bg_top} src={bgTop} alt="MullerArms" />
        <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" />
      </div>
    </div>
  )
}

export default ShooterClasses
