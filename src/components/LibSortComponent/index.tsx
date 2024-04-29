import React, { SetStateAction, Dispatch } from "react";

import styles from './styles.module.scss'

const LibSortComponent = ({ sort, setSort }: { sort: 'REC' | 'ASC' | 'DESC', setSort: Dispatch<SetStateAction<'REC' | 'ASC' | 'DESC'>> }) => {
  const handleSort = (value: 'REC' | 'ASC' | 'DESC') => {
    setSort(value)
  }

  return (
    <div className={styles.sort}>
            <h3 className={styles.sort_title}>Сортувати</h3>
            <div className={styles.sort_by}>
              <p onClick={() => handleSort(`REC`)} className={`${styles.sort_value} ${sort === 'REC' && styles.sort_value_active}`}>Рекомендовані</p>
              <p onClick={() => handleSort(`ASC`)} className={`${styles.sort_value} ${sort === 'ASC' && styles.sort_value_active}`}>За алфавітом (а-я)</p>
              <p onClick={() => handleSort(`DESC`)} className={`${styles.sort_value} ${sort === 'DESC' && styles.sort_value_active}`}>За алфавітом (я-а)</p>
            </div>
          </div>
  )
}

export default LibSortComponent