//libs
import ArticleHero from '@/components/ArticleHero'
import ArticleSection from '@/components/ArticleSection'
import MayLike from '@/components/MayLike'
import SuitableTrainings from '@/components/SuitableTrainings'
//styles
import styles from './styles.module.scss'
import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import { Article } from '@/models/article'
import { notFound } from 'next/navigation'

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
  const { data: archive } = await getData<Article>(`${ApiPath.ARCHIVE}${slug}`)

  if (!archive || 'detail' in archive) {
    return {
      title: 'Not found',
      description: 'Not Found',
    }
  }

  return {
    title: archive.title,
    description:
      archive?.description ||
      'Взаємодія та спільний результат – головні цінності клубу. Це проявляється не лише у спортивних досягненнях на змаганнях зі стрільби, а й у наших інших активностях. MullerArms – це велика родина, де допомога та увага один до одного є принципом. У нас знаходять друзів, партнерів по бізнесу, нові захоплення та ідеї.',
  }
}

const ArchiveSlug = async ({ params: { slug } }: PageProps) => {
  const { data: archive } = await getData<Article>(`${ApiPath.ARCHIVE}${slug}`)

  if (!archive) {
    return notFound()
  }

  return (
    <section className={styles.wrapper}>
      <ArticleHero article={archive} isArchive />
      <div className={styles.sections_wrapper}>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: archive.text }}
        ></div>
        {/* {archive.sections.map((section) => (
          <ArticleSection section={section} key={section.id} />
        ))} */}
        <SuitableTrainings />
        <MayLike slug={slug} />
      </div>
    </section>
  )
}

export default ArchiveSlug
