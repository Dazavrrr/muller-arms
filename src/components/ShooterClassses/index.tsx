//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import bgTop from '../../../public/images/qualifications/experience-bg-top.webp'
import bgBottom from '../../../public/images/qualifications/experience-bg-bottom.webp'

const ShooterClasses = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <video
          className={styles.video}
          src={'/images/shooter-classes.mp4'}
          controls
          loop
          muted
          preload="auto"
        />
        <div className={styles.content}>
          <h2 className={styles.title}>класи стрільця</h2>
          <div className={styles.text_wrapper}>
            <p className={styles.text}>
              ефективна й збалансована стрільба показує клас стрільця. баланс
              між швидкістю і точністю - визначний критерій. до часу проходження
              вправи додаються штрафні секунди за кожне влучання поза зоною
              &quot;альфа&quot;. загальний час за результатами усіх вправ
              класифікації вноситься в таблицю, в якій кожен стрілець набуває
              своє місце.
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
