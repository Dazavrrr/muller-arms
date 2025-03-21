//libs
import Image from 'next/image'
import moment from 'moment'
//styles
import styles from './styles.module.scss'
import LocationIcon from '../Icons/Location'
import OclockIcon from '../Icons/Oclock'
import { Announce } from '@/models/announce'
import Link from 'next/link'

const AnnouncementsCard = ({ card }: { card: Announce }) => {
  const { image, title, event_time, event_address, description, slug } = card

  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={styles.image}>
        {image && <Image src={image} alt={title} fill />}
      </div>

      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.text}>{description}</div>
        </div>

        <div className={styles.details}>
          {!!event_address && (
            <div className={styles.details_item}>
              <LocationIcon />
              <p className={styles.text}>{event_address}</p>
            </div>
          )}
          {!!event_time && (
            <div className={styles.details_item}>
              <OclockIcon />
              <p className={styles.text}>
                {moment(event_time).format('DD.MM')}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default AnnouncementsCard
