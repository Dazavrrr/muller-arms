'use client'
//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
import '@/styles/swiper.scss'
//images
import bottomBg from '../../../public/images/reviews/reviews-bottom-bg.webp'
//icons
import ArrowLeft from '../Icons/ArrowLeft'
import ArrowRight from '../Icons/ArrowRight'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Reviews = () => {
  const reviews = [
    {
      text:
        '“ОЛЕКСАНДР МАЄ ВЕЛИКИЙ ДОСВІД РОБОТИ В СФЕРІ ФІЗИЧНОЇ БЕЗПЕКИ, ДОСВІД ПРАКТИЧНОГО ВИКОРИСТАННЯ ЗБРОЇ' +
        ' БІЛЬШЕ 11 РОКІВ. МАЄ ВІЙСЬКОВИЙ ДОСВІД БІЛЬШЕ 8 РОКІВ. ПРАЦЮЄ З ВІЙСЬКОВИМИ ПІДРОЗДІЛАМИ, МАЄ ДОСВІД ТА ВІДПОВІДНІ“',
      author: 'Вадим Козачук',
    },
    {
      text:
        '“ОЛЕКСАНДР МАЄ ВЕЛИКИЙ ДОСВІД РОБОТИ В СФЕРІ ФІЗИЧНОЇ БЕЗПЕКИ, ДОСВІД ПРАКТИЧНОГО ВИКОРИСТАННЯ ЗБРОЇ' +
        ' БІЛЬШЕ 11 РОКІВ. МАЄ ВІЙСЬКОВИЙ ДОСВІД БІЛЬШЕ 8 РОКІВ. ПРАЦЮЄ З ВІЙСЬКОВИМИ ПІДРОЗДІЛАМИ, МАЄ ДОСВІД ТА ВІДПОВІДНІ“',
      author: 'Вадим Козачук',
    },
    {
      text:
        '“ОЛЕКСАНДР МАЄ ВЕЛИКИЙ ДОСВІД РОБОТИ В СФЕРІ ФІЗИЧНОЇ БЕЗПЕКИ, ДОСВІД ПРАКТИЧНОГО ВИКОРИСТАННЯ ЗБРОЇ' +
        ' БІЛЬШЕ 11 РОКІВ. МАЄ ВІЙСЬКОВИЙ ДОСВІД БІЛЬШЕ 8 РОКІВ. ПРАЦЮЄ З ВІЙСЬКОВИМИ ПІДРОЗДІЛАМИ, МАЄ ДОСВІД ТА ВІДПОВІДНІ“',
      author: 'Вадим Козачук',
    },
    {
      text:
        '“ОЛЕКСАНДР МАЄ ВЕЛИКИЙ ДОСВІД РОБОТИ В СФЕРІ ФІЗИЧНОЇ БЕЗПЕКИ, ДОСВІД ПРАКТИЧНОГО ВИКОРИСТАННЯ ЗБРОЇ' +
        ' БІЛЬШЕ 11 РОКІВ. МАЄ ВІЙСЬКОВИЙ ДОСВІД БІЛЬШЕ 8 РОКІВ. ПРАЦЮЄ З ВІЙСЬКОВИМИ ПІДРОЗДІЛАМИ, МАЄ ДОСВІД ТА ВІДПОВІДНІ“',
      author: 'Вадим Козачук',
    },
    {
      text:
        '“ОЛЕКСАНДР МАЄ ВЕЛИКИЙ ДОСВІД РОБОТИ В СФЕРІ ФІЗИЧНОЇ БЕЗПЕКИ, ДОСВІД ПРАКТИЧНОГО ВИКОРИСТАННЯ ЗБРОЇ' +
        ' БІЛЬШЕ 11 РОКІВ. МАЄ ВІЙСЬКОВИЙ ДОСВІД БІЛЬШЕ 8 РОКІВ. ПРАЦЮЄ З ВІЙСЬКОВИМИ ПІДРОЗДІЛАМИ, МАЄ ДОСВІД ТА ВІДПОВІДНІ“',
      author: 'Вадим Козачук',
    },
    {
      text:
        '“ОЛЕКСАНДР МАЄ ВЕЛИКИЙ ДОСВІД РОБОТИ В СФЕРІ ФІЗИЧНОЇ БЕЗПЕКИ, ДОСВІД ПРАКТИЧНОГО ВИКОРИСТАННЯ ЗБРОЇ' +
        ' БІЛЬШЕ 11 РОКІВ. МАЄ ВІЙСЬКОВИЙ ДОСВІД БІЛЬШЕ 8 РОКІВ. ПРАЦЮЄ З ВІЙСЬКОВИМИ ПІДРОЗДІЛАМИ, МАЄ ДОСВІД ТА ВІДПОВІДНІ“',
      author: 'Вадим Козачук',
    },
    {
      text:
        '“ОЛЕКСАНДР МАЄ ВЕЛИКИЙ ДОСВІД РОБОТИ В СФЕРІ ФІЗИЧНОЇ БЕЗПЕКИ, ДОСВІД ПРАКТИЧНОГО ВИКОРИСТАННЯ ЗБРОЇ' +
        ' БІЛЬШЕ 11 РОКІВ. МАЄ ВІЙСЬКОВИЙ ДОСВІД БІЛЬШЕ 8 РОКІВ. ПРАЦЮЄ З ВІЙСЬКОВИМИ ПІДРОЗДІЛАМИ, МАЄ ДОСВІД ТА ВІДПОВІДНІ“',
      author: 'Вадим Козачук',
    },
    {
      text:
        '“ОЛЕКСАНДР МАЄ ВЕЛИКИЙ ДОСВІД РОБОТИ В СФЕРІ ФІЗИЧНОЇ БЕЗПЕКИ, ДОСВІД ПРАКТИЧНОГО ВИКОРИСТАННЯ ЗБРОЇ' +
        ' БІЛЬШЕ 11 РОКІВ. МАЄ ВІЙСЬКОВИЙ ДОСВІД БІЛЬШЕ 8 РОКІВ. ПРАЦЮЄ З ВІЙСЬКОВИМИ ПІДРОЗДІЛАМИ, МАЄ ДОСВІД ТА ВІДПОВІДНІ“',
      author: 'Вадим Козачук',
    },
  ]

  return (
    <section className={styles.reviews}>
      <div className={styles.reviews_title_container}>
        <h2 className={styles.reviews_title}>Наші відгуки</h2>

        <div className={styles.reviews_arrows}>
          <div className={'image-swiper-button-prev'}>
            <ArrowLeft />
          </div>
          <div className={'image-swiper-button-next'}>
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className={styles.swiper_container}>
        <Swiper
          loop
          spaceBetween={30}
          navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
          }}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={2.7}
        >
          {reviews.map((r, i) => (
            <div key={i}>
              <SwiperSlide>
                <div className={styles.reviews_card}>
                  <p className={styles.reviews_text}>{r.text}</p>
                  <p className={styles.reviews_name}>{r.author}</p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>

      <Image
        className={styles.reviews_bottom_bg}
        src={bottomBg}
        alt="MullerArms"
      />
    </section>
  )
}

export default Reviews
