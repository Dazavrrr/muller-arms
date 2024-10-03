//styles
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { handleSort } from '@/store/slices/Shop.slice'

const ShopSortComponent = () => {
  const dispatch = useAppDispatch();
  const sortValue = useAppSelector(state => state.Shop.sortValue)
  return (
    <div className={styles.sort}>
      <h2 className={styles.title}>Сортувати</h2>

      <div className={styles.sort_by}>
        <p className={`${styles.sort_value} ${sortValue === 'REC' && styles.sort_value_active}`}
           onClick={() => dispatch(handleSort('REC'))}
        >Рекомендовані</p>
        <p className={`${styles.sort_value} ${sortValue === 'ALPH_ASC' && styles.sort_value_active}`}
           onClick={() => dispatch(handleSort('ALPH_ASC'))}
        >За алфавітом (а-я)</p>
        <p className={`${styles.sort_value} ${sortValue === 'ALPH_DESC' && styles.sort_value_active}`}
           onClick={() => dispatch(handleSort('ALPH_DESC'))}
        >За алфавітом (я-а)</p>
        <p className={`${styles.sort_value} ${sortValue === 'PRICE_ASC' && styles.sort_value_active}`}
           onClick={() => dispatch(handleSort('PRICE_ASC'))}
        >Ціна від низької до високої</p>
        <p className={`${styles.sort_value} ${sortValue === 'PRICE_DESC' && styles.sort_value_active}`}
           onClick={() => dispatch(handleSort('PRICE_DESC'))}
        >Ціна від високої до низької</p>
      </div>
    </div>
  )
}

export default ShopSortComponent
