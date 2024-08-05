//styles
import styles from './styles.module.scss'

const LeadersTableOne = () => {
  return (
    <div className={styles.section}>
      <div className={styles.text_wrapper}>
        <h2 className={styles.title}>таблиця лідерів з ВПРАВА №1</h2>
        <p className={styles.text}>
          Пістолет в кобурі прихованого носіння (без будь яких демаскуючих
          ознак). Положення зброї №2, в магазині лише пʼять набоїв. Дистанція до
          мішені 7 метрів. За сигналом таймера зарядити зброю та здійснити пʼять
          пострілів в зону альфа мішені IDPA. Рахунок балів за системою Вікерса.
        </p>
      </div>

      <table>
        <caption>ВПРАВА №1</caption>
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

export default LeadersTableOne
