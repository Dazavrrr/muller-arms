'use client'
//libs
import React, { useEffect, useState } from 'react'
//icons
import SearchIcon from '../Icons/Search'
//styles
import styles from './styles.module.scss'

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => console.log(searchValue), [searchValue])

  return (
    <div className={styles.search}>
      <h3 className={styles.search_title}>Пошук</h3>

      <div className={styles.search_input}>
        <SearchIcon />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.search_field}
          type="search"
          placeholder="Пошук"
        />
      </div>
    </div>
  )
}

export default SearchComponent
