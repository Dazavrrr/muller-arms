'use client'

//styles
import styles from '../../styles.module.scss'
import global from '@/styles/global.module.scss'
import { useForm } from 'react-hook-form'
import { ShopItemCreateDto } from '@/common/types'
import React, { useCallback, useEffect, useState } from 'react'
import { deleteDoc } from '@/store/slices/Library.slice'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import spinner from '../../../../../../public/images/spinner.svg'
import {
  createShopItem,
  deleteCategory,
  deleteShopItem,
  fetchAllCategories,
  fetchOneShopItem,
  resetCurrentItem, updateShopItem,
} from '@/store/slices/Shop.slice'
import trash from '../../../../../../public/icons/trash.svg'
import { toast } from 'react-toastify'
import { useDropzone } from 'react-dropzone'
import slugify from 'slugify'
import getChangedFields  from '@/utils/getChangedFields'

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id
  const categories = useAppSelector(state => state.Shop.categories)
  const item = useAppSelector(state => state.Shop.currentItem)
  const currentItemFetchStatus = useAppSelector(state => state.Shop.currentItemFetchStatus)
  const dispatch = useAppDispatch()
  const [size, setSize] = useState<string>('')
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { isValid ,errors},
  } = useForm<ShopItemCreateDto>({
    defaultValues: {
      sizes: [],
      base64Images: [],
      categoryIds: []
    },
  })

  const router = useRouter()

  const onDrop = useCallback((acceptedFiles: any) => {

    const base64Images = acceptedFiles.map((file: File) => {
      return new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader()

        fileReader.onload = () => {
          const base64Data = fileReader.result ? fileReader.result.toString() : ''
          resolve(base64Data)
        }

        fileReader.onerror = (error) => {
          reject(error)
        }

        fileReader.readAsDataURL(file)
      })
    })

    Promise.all(base64Images)
      .then((base64ImagesArray) => {
        setValue('base64Images', base64ImagesArray)
        toast.success(`Файли успішно завантажені.`)
      })
      .catch((error) => {
        toast.error('Сталася помилка при завантаженні', error)
      })
  }, [])

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
  } = useDropzone({
    maxFiles: 3,
    accept: {
      'image/jpeg': [],
      'image/jpg': [],
      'image/png': [],
    },
    onDrop: onDrop,
  })

  useEffect(() => {

    dispatch(fetchAllCategories())
    if (id != 'new') {
      dispatch(fetchOneShopItem(id)).then(({payload}) => {
        reset({
          name: payload.name,
          slug: payload.slug,
          description: payload.description,
          sizes: payload.sizes,
          price:   payload.price,
          isCertificate: payload.isCertificate,
          categoryIds: payload.categoryIds
        })
      })
    }
    return () => {
      dispatch(resetCurrentItem())
    }
  }, [])

  const onSubmit = (data: ShopItemCreateDto) => {

    if (id == 'new') {
      if (!watch('base64Images').length){
        toast.error('Ви не завантажили картинки')
        return
      }

      dispatch(createShopItem(data)).then(({ payload }) => {
        if (payload) {
          router.push(`/admin/shop/${payload.id}`)
        }
      })
      return
    }

    if (item){
      const changed = getChangedFields(
        {
          name: item.name,
          slug: item.slug,
          description: item.description,
          sizes: item.sizes,
          price:   item.price,
          isCertificate: item.isCertificate,
          categoryIds: item.categoryIds
        },
        data
      )
      const keys = Object.keys(changed);
      if (keys.length == 0){
        toast.error('Ви не внесли ніяких змін');
        return;
      }

      dispatch(updateShopItem({id: item.id, data}))
    }

    // dispatch(updateShopItem(data))
  }

  const isValidFn = () => {
    if (id == 'new' && !watch('base64Images').length){
      return true;
    }

    return false;
  }


  if (currentItemFetchStatus === 'pending' || categories.length === 0) {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.header}>
        <button type={'submit'} className={global.primaryBtn}>Зберегти</button>
        <button type={'button'} className={`${global.primaryBtn} ${global.greyButton}`}
                onClick={() => router.push('/admin/shop')}>Закрити
        </button>
        <button type={'button'} disabled={!item} className={`${global.primaryBtn} ${global.redButton}`}
                onClick={() => {
                  if (item) {
                    dispatch(deleteShopItem((item.id))).then(() => router.push('/admin/shop'))
                  }
                }}>Видалити
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={`${global.inputField} ${styles.checkboxContainer}`}>
            <div className={global.checkbox_wrapper}>
              <input type="checkbox" id={'certificate'}
                     {...register('isCertificate')} />
              <label htmlFor={'certificate'}>
                <svg viewBox="0,0,50,50">
                  <path d="M5 30 L 20 45 L 45 5"></path>
                </svg>
              </label>
            </div>
            <label>Сертифікат</label>
          </div>

          <div className={global.inputField}>
            <label>Назва</label>
            <input type="text" className={global.input}
                   {...register('name', { required: true, minLength: 1,
                     onChange: (e) => {
                       setValue(`slug`, slugify(e.target.value.replace(/[^a-zA-Zа-яА-Я0-9\s]/g, ''), {
                         lower: true,
                         remove: /[*+~.()''!:@<>$₽]/g,
                       }))
                     },})} />
          </div>
          <div className={global.inputField}>
            <label>Опис</label>
            <textarea className={global.input}
                   {...register('description', { required: true })} />
          </div>
          <div className={global.inputField}>
            <label>Посилання</label>
            <input type="text" className={global.input}
                   {...register('slug', { required: true })} />
          </div>
          <div className={global.inputField}>
            <label>Ціна</label>
            <input type="number" className={global.input}
                   {...register('price', { required: true })} />
          </div>
          <div className={global.inputField}>
            <label>Розміри</label>
            <div className={styles.sizes}>
              <input type="text" value={size} onChange={e => setSize(e.target.value)} className={global.input} />
              <button type={'button'} className={global.primaryBtn}
                      disabled={!size}
                      onClick={() => {
                        !!size && setValue('sizes', [...watch('sizes'), size])
                        setSize('')
                      }}>Додати
              </button>
            </div>

            <div className={`${styles.timeSlots} ${styles.sizesCards}`}>
              {watch('sizes').map((s,i) => (
                <div className={styles.timeSlot} key={i}>
                  <p>{s}</p>
                  <Image src={trash} alt={'trash'} className={styles.trashWrapper}
                         onClick={() => {
                           setValue('sizes', watch('sizes').filter(size => size != s))
                         }} />
                </div>
              ))}
            </div>
          </div>
          <div className={global.inputField}>
            <label>Категорії</label>
            {categories.map(c => (
              <div className={styles.checkbox} key={`checkbox_${c.id}`}>
                <input type="checkbox" value={c.id} id={c.id.toString()}
                       checked={!!watch('categoryIds').find(cat => {
                         return cat == c.id
                       })}
                       onChange={(e) => {
                         if (e.target.checked) {
                           setValue('categoryIds', [...watch('categoryIds'), c.id])
                         } else {
                           setValue('categoryIds', watch('categoryIds').filter(cat => cat != c.id))
                         }
                       }} />
                <label htmlFor={c.id.toString()}>{c.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Перетягніть фото або клікніть в цю область</p>
            <em>(Підтримка тільки для *.jpeg, *.jpg, *.png)</em>
            <p className={'quantity'}>Завантажено {acceptedFiles.length} файлів</p>
          </div>

          {<div className={styles.preview}>
            {watch(`base64Images`)?.map((img, i) => {
              if (img.length == 0) {
                return
              }
              return <Image width={204} height={227} src={img} alt={'image'} key={`img_${i}`} />
            })}
            {!watch(`base64Images`)?.length && !!item && item.images.map((img, i) => <Image width={204} height={227} src={img} alt={'image'} key={`img_${i}`} />)}
          </div>}
        </div>
      </div>

    </form>
  )
}

export default Page
