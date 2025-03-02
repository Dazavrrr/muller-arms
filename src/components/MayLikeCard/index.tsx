//libs
import Image from 'next/image'
import moment from 'moment'
//styles
import styles from './styles.module.scss'
import Link from 'next/link'
import { Article } from '@/models/article'

const MayLikeCard = ({ article }: { article: Article }) => {
  const { title, image, created_at, slug } = article

  return (
    <Link href={`/blog/${slug}`} className={styles.wrapper}>
      {!!image && (
        <Image
          className={styles.image}
          src={image}
          alt={title}
          width={279}
          height={311}
        />
      )}
      <div className={styles.title_wrapper}>
        <p className={styles.date}>{moment(created_at).format('DD.MM')}</p>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>
  )
}

export default MayLikeCard
