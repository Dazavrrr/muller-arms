'use client'
import Image from 'next/image'
import { BookingCreateRequest } from '@/common/types'
import moment, { Moment } from 'moment'
import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import { Dispatch, FC, SetStateAction } from 'react'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import instagram from '../../../public/images/booking/instagram.svg'
import { Slot, Trainer } from '@/models/booking'
import { ENV_URL } from '@/api'
import { generateTimeSlots } from '@/utils/generateTimeSlots'

interface Props {
  trainer: Trainer
  availableSlots: Slot[]
  register: UseFormRegister<BookingCreateRequest>
  setValue: UseFormSetValue<BookingCreateRequest>
  watch: UseFormWatch<BookingCreateRequest>
  setSelectedDate: Dispatch<SetStateAction<Moment | null>>
}

const TrainerBookCard: FC<Props> = ({
  trainer,
  register,
  setValue,
  watch,
  setSelectedDate,
  availableSlots,
}) => {
  const isActiveTrainer = watch('trainerId') == trainer.id
  const handleTrainerChange = () => {
    if (!isActiveTrainer) {
      setValue('trainerId', trainer.id)
      setValue('timeslotId', null)
      setSelectedDate(null)
    }
  }

  const availableSlotsFiltered = availableSlots.filter((item) =>
    moment(`${item.date} ${item.end_time}`, 'YYYY-MM-DD HH:mm:ss').isAfter(
      moment()
    )
  )

  const now = moment()

  const closestSlot = availableSlotsFiltered.length
    ? availableSlotsFiltered.reduce((closest, date) => {
        return moment(date.date).diff(now) < moment(closest.date).diff(now)
          ? date
          : closest
      }, availableSlotsFiltered[0])
    : null

  const availableSlotsOfDay = availableSlots.filter((item) =>
    moment(item.date).isSame(closestSlot?.date)
  )

  const availableTimes = Array.from(
    new Set(
      availableSlotsOfDay?.flatMap((item) =>
        generateTimeSlots(item.start_time, item.end_time, item.date)
      )
    )
  )

  return (
    <div className={styles.container}>
      <div className={styles.image} onClick={handleTrainerChange}>
        {!!trainer.wide_image && !!trainer.tall_image && (
          <Image
            width={196}
            height={392}
            src={
              window.innerWidth > 760
                ? `${ENV_URL}${trainer.tall_image}`
                : `${ENV_URL}${trainer.tall_image}`
            }
            alt={`${trainer.first_name} ${trainer.last_name}`}
          />
        )}
      </div>
      <div className={styles.info}>
        <div onClick={handleTrainerChange}>
          <div className={styles.info_header}>
            {!!trainer.instagram_link && (
              <a
                href={trainer.instagram_link}
                target={'_blank'}
                rel="noreferrer"
              >
                {trainer.instagram_name}{' '}
                <Image src={instagram} alt={'instagram icon'} />
              </a>
            )}

            <div className={global.checkbox_wrapper}>
              <input
                checked={watch('trainerId') == trainer.id}
                type="radio"
                value={trainer.id}
                id={`trainer_${trainer.id}`}
                {...register('trainerId', {
                  required: true,
                })}
              />
              <label htmlFor={`trainer_${trainer.id}`}>
                <svg viewBox="0,0,50,50">
                  <path d="M5 30 L 20 45 L 45 5"></path>
                </svg>
              </label>
            </div>
          </div>
          <p className={styles.name}>
            {trainer.first_name} {trainer.last_name}
          </p>
          <p className={styles.desc}>{trainer.description}</p>
        </div>
        <div className={styles.close_dates}>
          <p>Найближчий час для запису:</p>

          {!!closestSlot ? (
            <>
              <p>
                {moment(closestSlot.date)
                  .locale('uk')
                  .format('DD MMMM YYYY')
                  .toUpperCase()}
              </p>
              {isActiveTrainer && (
                <div className={styles.slot_list}>
                  {availableTimes.map((t, i) => (
                    <div
                      key={t}
                      className={styles.timeSlot_container}
                      onClick={() => {
                        setValue('totalHours', 1)
                      }}
                    >
                      <input
                        type="radio"
                        value={t}
                        id={`slot_${t}`}
                        {...register('timeslotId', {
                          required: true,
                        })}
                        onChange={(e) => {
                          setValue('timeslotId', e.target.value)
                          setSelectedDate(moment(closestSlot.date))
                        }}
                      />
                      <label
                        htmlFor={`slot_${t}`}
                        className={`${styles.timeSlot} ${
                          watch('timeslotId') == t && styles.timeSlot_active
                        }`}
                      >
                        {t}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <p>Вільних місць немає</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrainerBookCard
