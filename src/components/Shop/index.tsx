'use client'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//components
import SearchComponent from '../SeachComponent'
import ShopSortComponent from '../ShopSortComponent'
import ShopPriceComponent from '../ShopPriceComponent'
import ShopCheckboxCertificates from '../ShopCheckboxCertificates'
import ShopCategories from '../ShopCategories'
import ShopItemComponent from '../ShopItemComponent'
//libs
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import React, { useEffect, useState } from 'react'
import {
  fetchAllCategories,
  fetchAllItems,
  fetchOneShopItem,
  handleSearch,
  resetFiltersUpd,
} from '@/store/slices/Shop.slice'
//img
import Image from 'next/image'
import spinner from '../../../public/images/spinner.svg'

const Shop = () => {
  const [page, setPage] = useState<number>(0)
  const dispatch = useAppDispatch()
  const items = useAppSelector((state) => state.Shop.items)
  const searchValue = useAppSelector((state) => state.Shop.searchValue)
  const sortValue = useAppSelector((state) => state.Shop.sortValue)
  const selectedCategories = useAppSelector(
    (state) => state.Shop.selectedCategories
  )
  const prices = useAppSelector((state) => state.Shop.prices)
  const itemsFetchStatus = useAppSelector(
    (state) => state.Shop.itemsFetchStatus
  )
  const categoriesFetchStatus = useAppSelector(
    (state) => state.Shop.categoriesFetchStatus
  )
  const filtersUpdated = useAppSelector((state) => state.Shop.filtersUpdated)

  useEffect(() => {
    if (!filtersUpdated) {
      dispatch(
        fetchAllItems({
          size: 20,
          page,
          sortValue,
          searchValue,
          categories: selectedCategories,
          prices,
        })
      )
    }
  }, [page, filtersUpdated])

  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [])

  if (itemsFetchStatus === 'pending' || categoriesFetchStatus === 'pending') {
    return (
      <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
    )
  }
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>магазин</h1>
        <div className={styles.content}>
          <div className={styles.filters__wrapper}>
            <div className={styles.filter}>
              <SearchComponent value={searchValue} action={handleSearch} />
              <ShopSortComponent />
              <ShopPriceComponent />
              <ShopCheckboxCertificates />
              <ShopCategories />
            </div>
            {filtersUpdated && (
              <button
                className={`${global.primaryBtn} ${styles.updateBtn}`}
                onClick={() => dispatch(resetFiltersUpd())}
              >
                Застосувати
              </button>
            )}
          </div>

          <div className={styles.cards}>
            {items?.items?.map((item, i) => (
              <Link href={`/shop/${item.slug}`} key={item.id}>
                <ShopItemComponent item={item} key={i} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
