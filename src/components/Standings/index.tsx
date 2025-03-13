//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//icons
import firstPlace from '../../../public/icons/standings/first-place.svg'
import secondPlace from '../../../public/icons/standings/second-place.svg'
import thirdPlace from '../../../public/icons/standings/third-place.svg'
import moment from 'moment'
import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import { Qualification } from '@/models/qualification'

const Standings = async () => {
  const { data } = await getData<Qualification>(ApiPath.MILITARY)

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

        <div className={styles.table_wrapper}>
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
              {data?.performer.map((result, i) => (
                <tr key={i}>
                  <td>
                    <div className={styles.places}>
                      {i + 1}
                      {i + 1 === 1 ? (
                        <Image
                          className={styles.place_icon}
                          src={firstPlace}
                          alt="MullerArms"
                        />
                      ) : i + 1 === 2 ? (
                        <Image
                          className={styles.place_icon}
                          src={secondPlace}
                          alt="MullerArms"
                        />
                      ) : i + 1 === 3 ? (
                        <Image
                          className={styles.place_icon}
                          src={thirdPlace}
                          alt="MullerArms"
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  </td>
                  <td>{result.full_name}</td>
                  <td>{result.perf_time}</td>
                  <td>
                    {moment(result.last_performance).format('DD.MM.YYYY')}
                  </td>
                  <td>{result.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.complete_table_mob}>
          хочете отримати повноцінну таблицю?
        </p>
      </div>
    </div>
  )
}

export default Standings
