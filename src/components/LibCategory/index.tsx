//libs
import React from 'react'
//styles
import styles from './styles.module.scss'
import { LibCategory } from '@/common/types'

const LibCategoryComp = ({
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
    <p className={`${styles.category} ${isSelected && styles.selected}`}
       onClick={() => handleSelectCategory(id)}>{name}</p>
  )
}

export default LibCategoryComp
