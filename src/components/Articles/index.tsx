//libs
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchAllArticles } from '@/store/slices/Articles.slise'
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

        <div className={styles.articles_content}>
          <div className={styles.first_wrapper}>
            <div>
              {articles?.map((article, index) => {
                if (index === 0) {
                  return (
                    <Link href={`/blog/${article.slug}`} key={article.id}>
                      <ArticleCard article={article} isBig />
                    </Link>
                  )
                }
                return
              })}
            </div>
            <div className={styles.small_articles}>
              {articles?.map((article, index) => {
                if (index > 0 && index < 5) {
                  return (
                    <Link href={`/blog/${article.slug}`} key={article.id}>
                      <ArticleCard article={article} />
                    </Link>
                  )
                }
                return
              })}
            </div>
          </div>

          <div className={styles.second_wrapper}>
            {articles?.map((article, index) => {
              if (index < 5) {
                return
              }
              return (
                <Link href={`/blog/${article.slug}`} key={article.id}>
                  <ArticleCard article={article} isTall />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
