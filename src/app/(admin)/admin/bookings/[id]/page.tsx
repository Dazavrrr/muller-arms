'use client'
//libs
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
import fStyles from '../../styles.module.scss'
import bStyles from '@/app/(booking)/booking/styles.module.scss'
import global from '@/styles/global.module.scss'
import '@/app/(booking)/booking/calendar.scss'
//redux
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { deleteBooking, fetchOneBooking, resetCurrentBooking, updateBooking } from '@/store/slices/Bookings.slice'
//images
import spinner from '../../../../../../public/images/spinner.svg'
import { fetchAllTrainings } from '@/store/slices/Trainings.slice'
import { fetchAllTrainers } from '@/store/slices/TrainersAdmin.slice'
import {
  fetchTimeSlotsForDayByTrainer,
} from '@/store/slices/TimeSlots.slice'
import moment from 'moment'
import { useForm } from 'react-hook-form'
import { BookingUpdateRequest } from '@/common/types'
import { useRouter } from 'next/navigation'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import getChangedFields  from '@/utils/getChangedFields'
import { toast } from 'react-toastify'


const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const [selectedDate, setSelectedDate] = useState(moment())
  const booking = useAppSelector(state => state.Bookings.currentBooking)
  const trainers = useAppSelector(state => state.TrainersAdmin.trainers)
  const trainings = useAppSelector(state => state.Trainings.trainings)
  const timeSlots = useAppSelector(state => state.TimeSlots.allTimeSlots)

  const timeSlotsFetchStatus = useAppSelector(state => state.TimeSlots.timeSlotsFetchStatus)
  const trainingsFetchStatus = useAppSelector(state => state.Trainings.trainingsFetchStatus)
  const trainersFetchStatus = useAppSelector(state => state.TrainersAdmin.trainersFetchStatus)
  const bookingFetchStatus = useAppSelector(state => state.Bookings.oneBookingFetchStatus)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllTrainings())
    dispatch(fetchAllTrainers())
    dispatch(fetchOneBooking(parseInt(id))).then(({ payload }) => {
      setValue('totalHours', payload.totalHours)
      setValue('trainerId', payload.trainer.id)
      setValue('trainingId', payload.training.id)
      setSelectedDate(moment(payload.timeslots[0].dateTime))
      setTimeout(() => {
        setValue('timeslotId', `${payload.timeslots[0].id}`)
        trigger()
      }, 500)
    })

    return () => {
      dispatch(resetCurrentBooking());
    }
    //eslint-disable-next-line
  }, [])

  const {
    register,
    setValue,
    watch,
    trigger,
    handleSubmit,
    formState: { isValid },
  } = useForm<BookingUpdateRequest>()
  const router = useRouter()

  const onSubmit = (data: BookingUpdateRequest) => {
    if (!booking) return;

    if (Object.keys(getChangedFields({
      totalHours: booking.totalHours,
      trainerId: booking.trainer.id,
      trainingId: booking.training.id,
      timeslotId: booking.timeslots[0].id,
    }, data)).length == 0) {
      toast.error('Ви не внесли ніяких змін !')
      return;
    }

    dispatch(updateBooking({id: booking.id,booking: data}));
  }

  useEffect(() => {
    if (selectedDate && watch('trainerId') && booking) {
      dispatch(fetchTimeSlotsForDayByTrainer({
        day: selectedDate.toISOString(),
        trainerId: watch('trainerId'),
      }))
    }
    //eslint-disable-next-line
  }, [selectedDate, watch('trainerId')])

  const isPastTimeSlot = (time: Date) => {
    return moment(time).isBefore(moment().utcOffset('+0200'))
  }

  function countConsecutiveFreeSlots() {

    const pickedSlot = timeSlots.find(t => t.id == watch('timeslotId'))

    if (timeSlots.length === 0 || !pickedSlot) {
      return 0
    }

    const searchSlots = timeSlots.slice(timeSlots.indexOf(pickedSlot))

    let count = 1

    for (let i = 0; i < searchSlots.length - 1; i++) {
      const currentSlot = moment(searchSlots[i].dateTime)
      const nextSlot = moment(searchSlots[i + 1].dateTime)

      if (nextSlot.diff(currentSlot, 'hours') <= 1) {
        count++
      } else {
        break
      }
    }

    return count
  }

  if (!booking || bookingFetchStatus === 'pending' || trainersFetchStatus === 'pending'
    || trainingsFetchStatus === 'pending') {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={fStyles.container}>
      <div className={styles.header}>
        <button type={'submit'} disabled={!isValid} className={global.primaryBtn}>Зберегти</button>
        <button type={'button'} className={`${global.primaryBtn} ${global.greyButton}`}
                onClick={() => router.push('/admin/bookings')}>Закрити
        </button>
        <button type={'button'} disabled={!booking} className={`${global.primaryBtn} ${global.redButton}`}
                onClick={() => {
                  if (booking) {
                    dispatch(deleteBooking(booking.id)).then(() => router.push('/admin/bookings'))
                  }
                }}>Видалити
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <p className={styles.text}>
            <span>Дата створення:</span> {moment(booking.creationDate).format('DD.MM.yyyy' +
            ' HH:mm')}</p>
          <p className={styles.text}>
            <span>Останні зміни:</span> {moment(booking.lastModifiedDate).format('DD.MM.yyyy HH:mm')}
          </p>
        </div>
        <div className={styles.info}>
          <p className={styles.text}><span>Клієнт:</span> {booking.clientName}</p>
          <p className={styles.text}><span>Телефон:</span> {booking.clientPhone}</p>
          <p className={styles.text}><span>Пошта:</span> {booking.clientEmail}</p>
          <p className={styles.text}>
            <span>Коментар:</span> {booking.description.length > 0 ? booking.description : 'відсутній'}
          </p>
          <p className={styles.text}><span>Кількість годин:</span> {booking.totalHours} години</p>
          <p className={styles.text}>
            <span>Дата: </span>
            {moment(booking.timeslots[0].dateTime).format('DD.MM.yyyy')}
          </p>
          <p className={styles.text}>
            <span>Час: </span>
            {
              booking.timeslots.length > 1 ?
                `
                ${moment(booking.timeslots[0].dateTime).format('HH:mm')} 
                  - 
                ${moment(booking.timeslots[booking.timeslots.length - 1].dateTime).add(1, 'hour').format('HH:mm')}
                `
                :
                `
                ${moment(booking.timeslots[0].dateTime).format('HH:mm')} 
                  - 
                ${moment(booking.timeslots[0].dateTime).add(1, 'hour').format('HH:mm')}
                `
            }
          </p>
          <p className={styles.text}><span>Ціна : </span>
            {booking.totalPrice} грн
          </p>
          <p className={`${styles.text} ${booking.prepaid ? styles.green : styles.red}`}><span>Передплата: </span>
            {booking.prepaid ? 'сплачена' : 'не сплачена'}
          </p>
        </div>
        <div className={styles.fields}>
          <div className={styles.selects}>
            <div className={`${styles.trainerWrapper} ${styles.field}`}>
              <p>Тренер:</p>
              <select {...register('trainerId')}>
                {trainers.map(t => <option key={`trainer_${t.id}`} value={t.id}>{t.firstName} {t.lastName}</option>)}
              </select>
            </div>

            <div className={styles.field}>
              <p>Тренування</p>
              <select {...register('trainingId')}>
                {trainings.map(t => <option value={t.id} key={`training_${t.id}`}>{t.name}</option>)}
              </select>
            </div>

            <div className={styles.field}>
              <p>
                Кількість годин тренування: <span>{watch('totalHours')}</span>
                <br />
                <span className={styles.red}>Максимум: {countConsecutiveFreeSlots()}</span>
              </p>
              <div className={styles.input}>
                <input type="number" {...register('totalHours', {
                  required: true,
                  min: 1,
                  max: countConsecutiveFreeSlots(),
                  onChange: (e) => {
                    if (e.target.value != '0' && parseInt(e.target.value) <= countConsecutiveFreeSlots()) {
                      setValue('totalHours', parseInt(e.target.value))
                      return
                    }
                    setValue('totalHours', 1)
                  },
                })} />
                <span className={styles.plus} onClick={() => {
                  if (watch('totalHours') !== 1) {
                    setValue('totalHours', watch('totalHours') - 1)
                  }
                }}>-</span>
                <span className={styles.minus} onClick={() => {
                  if (watch('totalHours') < countConsecutiveFreeSlots()) {
                    setValue('totalHours', watch('totalHours') + 1)
                  }
                }}>+</span>
              </div>
            </div>
          </div>

          <div className={fStyles.slots}>
            <div className={`main_wrapper ${fStyles.monthsWrapper}`}>
              <p className={fStyles.title}>Оберіть день: <span>{selectedDate.format('YYYY-MM-DD')}</span></p>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DateCalendar minDate={moment()} views={['day']} value={selectedDate}
                              onChange={(newDate) => {
                                setSelectedDate(newDate)
                              }} disabled={timeSlotsFetchStatus === 'pending'} />
              </LocalizationProvider>
            </div>
            {timeSlotsFetchStatus === 'pending' ?
              <Image src={spinner} alt={'spinner'} className={fStyles.timeSlots_spinner} />
              :
              <div className={bStyles.timeSlots}>
                {timeSlots.length ? timeSlots.map((t, i) => (
                  <div key={`dateTimeSlot_${t.id}`}
                       className={`${bStyles.timeSlot} ${isPastTimeSlot(t.dateTime) && bStyles.timeSlot_disabled} ${watch('timeslotId') == t.id && bStyles.timeSlot_active}`}
                       onClick={() => {
                         if (timeSlots.length - i < watch('totalHours')) {
                           setValue('totalHours', timeSlots.length - i)
                         }
                       }}>
                    <input type="radio" id={`dateTimeSlot_${t.id}`} value={t.id}
                           {...register('timeslotId', {
                             required: true,
                             disabled: isPastTimeSlot(t.dateTime),
                           })} />
                    <label htmlFor={`dateTimeSlot_${t.id}`}>
                      {moment(t.dateTime).format('HH:mm')}
                    </label>
                  </div>
                )) : <p>на цей день немає вільних місць</p>}
              </div>
            }
          </div>
        </div>
      </div>
    </form>
  )
}

export default Page
