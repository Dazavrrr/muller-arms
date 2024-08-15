'use client'
//libs
// import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import ArrowLeft from '../Icons/ArrowLeft'
import ArrowRight from '../Icons/ArrowRight'
// import bgBottom from '../../../public/images/leaders-table-bg-bottom.webp'
//components
import ArchiveCard from '../ArchiveCard'
//swiper
import '@/styles/swiper.scss'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { ArticleSmallResponse } from '@/common/types'
import { useEffect } from 'react'
import { fetchAllArchives } from '@/store/slices/Articles.slise'

const Archive = () => {
  const dispatch = useAppDispatch()
  const archives = useAppSelector((state) => state.Articles.archives)

  useEffect(() => {
    dispatch(fetchAllArchives(0))
    // eslint-disable-next-line
  }, [])

  const splitArrayIntoChunks = (
    array: ArticleSmallResponse[],
    chunkSize: number = 8
  ): ArticleSmallResponse[][] => {
    return array.reduce(
      (
        resultArray: ArticleSmallResponse[][],
        item: ArticleSmallResponse,
        index: number
      ) => {
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

  if (!archives) {
    return <div>Loading...</div>
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
          <p className={styles.nav_date}>грудень 2023</p>
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
                {splitArrayIntoChunks(archives.items).map((items, index) => (
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
        {/* <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" /> */}
      </div>
    </>
  )
}

export default Archive
