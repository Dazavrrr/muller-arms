'use client'
//styles
import styles from './styles.module.scss'
//images
import ArrowLeft from '../Icons/ArrowLeft'
import ArrowRight from '../Icons/ArrowRight'
//components
import ArchiveCard from '../ArchiveCard'
//swiper
import '@/styles/swiper.scss'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Article } from '@/models/article'

const Archive = ({ data }: { data: Article[] }) => {
  const splitArrayIntoChunks = (
    array: Article[],
    chunkSize: number = 8
  ): Article[][] => {
    return array.reduce(
      (resultArray: Article[][], item: Article, index: number) => {
        const chunkIndex = Math.floor(index / chunkSize)

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // начинаем новый подмассив
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      },
      []
    )
  }

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav_content}>
          <div className={styles.icons}>
            <div className={'image-swiper-button-prev3'}>
              <ArrowLeft />
            </div>
            <div className={'image-swiper-button-next3'}>
              <ArrowRight />
            </div>
          </div>
          <p className={styles.nav_date}>грудень 2024</p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>Архів</h1>
            <div className={styles.cards}>
              <Swiper
                loop
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  nextEl: '.image-swiper-button-next3',
                  prevEl: '.image-swiper-button-prev3',
                  disabledClass: 'swiper-button-disabled3',
                }}
                modules={[Navigation]}
                className="mySwiper3"
              >
                {splitArrayIntoChunks(data).map((items, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.card}>
                      {items.map((item, index) => (
                        <ArchiveCard item={item} key={index} />
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Archive
