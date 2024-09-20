//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//images
import bgTop from '../../../public/images/gun-exercises-bg-top.webp'

const GunExercises = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>завдання з ПІСТОЛЕТУ</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.text_wrapper}>
              <h3 className={styles.card_title}>Вправа №1</h3>
              <p className={styles.text}>
                Пістолет в кобурі прихованого носіння (без будь яких демаскуючих
                ознак). Положення зброї №2, в магазині лише пʼять набоїв.
                Дистанція до мішені 7 метрів. За сигналом таймера зарядити зброю
                та здійснити пʼять пострілів в зону альфа мішені IDPA. Рахунок
                балів за системою Вікерса.
              </p>
            </div>
            <button className={styles.button} type="button">
              Результати
            </button>
          </div>
          <div className={styles.card}>
            <div className={styles.text_wrapper}>
              <h3 className={styles.card_title}>Вправа №2</h3>
              <p className={styles.text}>
                Мішень IDPA. Дистанція 7 метрів. Пістолет лежить на бочці
                розряджений, затворна затримка заборонена, поруч на бочці
                магазин і один набій (розташовані на розсуд стрільця). Стрілець
                стоїть як завгодно не торкаючись зброї, магазину та нобоїв. За
                сигналом таймера зарядити пістолет та здійснити один постріл.
                Підрахунок балів за системою Вікерса
              </p>
            </div>
            <button className={styles.button} type="button">
              Результати
            </button>
          </div>
          <div className={styles.card}>
            <div className={styles.text_wrapper}>
              <h3 className={styles.card_title}>Вправа №3</h3>
              <p className={styles.text}>
                Дві мішені IDPA. Відстань між ними 1 метр. Дистанція до мішеней
                7 метрів. Стрілець утримує в руках gscnjktn із порожнім
                магазином на затворній затримці, при цьому цілиться в праву
                мішень. За сигналом таймера здійснити екстрену заміну магазину,
                перенос на ліву мішень та один постріл. Підрахунок балів за
                системою Вікерса.
              </p>
            </div>
            <button className={styles.button} type="button">
              Результати
            </button>
          </div>
          <div className={styles.card}>
            <div className={styles.text_wrapper}>
              <h3 className={styles.card_title}>Вправа №4</h3>
              <p className={styles.text}>
                Дві мішені IDPA. Дистанція до першої мішені 5 метрів, до другої
                10 м. Пістолет в кобурі, положення зброї №1, курок знятий з
                бойового взводу (в магазині чотири набої). В підсумку додатковий
                магазин із пʼятьма набоями. За сигналом таймера здійснити пʼять
                пострілів в ближню мішень, після чого здійснити екстрену заміну
                магазину, та пʼять пострілів в дальню мішень. Підрахунок балів
                за системою Вікерса.
              </p>
            </div>
            <button className={styles.button} type="button">
              Результати
            </button>
          </div>
          <div className={styles.card}>
            <div className={styles.text_wrapper}>
              <h3 className={styles.card_title}>Вправа №5</h3>
              <p className={styles.text}>
                Шість мішеней IDPA розташовані в одній ліній, відстань між ними
                20 см. Дистанція до мішеней 7 м. Стрілець стоїть розслаблено
                пістолет в кобурі, положення зброї №3, в підсумку магазин на із
                шістьма набоями. За сигналом таймера зарядити пістолет та
                здійснити по одному пострілу в кожну мішень. Підрахунок балів за
                системою Вікерса.
              </p>
            </div>
            <button className={styles.button} type="button">
              Результати
            </button>
          </div>
          <div className={styles.card_advice}>
            <div className={styles.text_wrapper}>
              <h3 className={styles.card_title_advice}>НЕ ЗНАЄТЕ ЩО ОБРАТИ?</h3>
              <p className={styles.text_advice}>
                ДОПОМОЖЕМО ПІДІБРАТИ ВПРАВУ, ЯКА ВАМ ПІДІЙДЕ, залиште контактні
                дані і ми зв’яжемося з вами
              </p>
            </div>
            <button className={styles.button_advice} type="button">
              Отримати пораду
            </button>
          </div>
        </div>

        <Link href="/leaders-table-pistol" className={styles.complete_table}>
          ПЕРЕГЛЯНУТИ ВСЮ ТАБЛИЦЮ
        </Link>

        <Image className={styles.bg_top} src={bgTop} alt="MullerArms" />
      </div>
    </div>
  )
}

export default GunExercises
