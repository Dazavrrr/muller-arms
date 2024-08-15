//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//images
import img from '../../../public/images/qualifications/qualifications-image.webp'
import bgTop from '../../../public/images/qualifications/experience-bg-top.webp'
import bgBottom from '../../../public/images/qualifications/experience-bg-bottom.webp'

const QualificationExperience = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Image className={styles.image} src={img} alt="MullerArms" />
        <div className={styles.content}>
          <h2 className={styles.title}>Стрільба та РЕЙТИНГ</h2>
          <div className={styles.text_wrapper}>
            <p className={styles.text}>
              У нашому клубі ти матимеш можливість не лише поліпшити свою
              точність та стратегічне мислення, але і позмагатися.
            </p>
            <p className={styles.text}>
              У нас є багато різноманітних вправ, де ви можете з ними
              ознайомитися{' '}
              <Link href="/exercises" className={styles.link}>
                тут
              </Link>
            </p>
            <p className={styles.text}>
              Кожна вправа, яку ти успішно пройдеш, принесе тобі заслужені очки.
              На основі цих очок буде складена турнірна таблиця.
            </p>
          </div>
        </div>

        <Image className={styles.bg_top} src={bgTop} alt="MullerArms" />
        <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" />
      </div>
    </div>
  )
}

export default QualificationExperience
