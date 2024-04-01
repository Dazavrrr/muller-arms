//libs
import React from 'react'
//styles
import styles from './styles.module.scss'
//images
import base from '../../../public/images/services/services-photo1.webp'
import group from '../../../public/images/services/services-photo2.webp'
import individual from '../../../public/images/services/services-photo3.webp'
import course from '../../../public/images/services/services-photo4.webp'
//components
import ServiceCard from '../ServiceCard'

const Services = () => {
  const trainings = [
    {
      image: base,
      trainingName: 'Базове тренування з автоматом',
      smallDescription: 'РОБОТА ІЗ АВТОМАТОМ/КАРАБІНОМ В СКЛАДІ ГРУПИ 6-10 ЛЮДЕЙ',
      price: '1400 грн',
      slug: 'base-training'
    },
    {
      image: group,
      trainingName: 'Групові тренування',
      smallDescription: 'ТРЕНУВАННЯ ПРОХОДЯТЬ В ДВОХ ФОРМАТАХ: «МІЛІТАРІ» ТА «СПОРТ»',
      price: '1500 грн',
      slug: 'group-training'
    },
    {
      image: individual,
      trainingName: 'Індивідуальні тренування',
      smallDescription: 'ІНДИВІДУАЛЬНІ ТРЕНУВАННЯ НАЙЕФЕКТИВНІШИЙ ФОРМАТ',
      price: 'ВІД 1500 грн',
      slug: 'individual-training'
    },
    {
      image: course,
      trainingName: 'Курс майбутнього бійця',
      smallDescription: 'КМБ СКЛАДАЄТЬСЯ З 3 МОДУЛІВ, ЯКІ МАЮТЬ  ТЕОРІЮ ТА ПРАКТИКУ ',
      price: '9900 грн',
      slug: 'soldier-course',
    },
  ]

  return (
    <section className={styles.services} id={"services"}>
      <div className={styles.services_wrapper}>
        <h2 className={styles.services_title}>Наші послуги</h2>

        <div className={styles.services_cards}>
          {trainings.map((training, index) => (
            <ServiceCard training={training} key={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services