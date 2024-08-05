//libs
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//images
import img from '../../../public/images/shop-item-image.webp'

const ShopItemComponent = ({ slug }: { slug: any }) => {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={img} alt="Patch" />

      <div className={styles.wrapper}>
        <div className={styles.title_wrapper}>
          <h2 className={styles.title}>Патч</h2>
          <p className={styles.id}>код товару: 1000</p>
        </div>
        <div className={styles.line}></div>

        <div className={styles.price_wrapper}>
          <p className={styles.price}>₴300.00</p>
          <Link href={`/shop/${slug}`} className={styles.buy_btn}>
            купити
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ShopItemComponent
