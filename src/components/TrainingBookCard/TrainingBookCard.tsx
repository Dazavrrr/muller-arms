//libs
import { FC } from 'react'
//styles
import styles from './styles.module.scss'
//types
import { BookingCreateRequest } from '@/common/types'
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'
import moment from 'moment/moment'
import { Training } from '@/models/training'

interface Props {
  training: Training
  setValue: UseFormSetValue<BookingCreateRequest>
  watch: UseFormWatch<BookingCreateRequest>
  endTimes: number[]
}

const TrainingBookCard: FC<Props> = ({
  training,
  watch,
  setValue,
  endTimes,
}) => {
  function countConsecutiveFreeSlots() {
    const startTime = watch('timeslotId')
    const startTimeNumber = startTime
      ? parseInt(startTime.split(':')[0], 10)
      : null
    const currentEndTime = Math.min(
      ...endTimes.filter((item) => startTimeNumber && item > startTimeNumber)
    )
    return currentEndTime && startTimeNumber
      ? currentEndTime - startTimeNumber
      : 0
  }

  return (
    <div
      className={`${styles.container} ${
        watch('trainingId') == training.id && styles.open
      }`}
    >
      <div
        className={styles.header}
        onClick={() => {
          if (watch('trainingId') == training.id) {
            setValue('trainingId', null)
          } else {
            setValue('trainingId', training.id)
          }
        }}
      >
        <p className={styles.name}>{training.name}</p>
        <div className={styles.toggler}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.field}>
          <p>
            Кількість годин тренування: <span>{watch('totalHours')}</span>
            <br />
            <span className={styles.red}>
              Максимум: {countConsecutiveFreeSlots()}
            </span>
          </p>
          <div className={styles.input}>
            <input
              min={1}
              max={countConsecutiveFreeSlots()}
              type="number"
              value={watch('totalHours')}
              onChange={(e) => {
                if (
                  e.target.value != '0' &&
                  parseInt(e.target.value) <= countConsecutiveFreeSlots()
                ) {
                  setValue('totalHours', parseInt(e.target.value))
                  return
                }
                setValue('totalHours', 1)
              }}
            />
            <span
              className={styles.plus}
              onClick={() => {
                if (watch('totalHours') !== 1) {
                  setValue('totalHours', watch('totalHours') - 1)
                }
              }}
            >
              -
            </span>
            <span
              className={styles.minus}
              onClick={() => {
                if (watch('totalHours') < countConsecutiveFreeSlots()) {
                  setValue('totalHours', watch('totalHours') + 1)
                }
              }}
            >
              +
            </span>
          </div>
        </div>
        <div className={styles.field}>
          <p>Ціна</p>
          <p className={styles.price}>
            {watch('totalHours') * training.price_per_hour} ГРН
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrainingBookCard
