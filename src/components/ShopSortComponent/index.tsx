//styles
import styles from './styles.module.scss'

const ShopSortComponent = () => {
  return (
    <div className={styles.sort}>
      <h2 className={styles.title}>Сортувати</h2>

      <div className={styles.sort_by}>
        <p className={styles.sort_value}>Рекомендовані</p>
        <p className={styles.sort_value}>топ продажів</p>
        <p className={styles.sort_value}>За алфавітом (а-я)</p>
        <p className={styles.sort_value}>За алфавітом (я-а)</p>
        <p className={styles.sort_value}>Ціна від низької до високої</p>
        <p className={styles.sort_value}>Ціна від високої до низької</p>
      </div>
    </div>
  )
}

export default ShopSortComponent
