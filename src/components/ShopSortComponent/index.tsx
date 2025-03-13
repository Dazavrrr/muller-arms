//styles
import styles from './styles.module.scss'
import { Filter, OnChangeFilters } from '../LibraryComponent'

const ShopSortComponent = ({
  filters,
  onChangeFilters,
}: {
  onChangeFilters: OnChangeFilters
  filters: Filter
}) => {
  return (
    <div className={styles.sort}>
      <h2 className={styles.title}>Сортувати</h2>

      <div className={styles.sort_by}>
        {/* <p
          className={`${styles.sort_value} ${
            filters.ordering === 'rec' && styles.sort_value_active
          }`}
          onClick={() => onChangeFilters('ordering', 'rec')}
        >
          Рекомендовані
        </p> */}
        <p
          className={`${styles.sort_value} ${
            filters.ordering === 'asc' && styles.sort_value_active
          }`}
          onClick={() => {
            onChangeFilters('ordering', 'asc')
            onChangeFilters('price_ordering', '')
          }}
        >
          За алфавітом (а-я)
        </p>
        <p
          className={`${styles.sort_value} ${
            filters.ordering === 'desc' && styles.sort_value_active
          }`}
          onClick={() => {
            onChangeFilters('ordering', 'desc')
            onChangeFilters('price_ordering', '')
          }}
        >
          За алфавітом (я-а)
        </p>
        <p
          className={`${styles.sort_value} ${
            filters.price_ordering === 'low_to_high' && styles.sort_value_active
          }`}
          onClick={() => {
            onChangeFilters('price_ordering', 'low_to_high')
            onChangeFilters('ordering', '')
          }}
        >
          Ціна від низької до високої
        </p>
        <p
          className={`${styles.sort_value} ${
            filters.price_ordering === 'high_to_low' && styles.sort_value_active
          }`}
          onClick={() => {
            onChangeFilters('price_ordering', 'high_to_low')
            onChangeFilters('ordering', '')
          }}
        >
          Ціна від високої до низької
        </p>
      </div>
    </div>
  )
}

export default ShopSortComponent
