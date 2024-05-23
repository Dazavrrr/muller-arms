//styles
import styles from './styles.module.scss'

const PolicyUsage = () => {
  return (
    <div className={styles.policy}>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>
          Політика використання файлів cookies компанією Muller Arms
        </h1>
        <p className={styles.text}>
          Ласкаво просимо на сторінку "Cookies" веб-сайту компанії Muller Arms.
          Наша компанія використовує файли cookies та інші технології для
          забезпечення найкращого користувацького досвіду та оптимізації роботи
          нашого веб-сайту.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>Що таке файли cookies?</h2>
          <p className={styles.text}>
            Файли cookies - це невеликі текові файли, які зберігаються на вашому
            пристрої під час відвідування веб-сайту. Вони дозволяють нам збирати
            різну інформацію, таку як ваші вподобання та налаштування, щоб
            забезпечити вам персоналізований та ефективний досвід користувача.
          </p>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>
            Які файли cookies ми використовуємо?
          </h2>
          <div className={styles.texts}>
            <p className={styles.text}>
              Ці файли необхідні для коректної роботи веб-сайту. Вони дозволяють
              вам переглядати сторінки та використовувати основні функції.
            </p>
            <p className={styles.text}>
              Ми використовуємо файли cookies для збору інформації про те, як ви
              використовуєте наш веб-сайт. Це допомагає нам аналізувати та
              покращувати роботу нашого ресурсу.
            </p>
            <p className={styles.text}>
              Ці файли допомагають нам запам'ятовувати ваші вибори та
              предпочтения, забезпечуючи вам більш зручний та персоналізований
              досвід.
            </p>
          </div>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>
            Як ви можете керувати файлами cookies?
          </h2>
          <p className={styles.text}>
            Ви можете керувати налаштуваннями файли cookies через налаштування
            свого браузера. Будь ласка, звертайте увагу, що вимкнення або
            обмеження використання файлів cookies може призвести до обмеження
            функціональності веб-сайту.
          </p>
        </div>

        <div className={styles.text_wrapper}>
          <h2 className={styles.subtitle}>
            Які файли cookies ми використовуємо?
          </h2>
          <div className={styles.texts}>
            <p className={styles.text}>
              Ми можемо час від часу оновлювати цю політику cookies, оголошуючи
              зміни на цій сторінці. Рекомендуємо періодично переглядати цю
              сторінку, щоб бути в курсі будь-яких змін.
            </p>
            <p className={styles.text}>
              Якщо у вас виникають будь-які питання або необхідна додаткова
              інформація щодо нашої політики використання файлів cookies,
              звертайтеся до нас за контактною інформацією
            </p>
          </div>
        </div>

        <p className={styles.text}>Дякуємо за вибір Muller Arms!</p>
      </div>
    </div>
  )
}

export default PolicyUsage
