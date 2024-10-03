//libs
import Image from 'next/image'
import moment from 'moment'
//styles
import styles from './styles.module.scss'
import { ArticleSmallResponse } from '@/common/types'
import Link from 'next/link'

const MayLikeCard = ({ article }: { article: ArticleSmallResponse }) => {
  const { title, imagePath, creationDate, slug } = article

  return (
    <Link href={`/blog/${slug}`} className={styles.wrapper}>
      <Image
        className={styles.image}
        src={imagePath}
        alt={title}
        width={279}
        height={311}
      />
      <div className={styles.title_wrapper}>
        <p className={styles.date}>{moment(creationDate).format('DD.MM')}</p>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>
  )
}

export default MayLikeCard
