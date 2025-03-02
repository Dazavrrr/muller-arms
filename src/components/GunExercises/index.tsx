//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//images
import bgTop from '../../../public/images/gun-exercises-bg-top.webp'
import NavArrow from '../Icons/NavArrow'
import { getData } from '@/api'
import { Exercise } from '@/models/exercise'
import { ApiPath } from '@/common/enums'

const GunExercises = async () => {
  const { data } = await getData<Exercise[]>(ApiPath.GUN_EXERCISES)

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Link href="/qualifications" className={styles.nav_prev}>
            кваліфікація клубу
          </Link>
          <div>
            <NavArrow />
          </div>
          <Link href="/records" className={styles.nav_prev}>
            рекорди КЛУБУ
          </Link>
          <div>
            <NavArrow />
          </div>

          <p className={styles.nav_current}>завдання з пістолету</p>
        </div>
        <h2 className={styles.title}>завдання з ПІСТОЛЕТУ</h2>

        <div className={styles.cards}>
          {data?.map((item) => (
            <div key={item.pk} className={styles.card}>
              <div className={styles.text_wrapper}>
                <h3 className={styles.card_title}>{item.name}</h3>
                <p className={styles.text}>{item.description}</p>
              </div>
              <Link
                href={`/leaders-table-pistol/${item.pk}`}
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

        {/* <Image className={styles.bg_top} src={bgTop} alt="MullerArms" /> */}
      </div>
    </div>
  )
}

export default GunExercises
