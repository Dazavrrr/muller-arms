//styles
import styles from './styles.module.scss'
import Image from 'next/image'
import firstPlace from '../../../public/icons/standings/first-place.svg'
import secondPlace from '../../../public/icons/standings/second-place.svg'
import thirdPlace from '../../../public/icons/standings/third-place.svg'
import moment from 'moment/moment'
import { Performer } from '@/models/performer'
import { Exercise } from '@/models/exercise'

const LeadersTableOne = ({
  performers,
  exercise,
}: {
  performers?: Performer[]
  exercise?: Exercise
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.text_wrapper}>
        <h2 className={styles.title}>{exercise?.name}</h2>
        <p className={styles.text}>{exercise?.description}</p>
      </div>

      <div className={styles.table_wrapper}>
        <table>
          <caption>{exercise?.name}</caption>
          <thead>
            <tr>
              <th className={styles.place}>МІСЦЕ</th>
              <th className={styles.name}>ІМ’Я ТА ПРІЗВИЩЕ</th>
              <th className={styles.time}>ЧАС ВИКОНАННЯ ВПРАВИ</th>
              <th className={styles.date}>ДАТА ОСТАННЬОГО ВИКОНАННЯ ВПРАВИ</th>
              <th className={styles.notes}>ПРИМІТКИ</th>
            </tr>
          </thead>
          <tbody>
            {performers?.map((result, i) => (
              <tr key={i}>
                <td className={styles.places}>
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
                </td>
                <td>{result.full_name}</td>
                <td>{result.perf_time}</td>
                <td>{moment(result.last_performance).format('DD.MM.YYYY')}</td>
                <td>{result.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeadersTableOne
