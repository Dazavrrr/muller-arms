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
import { deleteCategory, fetchAllCategories, fetchAllDocsAdmin } from '@/store/slices/Library.slice'
//images
import spinner from '../../../../../public/images/spinner.svg'
import trash from '../../../../../public/icons/trash.svg'
import plus from '../../../../../public/icons/plus.svg'
import LibCategoryForm from '@/components/LibCategoryForm/LibCategoryForm'
import Link from 'next/link'
import LibElement from '@/components/LibElement'


const LibraryPage = () => {

  const categories = useAppSelector(state => state.Library.categories)
  const docs = useAppSelector(state => state.Library.docs)
  const docsFetchStatus = useAppSelector(state => state.Library.docsFetchStatus)
  const dispatch = useAppDispatch()
  const [isModal, setIsModal] = useState<boolean>(false)

  useEffect(() => {
    dispatch(fetchAllCategories())
    dispatch(fetchAllDocsAdmin())

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
      <Link href={'library/new'} className={global.primaryBtn}>Додати новий</Link>
      <h2 className={styles.title}>Файли</h2>
      <div className={local.files}>
        {docs?.items.map(({ name,downloadUrl,imagePath,id }) => (
          <Link href={`/admin/library/${id}`} key={`link_${id}`}>
            <LibElement name={name} downloadUrl={downloadUrl} imagePath={imagePath} key={id}/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LibraryPage
