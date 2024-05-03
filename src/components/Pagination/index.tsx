//libs
import React from 'react'
//styles
import styles from './styles.module.scss'
import ArrowLeft from '../Icons/PaginationArrowLeft'
import ArrowRight from '../Icons/PaginationArrowRight'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { handlePage } from '@/store/slices/Library.slice'

const Pagination = () => {
  const docs = useAppSelector((state) => state.Library.docs)
  const fetchStatus = useAppSelector((state) => state.Library.docsFetchStatus)
  const dispatch = useAppDispatch()
  const page = useAppSelector((state) => state.Library.page)

  const getThreePages = (currentPage: number) => {
    const startPage = Math.max(currentPage - 1, 0)
    const endPage = Math.min(startPage + 2, docs!.allItemsCount - 1)
    const pages = []

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }


  if (fetchStatus === 'pending' || docs === null) {
    return <p>Loading</p>
  }
  return (
    <>
      {docs.allItemsCount !== 1 && (
        <div className={styles.pagination}>
          {page != 0 &&
            <div className={styles.arrow} onClick={() => dispatch(handlePage(page - 1))}><ArrowLeft /></div>}
          <div className={styles.pagination_pages}>
            {getThreePages(page).map((pageNumber) => (
              <p
                className={`${styles.number} ${pageNumber === page && styles.number_active}`}
                key={pageNumber}
                onClick={() => page != pageNumber && dispatch(handlePage(pageNumber))}
              >
                {pageNumber + 1}
              </p>
            ))}
          </div>
          {page != docs.allItemsCount - 1 &&
            <div className={styles.arrow} onClick={() => dispatch(handlePage(page + 1))}><ArrowRight /></div>}
        </div>
      )}
    </>
  )
}

export default Pagination
