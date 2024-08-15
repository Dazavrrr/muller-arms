//libs
import Image from 'next/image'
import moment from 'moment'
import Link from 'next/link'

//styles
import styles from './styles.module.scss'
//images
import img from '../../../public/images/archive-card-image.webp'
import LocationIcon from '../Icons/Location'
import OclockIcon from '../Icons/Oclock'
import { ArticleSmallResponse } from '@/common/types'
import { useEffect } from 'react'

const ArchiveCard = ({ item }: { item: ArticleSmallResponse }) => {
  const { title, imagePath, text, slug, eventTime, eventAddress } = item

  return (
    <Link href={`/archive/${slug}`} className={styles.card}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          src={imagePath}
          alt="MullerArms"
          width={279}
          height={353}
        />
        <div className={styles.text_wrapper}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <div className={styles.details}>
            {!!eventAddress && (
              <div className={styles.location}>
                <LocationIcon />
                <p className={styles.text}>{eventAddress}</p>
              </div>
            )}
            {!!eventTime && (
              <div className={styles.date}>
                <OclockIcon />
                <p className={styles.text}>
                  {moment(eventTime).format('DD.MM')}
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
