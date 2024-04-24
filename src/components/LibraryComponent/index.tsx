'use client'
//libs
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchAllDocs } from '@/store/slices/Library.slice'
//styles
import styles from './styles.module.scss'
//components
import LibCategories from '../LibCategories'
import SearchComponent from '../SeachComponent'
import LibSortComponent from '../LibSortComponent'
import LibCheckboxComponent from '../LibCheckboxComponent'
import LibElement from '../LibElement'
import Pagination from '../../../src/components/Pagination'

const LibraryComponent = () => {
  const [sort, setSort] = useState<'REC' | 'ASC' | 'DESC'>('REC')

  const categories = useAppSelector((state) => state.Library.selectedCategories)
  const searchValue = useAppSelector((state) => state.Library.searchValue)
  const checkbox = useAppSelector((state) => state.Library.checkbox)
  const docs = useAppSelector((state) => state.Library.docs)
  const dispatch = useAppDispatch()

  useEffect(() => {}, [categories, checkbox, searchValue])

  return (
    <section className={styles.library}>
      <div className={styles.library_wrapper}>
        <h2 className={styles.library_title}>Бібліотека</h2>

        <LibCategories />

        <div className={styles.library_content}>
          <div className={styles.library_filter}>
            <SearchComponent />

            <LibSortComponent sort={sort} setSort={setSort} />

            <LibCheckboxComponent />
          </div>

          <div className={styles.library_items}>
            {docs
              .toSorted((a, b) => {
                if (sort === `ASC`) {
                  return a.name > b.name ? 1 : -1
                }
                if (sort === `DESC`) {
                  return a.name > b.name ? -1 : 1
                }
                return 0
              })
              .map((doc) => (
                <LibElement
                  key={doc.id}
                  name={doc.name}
                  downloadUrl={doc.downloadUrl}
                  imagePath={doc.imagePath}
                />
              ))}
          </div>
        </div>

        <Pagination />
      </div>
    </section>
  )
}

export default LibraryComponent
