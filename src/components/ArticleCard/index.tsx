'use client'
//libs
import Image from 'next/image'
import moment from 'moment'
import { Swiper, SwiperSlide } from 'swiper/react'
//styles
import styles from './styles.module.scss'
import '@/styles/swiper.scss'
//types
import { Article as IArticle } from '@/models/article'
//icons
import PersonIcon from '../Icons/Person'
import OclockIcon from '../Icons/Oclock'
import { useEffect, useState } from 'react'

const Article = ({
  article,
  isBig,
  isTall,
}: {
  article: IArticle
  isBig?: boolean
  isTall?: boolean
}) => {
  const { title, author, image, text, created_at } = article

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window?.innerWidth < 1019)
  }, [])

  if (!isBig && !isTall && isMobile) {
    return (
      <Swiper
        spaceBetween={20}
        className={styles.swiper}
        slidesPerView={'auto'}
      >
        <SwiperSlide>
          <div className={styles.swiper_article}>
            {image && (
              <Image
                className={styles.swiper_img}
                src={image}
                alt={title}
                width={279}
                height={206}
              />
            )}

            <div className={styles.swiper_info_wrapper}>
              <div className={styles.swiper_title_wrapper}>
                <h3 className={styles.swiper_title}>{title}</h3>
                <p
                  className={styles.swiper_text}
                  dangerouslySetInnerHTML={{ __html: text }}
                ></p>
              </div>

              <div className={styles.swiper_info}>
                <PersonIcon />
                <p className={styles.swiper_author}>{author}</p>
                <OclockIcon />
                <p className={styles.swiper_date}>
                  {moment(created_at).format('DD.MM')}
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
        {image && (
          <Image
            className={styles.img}
            src={image}
            alt={title}
            width={279}
            height={206}
          />
        )}

        <div className={styles.info_wrapper}>
          <div className={styles.title_wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: text }}
            ></p>
          </div>

          <div className={styles.info}>
            <PersonIcon />
            <p className={styles.author}>{author}</p>
            <OclockIcon />
            <p className={styles.date}>{moment(created_at).format('DD.MM')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
