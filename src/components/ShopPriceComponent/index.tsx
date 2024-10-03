//styles
import styles from './styles.module.scss'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { handlePrices } from '@/store/slices/Shop.slice'

const ShopPriceComponent = () => {
  const prices = useAppSelector(state => state.Shop.prices)
  const dispatch = useAppDispatch();
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Ціна</h2>

      <div className={styles.price}>
        <label className={styles.price__label}>
          <span>від</span>
          <input type="number" className={styles.price_wrapper} placeholder={'від'} value={prices[0]}
          onChange={(e) => dispatch(handlePrices([parseInt(e.target.value),prices[1]]))}/>
        </label>

        <label className={styles.price__label}>
          <span>до</span>
          <input type="number" className={styles.price_wrapper} placeholder={'до'} value={prices[1]}
          onChange={(e) => dispatch(handlePrices([prices[0],parseInt(e.target.value)]))}/>
        </label>

      </div>
    </div>
  )
}

export default ShopPriceComponent
