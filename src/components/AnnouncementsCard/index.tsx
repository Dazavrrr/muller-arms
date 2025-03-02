//libs
import Image from 'next/image'
import moment from 'moment'
//types
import { ArticleSmallResponse } from '@/common/types'
//styles
import styles from './styles.module.scss'
import LocationIcon from '../Icons/Location'
import OclockIcon from '../Icons/Oclock'
import { Announce } from '@/models/announce'

const AnnouncementsCard = ({ card }: { card: Announce }) => {
  const { image, title, text, event_time, event_address } = card

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {image && <Image src={image} alt={title} fill />}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>

        <div className={styles.details}>
          <div className={styles.details_item}>
            <LocationIcon />
            <p className={styles.text}>{event_address}</p>
          </div>
          <div className={styles.details_item}>
            <OclockIcon />
            <p className={styles.text}>{moment(event_time).format('DD.MM')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementsCard
