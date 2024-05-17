//styles
import styles from './styles.module.scss'
//icons
import ArrowLeft from '../Icons/ArrowLeft'
import ArrowRight from '../Icons/ArrowRight'
import MayLikeCard from '../MayLikeCard'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchAllArticles } from '@/store/slices/Articles.slise'
import { useEffect } from 'react'

const MayLike = () => {
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
    <section className={styles.section}>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>ВАМ МОЖЕ СПОДОБАТИСЯ</h2>
        <div className={styles.icons}>
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
      <div className={styles.articles}>
        {articles.items.map((article) => (
          <MayLikeCard article={article} key={article.id} />
        ))}
      </div>
    </section>
  )
}

export default MayLike
