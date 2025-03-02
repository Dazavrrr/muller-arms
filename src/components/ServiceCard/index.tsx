//libs
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'

import { Training } from '@/models/training'

const ServiceCard = ({ training }: { training: Training }) => {
  const { name, price_per_hour, short_description, slug, image } = training

  return (
    <div className={styles.services_card}>
      <div className={styles.services_photo}>
        {!!image && (
          <Image
            className={styles.services_image}
            src={image}
            alt={name}
            fill
          />
        )}
      </div>
      <div className={styles.services_info}>
        <h3 className={styles.services_infoTitle}>{name.replace(' ', '\n')}</h3>
        {!!short_description && (
          <p className={styles.services_infoDesc}>{short_description}</p>
        )}
        <div className={styles.services_infoPrice}>
          <p className={styles.services_infoPriceOrange}>
            {price_per_hour} грн
          </p>
        </div>
        <Link className={styles.services_infoBtn} href={`/trainings/${slug}`}>
          ЗАРЕЄСТРУВАТИСЯ
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
