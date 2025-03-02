'use client'
//libs
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
//styles
import styles from './styles.module.scss'
//components
import LibCategories from '../LibCategories'
import SearchComponent from '../SeachComponent'
import LibSortComponent from '../LibSortComponent'
import LibCheckboxComponent from '../LibCheckboxComponent'
import LibElement from '../LibElement'
import Pagination from '../../../src/components/Pagination'
import {
  fetchDocsByCategories,
  fetchDocsByTypes,
  fetchSearchDocs,
  handleCategories,
  handleCheckbox,
  handleSearch,
} from '@/store/slices/Library.slice'
import { LibraryItem } from '@/models/library'
import { Category } from '@/models/category'

const LibraryComponent = ({
  docs,
  categories,
}: {
  docs: LibraryItem[]
  categories: Category[]
}) => {
  const [sort, setSort] = useState<'REC' | 'ASC' | 'DESC'>('REC')

  const searchValue = useAppSelector((state) => state.Library.searchValue)

  return (
    <section className={styles.library}>
      <div className={styles.library_wrapper}>
        <h2 className={styles.library_title}>Бібліотека</h2>

        <LibCategories categories={categories} />

        <div className={styles.library_content}>
          <div className={styles.library_filter}>
            <SearchComponent value={searchValue} action={handleSearch} />

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
                  downloadUrl={doc.main_file}
                  //TO DO:
                  imagePath={`http://127.0.0.1:8000${doc.image}`}
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
