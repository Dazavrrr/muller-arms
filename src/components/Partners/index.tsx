//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//logos
import LogoGerts from './logos/logoGerts'
import LogoXgun from './logos/logoXgun'
import LogoDrivovo from './logos/logoDrivovo'
import LogoBalak from './logos/logoBalak'
import LogoUWin from './logos/LogoUWin.png'

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

        <div className={styles.partners_logo}>
          <LogoBalak />
        </div>

        <div className={styles.partners_logo}>
          <Image src={LogoUWin} alt="partner mullerarms" height={170} />
        </div>
      </div>
    </section>
  )
}

export default Partners
