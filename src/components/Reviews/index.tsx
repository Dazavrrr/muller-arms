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
      text: '“Круті хлопці. Інструктори дуже доступно і розгорнуто все пояснюють. Можна ставити не соромлячись будь-які питання, немає зверхності - є очевидна в хлопців ціль та бажання вчити і ділитись корисними знаннями з різних сфер!“',
      author: 'Олексій Шишканов',
    },
    {
      text: '“Чудовий тир з професійними інструкторами, які цікаво проводять заняття та дійсно живуть своєю справою. На занятті в тирі тільки ви з інструктором, тож вся увага вам, ніхто не заважає.“',
      author: 'Fenris SveP',
    },
    {
      text: '“Дуже крутий тир. Завжди мріяла потрапити на стрільбище, щоб випустити пар) Команда провела інструктаж, допомогла освоїти потрібну зброю та техніку її використання. Дякую за круті емоції muller arms. Рекомендую!“',
      author: 'Ксюшенька Иванова',
    },
    {
      text: '“Дуже приємно вражений підходом до клієнта!“',
      author: 'Pavel Grim',
    },
    {
      text: '“Круті і душевні фахівці стрілецького клубу Muller Arms завжди допоможуть оволодіти мистецтвом поводження зі зброєю... Не вмієш - навчать, не хочеш - заставлять... Раджу це місце як для новачків, так і для людей з досвідом“',
      author: 'Дмитро Сергієнко',
    },
    {
      text: '“Професіонали своєї справи!🤩“',
      author: 'idgavr',
    },
    {
      text: '“Інструктори і тренування топ. Чітко враховують фізичний, емоційний стан та рівень навичок для тренувань“',
      author: "Андрій Пір'ян",
    },
    {
      text: '“Професіонали своєї справи! 🤘Респект“',
      author: 'Andrii M.',
    },
    {
      text: '“Кращі з кращих!',
      author: 'Антон Пальчиков',
    },
    {
      text: '“Ради бога. Приходь і віддай їм усі свої гроші. Хлопці найкращі“',
      author: 'Дмитро Горай',
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
          slidesPerView={'auto'}
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
