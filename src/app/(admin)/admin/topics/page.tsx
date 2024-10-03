'use client'
//libs
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
//styles
import styles from '../styles.module.scss'
import global from '@/styles/global.module.scss'
//redux
import { useAppDispatch, useAppSelector } from '@/store/hooks'
//images
import spinner from '../../../../../public/images/spinner.svg'
import { fetchAllAnnouncements, fetchAllArchives, fetchAllArticles, fetchAllNews } from '@/store/slices/Articles.slise'
import ArticleAdminCard from '@/components/ArticleAdminCard/ArticleAdminCard'
import { usePathname } from 'next/navigation'


const Page = () => {
  const articles = useAppSelector(state => state.Articles.articles)
  const news = useAppSelector(state => state.Articles.news)
  const announcements = useAppSelector(state => state.Articles.announcements)
  const archives = useAppSelector(state => state.Articles.archives)
  const dispatch = useAppDispatch()
  const [tab, setTab] = useState<'articles' | 'news' | 'announcements' | 'archive'>('articles')
  const path = usePathname()
  useEffect(() => {
    resetPage()
    handleLoad()
    //eslint-disable-next-line
  }, [tab])

  const [articlesPage,setArticlesPage] = useState<number>(0)
  const [newsPage,setNewsPage] = useState<number>(0)
  const [eventPage,setEventPage] = useState<number>(0)
  const [archivesPage,setArchivesPage] = useState<number>(0)

  const handleLoad = () => {
    if (tab === 'articles') {
      dispatch(fetchAllArticles(articlesPage))
    }
    if (tab === 'news') {
      dispatch(fetchAllNews(newsPage))
    }
    if (tab === 'announcements') {
      dispatch(fetchAllAnnouncements(eventPage))
    }
    if (tab === 'archive') {
      dispatch(fetchAllArchives(archivesPage))
    }
  }

  const resetPage = () => {
      setArticlesPage(0);
      setNewsPage(0);
      setEventPage(0);
      setArchivesPage(0);
  }

  const data = tab === 'articles' ? articles
    : tab === 'news' ? news
      : tab === 'announcements' ? announcements
        : archives


  return (
    <div className={styles.container}>
      <div className={styles.navSwitcher}>
        <div onClick={() => setTab('articles')}
             className={`${tab == 'articles' && styles.activeNav}`}>Статті
        </div>
        <div onClick={() => setTab('news')}
             className={`${tab == 'news' && styles.activeNav}`}>Новини
        </div>
        <div onClick={() => setTab('announcements')}
             className={`${tab == 'announcements' && styles.activeNav}`}>Анонси
        </div>
        <div onClick={() => setTab('archive')}
             className={`${tab == 'archive' && styles.activeNav}`}>Ахів
        </div>
      </div>
      <Link href={'topics/new'} className={`${styles.createBtn} ${global.primaryBtn}`}>Створити нову</Link>
      <div className={styles.articles}>
        {data?.items.map(article => (
          <ArticleAdminCard article={article} key={article.id} />
        ))}
      </div>
      {data?.hasNext && <button type={'button'} className={`${styles.loadBtn} ${global.primaryBtn}`}
               onClick={() => {
                 if (tab === 'articles') {
                   setArticlesPage(prev => prev + 1)
                   dispatch(fetchAllArticles(articlesPage))
                 }
                 if (tab === 'news') {
                   setNewsPage(prev => prev + 1)
                   dispatch(fetchAllNews(newsPage))
                 }
                 if (tab === 'announcements') {
                   setEventPage(prev => prev + 1)
                   dispatch(fetchAllAnnouncements(eventPage))
                 }
                 if (tab === 'archive') {
                   setArchivesPage(prev => prev + 1)
                   dispatch(fetchAllArchives(archivesPage))
                 }
               }}>Завантажити ще
      </button>}
    </div>
  )
}

export default Page
