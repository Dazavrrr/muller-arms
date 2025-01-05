'use client'
//libs
import { useEffect, useState } from 'react'
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
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  fetchAllClassifications,
  fetchAllTableSlotsByType,
} from '@/store/slices/TableSlots.slice'

const LeadersTableRifle = ({ tab }: { tab: string }) => {
  const result = useAppSelector((state) => state.TableSlots.slots)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllTableSlotsByType({ type: 'CARBINE', task: parseInt(tab) }))
  }, [tab])

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
          <Link href="/rifle-exercises" className={styles.nav_prev}>
            завдання з карабіну
          </Link>
          <div>
            <NavArrow />
          </div>
          <p className={styles.nav_current}>таблиця лідерів</p>
        </div>

        <div className={styles.exercises}>
          <h1 className={styles.title}>ТАБЛИЦЯ лідерів учасників З КАРАБІНУ</h1>

          <div className={styles.exercises_wrapper}>
            <div className={styles.exercise_items}>
              <Link
                href="/leaders-table-rifle/1"
                className={`${styles.exercise_item} ${
                  parseInt(tab) === 1 && styles.active
                }`}
              >
                / ВПРАВА №1
              </Link>
              <Link
                href="/leaders-table-rifle/2"
                className={`${styles.exercise_item}  ${
                  parseInt(tab) === 2 && styles.active
                }`}
              >
                / ВПРАВА №2
              </Link>
              <Link
                href="/leaders-table-rifle/3"
                className={`${styles.exercise_item}  ${
                  parseInt(tab) === 3 && styles.active
                }`}
              >
                / ВПРАВА №3
              </Link>
              <Link
                href="/leaders-table-rifle/4"
                className={`${styles.exercise_item} ${
                  parseInt(tab) === 4 && styles.active
                }`}
              >
                / ВПРАВА №4
              </Link>
              <Link
                href="/leaders-table-rifle/5"
                className={`${styles.exercise_item} 
                ${parseInt(tab) === 5 && styles.active}`}
              >
                / ВПРАВА №5
              </Link>
            </div>
          </div>

          <div className={styles.content}>
            {parseInt(tab) === 1 && <LeadersTableOne result={result} />}
            {parseInt(tab) === 2 && <LeadersTableTwo result={result} />}
            {parseInt(tab) === 3 && <LeadersTableThree result={result} />}
            {parseInt(tab) === 4 && <LeadersTableFour result={result} />}
            {parseInt(tab) === 5 && <LeadersTableFive result={result} />}
          </div>
        </div>
      </div>

      <Image className={styles.bg_bottom} src={bgBottom} alt="Muller Arms" />
    </div>
  )
}

export default LeadersTableRifle
