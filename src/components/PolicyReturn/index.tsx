//styles
import styles from './styles.module.scss'

const PolicyReturn = () => {
  return (
    <div className={styles.policy}>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>
          Політика повернення товару в Muller Arms
        </h1>
        <p className={styles.text}>
          Ласкаво просимо на сторінку "Політика повернення товару" тиру Muller
          Arms. Наша компанія зобов'язана забезпечити задоволеність та високий
          рівень обслуговування для наших клієнтів. Ця політика визначає умови
          та процедури повернення товару.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Правила повернення</h2>
          <div className={styles.texts}>
            <p className={styles.text}>
              <span className={styles.bold}>Строки повернення:</span> Клієнти
              мають право на повернення товару протягом 14 днів з моменту
              придбання.
            </p>
            <p className={styles.text}>
              <span className={styles.bold}>Стан товару:</span> Товар повинен
              бути в оригінальній упаковці та непошкодженим. Ми залишаємо за
              собою право відхилити повернення, якщо товар був використаний або
              пошкоджений.
            </p>
          </div>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Процедура повернення</h2>
          <div className={styles.texts}>
            <p className={styles.text}>
              <span className={styles.bold}>Повідомлення:</span> Перед
              поверненням товару, будь ласка, повідомте нас про свої наміри,
              звернувшись за контактною інформацією
            </p>
            <p className={styles.text}>
              <span className={styles.bold}>Упакування:</span> Забезпечте
              належне упакування товару для запобігання можливим пошкодженням
              під час транспортування.
            </p>
            <p className={styles.text}>
              <span className={styles.bold}>Повернення витрат:</span> Клієнт
              відповідає за витрати на повернення товару, якщо інше не зазначено
              індивідуально.
            </p>
          </div>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Обробка повернення</h2>
          <div className={styles.texts}>
            <p className={styles.text}>
              <span className={styles.bold}>Перевірка стану товару:</span> Після
              отримання поверненого товару ми проведемо перевірку його стану.
              Якщо товар відповідає умовам повернення, ми здійснимо повернення
              коштів або обмін товару протягом 14 днів.
            </p>
            <p className={styles.text}>
              <span className={styles.bold}>Повернення коштів:</span> Повернення
              коштів здійснюється за допомогою того ж методу оплати, яким була
              здійснена покупка.
            </p>
          </div>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Винятки</h2>
          <p className={styles.text}>
            <span className={styles.bold}>Зброя та боєприпаси:</span> У зв'язку
            із законодавством та правилами безпеки, повернення зброї та
            боєприпасів не приймаються, за винятком випадків фабричного дефекту
            або несумісності з технічними характеристиками.
          </p>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Звернення</h2>
          <p className={styles.text}>
            <span className={styles.bold}>Контактна інформація:</span> Якщо у
            вас є питання чи коментарі стосовно політики повернення товару, будь
            ласка, звертайтеся до нас за контактною інформацією
          </p>
        </div>

        <p className={styles.text}>Дякуємо за вибір Muller Arms!</p>
      </div>
    </div>
  )
}

export default PolicyReturn
