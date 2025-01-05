//libs
import React from 'react'
//styles
import styles from './styles.module.scss'
//logos
import LogoGerts from './logos/logoGerts'
import LogoXgun from './logos/logoXgun'
import LogoDrivovo from './logos/logoDrivovo'

const Partners = () => {
  return (
    <section className={styles.partners}>
      <h3 className={styles.partners_title}>Наші основні партнери</h3>
      <div className={styles.partners_logos}>
        <div className={styles.partners_logo}>
          <LogoGerts />
        </div>
        <div className={styles.partners_logo}>
          <LogoXgun />
        </div>
        <div className={styles.partners_logo}>
          <LogoDrivovo />
        </div>
      </div>
    </section>
  )
}

export default Partners
