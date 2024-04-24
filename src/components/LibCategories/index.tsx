'use client'
//libs
import React, { useEffect, useState } from 'react'
import LibCategory from '../LibCategory'
//styles
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  fetchAllCategories,
  fetchDocsByCategories,
  handleCategories,
} from '@/store/slices/Library.slice'

const LibCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([])

  const handleSelectCategory = (id: number) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories((prev) => {
        return prev.filter((v) => v != id)
      })
    } else {
      setSelectedCategories((prev) => [...prev, id])
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
      {categories.map((category) => (
        <LibCategory
          key={category.id}
          category={category}
          handleSelectCategory={handleSelectCategory}
          isSelected={selectedCategories.includes(category.id)}
        />
      ))}
    </div>
  )
}

export default LibCategories
