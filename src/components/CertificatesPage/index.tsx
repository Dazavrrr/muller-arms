//styles
import styles from './styles.module.scss'

const CertificatesPage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.certificate_image}>
          <p className={styles.image}>подарунковий сертифікат</p>
        </div>

        <div className={styles.content}>
          <div className={styles.content_wrapper}>
            <div className={styles.text_wrapper}>
              <h1 className={styles.title}>сертифікат</h1>
              <p className={styles.text}>
                Ця нашивка представляє собою вражаючий вигляд космічної
                галактики, яка розкриває перед вами таємничі глибини всесвіту.
                Вона виготовлена з високоякісних матеріалів, які надають їй
                довговічність та стійкість до впливу зовнішніх чинників.
              </p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.price_wrapper}>
              <h2 className={styles.price_title}>сума</h2>
              <div className={styles.price}>
                <p className={styles.price_text}>1500 грн</p>
                <p className={styles.price_text}>2500 грн</p>
                <p className={styles.price_text}>5500 грн</p>
                <input
                  className={styles.price_input}
                  type="text"
                  placeholder="вкажіть вашу суму"
                />
              </div>
            </div>
          </div>

          <button className={styles.button}>КУПИТИ</button>
        </div>
      </div>
    </div>
  )
}

export default CertificatesPage
