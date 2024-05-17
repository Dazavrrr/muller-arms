//libs
import React from 'react'
//styles
import styles from './styles.module.scss'
//logos
import Logo1 from './logos/logo-1'
import Logo2 from './logos/logo-2'
import Logo3 from './logos/logo-3'

const Partners = () => {
  return <section className={styles.partners}>
    <h3 className={styles.partners_title}>Наші основні партнери</h3>
    <div className={styles.logos_wrapper}>
      <div className={styles.partners_logos}>
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo2 />
        <Logo1 />
      </div>
    </div>
  </section>
}

export default Partners