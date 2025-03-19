//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//types
import { ShopItem } from '@/models/shop'
import { ENV_URL } from '@/api'

const ShopItemComponent = ({ item }: { item: ShopItem }) => {
  return (
    <Link href={`/shop/${item.slug}`} className={styles.card}>
      <div>
        <div className={styles.card_image_wrapper}>
          {!!item.image && (
            <Image
              fill
              className={styles.image}
              src={`${ENV_URL}${item.image}`}
              alt="Patch"
            />
          )}
        </div>
        <h2 className={styles.title}>{item.name}</h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title_wrapper}>
          <p className={styles.id}>код товару: {item.id}</p>
        </div>

        <div className={styles.price_wrapper}>
          <div className={styles.line}></div>
          <div className={styles.price_info}>
            <p className={styles.price}>₴{item.price}</p>
            <p className={styles.buy_btn}>детальніше</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ShopItemComponent
