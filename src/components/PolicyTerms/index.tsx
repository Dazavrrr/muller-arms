//styles
import styles from './styles.module.scss'

const PolicyTerms = () => {
  return (
    <div className={styles.policy}>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>
          Умови користування веб-сайтом Muller Arms
        </h1>
        <p className={styles.text}>
          Ласкаво просимо на сторінку `&quot;`Умови користування`&quot;` веб-сайту Muller
          Arms. Перед тим, як ви скористаєтеся нашими послугами, рекомендуємо
          уважно прочитати ці умови, оскільки вони встановлюють правила та
          обов`&apos;`язки при користуванні нашими послугами та веб-сайтом
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Прийняття умов</h2>
          <p className={styles.text}>
            Користуючись веб-сайтом Muller Arms, ви погоджуєтесь з усіма
            умовами, визначеними на цій сторінці. Якщо ви не згодні з будь-якою
            частиною цих умов, утримуйтеся від використання нашого веб-сайту.
          </p>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Правила безпеки</h2>
          <p className={styles.text}>
            <span className={styles.bold}>Використання зброї:</span> Користувачі
            зобов`&apos;`язані дотримуватися всіх правил безпеки під час використання
            зброї на тирі Muller Arms. Дотримуйтеся інструкцій та рекомендацій
            інструкторів.
          </p>
          <p className={styles.text}>
            <span className={styles.bold}>Заборона на сп`&apos;`яніння:</span>{' '}
            Заборонено використовувати тир у стані алкогольного чи наркотичного
            сп`&apos;`яніння.
          </p>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>
            Розкриття інформації третім сторонам
          </h2>
          <p className={styles.text}>
            Ми не розкриваємо вашу особисту інформацію третім сторонам без
            вашого згоди, за винятком випадків, передбачених законом.
          </p>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Відмова від відповідальності</h2>
          <p className={styles.text}>
            <span className={styles.bold}>Точність інформації:</span> Ми робимо
            все можливе для забезпечення точності інформації на веб-сайті, але
            не несемо відповідальності за можливі неточності чи зміни.
          </p>
          <p className={styles.text}>
            <span className={styles.bold}>Збої та перерви:</span> Ми не
            гарантуємо, що веб-сайт буде безперервно доступним та без помилок.
            Ми можемо вносити зміни та відключати доступ за потреби.
          </p>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Зміни умов</h2>
          <p className={styles.text}>
            <span className={styles.bold}>Оновлення умов:</span> Ми можемо
            періодично оновлювати ці умови. Продовжуючи користуватися веб-сайтом
            після змін, ви виражаєте свою згоду з оновленими умовами.
          </p>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Контакти</h2>
          <p className={styles.text}>
            <span className={styles.bold}>Звертання:</span> Якщо у вас виникають
            питання чи коментарі щодо умов користування, звертайтеся до нас за
            контактною інформацією
          </p>
        </div>

        <p className={styles.text}>Дякуємо за вибір Muller Arms!</p>
      </div>
    </div>
  )
}

export default PolicyTerms
