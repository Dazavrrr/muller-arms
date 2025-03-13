//libs
import React from 'react'
//styles
import styles from './styles.module.scss'
import { Category } from '@/models/category'

const LibCategoryComp = ({
  category,
  handleSelectCategory,
  isSelected,
}: {
  category: Category
  handleSelectCategory: (slug: string) => void
  isSelected: boolean
}) => {
  const { name, slug } = category

  return (
    <p
      className={`${styles.category} ${isSelected && styles.selected}`}
      onClick={() => handleSelectCategory(slug)}
    >
      {name}
    </p>
  )
}

export default LibCategoryComp
