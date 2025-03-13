'use client'
//libs
import React from 'react'
//icons
import SearchIcon from '../Icons/Search'
//styles
import styles from './styles.module.scss'

const SearchComponent = ({
  value,
  setValue,
  isShop,
}: {
  value: string
  setValue: (value: string) => void
  isShop?: boolean
}) => {
  return (
    <div className={styles.search}>
      <h3 className={styles.search_title}>Пошук</h3>

      <div
        className={`${styles.search_input} ${
          isShop && styles.search_input_shop
        }`}
      >
        <SearchIcon />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.search_field}
          type="search"
          placeholder="Пошук"
        />
      </div>
    </div>
  )
}

export default SearchComponent
