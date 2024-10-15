'use client'
//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//icons
import SearchIcon from '../Icons/Search'
import firstPlace from '../../../public/icons/standings/first-place.svg'
import secondPlace from '../../../public/icons/standings/second-place.svg'
import thirdPlace from '../../../public/icons/standings/third-place.svg'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchAllClassifications } from '@/store/slices/TableSlots.slice'
import moment from 'moment'

const Standings = () => {

  const dispatch = useAppDispatch();
  const results = useAppSelector(state => state.TableSlots.slots);

  useEffect(() => {
    dispatch(fetchAllClassifications());
  }, [])

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>турнірна таблиця</h2>
        <div className={styles.details}>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.complete_table}
          >
            хочете отримати повноцінну таблицю?
          </a>
        </div>

        <table>
          <caption>таблиця</caption>
          <thead>
            <tr>
              <th className={styles.place}>МІСЦЕ</th>
              <th className={styles.name}>ІМ’Я ТА ПРІЗВИЩЕ</th>
              <th className={styles.time}>ЧАС ВИКОНАННЯ ВПРАВИ</th>
              <th className={styles.date}>
                ДАТА ОСТАННЬОГО <br /> ВИКОНАННЯ ВПРАВИ
              </th>
              <th className={styles.notes}>ПРИМІТКИ</th>
            </tr>
          </thead>
          <tbody>
          {results.map((result,i) => (
            <tr key={i}>
              <td className={styles.places}>
                {i + 1}
                {i + 1 === 1 ? <Image
                  className={styles.place_icon}
                  src={firstPlace}
                  alt="MullerArms"
                /> : i + 1 === 2 ? <Image
                  className={styles.place_icon}
                  src={secondPlace}
                  alt="MullerArms"
                /> : i + 1 === 3 ? <Image
                  className={styles.place_icon}
                  src={thirdPlace}
                  alt="MullerArms"
                /> : <></>}
              </td>
              <td>{result.name}</td>
              <td>{result.finishTime}</td>
              <td>{moment(result.lastTryDate).format("DD.MM.YYYY")}</td>
              <td>{result.description}</td>
            </tr>
          ))}
          </tbody>
        </table>

        <p className={styles.complete_table_mob}>
          хочете отримати повноцінну таблицю?
        </p>
      </div>
    </div>
  )
}

export default Standings
