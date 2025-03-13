import React, { SetStateAction, Dispatch } from 'react'

import styles from './styles.module.scss'
import { useQueryString } from '@/hooks/useQueryString'
import { Filter, OnChangeFilters } from '../LibraryComponent'

const LibSortComponent = ({
  filters,
  onChangeFilters,
}: {
  onChangeFilters: OnChangeFilters
  filters: Filter
}) => {
  const ordering = filters.ordering || 'rec'

  return (
    <div className={styles.sort}>
      <h3 className={styles.sort_title}>Сортувати</h3>
      <div className={styles.sort_by}>
        <p
          onClick={() => onChangeFilters('ordering', 'rec')}
          className={`${styles.sort_value} ${
            ordering === 'rec' && styles.sort_value_active
          }`}
        >
          Рекомендовані
        </p>
        <p
          onClick={() => onChangeFilters('ordering', 'asc')}
          className={`${styles.sort_value} ${
            ordering === 'asc' && styles.sort_value_active
          }`}
        >
          За алфавітом (а-я)
        </p>
        <p
          onClick={() => onChangeFilters('ordering', 'desc')}
          className={`${styles.sort_value} ${
            ordering === 'desc' && styles.sort_value_active
          }`}
        >
          За алфавітом (я-а)
        </p>
      </div>
    </div>
  )
}

export default LibSortComponent
