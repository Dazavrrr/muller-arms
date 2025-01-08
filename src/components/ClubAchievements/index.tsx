//styles
import styles from './styles.module.scss'
//img
import Image from 'next/image'
import img from '../../../public/images/club/IMG_4726.webp'

const ClubAchievements = () => {
  return (
    <div className={styles.section}>
      <Image
        src={img}
        className={styles.img}
        width={400}
        alt="MullerArms group"
      />
      <div className={styles.text_wrapper}>
        <h2 className={styles.title}>Наші досягнення у 2024 році:</h2>
        <p className={styles.text}>
          Участь у 28 всеукраїнських та регіональних змаганнях. Команди клубу
          здобули 2 та 3 місця на етапах Кубка України. Два кандидати в майстри
          спорту України за рік. Найактивніша команда в Україні – до 20%
          учасників на всеукраїнських матчах. Проведено понад 45
          внутрішньоклубних матчів та челенджів.
        </p>
        <p className={styles.text}>Благодійність – одна з наших цінностей.</p>
        <p className={styles.text}>
          Клуб MullerArms активно підтримує українських захисників: Забезпечили
          підрозділ розвідки НГУ автівкою та необхідним обладнанням.
          Організували два благодійних тренування, завдяки яким було придбано
          авто для 148-ї окремої артилерійської бригади. Завдяки партнерству з
          Platforma Charity зібрали 2,2 млн грн та передали на підтримку
          військових та гуманітарних організацій.
        </p>
      </div>
    </div>
  )
}

export default ClubAchievements
