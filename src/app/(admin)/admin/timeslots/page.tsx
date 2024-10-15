'use client'
//libs
import React, { useEffect, useState } from 'react'
import moment, { Moment } from 'moment'
import { DateCalendar, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import Image from 'next/image'
import 'moment/locale/uk'
//styles
import styles from '../styles.module.scss'
import global from '@/styles/global.module.scss'
import '@/app/(booking)/booking/calendar.scss'
//redux
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchAllTrainers } from '@/store/slices/TrainersAdmin.slice'
import { createTimeSlot, deleteTimeSlot, fetchTimeSlotsForDayByTrainer } from '@/store/slices/TimeSlots.slice'
//images
import plus from '../../../../../public/icons/plus.svg'
import trash from '../../../../../public/icons/trash.svg'
import spinner from '../../../../../public/images/spinner.svg'


const TimeSlotsPage = () => {
  moment().locale('uk')
  moment().utcOffset('+0200')
  const [trainerId, setTrainerId] = useState<number>(1)
  const [selectedDate, setSelectedDate] = useState(moment())
  const [selectedNewTime, setSelectedNewTime] = useState<Moment>()
  const [isModal, setModal] = useState<boolean>(false)
  const trainers = useAppSelector(state => state.TrainersAdmin.trainers)
  const trainersFetchStatus = useAppSelector(state => state.TrainersAdmin.trainersFetchStatus)
  const timeslots = useAppSelector(state => state.TimeSlots.allTimeSlots)
  const timeSlotsFetchStatus = useAppSelector(state => state.TimeSlots.timeSlotsFetchStatus)
  const dispatch = useAppDispatch()


  useEffect(() => {
    if (!trainers.length) {
      dispatch(fetchAllTrainers())
    }
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (trainerId && selectedDate) {
      dispatch(fetchTimeSlotsForDayByTrainer({ day: selectedDate.toISOString(), trainerId: trainerId }))
    }
    //eslint-disable-next-line
  }, [trainerId, selectedDate])

  if (trainersFetchStatus === 'pending') {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }
  return (
    <div className={styles.container}>
      <div className={styles.selectWrapper}>
        <p className={styles.title}>Оберіть тренера: </p>
        <select onChange={e => setTrainerId(parseInt(e.target.value))}>
          {trainers.map((t) => (<option key={`trainer_${t.id}`} value={t.id}>{t.firstName} {t.lastName}</option>))}
        </select>
      </div>
      <div className={styles.slots}>
        <div className={`main_wrapper ${styles.monthsWrapper}`}>
          <p className={styles.title}>Оберіть день: <span>{selectedDate.format('YYYY-MM-DD')}</span></p>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateCalendar minDate={moment()} views={['day']} value={selectedDate}
                          onChange={(newDate) => {
                            setSelectedDate(newDate)
                          }} disabled={timeSlotsFetchStatus === 'pending'} />
          </LocalizationProvider>
        </div>
        {timeSlotsFetchStatus === 'pending' ?
          <Image src={spinner} alt={'spinner'} className={styles.timeSlots_spinner}/>
          :
          <div className={styles.timeSlots}>
            <>
              {
                timeslots.sort((a, b) => {
                  if (a.dateTime == b.dateTime) {
                    return 0;
                  }
                  return a.dateTime < b.dateTime ? -1 : 1;
                }).map((t) => (
                  <div key={`dateTimeSlot_${t.id}`}
                       className={`${styles.timeSlot} ${t.booked && styles.booked}`}>
                    <p>{moment(t.dateTime).format('HH:mm')}</p>
                    {!t.booked && <div className={styles.trashWrapper} onClick={() => dispatch(deleteTimeSlot(t.id))}>
                      <Image src={trash} alt={'trash'} className={styles.trash} />
                    </div>}
                  </div>
                ))}
              {!isModal ?
                <div className={styles.plus} onClick={() => setModal(true)}>
                  <Image src={plus} alt={'plus'} />
                </div>
                :
                <div className={styles.modal}>
                  <div className={styles.modalField}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <TimePicker
                        ampm={false}
                        label="Вкажіть час"
                        minutesStep={60}
                        onChange={(e: any) => setSelectedNewTime(e)}
                      />
                    </LocalizationProvider>
                  </div>
                  <button type={'button'} className={global.primaryBtn} disabled={!selectedNewTime} onClick={() => {
                    if (selectedNewTime) {
                      dispatch(createTimeSlot({
                        dateTime: selectedDate.set({
                          hour: selectedNewTime.hour(),
                          minute: selectedNewTime.minute()
                        }).toISOString(true),
                        trainerId: trainerId,
                      })).then(() => setModal(false))
                    }
                  }}>Додати
                  </button>
                </div>
              }
            </>
          </div>
        }
      </div>
    </div>
  )
}

export default TimeSlotsPage
