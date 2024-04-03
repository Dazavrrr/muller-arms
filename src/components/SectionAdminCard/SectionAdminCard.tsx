//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import React, { FC, useCallback } from 'react'
import {
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'
import { ArticleCreateRequest } from '@/common/types'
import { toast } from 'react-toastify'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { createSection, deleteSection, updateSection } from '@/store/slices/Sections.slise'
import { remove } from 'immutable'
import { updateSectionIndex } from '@/store/slices/Articles.slise'

interface Props {
  register: UseFormRegister<ArticleCreateRequest>,
  watch: UseFormWatch<ArticleCreateRequest>,
  setValue: UseFormSetValue<ArticleCreateRequest>,
  remove: UseFieldArrayRemove,
  index: number
}

const SectionAdminCard: FC<Props> = ({ register, setValue, index, watch, remove }) => {
  const dispatch = useAppDispatch()
  const currentArticle = useAppSelector(state => state.Articles.currentArticle)
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
        setValue(`sections.${index}.images`, base64ImagesArray)
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
  const id = watch(`sections.${index}.id`)

  const handleDelete = () => {
    if (id) {
      dispatch(deleteSection(id)).then(() => remove(index))
    } else {
      remove(index)
    }
  }

  const handleSave = () => {
    if(!currentArticle){
      toast.error('Батьківську статтю не знайдено');
      return;
    }
    const section = watch(`sections.${index}`);
    const images = section.images?.filter(i => !i.includes("/images"))
    const body = {
      articleId: currentArticle.id,
      title: section.title,
      text: section.text,
      images: images?.length ?? 0 > 0 ? images : undefined,
    }
    if (id) {
      dispatch(updateSection({id: id, section: body}));
    } else {
      dispatch(updateSectionIndex(index));
      dispatch(createSection(body));
    }
  }


  return (
    <div className={styles.container}>
      <div className={global.inputField}>
        <label>Заголовок</label>
        <input type="text" className={global.input} placeholder={'Введіть заголовок'}
               {...register(`sections.${index}.title`, { required: true, minLength: 1 })} />
      </div>

      <div className={global.inputField}>
        <label>Зміст</label>
        <textarea rows={6} className={global.input} placeholder={'Введіть зміст'}
                  {...register(`sections.${index}.text`, { required: true, minLength: 1 })} />
      </div>

      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Перетягніть фото або клікніть в цю область</p>
        <em>(Підтримка тільки для *.jpeg, *.jpg, *.png)</em>
        <p className={'quantity'}>Завантажено {acceptedFiles.length} файлів</p>
      </div>

      {<div className={styles.preview}>
        {watch(`sections.${index}.images`)?.map((img, i) => {
          if (img.length == 0) {
            return
          }
          return <Image width={279} height={311} src={img} alt={'image'} key={`img_${i}`} />
        })}
      </div>}

      <div className={styles.btns}>
        {!!currentArticle && <button type={'button'} className={global.primaryBtn}
                                     onClick={() => handleSave()}>Зберегти</button>}
        <button type={'button'} className={`${global.redButton} ${global.primaryBtn}`}
                onClick={() => handleDelete()}>Видалити
        </button>
      </div>
    </div>
  )
}

export default SectionAdminCard
