//libs
import React from 'react'
//styles
import styles from './styles.module.scss'
//images
import base from '../../../public/images/services/services-photo1.webp'
import group from '../../../public/images/services/services-photo2.webp'
import individual from '../../../public/images/services/services-photo3.webp'
import course from '../../../public/images/services/services-photo4.webp'
//components
import ServiceCard from '../ServiceCard'
import { guestInstance } from '@/api'
import { TrainingResponse } from '@/common/types'

const getTrainings = async () => {
  try {
    const resp = await guestInstance.get('/trainings')
    return resp.data
  } catch (e) {
    return []
  }
}

const Services = async () => {
  const trainings: TrainingResponse[] = await getTrainings()

  return (
    <section className={styles.services} id={'services'}>
      <div className={styles.services_wrapper}>
        <h2 className={styles.services_title}>Наші послуги</h2>

        <div className={styles.services_cards}>
          {trainings.map((training, index) => (
            <ServiceCard training={training} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services