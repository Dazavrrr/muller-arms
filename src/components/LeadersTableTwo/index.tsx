//styles
import styles from './styles.module.scss'

const LeadersTableTwo = () => {
  return (
    <div className={styles.section}>
      <div className={styles.text_wrapper}>
        <h2 className={styles.title}>таблиця лідерів з ВПРАВА №2</h2>
        <p className={styles.text}>
          Мішень IDPA. Дистанція 7 метрів. Пістолет лежить на бочці розряджений,
          затворна затримка заборонена, поруч на бочці магазин і один набій
          (розташовані на розсуд стрільця). Стрілець стоїть як завгодно не
          торкаючись зброї, магазину та нобоїв. За сигналом таймера зарядити
          пістолет та здійснити один постріл. Підрахунок балів за системою
          Вікерса
        </p>
      </div>

      <table>
        <caption>ВПРАВА №2</caption>
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
          <tr>
            <td>1</td>
            <td>Мельник Дар'я</td>
            <td>25.37 сек</td>
            <td>20.01.2024</td>
            <td>ПРИМІТКА</td>
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
  )
}

export default LeadersTableTwo
