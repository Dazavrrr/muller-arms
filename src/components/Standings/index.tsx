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

const Standings = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>турнірна таблиця</h2>
        <div className={styles.details}>
          <div className={styles.search}>
            <SearchIcon />
            <input
              className={styles.search_input}
              type="search"
              placeholder="Пошук"
            />
          </div>

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
            <tr>
              <td className={styles.places}>
                1{' '}
                <Image
                  className={styles.place_icon}
                  src={firstPlace}
                  alt="MullerArms"
                />
              </td>
              <td>Мельник Дар'я</td>
              <td>13.17 сек</td>
              <td>10.03</td>
              <td>примітка</td>
            </tr>
            <tr>
              <td className={styles.places}>
                2{' '}
                <Image
                  className={styles.place_icon}
                  src={secondPlace}
                  alt="MullerArms"
                />
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td className={styles.places}>
                3{' '}
                <Image
                  className={styles.place_icon}
                  src={thirdPlace}
                  alt="MullerArms"
                />
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>4</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>5</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
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
