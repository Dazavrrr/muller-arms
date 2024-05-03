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

  if (fetchStatus === 'pending' || docs === null) {
    return <p>Loading</p>
  }

  return (
    <>
      {docs.allItemsCount !== 1 && (
        <div className={styles.pagination}>
          <ArrowLeft />

          <div className={styles.pagination_pages}>
            {Array.from({ length: docs.allItemsCount }, (_, index) => (
              <>
                {page != index && (
                  <p key={index} onClick={() => dispatch(handlePage(index))}>
                    {index + 1}
                  </p>
                )}
              </>
            ))}
          </div>

          <ArrowRight />
        </div>
      )}
    </>
  )
}

export default Pagination
