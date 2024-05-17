'use client'
//libs
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchOneArticleBySlug } from '@/store/slices/Articles.slise'
//styles
import styles from './styles.module.scss'
//components
import ArticleHero from '@/components/ArticleHero'
import ArticleSection from '@/components/ArticleSection'
import SuitableTrainings from '@/components/SuitableTrainings'
import MayLike from '@/components/MayLike'

type PageProps = {
  params: {
    slug: string
  }
}

const BlogSlug = ({ params: { slug } }: PageProps) => {
  const article = useAppSelector((state) => state.Articles.currentArticle)
  const fetchStatus = useAppSelector(
    (state) => state.Articles.oneArticleFetchStatus
  )
  const dispatch = useAppDispatch()

  // export type ArticleResponse = {
  //   id: number
  //   title: string
  //   author: string
  //   imageId: number
  //   imagePath: string
  //   text: string
  //   slug: string
  //   isArchived: boolean
  //   isNews: boolean
  //   eventTime: Date | null
  //   eventAddress: string | null
  //   sections: SectionResponse[]
  //   creationDate: Date
  //   lastModifiedDate: Date
  // }

  useEffect(() => {
    dispatch(fetchOneArticleBySlug(slug))
  }, [slug])

  if (fetchStatus === 'pending') {
    return <div>Loading...</div>
  }
  if (article === null) {
    return <div>Not found!</div>
  }

  return (
    <section className={styles.wrapper}>
      <ArticleHero article={article} />
      <div className={styles.sections_wrapper}>
        {article.sections.map((section) => (
          <ArticleSection section={section} key={section.id} />
        ))}
      </div>
      <SuitableTrainings />
      <MayLike />
    </section>
  )
}

export default BlogSlug
