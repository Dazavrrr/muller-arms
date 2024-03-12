//libs
import { FC } from 'react'
//styles
import styles from './styles.module.scss'
//types
import { BookingCreateRequest, TrainingResponse } from '@/common/types'
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'
import { useAppSelector } from '@/store/hooks'
import moment from 'moment/moment'



interface Props{
  training: TrainingResponse,
  setValue: UseFormSetValue<BookingCreateRequest>,
  watch: UseFormWatch<BookingCreateRequest>,
}

const TrainingBookCard:FC<Props> = ({training,watch,setValue}) => {
  const timeSlots = useAppSelector(state => state.TimeSlots.allTimeSlots);
  function countConsecutiveFreeSlots() {

    const pickedSlot = timeSlots.find(t => t.id == watch('timeslotId'));

    if (timeSlots.length === 0 || !pickedSlot) {
      return 0;
    }

    const searchSlots = timeSlots.slice(timeSlots.indexOf(pickedSlot));

    let count = 1;

    for (let i = 0; i < searchSlots.length - 1; i++) {
      const currentSlot = moment(searchSlots[i].dateTime);
      const nextSlot = moment(searchSlots[i + 1].dateTime);

      if (nextSlot.diff(currentSlot, 'hours') <= 1) {
        count++;
      } else {
        break;
      }
    }

    return count;
  }


  return (
    <div className={`${styles.container} ${watch('trainingId') == training.id && styles.open}`}>
      <div className={styles.header} onClick={() => {
        if (watch('trainingId') == training.id) {
          setValue('trainingId', null);
        } else {
          setValue('trainingId', training.id)
        }
      }}>
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
            <br/>
            <span className={styles.red}>Максимум: {countConsecutiveFreeSlots()}</span>
          </p>
          <div className={styles.input}>
            <input min={1} max={countConsecutiveFreeSlots()} type="number" value={watch('totalHours')} onChange={e => {
              if (e.target.value != '0' && parseInt(e.target.value) <= countConsecutiveFreeSlots()) {
                setValue('totalHours',parseInt(e.target.value));
                return;
              }
             setValue('totalHours',1);
            }} />
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
        <div className={styles.field}>
          <p>Ціна</p>
          <p className={styles.price}>{watch('totalHours') * training.pricePerHour} ГРН</p>
        </div>
      </div>
    </div>
  )
}

export default TrainingBookCard
