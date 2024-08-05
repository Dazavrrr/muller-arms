//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'

const ShopCheckboxSafety = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Безпека та Захист:</h2>
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
          <p>Спеціальні вбрання та екіпірування</p>
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
          <p>Захисні окуляри та навушники</p>
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
          <p>Сейфи для зберігання зброї</p>
        </div>
      </div>
    </div>
  )
}

export default ShopCheckboxSafety
