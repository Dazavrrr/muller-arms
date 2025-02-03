//libs
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'

const ServiceCard = ({ training }: { training: any }) => {
  const {
    id,
    name,
    pricePerHour,
    prepay,
    isFlexible,
    description,
    shortDescription,
    slug,
    image,
  } = training
  return (
    <div className={styles.services_card}>
      <div className={styles.services_photo}>
        <Image
          className={styles.services_image}
          src={image}
          alt={name}
          // width={267}
          // height={200}
        />
      </div>
      <div className={styles.services_info}>
        <h3 className={styles.services_infoTitle}>{name.replace(' ', '\n')}</h3>
        {!!shortDescription && (
          <p className={styles.services_infoDesc}>{shortDescription}</p>
        )}
        <div className={styles.services_infoPrice}>
          <p className={styles.services_infoPriceOrange}>{pricePerHour} грн</p>
        </div>
        <Link className={styles.services_infoBtn} href={`/trainings/${slug}`}>
          ЗАРЕЄСТРУВАТИСЯ
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
