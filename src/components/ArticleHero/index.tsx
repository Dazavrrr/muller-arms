//libs
import Image from 'next/image'
import 'moment/locale/uk'
import moment from 'moment'
//styles
import styles from './styles.module.scss'
import { ArticleResponse } from '@/common/types'
import NavArrow from '../../../src/components/Icons/NavArrow'
import PersonIcon from '../Icons/Person'
import OclockIcon from '../Icons/Oclock'
import Link from 'next/link'
import bgBottom from '../../../public/images/article-hero-bg-bottom.png'

const ArticleHero = ({ article }: { article: ArticleResponse }) => {
  const { id, title, author, imagePath, text, creationDate } = article

  return (
    <section className={styles.main_wrapper}>
      <div className={styles.hero}>
        <div className={styles.wrapper}>
          <div className={styles.nav__wrapper}>
            <div className={styles.nav}>
              <Link href="/blog" className={styles.nav_prev}>
                Блог
              </Link>
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
                {moment(creationDate).locale('uk').format('D MMMM')}
              </p>
            </div>
          </div>

          <Image className={styles.image} src={imagePath} alt="MullerArms" />
          <div className={styles.info}>
            <p className={styles.text}>{text}</p>
            <div className={styles.details}>
              <div className={styles.details_wrapper}>
                <PersonIcon />
                <p className={styles.author}>{author}</p>
              </div>
              <div className={styles.details_wrapper}>
                <OclockIcon />
                <p className={styles.date}>
                  {moment(creationDate).locale('uk').format('D MMMM')}
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
