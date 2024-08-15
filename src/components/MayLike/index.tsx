//styles
import styles from './styles.module.scss'
//icons
import ArrowLeft from '../Icons/ArrowLeft'
import ArrowRight from '../Icons/ArrowRight'
import MayLikeCard from '../MayLikeCard'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchAllArticles } from '@/store/slices/Articles.slise'
import { useEffect } from 'react'
import '@/styles/swiper.scss'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const MayLike = ({ slug }: { slug: string }) => {
  const articles = useAppSelector((state) => state.Articles.articles)
  const articlesFetchStatus = useAppSelector(
    (state) => state.Articles.articlesFetchStatus
  )
  const currentArticle = useAppSelector(
    (state) => state.Articles.currentArticle
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllArticles(0))
  }, [])

  if (articlesFetchStatus === 'pending' || !articles) {
    return <div>Loading...</div>
  }

  return (
    <>
      {articles.items.length !== 0 && (
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
              {articles.items
                .filter((article) => article.slug !== slug)
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
