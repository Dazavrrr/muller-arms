//styles
import styles from './styles.module.scss'

const PolicyPrivacy = () => {
  return (
    <div className={styles.policy}>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>
          Політика конфіденційності компанії Muller Arms
        </h1>
        <p className={styles.text}>
          Ласкаво просимо на сторінку `&quot;`Політика конфіденційності`&quot;` веб-сайту
          компанії Muller Arms. Ми цінуємо вашу довіру та зобов`&apos;`язуємося
          забезпечувати найвищий рівень захисту вашої особистої інформації. Ця
          політика конфіденційності пояснює, яку інформацію ми збираємо, як ми
          використовуємо цю інформацію та як ви можете керувати своєю особистою
          інформацією.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Яка інформація збирається</h2>
          <div className={styles.texts}>
            <p className={styles.text}>
              Ми можемо збирати різну інформацію, включаючи, але не обмежуючись:
            </p>
            <p className={styles.text}>
              <span className={styles.bold}>Особиста інформація:</span> Якщо ви
              користуєтеся нашими послугами або реєструєтеся на веб-сайті, ми
              можемо збирати особисту інформацію, таку як ім&apos;я, контактні
              дані та інші ідентифікуючі дані
            </p>
            <p className={styles.text}>
              <span className={styles.bold}>
                Інформація від веб-сайту та файлів cookies:
              </span>{' '}
              Ми можемо автоматично збирати інформацію про ваш веб-браузер,
              IP-адресу, час відвідування та інші технічні дані за допомогою
              файлів cookies та подібних технологій.
            </p>
          </div>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Як ми використовуємо інформацію</h2>
          <div className={styles.texts}>
            <p className={styles.text}>
              Ми використовуємо вашу особисту інформацію для таких цілей:
            </p>
            <p className={styles.text}>
              <span className={styles.bold}>Надання послуг:</span> Забезпечення
              доступу до наших продуктів та послуг, виконання замовлень та
              надання інформації про наші товари.
            </p>
            <p className={styles.text}>
              <span className={styles.bold}>Забезпечення безпеки:</span> Захист
              вас та нашого веб-сайту від шахрайства та інших загроз.
            </p>
            <p className={styles.text}>
              <span className={styles.bold}>Покращення веб-сайту:</span> Аналіз
              та оптимізація роботи веб-сайту, враховуючи ваші вибори та
              інтереси.
            </p>
          </div>
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
          <h2 className={styles.subtitle}>Захист вашої інформації</h2>
          <p className={styles.text}>
            Ми вживаємо ряд заходів безпеки для захисту вашої особистої
            інформації від неправомірного доступу, втрати, розголошення чи
            знищення
          </p>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Ваші права та вибори</h2>
          <p className={styles.text}>
            Ви маєте право відмовитися від отримання рекламних повідомлень,
            змінити свою особисту інформацію та використовувати інші права,
            надані законодавством.
          </p>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Зміни в політиці конфіденційності</h2>
          <div className={styles.texts}>
            <p className={styles.text}>
              Ми можемо періодично оновлювати цю політику конфіденційності. Будь
              ласка, переглядайте цю сторінку для ознайомлення з останніми
              змінами.
            </p>
            <p className={styles.text}>
              Якщо у вас є питання чи коментарі щодо нашої політики
              конфіденційності, звертайтеся до нас за контактною інформацією
            </p>
          </div>
        </div>

        <p className={styles.text}>Дякуємо за вибір Muller Arms!</p>
      </div>
    </div>
  )
}

export default PolicyPrivacy
