'use client'
//libs
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
//redux
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  createTraining,
  deleteTraining,
  fetchOneTraining,
  resetCurrentTraining,
  updateTraining,
} from '@/store/slices/Trainings.slice'
//styles
import spinner from '../../../../../../public/images/spinner.svg'
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//types
import { TrainingRequest } from '@/common/types'
import { createTrainer, deleteTrainer, updateTrainer } from '@/store/slices/TrainersAdmin.slice'
import ImageUploader from '@/components/ImageUploader/ImageUploader'
import  getChangedFields  from '@/utils/getChangedFields'
import { toast } from 'react-toastify'
import slugify from 'slugify'


const EditTrainingPag = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const currentTraining = useAppSelector(state => state.Trainings.currentTraining)
  const currentTrainingFetchStatus = useAppSelector(state => state.Trainings.trainingsFetchStatus)
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    if (id != 'new') {
      dispatch(fetchOneTraining(parseInt(id)))
    }

    return () => {
      dispatch(resetCurrentTraining())
    }
    //eslint-disable-next-line
  }, [])

  const {
    register,
    setValue,
    watch,
    reset,
    handleSubmit,
    trigger,
    formState: { isSubmitting, isValid },
  } = useForm<TrainingRequest>({
    defaultValues: {
      isFlexible: true,
    },
  })

  useEffect(() => {
    register('base64Image', { required: !currentTraining?.image })
    if (currentTraining) {
      reset(currentTraining)
    }
    //eslint-disable-next-line
  }, [currentTraining])

  const onSubmit = (data: TrainingRequest) => {
    if (currentTraining) {
      const body = getChangedFields(currentTraining, data)
      if (Object.keys(body).length === 0) {
        toast.error('Ви не внесли ніяких змін !')
        return
      }
      dispatch(updateTraining({ id: currentTraining.id, training: body }))
    } else {
      dispatch(createTraining(data))
    }
  }

  if (currentTrainingFetchStatus === 'pending') {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }
  return (

    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <h1 className={styles.name}>{currentTraining?.name}</h1>
      <div className={styles.header}>
        <button type={'submit'} disabled={!isValid} className={global.primaryBtn}>Зберегти</button>
        <button type={'button'} className={`${global.primaryBtn} ${global.greyButton}`}
                onClick={() => router.push('/admin/trainings')}>Закрити
        </button>
        <button type={'button'} disabled={!currentTraining} className={`${global.primaryBtn} ${global.redButton}`}
                onClick={() => {
                  if (currentTraining) {
                    dispatch(deleteTraining(currentTraining.id)).then(() => router.push('/admin/trainings'))
                  }
                }}>Видалити
        </button>
      </div>
      <div className={styles.form}>
        <div className={styles.info}>
          <div className={`${global.inputField} ${styles.flexible}`}>
            <div className={global.checkbox_wrapper}>
              <input type="checkbox" id={'flexible'} checked={watch('isFlexible')}
                     {...register('isFlexible', { required: true })} />
              <label htmlFor={'flexible'}>
                <svg viewBox="0,0,50,50">
                  <path d="M5 30 L 20 45 L 45 5"></path>
                </svg>
              </label>
            </div>
            <label>Гнучкі години</label>
          </div>
          <div className={global.inputField}>
            <label>Назва</label>
            <input type="text" className={global.input} placeholder="Введіть назву"
                   {...register('name', { required: true })} />
          </div>
          <div className={global.inputField}>
            <label>Ціна за годину</label>
            <input type="number" className={global.input} placeholder="Введіть погодинну ціну"
                   {...register('pricePerHour', { required: !watch('isFlexible') })} />
          </div>
          <div className={global.inputField}>
            <label>Передплата</label>
            <input type="number" className={global.input} placeholder="Введіть передплату"
                   {...register('prepay', { required: true })} />
          </div>
          <div className={global.inputField}>
            <label>Посилання</label>
            <input type={'text'} className={global.input} placeholder="Введіть посилання"
                      {...register('slug', {
                        required: true, minLength: 1,
                        onChange: (e) => {
                          setValue(`slug`, slugify(e.target.value.replace(/[^a-zA-Zа-яА-Я0-9\s]/g, ''), {
                            lower: true,
                            remove: /[*+~.()''!:@<>$₽]/g,
                          }))
                        },
                      })} />
          </div>
          <div className={global.inputField}>
            <label>Опис</label>
            <textarea cols={6} rows={4} className={global.input} placeholder="Введіть опис"
                      {...register('description', { required: true })} />
          </div>
          <div className={global.inputField}>
            <label>Короткий опис</label>
            <textarea cols={6} rows={2} className={global.input} placeholder="Введіть опис"
                      {...register('shortDescription', { required: true })} />
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.high}>
            <p className={styles.previewTitle}>Картинка</p>
            <ImageUploader trigger={trigger} setValue={setValue} inputName={'base64Image'}
                           previewClass={'highPreview'} />
            <div className={`highPreview ${styles.firstImg}`}>
              {(!!watch('base64Image') || currentTraining?.image) &&
                <Image src={(watch('base64Image') as string) ?? currentTraining?.image}
                       alt={currentTraining?.name ?? 'Тренування'}
                       className={styles.imageFile}
                       width={280} height={320} />}
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default EditTrainingPag
