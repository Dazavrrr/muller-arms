//libs
import React from 'react'
//styles
import styles from './styles.module.scss'
import ArrowLeft from '../Icons/PaginationArrowLeft'
import ArrowRight from '../Icons/PaginationArrowRight'

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <ArrowLeft />

      <div className={styles.pagination_pages}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>

      <ArrowRight />
    </div>
  )
}

export default Pagination
