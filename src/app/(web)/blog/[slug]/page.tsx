//styles
import styles from './styles.module.scss'
//components
import ArticleHero from '@/components/ArticleHero'
import ArticleSection from '@/components/ArticleSection'
import SuitableTrainings from '@/components/SuitableTrainings'
import MayLike from '@/components/MayLike'
import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import { notFound } from 'next/navigation'
import { Article } from '@/models/article'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { data: article } = await getData<Article>(`${ApiPath.BLOG}${slug}`)

  if (!article || 'detail' in article) {
    return {
      title: 'Not found',
      description: 'Not Found',
    }
  }

  return {
    title: article.title,
    description:
      article?.description ||
      'Захопливі статті: навчайтеся стріляти та забезпечуйте свою безпеку',
  }
}

const BlogSlug = async ({ params: { slug } }: PageProps) => {
  const { data: article } = await getData<Article>(`${ApiPath.BLOG}${slug}`)

  if (!article) {
    return notFound()
  }

  return (
    <section className={styles.wrapper}>
      <ArticleHero article={article} />
      <div className={styles.sections_wrapper}>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: article.text }}
        ></div>
        {/* {article.sections.map((section) => (
          <ArticleSection section={section} key={section.id} />
        ))} */}
        <SuitableTrainings />
        <MayLike slug={slug} />
      </div>
    </section>
  )
}

export default BlogSlug
