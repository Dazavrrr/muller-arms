//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//images
import img from '../../../public/images/records-desc-image.webp'
import NavArrow from '../Icons/NavArrow'

const RecordsDescription = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Link href="/qualifications" className={styles.nav_prev}>
            кваліфікація клубу
          </Link>
          <NavArrow />
          <p className={styles.nav_current}>рекорди КЛУБУ</p>
        </div>

        <div className={styles.pages}>
          <Link href="/military" className={styles.page}>
            01. мілітарі класифікація
          </Link>

          <div className={styles.active}>
            <p className={styles.page_active}>02. Рекорди клубу</p>
            <div className={styles.border}></div>
          </div>
          <Link href="/rating" className={styles.page}>
            03. Кваліфікація /рейтинг <br /> спортсменів клубу
          </Link>
        </div>

        <div className={styles.content}>
          <div className={styles.title_wrapper}>
            <h3 className={styles.title}>що таке рекорди клубу?</h3>
            <div className={styles.text_wrapper}>
              <p className={styles.text}>
                Рекорди клубу це короткі й відносно нескладні вправи, які
                стрільці клубу виконують із певною перідочністю та мають
                можливість встановити власний рекорд. Такі вправи не мають
                чіткого спортивного чи прикладного забарвлення, вони суто
                базові, загальнотренувальні. Кожен стрілець має три спроби на
                виконання вправи, кращий результат вноситься в таблицю.
              </p>
              <p className={styles.text}>
                Такий рекорд неможливо встановити в тренувальному процесі. Для
                того щоб результат був внесений в таблицю, керівництвом клубу
                буде оголошено дату спеціального заходу, на якому будуть
                прострілюватись такі вправи. На такому заході має приймати
                участь щонайменше пʼять суперників
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

export default RecordsDescription
