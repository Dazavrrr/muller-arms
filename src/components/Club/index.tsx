//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//components
import ClubAchievements from '../ClubAchievements'
import ClubTeam from '../ClubTeam'
import ClubValues from '../ClubValues'

const Club = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Клуб MullerArms: Разом до успіху, розвитку та добрих справ
        </h1>

        <ClubValues />
        <ClubAchievements />
        <ClubTeam />

        <p className={styles.bold_text}>
          MullerArms – це більше, ніж стрілецький клуб. Це спільнота, яка
          мотивує до розвитку, об’єднує для досягнення великих цілей і змінює
          світ навколо себе.
        </p>
      </div>
    </div>
  )
}

export default Club
