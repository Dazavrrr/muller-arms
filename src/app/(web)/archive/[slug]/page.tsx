'use client'
//libs
import ArticleHero from '@/components/ArticleHero'
import ArticleSection from '@/components/ArticleSection'
import MayLike from '@/components/MayLike'
import SuitableTrainings from '@/components/SuitableTrainings'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchOneArticleBySlug } from '@/store/slices/Articles.slise'
import { useEffect } from 'react'
//styles
import styles from './styles.module.scss'

type PageProps = {
  params: {
    slug: string
  }
}

const ArchiveSlug = ({ params: { slug } }: PageProps) => {
  const dispatch = useAppDispatch()
  const archive = useAppSelector((state) => state.Articles.currentArticle)

  useEffect(() => {
    dispatch(fetchOneArticleBySlug(slug))
  }, [slug])

  if (!archive) {
    return <div>Not found!</div>
  }

  return (
    <section className={styles.wrapper}>
      <ArticleHero article={archive} />
      <section className={styles.sections_wrapper}>
        {archive.sections.map((section) => (
          <ArticleSection section={section} key={section.id} />
        ))}
        <SuitableTrainings />
        <MayLike slug={slug} />
      </section>
    </section>
  )
}

export default ArchiveSlug
