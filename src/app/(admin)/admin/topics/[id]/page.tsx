'use client'
//libs
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
//styles'
import local from './styles.module.scss'
import styles from '../../styles.module.scss'
import global from '@/styles/global.module.scss'
//types
import { ArticleCreateRequest } from '@/common/types'
//redux
import { useAppDispatch, useAppSelector } from '@/store/hooks'
//images
import spinner from '../../../../../../public/images/spinner.svg'

import {
  createArticle,
  deleteArticle,
  fetchOneArticle,
  resetCurrentArticle,
  updateArticle,
} from '@/store/slices/Articles.slise'
import ImageUploader from '@/components/ImageUploader/ImageUploader'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import SectionAdminCard from '@/components/SectionAdminCard/SectionAdminCard'
import slugify from 'slugify'
import { getChangedFields } from '@/utils/getChangedFields'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { InputMask } from '@react-input/mask'
import moment from 'moment'


const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const router = useRouter()
  const dispatch = useAppDispatch()
  const currentArticle = useAppSelector(state => state.Articles.currentArticle)
  const oneArticleFetchStatus = useAppSelector(state => state.Articles.oneArticleFetchStatus)
  const [isAnnouncement, setAnnouncement] = useState<boolean>(false)

  useEffect(() => {
    register('base64Image', {required: true})
    if (id != 'new') {
      dispatch(fetchOneArticle(parseInt(id)));
    }
    return () => {
      dispatch(resetCurrentArticle())
    }
  }, [])

  useEffect(() => {
    if (currentArticle){
      reset(currentArticle);
      if (currentArticle.eventAddress != null){
        setAnnouncement(true);
      }
    }
  }, [currentArticle])


  const {
    register,
    setValue,
    watch,
    trigger,
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, dirtyFields },
  } = useForm<ArticleCreateRequest>({
    defaultValues: {
      sections: [],
    },
  })

  const { fields, append, remove } = useFieldArray<ArticleCreateRequest>({
    control: control,
    name: 'sections',
  })

  const onSubmit = (data: ArticleCreateRequest) => {
    if (id === 'new') {
      dispatch(createArticle(data)).then(({payload}) => {
        if (payload){
          router.push(`/admin/topics/${payload.id}`);
        }
      })
      return
    }

    if (currentArticle) {
      const changedFields = getChangedFields({
        title: currentArticle.title,
        author: currentArticle.author,
        isArchived: currentArticle.isArchived,
        isNews: currentArticle.isNews,
        eventAddress: currentArticle.eventAddress,
        eventTime: currentArticle.eventTime,
        text: currentArticle.text,
        slug: currentArticle.slug,
      }, {
        title: data.title,
        author: data.author,
        base64Image: data.base64Image,
        isArchived: data.isArchived,
        isNews: data.isNews,
        eventAddress: data.eventAddress,
        eventTime: data.eventTime,
        text: data.text,
        slug: data.slug,
      })

      if (Object.keys(changedFields).length === 0) {
        toast.error('Ви не внесли ніяких змін')
        return
      }
      dispatch(updateArticle({ id: currentArticle.id, article: changedFields }))
    }

  }

  if (oneArticleFetchStatus === 'pending') {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.header}>
        <button type={'submit'} className={global.primaryBtn}>Зберегти</button>
        <button type={'button'} className={`${global.primaryBtn} ${global.greyButton}`}
                onClick={() => router.push('/admin/topics')}>Закрити
        </button>
        <button type={'button'} disabled={!currentArticle} className={`${global.primaryBtn} ${global.redButton}`}
                onClick={() => {
                  if (currentArticle) {
                    dispatch(deleteArticle(currentArticle.id)).then(() => router.push('/admin/topics'))
                  }
                }}>Видалити
        </button>
      </div>
      <div className={local.body}>
        <div className={local.left}>
          <div className={local.checkboxes}>
            <div className={local.checkbox}>
              <div className={global.checkbox_wrapper}>
                <input type="checkbox" id={'archived'}
                       {...register('isArchived')} />
                <label htmlFor={'archived'}>
                  <svg viewBox="0,0,50,50">
                    <path d="M5 30 L 20 45 L 45 5"></path>
                  </svg>
                </label>
              </div>
              <label>Архів</label>
            </div>

            <div className={local.checkbox}>
              <div className={global.checkbox_wrapper}>
                <input type="checkbox" id={'news'}
                       {...register('isNews',
                         {
                           onChange: (e) => {
                             if (e.target.checked) {
                               setAnnouncement(false)
                             }
                           },
                         })} />
                <label htmlFor={'news'}>
                  <svg viewBox="0,0,50,50">
                    <path d="M5 30 L 20 45 L 45 5"></path>
                  </svg>
                </label>
              </div>
              <label>Новина</label>
            </div>

            <div className={local.checkbox}>
              <div className={global.checkbox_wrapper}>
                <input type="checkbox" id={'announcement'} checked={isAnnouncement}
                       onChange={() => {
                         setAnnouncement(prev => {
                           if (!prev) {
                             setValue('isNews', false)
                           }
                           return !prev
                         })
                       }} />
                <label htmlFor={'announcement'}>
                  <svg viewBox="0,0,50,50">
                    <path d="M5 30 L 20 45 L 45 5"></path>
                  </svg>
                </label>
              </div>
              <label>Анонс</label>
            </div>
          </div>

          <div className={global.inputField}>
            <label>Назва</label>
            <input type="text" className={global.input} placeholder={'Введіть назву'}
                   {...register('title', {
                     required: true,
                     minLength: 1,
                     onChange: (e) => {
                       setValue(`slug`, slugify(e.target.value.replace(/[^a-zA-Zа-яА-Я0-9\s]/g, ''), {
                         lower: true,
                         remove: /[*+~.()''!:@<>$₽]/g,
                       }))
                     },
                   })} />
          </div>
          <div className={global.inputField}>
            <label>Автор</label>
            <input type="text" {...register('author', { required: !watch('isNews'), minLength: 1,disabled: watch('isNews') })} className={global.input}
                   placeholder={'Введіть автора'} />
          </div>
          <div className={global.inputField}>
            <label>Посилання</label>
            <input type="text" {...register('slug', { required: true,  minLength: 1,
              onChange: (e) => {
                setValue(`slug`, slugify(e.target.value.replace(/[^a-zA-Zа-яА-Я0-9\s]/g, ''), {
                  lower: true,
                  remove: /[*+~.()''!:@<>$₽]/g,
                }))
              }, })} className={global.input}
                   placeholder={'Введіть посилання'} />
          </div>
          <div className={global.inputField}>
            <label>Головний текст</label>
            <textarea rows={9} {...register('text', { required: true, minLength: 1 })} className={global.input}
                      placeholder={'Введіть текст'} />
          </div>
          {isAnnouncement && <>
            <div className={global.inputField}>
              <label>Адреса анонсу</label>
              <input type="text" {...register('eventAddress', { required: isAnnouncement, minLength: 1 })}
                     className={global.input}
                     placeholder={'Введіть адресу'} />
            </div>
            <div className={global.inputField}>
              <label>Час анонсу</label>
              <Controller
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateTimePicker {...field} minDateTime={moment()}
                                    value={moment(watch('eventTime')).utc(true)} ampm={false} label="Вкажіть час" />
                  </LocalizationProvider>
                )}
                name={'eventTime'}
                control={control}
                rules={{ required: isAnnouncement }} />
            </div>
          </>}
        </div>
        <div className={local.right}>
          <p className={local.previewTitle} onClick={() => {
            console.log(watch())
            console.log(dirtyFields)
          }}>Головна картинка</p>
          <ImageUploader trigger={trigger} setValue={setValue} inputName={'base64Image'}
                         previewClass={'mainImage'} />
          <div className={`mainImage ${local.mainImage}`}>
            {(!!watch('base64Image') || currentArticle?.imagePath) &&
              <Image
                src={(watch('base64Image') as string) ?? currentArticle?.imagePath}
                alt={'image'}
                className={local.imageFile}
                width={880} height={1060} />}
          </div>
        </div>
      </div>
      <div className={local.sections}>
        <div className={local.sectionsLeft}>
          <h2 className={styles.title}>Секції</h2>
          <div className={local.sectionsWrapper}>
            {fields.map((field, index) => (
              <SectionAdminCard remove={remove} key={field.id} register={register} watch={watch}
                                setValue={setValue} index={index} />
            ))}
          </div>
        </div>
        <div className={local.sectionsRight}>
          <button className={`${local.prependBtn} ${global.primaryBtn}`} onClick={() => append({
            title: '',
            text: '',
            images: [],
          })}>Додати секцію
          </button>
        </div>

      </div>
    </form>
  )
}

export default Page
