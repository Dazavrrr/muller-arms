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
import { Category } from '@/models/category'

const LibCategories = ({ categories }: { categories: Category[] }) => {
  return (
    <div className={styles.categories}>
      <div className={styles.mob_btn}>
        <Image src={categoryIcon} alt="icon" />
        Список категорій
      </div>
      <div className={`${styles.categoriesWrapper}`}>
        {categories.map((category) => (
          <LibCategoryComp
            key={category.id}
            category={category}
            handleSelectCategory={() => {}}
            isSelected
            // isSelected={selectedCategories.includes(category.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default LibCategories
