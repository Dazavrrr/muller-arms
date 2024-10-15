'use client'
//libs
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import 'moment/locale/uk'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { InputMask } from '@react-input/mask'
import moment from 'moment'
import dynamic from 'next/dynamic'
//components
import BookingTab from '@/components/BookingTab/BookingTab'
import TrainerBookCard from '@/components/TrainerBookCard/TrainerBookCard'
import TrainingBookCard from '@/components/TrainingBookCard/TrainingBookCard'
//redux
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchAllTrainers } from '@/store/slices/Trainers.slice'
import { fetchAllTrainings } from '@/store/slices/Trainings.slice'
import {
  fetchTimeSlotsForDayByTrainer, fetchTimeSlotsForDayByTrainerGuest,
} from '@/store/slices/TimeSlots.slice'
//styles
import styles from './styles.module.scss'
import './calendar.scss'
import global from '@/styles/global.module.scss'
//types
import { BookingCreateRequest } from '@/common/types'
//images
import logo from '../../../../public/images/booking/logo.svg'
import person from '../../../../public/images/booking/person.svg'
import calendar from '../../../../public/images/booking/calendar.svg'
import list from '../../../../public/images/booking/list.svg'
import spinner from '../../../../public/images/spinner.svg'
import Link from 'next/link'
import { guestInstance } from '@/api'
import MobileInstallPromt from '@/components/MobileInstallPromt/MobileInstallPromt'

const BookingTabComp = dynamic(
  () => import('@/components/BookingTab/BookingTab'),
  {ssr: false}
)

