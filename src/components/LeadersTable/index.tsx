
//libs
import Link from 'next/link'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import NavArrow from '../Icons/NavArrow'
import bgBottom from '../../../public/images/leaders-table-bg-bottom.webp'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import { fetchAllClassifications } from '@/store/slices/TableSlots.slice'
import firstPlace from '../../../public/icons/standings/first-place.svg'
import secondPlace from '../../../public/icons/standings/second-place.svg'
import thirdPlace from '../../../public/icons/standings/third-place.svg'
import moment from 'moment/moment'

const LeadersTable = () => {

  const dispatch = useAppDispatch();
  const results = useAppSelector(state => state.TableSlots.slots);

  useEffect(() => {
    dispatch(fetchAllClassifications());
  }, [])

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Link className={styles.nav_prev} href="/qualifications">
            кваліфікація клубу
          </Link>
          <div>
            <NavArrow />
          </div>
          <Link className={styles.nav_prev} href="/rating">
            КВАЛІФІКАЦІЯ/РЕЙТИНГ СПОРТСМЕНІВ КЛУБУ
          </Link>
          <div>
            <NavArrow />
          </div>
          <p className={styles.nav_current}>таблиця лідерів</p>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>ТАБЛИЦЯ лідерів учасників</h1>
          <h2 className={styles.subtitle}>
            КВАЛІФІКАЦІЯ/РЕЙТИНГ СПОРТСМЕНІВ КЛУБУ
          </h2>

          <table>
            <caption>таблиця</caption>
            <thead>
              <tr>
                <th className={styles.place}>МІСЦЕ</th>
                <th className={styles.name}>ІМ’Я ТА ПРІЗВИЩЕ</th>
                <th className={styles.time}>ЧАС ВИКОНАННЯ ВПРАВИ</th>
                <th className={styles.date}>
                  ДАТА ОСТАННЬОГО ВИКОНАННЯ ВПРАВИ
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
        </div>
      </div>
      {/* <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" /> */}
    </div>
  )
}

export default LeadersTable
