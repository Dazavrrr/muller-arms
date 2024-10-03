//libs

//styles
import styles from './styles.module.scss'
import React from 'react'

const ReviewsCard = ({name,review}:{name: string,review: string}) => {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{review}</p>
      <p className={styles.name}>{name}</p>
    </div>
  )
}

export default ReviewsCard
