//libs
import Image from 'next/image'
import moment from 'moment'
//styles
import styles from './styles.module.scss'
import { ArticleSmallResponse } from '@/common/types'

const MayLikeCard = ({ article }: { article: ArticleSmallResponse }) => {
  const { title, imagePath, creationDate } = article

  return (
    <div className={styles.wrapper}>
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
    </div>
  )
}

export default MayLikeCard
