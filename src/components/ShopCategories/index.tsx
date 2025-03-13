//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import { Category } from '@/models/category'
import { Filter, OnChangeFilters } from '../Shop'

const ShopCategories = ({
  categories,
  filters,
  onChangeFilters,
}: {
  categories: Category[]
  filters: Filter
  onChangeFilters: OnChangeFilters
}) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Категорії</h2>
      <div className={styles.checkboxes}>
        {categories.map((c) => (
          <div className={styles.checkbox} key={c.id}>
            <div className={global.checkbox_wrapper}>
              <input
                type="checkbox"
                value={c.slug}
                id={`checkbox-${c.id}`}
                checked={filters.categories?.includes(c.slug)}
                onChange={() => onChangeFilters('category', c.slug)}
              />
              <label htmlFor={`checkbox-${c.id}`}>
                <svg viewBox="0,0,50,50">
                  <path d="M5 30 L 20 45 L 45 5"></path>
                </svg>
              </label>
            </div>
            <label htmlFor={`checkbox-${c.id}`}>{c.name}</label>
          </div>
        ))}
        <div className={styles.checkbox}>
          <div className={global.checkbox_wrapper}>
            <input
              type="checkbox"
              value="certificate"
              id={`checkbox-certificate`}
              checked={filters.certificate === 'True'}
              onChange={() =>
                onChangeFilters(
                  'certificate',
                  filters.certificate === 'True' ? '' : 'True'
                )
              }
            />
            <label htmlFor={`checkbox-certificate`}>
              <svg viewBox="0,0,50,50">
                <path d="M5 30 L 20 45 L 45 5"></path>
              </svg>
            </label>
          </div>
          <label htmlFor={`checkbox-certificate`}>Сертифікати</label>
        </div>
      </div>
    </div>
  )
}

export default ShopCategories
