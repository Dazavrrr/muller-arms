'use client'
//libs
import React, { useEffect, useState } from 'react'
import LibCategoryComp from '../LibCategory'
//styles
import styles from './styles.module.scss'
//redux
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  fetchAllCategories,
  fetchDocsByCategories,
  handleCategories,
} from '@/store/slices/Library.slice'
//images
import categoryIcon from '../../../public/icons/categoriesIcon.svg'
import Image from 'next/image'

const LibCategories = () => {
  const selectedCategories = useAppSelector(
    (state) => state.Library.selectedCategories
  )

  const [categoriesOpened,setOpen] = useState(false);

  const handleSelectCategory = (id: number) => {
    if (selectedCategories.includes(id)) {
      dispatch(handleCategories(selectedCategories.filter((v) => v != id)))
    } else {
      dispatch(handleCategories([...selectedCategories, id]))
    }
  }

  const page = useAppSelector((state) => state.Library.page)
  const dispatch = useAppDispatch()
  const categories = useAppSelector((state) => state.Library.categories)

  useEffect(() => {
    dispatch(handleCategories(selectedCategories))
  }, [selectedCategories])

  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [])

  return (
    <div className={styles.categories}>
      <div className={styles.mob_btn} onClick={() => setOpen(prev => !prev)}>
        <Image src={categoryIcon} alt="icon" />
        Список категорій
      </div>
      <div className={`${styles.categoriesWrapper} ${!categoriesOpened && styles.closed}`}>
        {categories.map((category) => (
          <LibCategoryComp
            key={category.id}
            category={category}
            handleSelectCategory={handleSelectCategory}
            isSelected={selectedCategories.includes(category.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default LibCategories
