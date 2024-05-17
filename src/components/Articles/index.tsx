'use client'
//libs
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchAllArticles } from '@/store/slices/Articles.slise'
//styles
import styles from './styles.module.scss'
//components
import ArticleCard from '../ArticleCard'

const Articles = () => {
  const articles = useAppSelector((state) => state.Articles.articles)
  const articlesFetchStatus = useAppSelector(
    (state) => state.Articles.articlesFetchStatus
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllArticles(0))
  }, [])

  if (articlesFetchStatus === 'pending' || !articles) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.articles}>
      <div className={styles.articles_wrapper}>
        <h2 className={styles.articles_title}>Статті</h2>

        <div className={styles.articles_content}>
          <div className={styles.first_wrapper}>
            <div>
              {articles.items.map((article, index) => {
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
              {articles.items.map((article, index) => {
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
            {articles.items.map((article, index) => {
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
