'use client'
//libs
import React, { useEffect, useState } from 'react'
import LibCategory from '../LibCategory'
//styles
import styles from './styles.module.scss'

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

  useEffect(() => {
    console.log(selectedCategories)
  }, [selectedCategories])

  const categories = [
    {
      name: 'Тактика',
      id: 1,
    },
    {
      name: 'Медицина',
      id: 2,
    },
    {
      name: 'Фізичні вправи',
      id: 3,
    },
  ]

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
