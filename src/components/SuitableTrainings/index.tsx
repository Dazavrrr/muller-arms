//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//image
import img from '../../../public/images/suitable-trainings-image.png'

const SuitableTrainings = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image_mob}
          src={img}
          alt="MullerArms trainings"
          width={488}
          height={299}
        />
        <div className={styles.info}>
          <h3 className={styles.title}>Вам підійде</h3>
          <p className={styles.text}>
            МОЖЕТЕ ЗАПИСАТИСЯ НА Базове тренування з автоматом, ДЕ ВИ ЗМОЖЕТЕ
            НАВЧИТИСЯ ЦІЄЇ ТЕХНІКИ. НАШІ ІНСТРУКТОРИ СПЕЦІАЛІСТИ СВОЄЇ СПРАВИ,
            ЯКІ ЗМОЖУТЬ ВАМ В ЦЬОМУ ДОПОМОГТИ
          </p>
          <button className={styles.button} type="button">
            ЗАПИСАТИСЯ НА ТРЕНУВАННЯ
          </button>
        </div>

        <Image
          className={styles.image}
          src={img}
          alt="MullerArms trainings"
          width={488}
          height={299}
        />
      </div>
    </section>
  )
}

export default SuitableTrainings
