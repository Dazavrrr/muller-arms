'use client'
//libs
import React, { useEffect } from 'react'
//styles
import styles from './styles.module.scss'
//components
import ServiceCard from "../ServiceCard";

const OtherTrainings = ({ trainings, slug }: { trainings: any, slug: any }) => {
  useEffect(() => {
  }, [])
  return (
    <div className={styles.otherTrainings}>
      <div className={styles.otherTrainings_wrapper}>
        <h2 className={styles.otherTrainings_title}>інші наші послуги</h2>
        <div className={styles.otherTrainings_cards}>
          {trainings.filter(training => training.slug != slug).map((t, index) => {

            if (index < 4) {
              return <ServiceCard training={t} key={index} />
            }
            return null;
          })
          }
        </div>
      </div>
    </div>
  )
}

export default OtherTrainings