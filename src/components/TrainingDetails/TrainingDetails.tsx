//libs
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
//styles
import styles from './styles.module.scss'

interface Props {
  image: StaticImageData,
  trainingName: string,
  mainText: string,
  price: string,
  weapons?: string[]
}

const TrainingDetails: FC<Props> = ({ image, mainText, trainingName, price, weapons }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.col}>
        <Image src={image} alt={'Muller Arms training'} className={styles.image} />

        {weapons && <div className={styles.weapons}>
          <h3 className={styles.weapons__title}>ВИДИ ЗБРОЇ для тренування</h3>

          <div className={styles.weapons__list}>
            {weapons.map((weaponName, i) => (
              <p className={styles.weapons__weaponName} key={i}>{weaponName}</p>
            ))}
          </div>
        </div>}
      </div>
      <section className={`${styles.col} ${styles.details}`}>
        <h1 className={styles.details__title}>{trainingName}</h1>
        <p className={styles.details__text}>
          {mainText}
        </p>

        <div className={styles.price}>
          <p className={styles.price__text}>Реєстраційний внесок</p>
          <p className={`${styles.price__text} ${styles.colored}`}>{price}</p>
        </div>

        <button type={'button'} className={styles.btn}>Записатись на тренування</button>

      </section>
    </section>
  )
}

export default TrainingDetails
