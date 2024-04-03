//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//types
import { TrainingResponse } from '@/common/types'



const TrainingAdminCard = ({ training } : { training : TrainingResponse }) => {
  return (
    <div className={styles.container}>
      <Image width={280} height={320} src={training.image} alt={training.name} className={styles.image}/>
      <div className={styles.info}>
        <div>
          <p className={styles.name}>{training.name}</p>
          <p className={styles.desc}>{training.description}</p>
          <p className={styles.text}>Погодинні тренування: {training.isFlexible ? 'Так' : 'Ні'}</p>
          <p className={styles.text}>Ціна за год. <span>{training.pricePerHour}</span> / передплата <span>{training.prepay}</span></p>
        </div>
        <Link href={`/admin/trainings/${training.id}`} className={global.primaryBtn}>Редагувати</Link>
      </div>
    </div>
  )
}

export default TrainingAdminCard
