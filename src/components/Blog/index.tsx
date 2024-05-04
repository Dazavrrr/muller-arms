//styles
import styles from './styles.module.scss'
//components
import Articles from '../BlogArticles'
import BlogHero from '../BlogHero'
import BlogImage from '../BlogImage'
import News from '../News'

const BlogComponent = () => {
  return (
    <div className={styles.blog}>
      <BlogHero />
      <Articles />
      <BlogImage />
      <News />
    </div>
  )
}

export default BlogComponent
