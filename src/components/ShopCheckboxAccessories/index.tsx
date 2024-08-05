//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'

const ShopCheckboxAccessories = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Аксесуари для Зброї:</h2>
      <div className={styles.checkboxes}>
        <div className={styles.checkbox}>
          <div className={global.checkbox_wrapper}>
            <input type="checkbox" />
            <label>
              <svg viewBox="0,0,50,50">
                <path d="M5 30 L 20 45 L 45 5"></path>
              </svg>
            </label>
          </div>
          <p>Кобури та чохли для зброї</p>
        </div>

        <div className={styles.checkbox}>
          <div className={global.checkbox_wrapper}>
            <input type="checkbox" />
            <label>
              <svg viewBox="0,0,50,50">
                <path d="M5 30 L 20 45 L 45 5"></path>
              </svg>
            </label>
          </div>
          <p>Ремені для носіння зброї</p>
        </div>

        <div className={styles.checkbox}>
          <div className={global.checkbox_wrapper}>
            <input type="checkbox" />
            <label>
              <svg viewBox="0,0,50,50">
                <path d="M5 30 L 20 45 L 45 5"></path>
              </svg>
            </label>
          </div>
          <p>Різноманітні приціли та оптика</p>
        </div>
      </div>
    </div>
  )
}

export default ShopCheckboxAccessories
