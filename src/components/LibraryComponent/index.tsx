'use client'
//libs
import React, { useState } from 'react'
//styles
import styles from './styles.module.scss'
//components
import LibCategories from '../LibCategories'
import SearchComponent from '../SeachComponent'
import LibSortComponent from '../LibSortComponent'
import LibCheckboxComponent from '../LibCheckboxComponent'

const LibraryComponent = () => {
  const [sort, setSort] = useState<'REC' | 'ASC' | 'DESC'>('REC')
  const [file, setFile] = useState<string[]>(['BOOK', 'AUDIO', 'VIDEO'])

  return (
    <section className={styles.library}>
      <div className={styles.library_wrapper}>
        <h2 className={styles.library_title}>Бібліотека</h2>

        <LibCategories />

        <div className={styles.library_content}>
          <div className={styles.library_filter}>
            <SearchComponent />

            <LibSortComponent sort={sort} setSort={setSort} />

            <LibCheckboxComponent file={file} setFile={setFile} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LibraryComponent
