//libs
import Link from 'next/link'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import NavArrow from '../Icons/NavArrow'
import bgBottom from '../../../public/images/leaders-table-bg-bottom.webp'

const LeadersTable = () => {
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
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>3</td>
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
              <tr>
                <td>6</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>7</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>8</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>9</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>10</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" /> */}
    </div>
  )
}

export default LeadersTable
