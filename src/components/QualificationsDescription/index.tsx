'use client'
//libs
import Image from 'next/image'
import { useState } from 'react'
//styles
import styles from './styles.module.scss'
//images
import logo from '../../../public/icons/muller-arms-logo.svg'
//components
import QualificMilitaryDesc from '../QualificMilitaryDesc'
import QualificRecordsDesc from '../QualificRecordsDesc'
import QualificRatingDesc from '../QualificRatingDesc'

const QualificationsDescription = () => {
  const [tab, setTab] = useState(1)

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <div className={styles.nav_items}>
            <p
              className={`${styles.nav_item} ${tab === 1 && styles.active}`}
              onClick={() => setTab(1)}
            >
              01. мілітарі класифікація
            </p>
            <p
              className={`${styles.nav_item} ${tab === 2 && styles.active}`}
              onClick={() => setTab(2)}
            >
              02. Рекорди клубу
            </p>
            <p
              className={`${styles.nav_item} ${tab === 3 && styles.active}`}
              onClick={() => setTab(3)}
            >
              03. Кваліфікація /рейтинг <br /> спортсменів клубу
            </p>
          </div>

          <Image className={styles.logo} src={logo} alt="MullerArms" />
        </div>

        <div className={styles.content}>
          {tab === 1 && <QualificMilitaryDesc />}
          {tab === 2 && <QualificRecordsDesc />}
          {tab === 3 && <QualificRatingDesc />}
        </div>
      </div>
    </div>
  )
}

export default QualificationsDescription
