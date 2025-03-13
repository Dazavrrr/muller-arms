'use client'
//libs
import React, { useCallback, useEffect, useState } from 'react'
//styles
import styles from './styles.module.scss'
//components
import LibCategories from '../LibCategories'
import SearchComponent from '../SeachComponent'
import LibSortComponent from '../LibSortComponent'
import LibCheckboxComponent from '../LibCheckboxComponent'
import LibElement from '../LibElement'
import { Library, LibraryItem } from '@/models/library'
import { Category } from '@/models/category'
import { ENV_URL, getData } from '@/api'
import { ApiPath } from '@/common/enums'
import { useDebounce } from '@/hooks/useDebounce'

export type OnChangeFilters = (key: string, value: string | string[]) => void
export type Filter = Record<string, string | string[]>

const LibraryComponent = ({
  initialDocs,
  categories,
}: {
  initialDocs: LibraryItem[]
  categories: Category[]
}) => {
  const [docs, setDocs] = useState<LibraryItem[]>(initialDocs)
  const [filters, setFilters] = useState<Filter>({
    category: '',
    ordering: '',
    search: '',
    file_type: [],
  })
  const [filtersIsTouched, setFiltersIsTouched] = useState(false)

  const [searchValue, setSearchValue] = useState('')

  const debounceSearchValue = useDebounce(
    (value: string) => setFilters((state) => ({ ...state, search: value })),
    500
  )

  const handleSearch = useCallback((value: string) => {
    setSearchValue(value)
    debounceSearchValue(value)
    setFiltersIsTouched(true)
  }, [])

  useEffect(() => {
    const fetchLibraries = async () => {
      try {
        const params = new URLSearchParams()
        Object.entries(filters).forEach(([key, value]) => {
          if (value) {
            if (Array.isArray(value)) {
              value.forEach((value) => params.append(key, value))
            } else {
              params.set(key, value)
            }
          } else {
            params.delete(key)
          }
        })
        const data = await getData<Library>(
          `${ApiPath.LIBRARY}?${params.toString()}`
        )
        setDocs(data.data?.items || [])
      } catch (err) {
        setDocs(initialDocs)
      }
    }
    if (filtersIsTouched) {
      fetchLibraries()
    }
  }, [filters, filtersIsTouched])

  const handleChangeFilters = useCallback(
    (key: string, value: string | string[]) => {
      setFilters((state) => ({ ...state, [key]: value }))
      setFiltersIsTouched(true)
    },
    []
  )

  return (
    <section className={styles.library}>
      <div className={styles.library_wrapper}>
        <h2 className={styles.library_title}>Бібліотека</h2>

        <LibCategories
          filters={filters}
          onChangeFilters={handleChangeFilters}
          categories={categories}
        />

        <div className={styles.library_content}>
          <div className={styles.library_filter}>
            <SearchComponent value={searchValue} setValue={handleSearch} />

            <LibSortComponent
              filters={filters}
              onChangeFilters={handleChangeFilters}
            />

            <LibCheckboxComponent
              filters={filters}
              onChangeFilters={handleChangeFilters}
            />
          </div>

          <div className={styles.library_items}>
            {docs.map((doc) => (
              <LibElement
                key={doc.id}
                name={doc.name}
                downloadUrl={doc.main_file}
                imagePath={`${ENV_URL}${doc.image}`}
              />
            ))}
          </div>
        </div>

        {/* <Pagination /> */}
      </div>
    </section>
  )
}

export default LibraryComponent
