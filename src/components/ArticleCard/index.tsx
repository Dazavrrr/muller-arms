'use client'
//libs
import Image from 'next/image'
import moment from 'moment'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
import '@/styles/swiper.scss'
//types
import { Article as IArticle } from '@/models/article'
//icons
import PersonIcon from '../Icons/Person'
import OclockIcon from '../Icons/Oclock'

const Article = ({
  article,
  isBig,
  isTall,
  isBigResponsive,
  hideXs,
  showXs,
}: {
  article: IArticle
  isBig?: boolean
  isBigResponsive?: boolean
  isTall?: boolean
  hideXs?: boolean
  showXs?: boolean
}) => {
  const { title, author, image, description, created_at, slug } = article

  return (
    <Link
      href={`/blog/${slug}`}
      className={`${!isBig && !isTall && styles.article} ${
        isBig && styles.big_article
      } ${isBig && hideXs && styles.hide_xs} ${
        isBig && showXs && styles.show_xs
      } ${isBig && isBigResponsive && styles.big_article_responsive}`}
    >
      <div className={styles.wrapper}>
        <div className={`${styles.image_wrapper}`}>
          {image && (
            <Image className={styles.img} src={image} alt={title} fill />
          )}
        </div>

        <div className={styles.info_wrapper}>
          <div className={styles.title_wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{description}</p>
          </div>

          <div className={styles.info}>
            <PersonIcon />
            <p className={styles.author}>{author}</p>
            <OclockIcon />
            <p className={styles.date}>{moment(created_at).format('DD.MM')}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Article
