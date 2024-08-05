//styles
import styles from './styles.module.scss'

const ShopPriceComponent = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Ціна</h2>

      <div className={styles.price}>
        <div className={styles.price_wrapper}>
          <p className={styles.text}>від</p>
          <p className={styles.number}>₴0.00</p>
        </div>
        <div className={styles.price_wrapper}>
          <p className={styles.text}>до</p>
          <p className={styles.number}>₴5000.00</p>
        </div>
      </div>
    </div>
  )
}

export default ShopPriceComponent
