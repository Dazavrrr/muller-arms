//libs
import Link from 'next/link'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import bgTop from '../../../public/images/qualifications/other-qualifications-bg-top.webp'
import bgBottom from '../../../public/images/qualifications/other-qualifications-bg-bottom.webp'

const OtherOurQualifications = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          ознайомтеся з нашими іншими кваліфікаціями
        </h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.card_title}> мілітарі класифікація</h3>
            <div className={styles.text_wrapper}>
              <p className={styles.text}>
                Класифікація це фіксований і стандартизований комплекс вправ з
                карабіну, який усі бажаючі можуть прострілювати із певною
                періодичнстю
              </p>
              <Link className={styles.link} href="/qualifications">
                ДЕТАЛЬНІШЕ
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.card_title}>рекорди клубу</h3>
            <div className={styles.text_wrapper}>
              <p className={styles.text}>
                Рекорди клубу це короткі й відносно нескладні вправи, які
                стрільці клубу виконують із певною перідочністю та мають
                можливість встановити власний рекорд
              </p>
              <Link className={styles.link} href="/qualifications">
                ДЕТАЛЬНІШЕ
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.card_title}>
              КВАЛІФІКАЦІЯ/РЕЙТИНГ <br /> СПОРТСМЕНІВ КЛУБУ
            </h3>
            <div className={styles.text_wrapper}>
              <p className={styles.text}>
                Дана кваліфікація складіється лише із однієї вправи середньої
                складності та показує загальний рейтинг й рівень усіх стрільців
                нашого клубу. Це по суті головний рекорд клубу
              </p>
              <Link className={styles.link} href="/qualifications">
                ДЕТАЛЬНІШЕ
              </Link>
            </div>
          </div>
        </div>

        <Image className={styles.bg_top} src={bgTop} alt="MullerArms" />
        <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" />
      </div>
    </div>
  )
}

export default OtherOurQualifications
