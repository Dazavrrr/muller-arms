import Image from 'next/image'
import { TrainerResponse } from '@/types'
//styles
import styles from './styles.module.scss'
//images
import instagram from '../../../public/images/booking/instagram.svg'
import moment from 'moment'



const TrainerBookCard = ({trainer}:{trainer: TrainerResponse}) => {

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image width={196} height={392} src={trainer.image} alt={`${trainer.firstName} ${trainer.lastName}`}/>
      </div>
      <div className={styles.info}>
        <div className={styles.info_header}>
          <a href={trainer.instagramLink}
             target={'_blank'} rel="noreferrer">{trainer.instagramName} <Image src={instagram} alt={"instagram icon"} /></a>

          <div className={styles.checkbox_wrapper}>
            <input type="checkbox" id={trainer.id.toString()} />
            <label htmlFor={trainer.id.toString()}>
              <svg viewBox="0,0,50,50">
                <path d="M5 30 L 20 45 L 45 5"></path>
              </svg>
            </label>
          </div>
        </div>
        <p className={styles.name}>{trainer.firstName} {trainer.lastName}</p>
        <p className={styles.desc}>{trainer.description}</p>
        <div className={styles.close_dates}>
          <p>
            Найближчий час для запису:
            {moment(trainer.upcomingTimeSlots[0].dateTime).locale('ua-UA')
              .format("DD MMMM YYYY").toUpperCase()}
            <div className={styles.slot_list}>
              {trainer.upcomingTimeSlots.map(t => (
                <div key={t.id} className={styles.timeSlot}>{moment(t.dateTime).format("HH:mm")}</div>
              ))}
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrainerBookCard
