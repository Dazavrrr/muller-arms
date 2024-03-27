'use client'

//styles
import styles from '../styles.module.scss'
import global from '@/styles/global.module.scss'
import fStyles from '../../styles.module.scss'
import bStyles from '@/app/(booking)/booking/styles.module.scss'
import { useForm } from 'react-hook-form'
import { BookingUpdateRequest, LibDocCreateDto, LibDocType } from '@/common/types'
import { useRouter } from 'next/navigation'
import { deleteBooking } from '@/store/slices/Bookings.slice'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  createDoc,
  deleteDoc,
  fetchAllCategories,
  fetchDocById,
  resetCurrentDoc,
  updateLibDoc,
} from '@/store/slices/Library.slice'
import Image from 'next/image'
import spinner from '../../../../../../public/images/spinner.svg'
import ImageUploader from '@/components/ImageUploader/ImageUploader'
import { toast } from 'react-toastify'
import { getChangedFields } from '@/utils/getChangedFields'

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const doc = useAppSelector(state => state.Library.currentDoc)
  const currentDocFetchStatus = useAppSelector(state => state.Library.currentDocFetchStatus)
  const categories = useAppSelector(state => state.Library.categories)
  const dispatch = useAppDispatch()
  const [file, setFile] = useState<File>()
  const {
    register,
    setValue,
    watch,
    trigger,
    reset,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<LibDocCreateDto>({
    defaultValues: {
      categoryIds: [],
    }
  })
  const router = useRouter()

  useEffect(() => {
    if (id != 'new') {
      dispatch(fetchDocById(parseInt(id))).then(({ payload }) => {
        reset({
          name: payload.name,
          type: payload.type,
          categoryIds: payload.categoryIds
        })
      })
    }
    if (!categories.length) {
      dispatch(fetchAllCategories())
    }

    return () => {
      dispatch(resetCurrentDoc())
    }
  }, [])

  const onSubmit = (data: LibDocCreateDto) => {
    if (!file && id == 'new') {
      toast.error('Ви не завантажили файл')
      return
    }
    if (!watch('base64Image') && id == 'new'){
      toast.error('Ви не завантажили картинку')
      return
    }


    const fd = new FormData()
    file && fd.append('file', file)
    fd.append('dto', new Blob([JSON.stringify(data)], { type: 'application/json' }))

    if (id == 'new' || !doc){


      dispatch(createDoc(fd)).then(({ payload }) => {
        if (payload) {
          router.push(`/admin/library/${payload.id}`)
        }
      })
      return;
    }

    const changedFields = getChangedFields({
      name: doc.name,
      type: doc.type,
      categoryIds: doc.categoryIds
    }, watch())
    if (Object.keys(changedFields).length === 0){
      toast.error('Ви не внесли жодних змін')
      return
    }

    dispatch(updateLibDoc({id: doc.id,doc: fd}));
  }

  const isValidFn = () => {
    if (!isValid){
      return true;
    }
    if (!file && id == 'new'){
      return true;
    }
    return false;
  }

  if (currentDocFetchStatus === 'pending' || categories.length === 0) {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }
  return (
    <form className={fStyles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.header}>
        <button type={'submit'} disabled={isValidFn()} className={global.primaryBtn}>Зберегти</button>
        <button type={'button'} className={`${global.primaryBtn} ${global.greyButton}`}
                onClick={() => router.push('/admin/library')}>Закрити
        </button>
        <button type={'button'} disabled={!doc} className={`${global.primaryBtn} ${global.redButton}`}
                onClick={() => {
                  if (doc) {
                    dispatch(deleteDoc(doc.id)).then(() => router.push('/admin/library'))
                  }
                }}>Видалити
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={global.inputField}>
            <label onClick={() => console.log(watch())}>Назва</label>
            <input type="text" className={global.input} placeholder={'Введіть назву'}
                   {...register('name', { required: true })} />
          </div>

          <div className={global.inputField}>
            <label>Тип</label>
            <select className={global.input} {...register('type', { required: true })}>
              <option value="">Оберіть тип</option>
              <option value="BOOK">Текст</option>
              <option value="AUDIO">Аудіо</option>
              <option value="VIDEO">Відео</option>
            </select>
          </div>

          <div className={global.inputField}>
            <label>Категорії</label>
            <div className={styles.checkboxes}></div>
            <div className={styles.modal}>
              {categories.map(c => (
                <div className={styles.checkbox} key={`checkbox_${c.id}`}>
                  <input type="checkbox" value={c.id} id={c.id.toString()}
                         checked={!!watch('categoryIds').find(cat => {
                           return cat == c.id
                         })}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setValue('categoryIds',[...watch('categoryIds'),c.id])
                          } else {
                            setValue('categoryIds',watch('categoryIds').filter(cat => cat != c.id))
                          }
                        }} />
                  <label htmlFor={c.id.toString()}>{c.name}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <p className={fStyles.title}>Картинка</p>
          <ImageUploader setValue={setValue} previewClass={'base64ImagePreview'} inputName={'base64Image'}
                         trigger={trigger} />
          <div className={`base64ImagePreview ${styles.preview}`}>
            {(!!watch('base64Image') || doc?.imagePath) &&
              <Image src={(watch('base64Image') as string) ?? doc?.imagePath}
                     alt={doc?.name ?? 'Файл'}
                     className={styles.imageFile}
                     width={200} height={285} />}
          </div>

          <p className={fStyles.title}>
            Файл
            {!!doc && <a target={'_blank'} href={doc.downloadUrl} className={fStyles.title}>Cкачати існуючий</a>}
          </p>

          <input type="file" className={global.primaryBtn} placeholder={'Завантажити файл'}
                 onChange={(event) => {
                   if (event.target.files != null) {
                     setFile(event.target.files[0])
                   }
                 }}
          />
        </div>
      </div>
    </form>
  )
}

export default Page
