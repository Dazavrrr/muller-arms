'use client'
//libs
import React from 'react'
//icons
import SearchIcon from '../Icons/Search'
//styles
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { handleSearch } from '@/store/slices/Library.slice'

const SearchComponent = ({value,action}:{value: string,action: any}) => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.search}>
      <h3 className={styles.search_title}>Пошук</h3>

      <div className={styles.search_input}>
        <SearchIcon />
        <input
          value={value}
          onChange={(e) => dispatch(action(e.target.value))}
          className={styles.search_field}
          type="search"
          placeholder="Пошук"
        />
      </div>
    </div>
  )
}

export default SearchComponent
