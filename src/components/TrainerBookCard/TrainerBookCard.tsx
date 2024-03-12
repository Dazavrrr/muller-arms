'use client'
import Image from 'next/image'
import { BookingCreateRequest, TrainerResponse } from '@/common/types'
import moment, { Moment } from 'moment'
import { UseFormRegister,  UseFormSetValue, UseFormWatch } from 'react-hook-form'
import { Dispatch, FC, SetStateAction } from 'react'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import instagram from '../../../public/images/booking/instagram.svg'

interface Props {
  trainer: TrainerResponse,
  register: UseFormRegister<BookingCreateRequest>,
  setValue: UseFormSetValue<BookingCreateRequest>,
  watch: UseFormWatch<BookingCreateRequest>,
  setSelectedDate: Dispatch<SetStateAction<Moment>>
}

const TrainerBookCard: FC<Props> = ({ trainer, register, setValue, watch,setSelectedDate }) => {

  const handleTrainerChange = () => {
    if (watch('trainerId') != trainer.id){
      setValue('trainerId', trainer.id);
      setTimeout(() => {
        setValue('timeslotId', null);
      },0)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.image} onClick={handleTrainerChange}>
        <Image width={196} height={392} src={window.innerWidth > 760 ? trainer.tallImage : trainer.wideImage} alt={`${trainer.firstName} ${trainer.lastName}`} />
      </div>
      <div className={styles.info}>
        <div onClick={handleTrainerChange}>
          <div className={styles.info_header}>
            <a href={trainer.instagramLink}
               target={'_blank'} rel="noreferrer">{trainer.instagramName} <Image src={instagram}
                                                                                 alt={'instagram icon'} /></a>

            <div className={global.checkbox_wrapper}>
              <input checked={watch('trainerId') == trainer.id} type="radio" value={trainer.id}
                     id={`trainer_${trainer.id}`} {...register('trainerId', { required: true })} />
              <label htmlFor={`trainer_${trainer.id}`}>
                <svg viewBox="0,0,50,50">
                  <path d="M5 30 L 20 45 L 45 5"></path>
                </svg>
              </label>
            </div>
          </div>
          <p className={styles.name}>{trainer.firstName} {trainer.lastName}</p>
          <p className={styles.desc}>{trainer.description}</p>
        </div>
        <div className={styles.close_dates}>
          <p>Найближчий час для запису:</p>

            {!!trainer.upcomingTimeSlots.length ?
              <>
                <p>{moment(trainer.upcomingTimeSlots[0].dateTime).locale('uk')
                  .format('DD MMMM YYYY').toUpperCase()}</p>
                <div className={styles.slot_list}>
                  {trainer.upcomingTimeSlots.map((t,i) => (
                    <div key={t.id} className={styles.timeSlot_container}
                         onClick={() => {
                           setTimeout(() => {
                             setValue('trainerId', trainer.id);
                             setSelectedDate(moment(t.dateTime));
                             if (trainer.upcomingTimeSlots.length - i < watch('totalHours')) {
                               setValue('totalHours', trainer.upcomingTimeSlots.length - i)
                             }
                           }, 0)
                         }}>
                      <input type="radio" value={t.id} id={`slot_${t.id}`}
                             {...register('timeslotId', { required: true })} />
                      <label htmlFor={`slot_${t.id}`}
                             className={`${styles.timeSlot} ${watch('timeslotId') == t.id && styles.timeSlot_active}`}>
                        {moment(t.dateTime).format('HH:mm')}
                      </label>
                    </div>
                  ))}
                </div>
              </>
              :
              <p>Вільних місць немає</p>
            }


        </div>
      </div>
    </div>
  )
}

export default TrainerBookCard
