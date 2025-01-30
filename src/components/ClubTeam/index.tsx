//styles
import styles from './styles.module.scss'
//images
import Image from 'next/image'
import img from '../../../public/images/club/IMG_9414.webp'

const ClubTeam = () => {
  return (
    <div className={styles.section}>
      <div className={styles.text_wrapper}>
        <h2 className={styles.title}>Як стати частиною нашої команди?</h2>
        <p className={styles.text}>
          <span className={styles.bold}>Щоб отримати статус резидента:</span>{' '}
          Відвідати індивідуальні тренування (18–20 годин за 2–3 місяці). Після
          успішного прогресу тренер допускає до групових тренувань, де
          починається самостійний аналіз та вдосконалення. Здати іспит-залікову
          вправу. Написати заяву на вступ до клубу та Федерації практичної
          стрільби України. Пройти вступний семінар ФПСУ та сплатити річний
          внесок. Замовити фірмовий джерсі. Отримати книжку спортсмена та стати
          резидентом!
        </p>
      </div>

      <Image
        src={img}
        className={styles.img}
        width={400}
        alt="MullerArms group"
      />
    </div>
  )
}

export default ClubTeam
