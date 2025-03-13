//styles
import styles from './styles.module.scss'

const ShopPriceComponent = ({
  value,
  setValue,
}: {
  value: {
    min_price: string
    max_price: string
  }
  setValue: (key: string, value: string) => void
}) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Ціна</h2>

      <div className={styles.price}>
        <label className={styles.price__label}>
          <span>від</span>
          <input
            type="number"
            className={styles.price_wrapper}
            placeholder={'від'}
            value={value.min_price}
            onChange={(e) => setValue('min_price', e.target.value)}
          />
        </label>

        <label className={styles.price__label}>
          <span>до</span>
          <input
            type="number"
            className={styles.price_wrapper}
            placeholder={'до'}
            value={value.max_price}
            onChange={(e) => setValue('max_price', e.target.value)}
          />
        </label>
      </div>
    </div>
  )
}

export default ShopPriceComponent
