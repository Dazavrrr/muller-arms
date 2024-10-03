//libs
import Image from 'next/image'
import moment from 'moment'
//types
import { ArticleSmallResponse } from '@/common/types'
//styles
import styles from './styles.module.scss'
import LocationIcon from '../Icons/Location'
import OclockIcon from '../Icons/Oclock'

const AnnouncementsCard = ({ card }: { card: ArticleSmallResponse }) => {
  const { imagePath, title, text, eventTime, eventAddress, slug } = card

  return (
    <div className={styles.card}>
      <Image src={imagePath} alt="img" width={578} height={794} />

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>

        <div className={styles.details}>
          <div className={styles.details_item}>
            <LocationIcon />
            <p className={styles.text}>{eventAddress}</p>
          </div>
          <div className={styles.details_item}>
            <OclockIcon />
            <p className={styles.text}>{moment(eventTime).format('DD.MM')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementsCard
