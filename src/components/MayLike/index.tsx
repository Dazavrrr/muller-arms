'use client'
//styles
import styles from './styles.module.scss'
//icons
import ArrowLeft from '../Icons/ArrowLeft'
import ArrowRight from '../Icons/ArrowRight'
import MayLikeCard from '../MayLikeCard'
import '@/styles/swiper.scss'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Article } from '@/models/article'
import { useEffect, useState } from 'react'
import { getData } from '@/api'
import { ApiPath } from '@/common/enums'

const MayLike = ({ slug }: { slug: string }) => {
  const [articles, setArticles] = useState<Article[] | null | undefined>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true)
      const res = await getData<Article[]>(ApiPath.BLOG)
      setIsLoading(false)
      setArticles(res.data)
    }
    fetchPosts()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {!!articles?.length && (
        <section className={styles.section}>
          <div className={styles.title_wrapper}>
            <h2 className={styles.title}>ВАМ МОЖЕ СПОДОБАТИСЯ</h2>
            <div className={styles.icons}>
              <div className={'image-swiper-button-prev2'}>
                <ArrowLeft />
              </div>
              <div className={'image-swiper-button-next2'}>
                <ArrowRight />
              </div>
            </div>
          </div>

          <div className={styles.swiper_container}>
            <Swiper
              loop
              spaceBetween={30}
              navigation={{
                nextEl: '.image-swiper-button-next2',
                prevEl: '.image-swiper-button-prev2',
                disabledClass: 'swiper-button-disabled2',
              }}
              modules={[Navigation]}
              className="mySwiper2"
              slidesPerView={'auto'}
            >
              {articles
                ?.filter((article) => article.slug !== slug)
                .map((article) => (
                  <SwiperSlide key={article.id}>
                    <MayLikeCard article={article} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </section>
      )}
    </>
  )
}

export default MayLike
