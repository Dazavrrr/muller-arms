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

          <p className={styles.complete_table}>
            хочете отримати повноцінну таблицю?
          </p>
        </div>

        <table>
          <caption>таблиця</caption>
          <thead>
            <tr>
              <th>МІСЦЕ</th>
              <th>ІМ’Я ТА ПРІЗВИЩЕ</th>
              <th>ЧАС ВИКОНАННЯ ВПРАВИ</th>
              <th>
                ДАТА ОСТАННЬОГО <br /> ВИКОНАННЯ ВПРАВИ
              </th>
              <th>ПРИМІТКИ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1 <Image src={firstPlace} alt="MullerArms" />
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                2 <Image src={secondPlace} alt="MullerArms" />
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                3 <Image src={thirdPlace} alt="MullerArms" />
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
      </div>
    </div>
  )
}

export default Standings
