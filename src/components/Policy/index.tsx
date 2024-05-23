//libs
import React from 'react'
//styles
import styles from './styles.module.scss'
//components
import PolicyUsage from '../PolicyUsage'
// import PolicyPrivacy from '../PolicyPrivacy'
// import PolicyTerms from '../PolicyTerms'
// import PolicyReturn from '../PolicyReturn'

const Policy = () => {
  return (
    <section className={styles.policy}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p className={styles.info_item}>ПОЛІТИКА ВИКОРИСТАННЯ</p>
          <p className={styles.info_item}>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</p>
          <p className={styles.info_item}>УМОВИ КОРИСТУВАННЯ</p>
          <p className={styles.info_item}>ПОЛІТИКА ПОВЕРНЕННЯ</p>
        </div>

        <div className={styles.content}>
          <PolicyUsage />
          {/* <PolicyPrivacy /> */}
          {/* <PolicyTerms /> */}
          {/* <PolicyReturn /> */}
        </div>
      </div>
    </section>
  )
}

export default Policy
