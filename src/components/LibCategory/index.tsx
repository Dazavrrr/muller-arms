//libs
import React from 'react'
//styles
import styles from './styles.module.scss'
import { LibCategory } from '@/common/types'

const LibCategory = ({
  category,
  handleSelectCategory,
  isSelected,
}: {
  category: LibCategory
  handleSelectCategory: (id: number) => void
  isSelected: boolean
}) => {
  const { name, id } = category

  return (
    <div
      className={`${styles.categories} ${isSelected && styles.selected}`}
      onClick={() => handleSelectCategory(id)}
    >
      <p className={styles.categories_item}>{name}</p>
    </div>
  )
}

export default LibCategory
