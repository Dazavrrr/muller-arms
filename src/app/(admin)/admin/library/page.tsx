'use client'

//libs
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
//styles
import styles from '../styles.module.scss'
import global from '@/styles/global.module.scss'
import local from './styles.module.scss'
//redux
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { deleteCategory, fetchAllCategories, fetchAllDocs, fetchAllDocsAdmin } from '@/store/slices/Library.slice'
//images
import spinner from '../../../../../public/images/spinner.svg'
import trash from '../../../../../public/icons/trash.svg'
import moment from 'moment/moment'
import { createTimeSlot, deleteTimeSlot } from '@/store/slices/TimeSlots.slice'
import plus from '../../../../../public/icons/plus.svg'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import LibCategoryForm from '@/components/LibCategoryForm/LibCategoryForm'
import Link from 'next/link'


const LibraryPage = () => {

  const categories = useAppSelector(state => state.Library.categories)
  const docs = useAppSelector(state => state.Library.docs)
  const docsFetchStatus = useAppSelector(state => state.Library.docsFetchStatus)
  const dispatch = useAppDispatch()
  const [isModal, setIsModal] = useState<boolean>(false)
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    dispatch(fetchAllCategories())
    dispatch(fetchAllDocsAdmin()).then(() => setPage(prev => prev + 1))

    //eslint-disable-next-line
  }, [])


  if (docsFetchStatus === 'pending') {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Категорії</h2>
      <div className={local.categories}>
        {categories.map(c => (
          <div key={`category_${c.id}`}
               className={`${styles.timeSlot}`}>
            <p>{c.name}</p>
            <div className={styles.trashWrapper} onClick={() => dispatch(deleteCategory(c.id))}>
              <Image src={trash} alt={'trash'} className={styles.trash} />
            </div>
          </div>
        ))}
        {!isModal ?
          <div className={styles.plus} onClick={() => setIsModal(true)}>
            <Image src={plus} alt={'plus'} />
          </div>
          :
          <LibCategoryForm close={() => setIsModal(false)}/>
        }
      </div>
      <h2 className={styles.title}>Файли</h2>
      <div className={local.files}>

      </div>
      <Link href={'library/new'} className={global.primaryBtn}>Додати новий</Link>
    </div>
  )
}

export default LibraryPage
