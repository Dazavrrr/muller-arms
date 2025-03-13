'use client'
//libs
import React, { useState } from 'react'
import LibCategoryComp from '../LibCategory'
//styles
import styles from './styles.module.scss'
//images
import categoryIcon from '../../../public/icons/categoriesIcon.svg'
import Image from 'next/image'
import { Category } from '@/models/category'
import { useQueryString } from '@/hooks/useQueryString'
import { Filter, OnChangeFilters } from '../LibraryComponent'

const LibCategories = ({
  categories,
  onChangeFilters,
  filters,
}: {
  categories: Category[]
  onChangeFilters: OnChangeFilters
  filters: Filter
}) => {
  const selectedCategory = filters.category
  const [categoriesOpened, setOpen] = useState(false)

  const handleSelectCategory = (slug: string) => {
    if (selectedCategory === slug) {
      onChangeFilters('category', '')
    } else {
      onChangeFilters('category', slug)
    }
  }
  return (
    <div className={styles.categories}>
      <div className={styles.mob_btn} onClick={() => setOpen((prev) => !prev)}>
        <Image src={categoryIcon} alt="icon" />
        Список категорій
      </div>
      <div
        className={`${styles.categoriesWrapper} ${
          !categoriesOpened && styles.closed
        }`}
      >
        {categories.map((category) => (
          <LibCategoryComp
            key={category.id}
            category={category}
            handleSelectCategory={handleSelectCategory}
            isSelected={selectedCategory === category.slug}
          />
        ))}
      </div>
    </div>
  )
}

export default LibCategories
