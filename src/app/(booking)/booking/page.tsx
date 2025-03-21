'use client'
//libs
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import 'moment/locale/uk'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { InputMask } from '@react-input/mask'
import moment, { Moment } from 'moment'
import dynamic from 'next/dynamic'
//components
import TrainerBookCard from '@/components/TrainerBookCard/TrainerBookCard'
import TrainingBookCard from '@/components/TrainingBookCard/TrainingBookCard'
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
import { ENV_URL, getData, guestInstance, postData } from '@/api'
import MobileInstallPromt from '@/components/MobileInstallPromt/MobileInstallPromt'
import { Booking } from '@/models/booking'
import { ApiPath } from '@/common/enums'
import { Training } from '@/models/training'
import { generateTimeSlots } from '@/utils/generateTimeSlots'

const BookingTabComp = dynamic(
  () => import('@/components/BookingTab/BookingTab'),
  { ssr: false }
)

const MyComponent = () => {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [trainings, setTrainings] = useState<Training[]>([])

  const [step, setStep] = useState<number>(1)
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null)
  const [agreement, setAgreement] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: {
      errors,
      isSubmitting,
      isValid,
      isSubmitSuccessful,
      isSubmitted,
    },
  } = useForm<BookingCreateRequest>({
    defaultValues: {
      totalHours: 1,
    },
    reValidateMode: 'onSubmit',
  })

  const onSubmit = async (data: BookingCreateRequest) => {
    const phone = data.clientPhone?.replace(/\D/g, '').replace(/^38/, '+38')
    const transformedData = {
      trainer: data.trainerId,
      date: selectedDate?.format('YYYY-MM-DD'),
      start_time: `${data.timeslotId}:00`,
      book_user_name: data.clientName?.trim(),
      phone_number: phone,
      mail: data.clientEmail,
      description: data.description,
      training: data.trainingId,
      end_time: `${
        parseInt(data.timeslotId?.split(':')[0] || '0', 10) + data.totalHours
      }:00:00`,
    }
    await postData(ApiPath.BOOKINGS, transformedData)
  }

  useEffect(() => {
    const bookings = getData<Booking[]>(ApiPath.BOOKINGS)
    const trainings = getData<Training[]>(ApiPath.TRAININGS)
    Promise.all([bookings, trainings]).then(([bookings, trainings]) => {
      setBookings(bookings.data || [])
      setTrainings(trainings.data || [])
    })
  }, [])

  const trainerId = watch('trainerId')
  const selectedBooking = bookings.find((t) => t.trainer.id == trainerId)
  const availableSlotsOfDay = selectedBooking?.available_slots.filter(
    (item) => moment(item.date).valueOf() === selectedDate?.valueOf()
  )

  const availableTimes = Array.from(
    new Set(
      availableSlotsOfDay?.flatMap((item) =>
        generateTimeSlots(item.start_time, item.end_time, item.date)
      )
    )
  )

  const selectedTraining = trainings.find((t) => t.id == watch('trainingId'))

  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isIOS, setIsIOS] = useState<boolean>(false)

  useEffect(() => {
    function isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    }

    function isIOSDevice() {
      return /iPhone|iPad|iPod/i.test(navigator.userAgent)
    }

    const isPWA = window.matchMedia('(display-mode: standalone)').matches
    const lastDateString = localStorage.getItem('showedPromt')
    if (
      (lastDateString &&
        !moment(JSON.parse(lastDateString)).isBefore(moment())) ||
      isPWA
    ) {
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
        <BookingTabComp
          icon={person}
          isDisabled={false}
          title={
            selectedBooking?.trainer
              ? `${selectedBooking.trainer.first_name} ${selectedBooking.trainer.last_name}`
              : 'Оберіть тренера'
          }
        >
          <div className={styles.trainers}>
            {bookings.map((t, i) => (
              <TrainerBookCard
                watch={watch}
                setValue={setValue}
                register={register}
                key={i}
                trainer={t.trainer}
                availableSlots={t.available_slots}
                setSelectedDate={setSelectedDate}
              />
            ))}
          </div>
        </BookingTabComp>

        <BookingTabComp
          icon={calendar}
          isDisabled={!watch('trainerId')}
          title={
            selectedDate
              ? selectedDate.locale('uk').format('DD MMMM YYYY')
              : 'вкажіть дату та час'
          }
        >
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateCalendar
              minDate={moment()}
              views={['day']}
              value={selectedDate}
              onChange={(newDate) => {
                setSelectedDate(newDate)
                setValue('timeslotId', null)
                setValue('totalHours', 1)
              }}
              shouldDisableDate={(date) =>
                !bookings
                  .find(
                    (item) => item.trainer.id == selectedBooking?.trainer?.id
                  )
                  ?.available_slots.some(
                    (item) => date.valueOf() === moment(item.date).valueOf()
                  ) || false
              }
            />
          </LocalizationProvider>
          <div className={styles.timeSlots_container}>
            {!!selectedDate && (
              <>
                <p className={styles.sectionTitle}>ЧАС</p>
                <div className={styles.timeSlots}>
                  {availableTimes?.length ? (
                    availableTimes?.map((t, i) => (
                      <div
                        key={`dateTimeSlot_${t}`}
                        className={`${styles.timeSlot} ${
                          `${watch('timeslotId')}` == t &&
                          styles.timeSlot_active
                        }`}
                        onClick={() => {
                          setValue('totalHours', 1)
                        }}
                      >
                        <input
                          type="radio"
                          id={`dateTimeSlot_${t}`}
                          value={t}
                          {...register('timeslotId', { required: true })}
                        />
                        <label htmlFor={`dateTimeSlot_${t}`}>{t}</label>
                      </div>
                    ))
                  ) : (
                    <p>на цей день немає вільних місць</p>
                  )}
                </div>
              </>
            )}
          </div>
        </BookingTabComp>

        <BookingTabComp
          icon={list}
          title={selectedTraining?.name ?? 'Вибір' + ' послуги'}
          isDisabled={!watch('trainerId') || !watch('timeslotId')}
        >
          {trainings.map((t) => (
            <TrainingBookCard
              watch={watch}
              setValue={setValue}
              key={`training_${t.id}`}
              training={t}
              endTimes={
                availableSlotsOfDay?.map((item) =>
                  parseInt(item.end_time.split(':')[0], 10)
                ) || []
              }
            />
          ))}
        </BookingTabComp>
      </div>
      <button
        type={'button'}
        disabled={
          !watch('trainerId') || !watch('trainingId') || !watch('timeslotId')
        }
        className={styles.continue}
        onClick={() => {
          setStep((prev) => prev + 1)
          scrollTo(0, 0)
        }}
      >
        Продовжити
      </button>
    </>
  )

  const secondStep = !!selectedBooking &&
    !!selectedTraining &&
    !!watch('timeslotId') && (
      <>
        <p className={`${styles.clientFieldsTitle} ${styles.sectionTitle}`}>
          ВАШІ ДАНІ
        </p>
        <div
          className={`${styles.inputField} ${
            errors.clientName && styles.error
          }`}
        >
          <label htmlFor="name">Ім’я</label>
          <input
            type="text"
            maxLength={50}
            placeholder={'Введіть ім’я'}
            id="name"
            {...register('clientName', { required: true })}
          />
        </div>
        <div
          className={`${styles.inputField} ${
            errors.clientPhone && styles.error
          }`}
        >
          <label htmlFor="phone">Телефон</label>
          <Controller
            defaultValue={'+38 (___) ___-__-__'}
            render={({ field }) => (
              <InputMask
                {...field}
                mask="+38 (___) ___-__-__"
                showMask={true}
                replacement={{ _: /\d/ }}
                placeholder={'Введіть телефон'}
              />
            )}
            rules={{
              required: true,
              validate: (value) => value?.replace(/[^+\d]/g, '').length === 13,
            }}
            control={control}
            name={'clientPhone'}
          />
        </div>
        <div
          className={`${styles.inputField} ${
            errors.clientEmail && styles.error
          }`}
        >
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            placeholder={'Введіть e-mail'}
            id="email"
            {...register('clientEmail', {
              required: false,
              pattern: {
                value: /^\s*[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\s*$/i,
                message: 'invalid email address',
              },
            })}
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="description">Коментар</label>
          <textarea
            rows={6}
            placeholder={'Введіть коментар'}
            id="description"
            {...register('description', { required: false })}
          />
        </div>

        <div className={styles.bookDetails}>
          <div className={styles.bookDetails__wrapper}>
            <p className={styles.sectionTitle}>ДЕТАЛІ ЗАПИСУ</p>
            <div className={styles.bookDetails_trainer}>
              <p className={styles.trainerName}>
                {selectedBooking.trainer.first_name}{' '}
                {selectedBooking.trainer.last_name}
              </p>
              <div className={styles.trainerImage}>
                {!!selectedBooking.trainer.wide_image && (
                  <Image
                    width={322}
                    height={287}
                    src={`${ENV_URL}${selectedBooking.trainer.wide_image}`}
                    alt={'trainer image'}
                  />
                )}
              </div>
            </div>
            <div className={styles.bookDetails_training}>
              <p className={styles.sectionTitle}>
                {moment(selectedDate)
                  .add(watch('timeslotId'), 'h')
                  .format('DD MMMM YYYY HH:mm')
                  .toUpperCase()}
                {` - ${
                  watch('timeslotId')
                    ? parseInt(watch('timeslotId')?.split(':')[0] || '0', 10) +
                      watch('totalHours')
                    : ''
                }:00`}
              </p>
              <p className={styles.selectedTraining}>{selectedTraining.name}</p>
              <p className={styles.price}>
                Кількість годин:{' '}
                <span className={styles.black}>{watch('totalHours')}</span>
              </p>
              <p className={styles.price}>
                До сплати:{' '}
                <span className={styles.black}>
                  {watch('totalHours') * selectedTraining.price_per_hour} ГРН
                </span>
              </p>
              <p className={styles.price}>
                До передплати: <span className={styles.yellow}>1000 ГРН</span>
              </p>
            </div>
            <button
              type={'button'}
              className={styles.continue}
              onClick={() => setStep((prev) => prev - 1)}
            >
              Змінити
            </button>
          </div>
        </div>

        <div className={styles.agreements}>
          <div className={global.checkbox_wrapper}>
            <input
              type="checkbox"
              id={'agreements'}
              checked={agreement}
              onChange={() => setAgreement((prev) => !prev)}
            />
            <label htmlFor={'agreements'}>
              <svg viewBox="0,0,50,50">
                <path d="M5 30 L 20 45 L 45 5"></path>
              </svg>
            </label>
          </div>
          <p>
            Я погоджуюся з{' '}
            <a href="/politics" target={'_blank'}>
              Умовами
            </a>{' '}
            та{' '}
            <a href="/politics" target={'_blank'}>
              Політикою конфеденційності
            </a>
          </p>
        </div>
        <button
          type={'submit'}
          className={styles.continue}
          disabled={!agreement || !isValid}
        >
          Зробити передплату
        </button>
      </>
    )

  const submitSuccessful = (
    <div className={styles.submited}>
      <p>Дякую! Ваша заявка успішно прийнята</p>
      <Link href={'/'} className={styles.continue}>
        На головну
      </Link>
    </div>
  )

  const submitFeiled = (
    <div className={styles.submited}>
      <p>
        Сталася технічна помилка, спробуйте ще раз або залетефонуйте за номером
        +38 (063) 123 45 45
      </p>
      <Link href={'/'} className={styles.continue}>
        На головну
      </Link>
    </div>
  )

  return (
    <>
      {!bookings.length || !trainings.length || isSubmitting ? (
        <Image src={spinner} alt={'Spinner'} className={styles.spinner} />
      ) : (
        <form
          className={`${styles.main} main_wrapper`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Image src={logo} alt={'logo'} />
          {step === 1 && !isSubmitted && firstStep}
          {step === 2 && !isSubmitted && secondStep}
          {isSubmitSuccessful && submitSuccessful}
          {isSubmitted && !isSubmitSuccessful && submitFeiled}
        </form>
      )}
      {isMobile && (
        <MobileInstallPromt isIOS={isIOS} close={() => setIsMobile(false)} />
      )}
      {isMobile && <div className={styles.overlay}></div>}
    </>
  )
}

export default MyComponent
