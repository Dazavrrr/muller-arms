//styles
import styles from './styles.module.scss'
import { TableSlot } from '@/common/types'
import Image from 'next/image'
import firstPlace from '../../../public/icons/standings/first-place.svg'
import secondPlace from '../../../public/icons/standings/second-place.svg'
import thirdPlace from '../../../public/icons/standings/third-place.svg'
import moment from 'moment'

const LeadersTableFive = ({result}: {result:TableSlot[]}) => {
  return (
    <div className={styles.section}>
      <div className={styles.text_wrapper}>
        <h2 className={styles.title}>таблиця лідерів з ВПРАВА №5</h2>
        <p className={styles.text}>
          Шість мішеней IDPA розташовані в одній ліній, відстань між ними 20 см.
          Дистанція до мішеней 7 м. Стрілець стоїть розслаблено пістолет в
          кобурі, положення зброї №3, в підсумку магазин на із шістьма набоями.
          За сигналом таймера зарядити пістолет та здійснити по одному пострілу
          в кожну мішень. Підрахунок балів за системою Вікерса.
        </p>
      </div>

      <table>
        <caption>ВПРАВА №5</caption>
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
        {result.map((result,i) => (
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
  )
}

export default LeadersTableFive
