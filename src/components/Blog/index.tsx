//styles
import styles from './styles.module.scss'
//components
import Articles from '../Articles'
import BlogHero from '../BlogHero'
import BlogImage from '../BlogImage'

const BlogComponent = () => {
  return (
    <div className={styles.blog}>
      <BlogHero />
      <Articles />
      <BlogImage />
    </div>
  )
}

export default BlogComponent
