//libs
import Image from 'next/image'
import moment from 'moment'
//styles
import styles from './styles.module.scss'
//types
import { ArticleSmallResponse } from '@/common/types'
//icons
import PersonIcon from '../Icons/Person'
import OclockIcon from '../Icons/Oclock'
//images
import img from '../../../public/images/blog.png'

const Article = ({
  article,
  isBig,
  isTall,
}: {
  article: ArticleSmallResponse
  isBig?: boolean
  isTall?: boolean
}) => {
  const {
    id,
    title,
    author,
    imagePath,
    text,
    slug,
    creationDate,
    eventTime,
    eventAddress,
  } = article

  return (
    <div
      className={`${!isBig && !isTall && styles.article} ${
        isBig && styles.big_article
      } ${isTall && styles.tall_article}`}
    >
      <div className={styles.wrapper}>
        <Image
          className={styles.img}
          src={imagePath}
          alt={title}
          width={279}
          height={206}
        />

        <div className={styles.title_wrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>

        <div className={styles.info}>
          <PersonIcon />
          <p className={styles.author}>{author}</p>
          <OclockIcon />
          <p className={styles.date}>{moment(creationDate).format('DD.MM')}</p>
        </div>
      </div>
    </div>
  )
}

export default Article
