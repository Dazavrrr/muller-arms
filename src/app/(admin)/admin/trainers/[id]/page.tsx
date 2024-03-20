'use client'
//libs
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
//redux
import {
  createTrainer,
  deleteTrainer,
  fetchOneTrainer,
  resetCurrentTrainer,
  updateTrainer,
} from '@/store/slices/TrainersAdmin.slice'
//types
import { TrainerAdminRequest } from '@/common/types'
//images
import spinner from '../../../../../../public/images/spinner.svg'
//styles
import '../../../styles.scss'
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//components
import ImageUploader from '@/components/ImageUploader/ImageUploader'
import { getChangedFields } from '@/utils/getChangedFields'
import { toast } from 'react-toastify'


const EditTrainerPage = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const currentTrainer = useAppSelector(state => state.TrainersAdmin.currentTrainer)
  const currentTrainerFetchStatus = useAppSelector(state => state.TrainersAdmin.oneTrainerFetchStatus)
  const dispatch = useAppDispatch()
  const router = useRouter()
  useEffect(() => {
    if (id != 'new') {
      dispatch(fetchOneTrainer(parseInt(id)))
    }

    return () => {
      dispatch(resetCurrentTrainer())
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
  } = useForm<TrainerAdminRequest>()

  useEffect(() => {
    register('base64ImageTall',{required: !currentTrainer?.tallImage});
    register('base64ImageWide',{required: !currentTrainer?.wideImage});
    if (currentTrainer) {
      reset(currentTrainer)
    }
    //eslint-disable-next-line
  }, [currentTrainer])

  const onSubmit = (data: TrainerAdminRequest) => {
    if (currentTrainer) {
      const body = getChangedFields(currentTrainer,data);
      if (Object.keys(body).length === 0 ){
        toast.error("Ви не внесли ніяких змін !")
        return;
      }
      dispatch(updateTrainer({ id: currentTrainer.id, trainer: body }))
    } else {
      dispatch(createTrainer(data))
    }
  }


  if (currentTrainerFetchStatus === 'pending') {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <h1 className={styles.name}>{currentTrainer?.firstName} {currentTrainer?.lastName}</h1>
      <div className={styles.header}>
        <button type={'submit'} disabled={!isValid} className={global.primaryBtn}>Зберегти</button>
        <button type={'button'} className={`${global.primaryBtn} ${global.greyButton}`}
             onClick={() => router.push('/admin/trainers')}>Закрити
        </button>
        <button type={'button'} disabled={!currentTrainer} className={`${global.primaryBtn} ${global.redButton}`}
             onClick={() => {
               if (currentTrainer) {
                 dispatch(deleteTrainer(currentTrainer.id)).then(() => router.push('/admin/trainers'))
               }
             }}>Видалити</button>
      </div>
      <div className={styles.form}>
        <div className={styles.info}>
          <div className={global.inputField}>
            <label>Ім&apos;я</label>
            <input type="text" className={global.input} placeholder="Введіть ім'я"
                   {...register('firstName', { required: true })} />
          </div>
          <div className={global.inputField}>
            <label>Прізвище</label>
            <input type="text" className={global.input} placeholder="Введіть прізвище"
                   {...register('lastName', { required: true })} />
          </div>
          <div className={global.inputField}>
            <label>Email</label>
            <input type="text" className={global.input} placeholder="Введіть email"
                   {...register('email', {
                     required: true, pattern: {
                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                       message: 'invalid email address',
                     },
                   })} />
          </div>
          <div className={global.inputField}>
            <label>Посилання на instagram</label>
            <input type="text" className={global.input} placeholder="Введіть посилання"
                   {...register('instagramLink', { required: true })} />
          </div>
          <div className={global.inputField}>
            <label>Назва акаунту instagram</label>
            <input type="text" className={global.input} placeholder="Введіть назву"
                   {...register('instagramName', { required: true })} />
          </div>
          <div className={global.inputField}>
            <label>Google Calendar ID</label>
            <input type="text" className={global.input} placeholder="Введіть id"
                   {...register('calendarId', { required: true })} />
          </div>
          <div className={global.inputField}>
            <label>Опис</label>
            <textarea cols={6} rows={4} className={global.input} placeholder="Введіть опис"
                      {...register('description', { required: true })} />
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.high}>
            <p className={styles.previewTitle}>Висока картинка</p>
            <ImageUploader trigger={trigger} setValue={setValue} inputName={'base64ImageTall'} previewClass={'highPreview'} />
            <div className={`highPreview ${styles.firstImg}`}>
              {(!!watch('base64ImageTall') || currentTrainer?.tallImage) && <Image src={(watch('base64ImageTall') as string) ?? currentTrainer?.tallImage}
                      alt={currentTrainer?.firstName ?? ''}
                      className={styles.imageFile}
                      width={196} height={392} />}
            </div>
          </div>
          <div className={styles.wide}>
            <p className={styles.previewTitle}>Широка картинка</p>
            <ImageUploader trigger={trigger} inputName={'base64ImageWide'} setValue={setValue} previewClass={'widePreview'} />
            <div className={`widePreview ${styles.thirdImg}`}>
              {(!!watch('base64ImageWide') || currentTrainer?.wideImage) && <Image src={(watch('base64ImageWide') as string) ?? currentTrainer?.wideImage}
                      alt={currentTrainer?.firstName ?? ' '}
                      className={styles.imageFile}
                      width={322} height={287} />}
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default EditTrainerPage
