//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import img from '../../../public/images/archive-card-image.webp'
import LocationIcon from '../Icons/Location'
import OclockIcon from '../Icons/Oclock'

const ArchiveCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <Image className={styles.image} src={img} alt="MullerArms" />
        <div className={styles.text_wrapper}>
          <h2 className={styles.title}>
            Безпека на стрільбищі: Правила та Рекомендації
          </h2>
          <p className={styles.text}>
            Розкрийте світ техніки стрільби та освоюйте найважливіші{' '}
          </p>
          <div className={styles.details}>
            <div className={styles.location}>
              <LocationIcon />
              <p className={styles.text}>київ</p>
            </div>
            <div className={styles.date}>
              <OclockIcon />
              <p className={styles.text}>20.01</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArchiveCard
