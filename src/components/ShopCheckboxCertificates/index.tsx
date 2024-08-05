//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'

const ShopCheckboxCertificates = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>сертифікати</h2>

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
          <p>будь-яка сума</p>
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
          <p>сертифікати до 500 грн</p>
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
          <p>сертифікати до 1000 грн</p>
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
          <p>сертифікати до 2000 грн</p>
        </div>
      </div>
    </div>
  )
}

export default ShopCheckboxCertificates
