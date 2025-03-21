//libs
import React from 'react'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//components
import ArticleCard from '../ArticleCard'
import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import { Article } from '@/models/article'

const Articles = async () => {
  const { data: articles } = await getData<Article[]>(ApiPath.BLOG)

  return (
    <div className={styles.articles}>
      <div className={styles.articles_wrapper}>
        <h2 className={styles.articles_title}>Статті</h2>
        {!!articles?.length && (
          <ArticleCard isBig showXs isBigResponsive article={articles[0]} />
        )}
        <div className={styles.articles_content}>
          {articles?.map((article, i) => {
            return (
              <ArticleCard
                key={article.id}
                isBig={i === 0}
                hideXs={i === 0}
                isBigResponsive={articles.length > 3}
                article={article}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Articles
