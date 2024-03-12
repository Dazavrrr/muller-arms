//libs
import moment from 'moment'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//types
import { BookingResponse } from '@/common/types'


const BookingAdminCard = ({ booking } : { booking: BookingResponse }) => {
  const {
    id,
    clientName,
    clientPhone,
    clientEmail,
    description,
    totalHours,
    totalPrice,
    isPrepaid,
    isCanceled,
    creationDate,
    lastModifiedDate,
    trainer,
    timeslots,
    training,
  } = booking


  return (
    <div className={styles.container}>
      <div
        className={`${styles.prepay} ${isPrepaid ? styles.prepaid : styles.unprepaid}`}>
        {isPrepaid ? 'Сплачено' : 'Не сплачено'}
      </div>
      <div
        className={`${styles.status} ${isCanceled ? styles.cancelled : styles.active}`}>
        {isCanceled ? 'Скасовано' : 'Активно'}
      </div>
      <p className={styles.time}>Час: {
        timeslots.length > 1 ?
          `${moment(timeslots[0].dateTime).format('HH:mm')} 
          - 
          ${moment(timeslots[timeslots.length - 1].dateTime).format('HH:mm')}`
          :
          `${moment(timeslots[0].dateTime).format('HH:mm')} 
          - 
          ${moment(timeslots[0].dateTime).add(1, 'hour').format('HH:mm')}`
      } / ${totalHours} годин</p>
      <p className={styles.text}>Тренування: {training.name}</p>
      <p className={styles.text}>Тренер: {trainer.firstName} ${trainer.lastName}</p>
      <p className={styles.text}>Ціна: {totalPrice}</p>
      <p className={styles.text}>Клієнт: {clientName}</p>
      <p className={styles.text}>Телефон: {clientPhone}</p>
      <p className={styles.text}>Пошта: {clientEmail}</p>
      <p className={styles.text}>Коментар: {description}</p>
      <p className={styles.text}>Дата створення: {moment(creationDate).format('dd-mm-yyyy HH:mm')}</p>
      <p className={styles.text}>Останні зміни: {moment(lastModifiedDate).format('dd-mm-yyyy HH:mm')}</p>
      <Link href={`/admin/bookings/${id}`} className={global.primaryBtn}>Редагувати</Link>
    </div>
  )
}

export default BookingAdminCard
