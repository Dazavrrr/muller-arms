//styles
import styles from './styles.module.scss'

const Articles = () => {
  return (
    <div className={styles.articles}>
      <div className={styles.articles_wrapper}>
        <h2 className={styles.articles_title}>Статті</h2>

        <div className={styles.articles_content}>Articles</div>
      </div>
    </div>
  )
}

export default Articles
