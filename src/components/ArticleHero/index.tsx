//libs
import Image from 'next/image'
import 'moment/locale/uk'
import moment from 'moment'
//styles
import styles from './styles.module.scss'
import NavArrow from '../../../src/components/Icons/NavArrow'
import PersonIcon from '../Icons/Person'
import OclockIcon from '../Icons/Oclock'
import Link from 'next/link'
import bgBottom from '../../../public/images/article-hero-bg-bottom.png'
import { Article } from '@/models/article'
import { ENV_URL } from '@/api'

const ArticleHero = ({
  article,
  isArchive,
}: {
  article: Article
  isArchive?: boolean
}) => {
  const { title, author, image, text, created_at } = article

  return (
    <section className={styles.main_wrapper}>
      <div className={styles.hero}>
        <div className={styles.wrapper}>
          <div className={styles.nav__wrapper}>
            <div className={styles.nav}>
              {isArchive ? (
                <Link href="/archive" className={styles.nav_prev}>
                  Архів
                </Link>
              ) : (
                <Link href="/blog" className={styles.nav_prev}>
                  Блог
                </Link>
              )}

              <div className={styles.arrow}>
                <NavArrow />
              </div>
              <p className={styles.nav_current}>{title}</p>
            </div>
          </div>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.details_mob}>
            <div className={styles.details_wrapper}>
              <PersonIcon />
              <p className={styles.author}>{author}</p>
            </div>
            <div className={styles.details_wrapper}>
              <OclockIcon />
              <p className={styles.date}>
                {moment(created_at).locale('uk').format('D MMMM')}
              </p>
            </div>
          </div>
          {image && (
            <Image
              width={882}
              height={1063}
              className={styles.image}
              src={`${ENV_URL}${image}`}
              alt="MullerArms"
            />
          )}
          <div className={styles.info}>
            <div className={styles.details}>
              <div className={styles.details_wrapper}>
                <PersonIcon />
                <p className={styles.author}>{author}</p>
              </div>
              <div className={styles.details_wrapper}>
                <OclockIcon />
                <p className={styles.date}>
                  {moment(created_at).locale('uk').format('D MMMM')}
                </p>
              </div>
            </div>
          </div>

          <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" />
        </div>
      </div>
    </section>
  )
}

export default ArticleHero