const MyComponent = () => {
  const dispatch = useAppDispatch()
  const trainers = useAppSelector(state => state.Trainers.trainers)
  const trainings = useAppSelector(state => state.Trainings.trainings)
  const timeSlots = useAppSelector(state => state.TimeSlots.allTimeSlots)
  const timeSlotsFetchStatus = useAppSelector(state => state.TimeSlots.timeSlotsFetchStatus)

  const [step, setStep] = useState<number>(1)
  const [selectedDate, setSelectedDate] = useState(moment())
  const [agreement, setAgreement] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful, isSubmitted },
  } = useForm<BookingCreateRequest>({
    defaultValues: {
      totalHours: 1,
    },
    reValidateMode: 'onSubmit',
  })

  const onSubmit = async (data: BookingCreateRequest) => {
    await guestInstance.post('/bookings', JSON.stringify(data))
  }

  useEffect(() => {
    dispatch(fetchAllTrainers())
    dispatch(fetchAllTrainings())
    //eslint-disable-next-line
  }, [])

  const selectedTrainer = trainers.find(t => t.id == watch('trainerId'))
  const selectedTimeSlot = timeSlots.find(t => t.id == watch('timeslotId'))
  const selectedTraining = trainings.find(t => t.id == watch('trainingId'))

  useEffect(() => {
    if (selectedTrainer && selectedDate) {
      dispatch(fetchTimeSlotsForDayByTrainerGuest({ day: selectedDate.toISOString(), trainerId: selectedTrainer.id }))
    }

    //eslint-disable-next-line
  }, [selectedDate, selectedTrainer])

  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isIOS, setIsIOS] = useState<boolean>(false)

  useEffect(() => {
    function isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }

    function isIOSDevice() {
      return /iPhone|iPad|iPod/i.test(navigator.userAgent)
    }

    const isPWA = window.matchMedia('(display-mode: standalone)').matches
    const lastDateString = localStorage.getItem('showedPromt')
    if ((lastDateString && !moment(JSON.parse(lastDateString)).isBefore(moment())) || isPWA) {
      return
    }

    if (isMobileDevice()) {
      setIsMobile(true)
    }
    if (isIOSDevice()) {
      setIsIOS(true)
    }


    //eslint-disable-next-line
  }, [])


  const firstStep = (
    <>
      <div className={styles.container}>
        <BookingTabComp icon={person}
                    isDisabled={false}
                    title={selectedTrainer ?
                      `${selectedTrainer.firstName} ${selectedTrainer.lastName}`
                      : 'Оберіть тренера'}>
          <div className={styles.trainers}>
            {trainers.map(t => <TrainerBookCard watch={watch} setValue={setValue} register={register} key={t.id}
                                                trainer={t} setSelectedDate={setSelectedDate} />)}
          </div>
        </BookingTabComp>

        <BookingTabComp icon={calendar} isDisabled={!watch('trainerId')}
                    title={selectedTimeSlot ?
                      moment(selectedTimeSlot.dateTime).format('DD MMMM YYYY HH:mm').toUpperCase()
                      : 'вкажіть дату та час'}
        >
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateCalendar minDate={moment()} views={['day']} value={selectedDate}
                          onChange={(newDate) => {
                            setSelectedDate(newDate)
                            setValue('timeslotId', null)
                            setValue('totalHours', 1)
                          }} disabled={timeSlotsFetchStatus === 'pending'} />
          </LocalizationProvider>
          <div className={styles.timeSlots_container}>
            {timeSlotsFetchStatus === 'pending' ?
              <div className={styles.timeSlots_spinner}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                  <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="#fec401"
                          strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" dur="2.6315789473684212s"
                                      repeatCount="indefinite" keyTimes="0;1"
                                      values="0 50 50;360 50 50"></animateTransform>
                  </circle>
                  <circle cx="50" cy="50" r="23" strokeWidth="8" stroke="#fec401"
                          strokeDasharray="36.12831551628262 36.12831551628262"
                          strokeDashoffset="36.12831551628262"
                          fill="none" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" dur="2.6315789473684212s"
                                      repeatCount="indefinite" keyTimes="0;1"
                                      values="0 50 50;-360 50 50"></animateTransform>
                  </circle>
                </svg>
              </div>
              :
              <>
                <p className={styles.sectionTitle}>ЧАС</p>
                <div className={styles.timeSlots}>
                  {timeSlots.length ? timeSlots.map((t, i) => (
                    <div key={`dateTimeSlot_${t.id}`}
                         className={`${styles.timeSlot} ${watch('timeslotId') == t.id && styles.timeSlot_active}`}
                         onClick={() => {
                           if (timeSlots.length - i < watch('totalHours')) {
                             setValue('totalHours', timeSlots.length - i)
                           }
                         }}>
                      <input type="radio" id={`dateTimeSlot_${t.id}`} value={t.id}
                             {...register('timeslotId', { required: true })} />
                      <label htmlFor={`dateTimeSlot_${t.id}`}>
                        {moment(t.dateTime).format('HH:mm')}
                      </label>
                    </div>
                  )) : <p>на цей день немає вільних місць</p>}
                </div>
              </>
            }
          </div>
        </BookingTabComp>

        <BookingTabComp icon={list} title={selectedTraining?.name ?? 'Вибір' +
          ' послуги'}
                    isDisabled={!watch('trainerId') || !watch('timeslotId')}>
          {trainings.map(t => (
            <TrainingBookCard watch={watch} setValue={setValue}
                              key={`training_${t.id}`} training={t} />
          ))}
        </BookingTabComp>
      </div>
      <button type={'button'} disabled={!watch('trainerId') || !watch('trainingId') || !watch('timeslotId')}
              className={styles.continue} onClick={() => {
        setStep(prev => prev + 1)
        scrollTo(0, 0)
      }}>Продовжити
      </button>
    </>
  )

  const secondStep = !!selectedTrainer && !!selectedTraining && !!selectedTimeSlot && (<>
    <p className={`${styles.clientFieldsTitle} ${styles.sectionTitle}`}>ВАШІ ДАНІ</p>
    <div className={`${styles.inputField} ${errors.clientName && styles.error}`}>
      <label htmlFor="name">Ім’я</label>
      <input type="text" maxLength={50} placeholder={'Введіть ім’я'} id="name"
             {...register('clientName', { required: true })} />
    </div>
    <div className={`${styles.inputField} ${errors.clientPhone && styles.error}`}>
      <label htmlFor="phone">Телефон</label>
      <Controller
        defaultValue={'+38 (___) ___-__-__'}
        render={({ field }) => (
          <InputMask {...field} mask="+38 (___) ___-__-__" showMask={true} replacement={{ _: /\d/ }}
                     placeholder={'Введіть телефон'} />
        )}
        rules={{ required: true, validate: value => value?.replace(/[^+\d]/g, '').length === 13 }}
        control={control} name={'clientPhone'} />
    </div>
    <div className={`${styles.inputField} ${errors.clientEmail && styles.error}`}>
      <label htmlFor="email">E-mail</label>
      <input type="text" placeholder={'Введіть e-mail'} id="email"
             {...register('clientEmail', {
               required: false, pattern: {
                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                 message: 'invalid email address',
               },
             })} />
    </div>
    <div className={styles.inputField}>
      <label htmlFor="description">Коментар</label>
      <textarea rows={6} placeholder={'Введіть коментар'} id="description"
                {...register('description', { required: false })} />
    </div>

    <div className={styles.bookDetails}>
      <div className={styles.bookDetails__wrapper}>
        <p className={styles.sectionTitle}>ДЕТАЛІ ЗАПИСУ</p>
        <div className={styles.bookDetails_trainer}>
          <p className={styles.trainerName}>{selectedTrainer.firstName} {selectedTrainer.lastName}</p>
          <div className={styles.trainerImage}>
            <Image width={322} height={287} src={selectedTrainer.wideImage} alt={'trainer image'} />
          </div>
        </div>
        <div className={styles.bookDetails_training}>
          <p className={styles.sectionTitle}>
            {moment(selectedTimeSlot.dateTime).format('DD MMMM YYYY HH:mm').toUpperCase()}
            {` - ${moment(selectedTimeSlot.dateTime).add(watch('totalHours'), 'h').format('HH:mm')}`}
          </p>
          <p className={styles.selectedTraining}>{selectedTraining.name}</p>
          <p className={styles.price}>
            Кількість годин: <span className={styles.black}>{watch('totalHours')}</span>
          </p>
          <p className={styles.price}>
            До сплати: <span className={styles.black}>{watch('totalHours') * selectedTraining.pricePerHour} ГРН</span>
          </p>
          <p className={styles.price}>
            До передплати: <span className={styles.yellow}>1000 ГРН</span>
          </p>
        </div>
        <button type={'button'} className={styles.continue} onClick={() => setStep(prev => prev - 1)}>Змінити</button>
      </div>
    </div>

    <div className={styles.agreements}>
      <div className={global.checkbox_wrapper}>
        <input type="checkbox" id={'agreements'} checked={agreement}
               onChange={() => setAgreement(prev => !prev)} />
        <label htmlFor={'agreements'}>
          <svg viewBox="0,0,50,50">
            <path d="M5 30 L 20 45 L 45 5"></path>
          </svg>
        </label>
      </div>
      <p>Я погоджуюся з <a href="" target={'_blank'}>Умовами</a> та <a href="" target={'_blank'}>Політикою
        конфеденційності</a>
      </p>
    </div>
    <button type={'submit'} className={styles.continue}
            disabled={!agreement || !isValid}>Зробити передплату
    </button>

  </>)

  const submitSuccessful = (
    <div className={styles.submited}>
      <p>Дякую! Ваша заявка успішно прийнята</p>
      <Link href={'/'} className={styles.continue}>На головну</Link>
    </div>
  )

  const submitFeiled = (
    <div className={styles.submited}>
      <p>
        Сталася технічна помилка, спробуйте ще раз або залетефонуйте за номером +38 (063) 123 45 45
      </p>
      <Link href={'/'} className={styles.continue}>На головну</Link>
    </div>
  )

  return (
    <>
      {!trainers.length || !trainings.length || isSubmitting ?
        <Image src={spinner} alt={'Spinner'} className={styles.spinner} />
        :
        <form className={`${styles.main} main_wrapper`} onSubmit={handleSubmit(onSubmit)}>
          <Image src={logo} alt={'logo'} />
          {step === 1 && !isSubmitted && firstStep}
          {step === 2 && !isSubmitted && secondStep}
          {isSubmitSuccessful && submitSuccessful}
          {isSubmitted && !isSubmitSuccessful && submitFeiled}
        </form>}
      {isMobile && <MobileInstallPromt isIOS={isIOS} close={() => setIsMobile(false)} />}
      {isMobile && <div className={styles.overlay}></div>}
    </>

  )
}

export default MyComponent
