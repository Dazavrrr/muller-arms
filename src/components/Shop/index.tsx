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

// import Link from 'next/link'

const Shop = () => {
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
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
            <ShopItemComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
