//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//icons
import line from '../../../public/icons/ourSetOfExercises/line-dots.svg'
import lineMob from '../../../public/icons/ourSetOfExercises/line-dots-mob.svg'
import icon1 from '../../../public/icons/ourSetOfExercises/icon-1.svg'
import icon2 from '../../../public/icons/ourSetOfExercises/icon-2.svg'
import icon3 from '../../../public/icons/ourSetOfExercises/icon-3.svg'

const OurSetOfExercises = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>наш комплекс вправ</h2>
        <div className={styles.content_wrapper}>
          <Image className={styles.line} src={line} alt="MullerArms shooting" />
          <Image
            className={styles.line_mob}
            src={lineMob}
            alt="MullerArms shooting"
          />

          <div className={styles.exercises}>
            <div className={styles.exercise}>
              <Image
                className={styles.icon}
                src={icon1}
                alt="MullerArms shooting"
              />
              <p className={styles.subtitle}>
                Вправа 1: <br /> Зміна Позицій
              </p>
              <Link className={styles.link} href="/exercises">
                детальніше
              </Link>
            </div>
            <div className={styles.exercise}>
              <Image
                className={styles.icon}
                src={icon2}
                alt="MullerArms shooting"
              />
              <p className={styles.subtitle}>
                Вправа 2: <br /> Тактичні переміщення
              </p>
              <Link className={styles.link} href="/exercises">
                детальніше
              </Link>
            </div>
            <div className={styles.exercise}>
              <Image
                className={styles.icon}
                src={icon3}
                alt="MullerArms shooting"
              />
              <p className={styles.subtitle}>
                Вправа 3: <br /> Динамічна стрільба
              </p>
              <Link className={styles.link} href="/exercises">
                детальніше
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.text_wrapper}>
          <p className={styles.text}>
            Вправи МІЛІТАРІ КЛАСИФІКАЦІї включають усі основні елементи, якими
            має володіти стрілець. Після проходження класифікації стрілець може
            проаналізувати свої найслабші сторони та побудувати відповідний план
            тренувань. Запрошуємо вас приєднатися до нашого навчального процесу
            та отримати цінний досвід для подальшого успішного розвитку.
          </p>
          <Link href="/booking" className={styles.button}>
            ЗАПИСАТИСЯ НА ПІДГОТОВЧі ЗАНЯТТЯ
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OurSetOfExercises
