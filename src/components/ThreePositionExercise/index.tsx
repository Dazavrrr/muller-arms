//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//images
import img1 from '../../../public/images/three-position-exercise/three-position-exercise-1.webp'
import img2 from '../../../public/images/three-position-exercise/three-position-exercise-2.webp'
import img3 from '../../../public/images/three-position-exercise/three-position-exercise-3.webp'
import img4 from '../../../public/images/three-position-exercise/three-position-exercise-4.webp'
import bgTop from '../../../public/images/three-position-exercise/three-position-exercise-bg-top.webp'
import bgBottom from '../../../public/images/three-position-exercise/three-position-exercise-bg-bottom.webp'

const ThreePositionExercise = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.text_wrapper}>
          <h2 className={styles.title}>
            Трипозиційний вогонь з карабіна: IPSC вправа зі стрільби з
            розташуваннями та штрафними мішенями
          </h2>
          <p className={styles.text}>
            Умови вправи: Стрілець стоїть в червоному боксі як зображено на
            схемі, спиною до мішеней, руками торкається навушників. Карабін
            лежить на бочці перед стрільцем, повністю розряджений. Затворна
            затримка заборонена. В підсумках стрільця розташовані три магазини
            по 15 набоїв. За сигналом таймера вразити усі мішені по три влучання
            із кожної із трьох позицій (стоячи, через порт і лежачи. В даній
            вправі кількість пострілів обмежена. Достріли заборонені. Дистанції
            до мішеней до 40 метрів. Ліва група мішеней IPSC + одна штрафна,
            середня група мішеней IPSC mini + одна штрафна, права група мішеней
            IPSC micro + одна штрафна.
          </p>
        </div>
        <div className={styles.images}>
          <Image className={styles.image_big} src={img1} alt="MullerArms" />

          <div className={styles.image_sm}>
            <Image
              className={styles.image}
              src={img2}
              alt="MullerArms"
              width={378}
              height={356}
            />
            <Image
              className={styles.image}
              src={img3}
              alt="MullerArms"
              width={378}
              height={356}
            />
            <Image
              className={styles.image}
              src={img4}
              alt="MullerArms"
              width={378}
              height={356}
            />
          </div>
        </div>

        <div className={styles.details}>
          <button className={styles.button} type="button">
            ЗАРЕЄСТРУВАТИСЯ
          </button>
          <Link className={styles.link} href="/qualifications">
            ПЕРЕГЛЯНУТИ ТУРНІРНУ ТАБЛИЦЮ
          </Link>
        </div>

        <Image className={styles.bg_top} src={bgTop} alt="MullerArms" />
        <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" />
      </div>
    </div>
  )
}

export default ThreePositionExercise
