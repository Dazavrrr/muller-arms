//libs
import moment from 'moment'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//types
import { BookingResponse } from '@/common/types'


const BookingAdminCard = ({ booking }: { booking: BookingResponse }) => {
  const {
    id,
    clientName,
    clientPhone,
    clientEmail,
    description,
    totalHours,
    totalPrice,
    prepaid,
    canceled,
    creationDate,
    lastModifiedDate,
    trainer,
    timeslots,
    training,
  } = booking;


  return (
    <div className={styles.container}>
      <div className={styles.statuses}>
        <div
          className={`${styles.prepay} ${prepaid ? styles.prepaid : styles.unprepaid}`}>
          {prepaid ? 'Сплачено' : 'Не сплачено'}
        </div>
        <div
          className={`${styles.status} ${canceled ? styles.cancelled : styles.active}`}>
          {canceled ? 'Скасоване' : 'Активне'}
        </div>
      </div>
      <div className={styles.info}>
        {!!timeslots.length && <p className={styles.time}><span>Час:</span> {
          timeslots.length > 1 ?
            `${moment(timeslots[0].dateTime).format('HH:mm')} 
          - 
          ${moment(timeslots[timeslots.length - 1].dateTime).add(1, 'hour').format('HH:mm')}`
            :
            `${moment(timeslots[0].dateTime).format('HH:mm')} 
          - 
          ${moment(timeslots[0].dateTime).add(1, 'hour').format('HH:mm')}`
        } / {totalHours} години</p>}
        <p className={styles.text}><span>Тренування:</span> {training.name}</p>
        <p className={styles.text}><span>Тренер:</span> {trainer.firstName} {trainer.lastName}</p>
        <p className={styles.text}><span>Ціна: </span> {totalPrice} грн</p>
        <p className={styles.text}><span>Клієнт:</span> {clientName}</p>
        <p className={styles.text}><span>Телефон:</span> {clientPhone}</p>
        <p className={styles.text}><span>Пошта:</span> {clientEmail}</p>
        <p className={styles.text}><span>Коментар:</span> {description.length > 0 ? description : 'відсутній'}</p>
        <p className={styles.text}><span>Дата створення:</span> {moment(creationDate).format('DD.MM.yyyy HH:mm')}</p>
        <p className={styles.text}><span>Останні зміни:</span> {moment(lastModifiedDate).format('DD.MM.yyyy HH:mm')}</p>
        <Link href={`/admin/bookings/${id}`} className={global.primaryBtn}>Редагувати</Link>
      </div>
    </div>
  )
}

export default BookingAdminCard
