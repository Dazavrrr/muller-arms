'use client'
//libs
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//components
import BookingTab from '@/components/BookingTab/BookingTab'
//redux
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchAllTrainers } from '@/store/slices/Trainers.slice'
import { fetchAllTrainings } from '@/store/slices/Trainings.slice'
import { fetchAllTimeSlots, fetchAllTimeSlotsByTrainer } from '@/store/slices/TimeSlots.slice'
//styles
import styles from './styles.module.scss'
//images
import logo from '../../../../public/images/booking/logo.svg'
import person from '../../../../public/images/booking/person.svg'
import calendar from '../../../../public/images/booking/calendar.svg'
import list from '../../../../public/images/booking/list.svg'
import spinner from '../../../../public/images/booking/spinner.svg'
import TrainerBookCard from '@/components/TrainerBookCard/TrainerBookCard'


const MyComponent = () => {
  const dispatch = useAppDispatch()
  const trainers = useAppSelector(state => state.Trainers.trainers)
  const currentTrainer = useAppSelector(state => state.Trainers.currentTrainer)
  const trainersFetchStatus = useAppSelector(state => state.Trainers.trainersFetchStatus)
  const trainings = useAppSelector(state => state.Trainings.trainings)
  const trainingsFetchStatus = useAppSelector(state => state.Trainings.trainingsFetchStatus)
  const timeSlots = useAppSelector(state => state.TimeSlots.allTimeSlots)
  const timeSlotsFetchStatus = useAppSelector(state => state.TimeSlots.timeSlotsFetchStatus)
  const [timeSlotPage, setTimeSlotPage] = useState<number>(0)

  useEffect(() => {
    if (!trainers.length) {
      dispatch(fetchAllTrainers())
    }
    if (!trainings.length) {
      dispatch(fetchAllTrainings())
    }
    //eslint-disable-next-line
  }, [])


  return (
    <>
      {!trainers.length || !trainings.length ?
        <Image src={spinner} alt={'Spinner'} className={styles.spinner} />
        :
        <div className={styles.main}>
          <Image src={logo} alt={'logo'} />
          <div className={styles.container}>
            <BookingTab icon={person} title={'Оберіть тренера'}>
              <div className={styles.trainer}>
                {trainers.map(t => <TrainerBookCard key={t.id} trainer={t} />)}
              </div>
            </BookingTab>

            <BookingTab icon={calendar} title={'Вкажіть дату та час'}>
              <>

              </>
            </BookingTab>

            <BookingTab icon={list} title={'Вибір послуги'}>
              <>

              </>
            </BookingTab>
          </div>
        </div>}
    </>

  )
}

export default MyComponent
