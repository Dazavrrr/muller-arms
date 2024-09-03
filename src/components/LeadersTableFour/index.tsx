//styles
import styles from './styles.module.scss'
import { TableSlot } from '@/common/types'
import Image from 'next/image'
import firstPlace from '../../../public/icons/standings/first-place.svg'
import secondPlace from '../../../public/icons/standings/second-place.svg'
import thirdPlace from '../../../public/icons/standings/third-place.svg'
import moment from 'moment'

const LeadersTableFour = ({result}: {result:TableSlot[]}) => {
  return (
    <div className={styles.section}>
      <div className={styles.text_wrapper}>
        <h2 className={styles.title}>таблиця лідерів з ВПРАВА №4</h2>
        <p className={styles.text}>
          Дві мішені IDPA. Дистанція до першої мішені 5 метрів, до другої 10 м.
          Пістолет в кобурі, положення зброї №1, курок знятий з бойового взводу
          (в магазині чотири набої). В підсумку додатковий магазин із пʼятьма
          набоями. За сигналом таймера здійснити пʼять пострілів в ближню
          мішень, після чого здійснити екстрену заміну магазину, та пʼять
          пострілів в дальню мішень. Підрахунок балів за системою Вікерса.
        </p>
      </div>

      <table>
        <caption>ВПРАВА №4</caption>
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
          <tr>
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

export default LeadersTableFour
