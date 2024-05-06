//libs
import React from 'react'
//styles
import styles from './styles.module.scss'
//types
// import { ArticleSmallResponse } from '@/common/types'
//components
import ArticleCard from '../ArticleCard'

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: 'Техніка стрільби: Секрети Майстерності',
      author: 'Андрій жовтий',
      imagePath: 'https://ibb.co/tBJN5qK',
      text: 'Розкрийте світ техніки стрільби та освоюйте...',
      slug: 'shooting_technics',
      creationDate: new Date(),
      eventTime: new Date(),
      eventAddress: 'Kyiv',
    },
  ]

  return (
    <div className={styles.articles}>
      <div className={styles.articles_wrapper}>
        <h2 className={styles.articles_title}>Статті</h2>

        <div className={styles.articles_content}>
          {articles.map((article) => (
            <ArticleCard article={article} key={article.id} isBig />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles
