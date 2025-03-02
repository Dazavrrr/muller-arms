//libs
import React, { useEffect } from 'react'
//styles
import styles from './styles.module.scss'
//components
import ServiceCard from '../ServiceCard'
import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import { Training } from '@/models/training'

const OtherTrainings = async ({ slug }: { slug: string }) => {
  const { data: trainings } = await getData<Training[]>(`${ApiPath.TRAININGS}`)

  return (
    <div className={styles.otherTrainings}>
      <div className={styles.otherTrainings_wrapper}>
        <h2 className={styles.otherTrainings_title}>інші наші послуги</h2>
        <div className={styles.otherTrainings_cards}>
          {trainings
            ?.filter((training) => training.slug !== slug)
            .slice(0, 4)
            .map((t, index) => <ServiceCard training={t} key={index} />)}
        </div>
      </div>
    </div>
  )
}

export default OtherTrainings
