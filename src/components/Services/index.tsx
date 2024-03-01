//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import base from '../../../public/images/services/services-photo1.webp'
import group from '../../../public/images/services/services-photo2.webp'
import individual from '../../../public/images/services/services-photo3.webp'
import course from '../../../public/images/services/services-photo4.webp'
import Link from 'next/link'

const Services = () => {
  const trainings = [
    {
      image: base,
      trainingName: 'Базове тренування з автоматом',
      price: '1400 грн',
      slug: 'base-training'
    },
    {
      image: group,
      trainingName: 'Групові тренування',
      price: '1500 грн',
      slug: 'group-training'
    },
    {
      image: individual,
      trainingName: 'Індивідуальні тренування',
      price: 'ВІД 1500 грн',
      slug: 'individual-training'
    },
    {
      image: course,
      trainingName: 'Курс майбутнього бійця',
      price: '9900 грн',
      slug: 'soldier-course',
    },
  ]

  return (
    <section className={styles.services} id={"services"}>
      <div className={styles.services_wrapper}>
        <h2 className={styles.services_title}>Наші послуги</h2>

        <div className={styles.services_cards}>
        {trainings.map(({ image, trainingName, price, slug }, index) => (
          <div className={styles.services_card} key={index}>
            <div className={styles.services_photo}>
              <Image
                className={styles.services_image}
                src={image}
                alt={trainingName}
                width={267}
                height={200}
              />
            </div>
            <div className={styles.services_info}>
              <h3 className={styles.services_infoTitle}>
                {trainingName}
              </h3>
              <div className={styles.services_infoPrice}>
                <p className={styles.services_infoPriceOrange}>{price}</p>
              </div>
                <Link className={styles.services_infoBtn} href={`/trainings/${slug}`}>ЗАРЕЄСТРУВАТИСЯ</Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Services