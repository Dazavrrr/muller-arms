'use client'
//libs
import React, { useState } from 'react'
//styles
import styles from './styles.module.scss'
//components
import PolicyUsage from '../PolicyUsage'
import PolicyPrivacy from '../PolicyPrivacy'
import PolicyTerms from '../PolicyTerms'
import PolicyReturn from '../PolicyReturn'

const Policy = () => {
  const [tab, setTab] = useState(1)

  return (
    <section className={styles.policy}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p
            className={`${styles.info_item} ${tab === 1 && styles.active}`}
            onClick={() => setTab(1)}
          >
            ПОЛІТИКА ВИКОРИСТАННЯ
          </p>
          <p
            className={`${styles.info_item} ${tab === 2 && styles.active}`}
            onClick={() => setTab(2)}
          >
            ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ
          </p>
          <p
            className={`${styles.info_item} ${tab === 3 && styles.active}`}
            onClick={() => setTab(3)}
          >
            УМОВИ КОРИСТУВАННЯ
          </p>
          <p
            className={`${styles.info_item} ${tab === 4 && styles.active}`}
            onClick={() => setTab(4)}
          >
            ПОЛІТИКА ПОВЕРНЕННЯ
          </p>
        </div>

        <div className={styles.content}>
          {tab === 1 && <PolicyUsage />}
          {tab === 2 && <PolicyPrivacy />}
          {tab === 3 && <PolicyTerms />}
          {tab === 4 && <PolicyReturn />}
        </div>
      </div>
    </section>
  )
}

export default Policy
