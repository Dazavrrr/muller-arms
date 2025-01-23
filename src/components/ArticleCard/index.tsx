//libs
import Image from 'next/image'
import moment from 'moment'
import { Swiper, SwiperSlide } from 'swiper/react'
//styles
import styles from './styles.module.scss'
import '@/styles/swiper.scss'
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

  const isMobile = window.innerWidth < 1019

  if (!isBig && !isTall && isMobile) {
    return (
      <Swiper
        spaceBetween={20}
        className={styles.swiper}
        slidesPerView={'auto'}
      >
        <SwiperSlide>
          <div className={styles.swiper_article}>
            <Image
              className={styles.swiper_img}
              src={imagePath}
              alt={title}
              width={279}
              height={206}
            />

            <div className={styles.swiper_info_wrapper}>
              <div className={styles.swiper_title_wrapper}>
                <h3 className={styles.swiper_title}>{title}</h3>
                <p className={styles.swiper_text}>{text}</p>
              </div>

              <div className={styles.swiper_info}>
                <PersonIcon />
                <p className={styles.swiper_author}>{author}</p>
                <OclockIcon />
                <p className={styles.swiper_date}>
                  {moment(creationDate).format('DD.MM')}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    )
  }

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

        <div className={styles.info_wrapper}>
          <div className={styles.title_wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
          </div>

          <div className={styles.info}>
            <PersonIcon />
            <p className={styles.author}>{author}</p>
            <OclockIcon />
            <p className={styles.date}>
              {moment(creationDate).format('DD.MM')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
