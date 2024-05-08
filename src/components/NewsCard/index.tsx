//libs
import Image from 'next/image'
import moment from 'moment'
//styles
import styles from './styles.module.scss'
//types
import { ArticleSmallResponse } from '@/common/types'
//images
import img from '../../../public/images/blog.png'

const NewsCard = ({
  newsItem,
  isBig,
  isTall,
}: {
  newsItem: ArticleSmallResponse
  isBig?: boolean
  isTall?: boolean
}) => {
  const { id, title, imagePath, creationDate } = newsItem

  return (
    <div
      className={`${!isBig && !isTall && styles.news} ${
        isBig && styles.big_news
      } ${isTall && styles.tall_news}`}
    >
      <div className={styles.wrapper}>
        <Image
          className={styles.img}
          src={imagePath}
          alt="MullerArms"
          width={279}
          height={311}
        />
        <p className={styles.date}>{moment(creationDate).format('DD.MM')}</p>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  )
}

export default NewsCard
