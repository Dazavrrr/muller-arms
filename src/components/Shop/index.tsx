'use client'
//styles
import styles from './styles.module.scss'
//components
import SearchComponent from '../SeachComponent'
import ShopSortComponent from '../ShopSortComponent'
import ShopPriceComponent from '../ShopPriceComponent'
import ShopCheckboxCertificates from '../ShopCheckboxCertificates'
import ShopCheckboxAccessories from '../ShopCheckboxAccessories'
import ShopCheckboxSafety from '../ShopCheckboxSafety'
import ShopItemComponent from '../ShopItemComponent'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import { fetchAllItems, fetchOneShopItem } from '@/store/slices/Shop.slice'

// import Link from 'next/link'

const Shop = () => {

  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.Shop.items)

  useEffect(() => {
    dispatch(fetchAllItems({size: 20,page:0}))
  }, [])

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>магазин</h1>

        <div className={styles.content}>
          <div className={styles.filter}>
            <SearchComponent />
            <ShopSortComponent />
            <ShopPriceComponent />
            <ShopCheckboxCertificates />
            <ShopCheckboxAccessories />
            <ShopCheckboxSafety />
          </div>

          <div className={styles.cards}>
            {items.map((item,i) => (
              <ShopItemComponent item={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
