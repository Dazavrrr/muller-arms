'use client'
//libs
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import NavArrow from '../Icons/NavArrow'
import bgBottom from '../../../public/images/leaders-table-bg-bottom.webp'
//components
import LeadersTableOne from '../LeadersTableOne'
import LeadersTableTwo from '../LeadersTableTwo'
import LeadersTableThree from '../LeadersTableThree'
import LeadersTableFour from '../LeadersTableFour'
import LeadersTableFive from '../LeadersTableFive'

const LeadersTableRifle = () => {
  const [tab, setTab] = useState(1)

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Link href="/qualifications" className={styles.nav_prev}>
            кваліфікація клубу
          </Link>
          <div>
            <NavArrow />
          </div>
          <Link href="/records" className={styles.nav_prev}>
            рекорди КЛУБУ
          </Link>
          <div>
            <NavArrow />
          </div>
          <p className={styles.nav_current}>таблиця завдань з карабіну</p>
        </div>

        <div className={styles.exercises}>
          <h1 className={styles.title}>ТАБЛИЦЯ лідерів учасників З КАРАБІНУ</h1>

          <div className={styles.exercises_wrapper}>
            <h2 className={styles.exercises_subtitle}>таблиця лідерів</h2>
            <div className={styles.exercise_items}>
              <p
                className={`${styles.exercise_item} ${
                  tab === 1 && styles.active
                }`}
                onClick={() => setTab(1)}
              >
                / ВПРАВА №1
              </p>
              <p
                className={`${styles.exercise_item}  ${
                  tab === 2 && styles.active
                }`}
                onClick={() => setTab(2)}
              >
                / ВПРАВА №2
              </p>
              <p
                className={`${styles.exercise_item}  ${
                  tab === 3 && styles.active
                }`}
                onClick={() => setTab(3)}
              >
                / ВПРАВА №3
              </p>
              <p
                className={`${styles.exercise_item} ${
                  tab === 4 && styles.active
                }`}
                onClick={() => setTab(4)}
              >
                / ВПРАВА №4
              </p>
              <p
                className={`${styles.exercise_item} 
                ${tab === 5 && styles.active}`}
                onClick={() => setTab(5)}
              >
                / ВПРАВА №5
              </p>
            </div>
          </div>

          <div className={styles.content}>
            {tab === 1 && <LeadersTableOne />}
            {tab === 2 && <LeadersTableTwo />}
            {tab === 3 && <LeadersTableThree />}
            {tab === 4 && <LeadersTableFour />}
            {tab === 5 && <LeadersTableFive />}
          </div>
        </div>
      </div>

      <Image className={styles.bg_bottom} src={bgBottom} alt="Muller Arms" />
    </div>
  )
}

export default LeadersTableRifle
