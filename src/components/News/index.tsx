'use client'
//libs
import Link from 'next/link'
import React, { useEffect } from 'react'
import { fetchAllNews } from '@/store/slices/Articles.slise'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
//styles
import styles from './styles.module.scss'
//components
import NewsCard from '../NewsCard'

const News = () => {
  const news = useAppSelector((state) => state.Articles.news)
  const articlesFetchStatus = useAppSelector(
    (state) => state.Articles.articlesFetchStatus
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllNews(0))
  }, [])

  if (articlesFetchStatus === 'pending' || !news) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.news}>
      <div className={styles.news_wrapper}>
        <h2 className={styles.news_title}>Новини</h2>

        <div className={styles.news_content}>
          <div className={styles.first_wrapper}>
            {news?.items.map((newsItem, index) => {
              if (index === 1) {
                return (
                  <Link href={`/blog/${newsItem.slug}`} key={newsItem.id}>
                    <NewsCard newsItem={newsItem} isBig />
                  </Link>
                )
              }

              if (index > 1 && index < 4) {
                return (
                  <Link href={`/blog/${newsItem.slug}`} key={newsItem.id}>
                    <NewsCard newsItem={newsItem} isTall />
                  </Link>
                )
              }
              return
            })}
          </div>
          <div className={styles.second_wrapper}>
            {news?.items.map((newsItem, index) => {
              if (index === 4) {
                return (
                  <Link href={`/blog/${newsItem.slug}`} key={newsItem.id}>
                    <NewsCard newsItem={newsItem} isBig />
                  </Link>
                )
              }

              if (index > 4 && index < 7) {
                return (
                  <Link href={`/blog/${newsItem.slug}`} key={newsItem.id}>
                    <NewsCard newsItem={newsItem} isTall />
                  </Link>
                )
              }
              return
            })}
          </div>
          <div className={styles.third_wrapper}>
            {news?.items.map((newsItem, index) => {
              if (index > 6 && index < 15) {
                return (
                  <Link href={`/blog/${newsItem.slug}`} key={newsItem.id}>
                    <NewsCard newsItem={newsItem} />
                  </Link>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
