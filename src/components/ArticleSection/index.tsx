//libs
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
//styles
import styles from './styles.module.scss'
import '@/styles/swiper.scss'
//types
import { SectionResponse } from '@/common/types'

const ArticleSection = ({ section }: { section: SectionResponse }) => {
  const { title, text, images } = section
  return (
    <article className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.text_wrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>

        <div className={styles.images_wrapper}>
          {images.length > 1 ? (
            <Swiper
              loop
              spaceBetween={20}
              className="mySwiper"
              slidesPerView={'auto'}
            >
              {images.map((image, key) => (
                <SwiperSlide key={key}>
                  <div className={styles.image_wrapper}>
                    <Image
                      className={styles.image}
                      src={image}
                      alt="MullerArms"
                      width={280}
                      height={311}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <>
              {images.map((image, key) => (
                <div
                  className={`${styles.image_wrapper} ${styles.single_img_wrapper}`}
                  key={key}
                >
                  <Image
                    className={styles.image}
                    src={image}
                    alt="MullerArms"
                    width={280}
                    height={311}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </article>
  )
}

export default ArticleSection
