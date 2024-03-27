'use client'
//libs
import React, { useEffect } from 'react'
import Image from "next/image";
//styles
import styles from './styles.module.scss'
//images
import topBg from '../../../public/images/trainings/training-top-bg.webp'
import ServiceCard from "../ServiceCard";

const OtherTrainings = ({ trainings, slug }: { trainings: any, slug: any }) => {
  useEffect(() => {
  }, [])
  return (
    <div className={styles.otherTrainings}>
      <div className={styles.otherTrainings_wrapper}>
        <h2 className={styles.otherTrainings_title}>інші наші послуги</h2>
        
        
        <div className={styles.services_cards}>
          {trainings.filter(training => training.slug != slug).map((t, index) => {

            if (index < 4) {
              return <ServiceCard training={t} key={index} />
            }
            return null;
          })
          }
        </div>

          <Image
            className={styles.otherTrainings_top_bg}
            src={topBg}
            alt='MullerArms'
          />
      </div>
    </div>
  )
}

export default OtherTrainings