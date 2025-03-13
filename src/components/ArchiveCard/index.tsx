//libs
import Image from 'next/image'
import moment from 'moment'
import Link from 'next/link'

//styles
import styles from './styles.module.scss'
//images
import LocationIcon from '../Icons/Location'
import OclockIcon from '../Icons/Oclock'
import { Article } from '@/models/article'

const ArchiveCard = ({ item }: { item: Article }) => {
  const { title, image, text, slug, event_time, event_address } = item

  return (
    <Link href={`/archive/${slug}`} className={styles.card}>
      <div className={styles.wrapper}>
        {!!image && (
          <Image
            className={styles.image}
            src={image}
            alt="MullerArms"
            width={279}
            height={353}
          />
        )}
        <div className={styles.text_wrapper}>
          <h2 className={styles.title}>{title}</h2>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
          <div className={styles.details}>
            {!!event_address && (
              <div className={styles.location}>
                <LocationIcon />
                <p className={styles.text}>{event_address}</p>
              </div>
            )}
            {!!event_time && (
              <div className={styles.date}>
                <OclockIcon />
                <p className={styles.text}>
                  {moment(event_time).format('DD.MM')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArchiveCard
