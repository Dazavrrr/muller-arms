//libs
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
import NavArrow from '../Icons/NavArrow'
import { getData } from '@/api'
import { Exercise } from '@/models/exercise'
import { ApiPath } from '@/common/enums'

const RifleExercises = async () => {
  const { data: exercises } = await getData<Exercise[]>(ApiPath.RIFLE_EXERCISES)

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
          <Link className={styles.nav_prev} href="/records">
            рекорди КЛУБУ
          </Link>
          <div>
            <NavArrow />
          </div>
          <p className={styles.nav_current}>завдання з карабіну</p>
        </div>

        <h2 className={styles.title}>завдання з карабіну</h2>

        <div className={styles.cards}>
          {exercises?.map((item) => (
            <div key={item.pk} className={styles.card}>
              <div className={styles.text_wrapper}>
                <h3 className={styles.card_title}>{item.name}</h3>
                <p className={styles.text}>{item.description}</p>
              </div>
              <Link
                href={`/leaders-table-rifle/${item.pk}`}
                className={styles.button}
                type="button"
              >
                Результати
              </Link>
            </div>
          ))}
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
      </div>
    </div>
  )
}

export default RifleExercises
