//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//images
import img from '../../../public/images/military/military-desc-image.webp'
import NavArrow from '../Icons/NavArrow'

const MilitaryDescription = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Link href="/qualifications" className={styles.nav_prev}>
            кваліфікація клубу
          </Link>
          <NavArrow />
          <p className={styles.nav_current}>мілітарі класифікація</p>
        </div>

        <div className={styles.pages}>
          <div className={styles.active}>
            <p className={styles.page_active}>01. мілітарі класифікація</p>
            <span className={styles.border}></span>
          </div>

          <Link href="/records" className={styles.page}>
            02. Рекорди клубу
          </Link>
          <Link href="/rating" className={styles.page}>
            03. Кваліфікація /рейтинг <br /> спортсменів клубу
          </Link>
        </div>

        <div className={styles.content}>
          <div className={styles.title_wrapper}>
            <h3 className={styles.title}>що таке мілітарі класифікація?</h3>
            <div className={styles.text_wrapper}>
              <p className={styles.text}>
                Класифікація це фіксований і стандартизований комплекс вправ з{' '}
                <span className={styles.bold}>карабіну</span>, який усі бажаючі
                можуть прострілювати із певною періодичнстю, та спостерігати за
                власною прогресією чи навпаки, виявляти, аналізувати та
                опрацьовувати помилки.
              </p>
              <p className={styles.text}>
                Класификацію, із певною періодичністю, прострілюють стрільці,
                які мають відношення до військової служби та інших мілітарі
                формувань, або ентузіастів у повному екіпіруванні (каска,
                плитоноска, РПС). Класифікація показує рівень майстерності
                стрільця, дає можливість йому порівняти себе із іншими а також
                отримати відповідний клас стрільця
              </p>
            </div>

            <button className={styles.button} type="button">
              ЗАРЕЄСТРУВАТИСЯ
            </button>
          </div>
          <Image className={styles.image} src={img} alt="MullerArms training" />
        </div>
      </div>
    </div>
  )
}

export default MilitaryDescription
