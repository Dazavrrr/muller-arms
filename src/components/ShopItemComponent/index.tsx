//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//images
import { ShopItemResponseDto } from '@/common/types'

const ShopItemComponent = ({ item }: { item: ShopItemResponseDto }) => {
  return (
    <div className={styles.card}>
      <Image
        width={203}
        height={227}
        className={styles.image}
        src={item.images[0]}
        alt="Patch"
      />

      <div className={styles.wrapper}>
        <div className={styles.title_wrapper}>
          <h2 className={styles.title}>{item.name}</h2>
          <p className={styles.id}>код товару: {item.id}</p>
        </div>
        <div className={styles.line}></div>

        <div className={styles.price_wrapper}>
          <p className={styles.price}>₴{item.price}</p>
          <Link href={`/shop/${item.slug}`} className={styles.buy_btn}>
            детальніше
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ShopItemComponent
