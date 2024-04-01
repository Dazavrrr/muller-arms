//libs
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
import LocationIcon from '../Icons/Location'
//icons
import NavArrow from '../Icons/NavArrow'
//images
import bottomBg from '../../../public/images/trainings/training-bottom-bg.webp'

const TrainingDetails = ({ training }: { training: any }) => {
  const {
    trainingName,
    image,
    mainText,
    slug
  } = training
  return (
    <section className={styles.training}>
      <div className={styles.wrapper}>

        <div className={styles.navigation}>
          <Link
            className={styles.navigation__prev_page}
            href="/trainings"
          >
            наші послуги
          </Link>

          <NavArrow />

          <div className={styles.navigation__current_page}>
            {trainingName.includes('(карабіном)') ? trainingName.replace('(карабіном)', '') : trainingName}
          </div>
        </div>


        <h1 className={styles.details__title}>
          {trainingName.includes('(карабіном)') ? (
            <>
              {trainingName.split('(карабіном)')[0]}
              <small className={styles.details__title_sm}>
                <span className={styles.quotes}>(</span>
                карабіном
                <span className={styles.quotes}>)</span>
              </small>
            </>
          ) : (
            trainingName
          )}
        </h1>

        <section className={styles.details}>
          <div className={styles.col}>
            <Image
              src={image}
              alt={'Muller Arms training'}
              placeholder={'blur'}
              priority
              className={styles.image}
            />

            <p className={styles.details__text}>
              {mainText}
            </p>

            {/* {weapons && <div className={styles.weapons}>
              <h3 className={styles.weapons__title}>ВИДИ ЗБРОЇ для тренування</h3>

              <div className={styles.weapons__list}>
                {weapons.map((weaponName, i) => (
                <p className={styles.weapons__weaponName} key={i}>{weaponName}</p>
                ))}
              </div>
            </div>} */}
          </div>

          <div className={styles.location}>
            <h3 className={styles.location__title}>адреса</h3>

            <div className={styles.location__address}>
              <LocationIcon />
              <p className={styles.location__name}>Місто Ірпінь, вул. Мінеральна 7</p>
            </div>

            <div className={styles.btn}>Записатися</div>
          </div>
        </section>
      </div>

      <Image
        className={styles.trainings_bottom_bg}
        src={bottomBg}
        alt='MullerArms'
      />
    </section>
  )
}

export default TrainingDetails