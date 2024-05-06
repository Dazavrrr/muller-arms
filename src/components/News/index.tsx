//styles
import styles from './styles.module.scss'

const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.news_wrapper}>
        <h2 className={styles.news_title}>Новини</h2>
        <div className={styles.news_content}>News</div>
      </div>
    </div>
  )
}

export default News
