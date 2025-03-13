//libs
import React from 'react'
//styles
import styles from './styles.module.scss'
//components
import ServiceCard from '../ServiceCard'
import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import { Training } from '@/models/training'

const Services = async () => {
  const { data } = await getData<Training[]>(ApiPath.TRAININGS)

  return (
    <section className={styles.services} id={'services'}>
      <div className={styles.services_wrapper}>
        <h2 className={styles.services_title}>Наші послуги</h2>
        <div className={styles.services_cards}>
          {data?.map((training, index) => (
            <ServiceCard training={training} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
