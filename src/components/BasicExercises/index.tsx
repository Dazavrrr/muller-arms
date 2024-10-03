//libs
import Image from 'next/image'
import React from 'react'
//styles
import styles from './styles.module.scss'
//images
import img1 from '../../../public/images/qualifications/basic-exercises-1.webp'
import img2 from '../../../public/images/qualifications/basic-exercises-2.webp'
import bgTop from '../../../public/images/qualifications/basic-exercises-bg-top.webp'
import bgBottom from '../../../public/images/qualifications/basic-exercises-bg-bottom.webp'
import Link from 'next/link'

const BasicExercises = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          тут є базові завдання включають в себе як вправи з пістолета, так і з
          карабіну.
        </h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <Image className={styles.image} src={img1} alt="MullerArms" />
            <div className={styles.text_wrapper}>
              <h3 className={styles.card_title}>завдання з карабіну</h3>
              <p className={styles.text}>
                МИ МАЄМО 5 БАЗОВИХ ВПРАВ з карабіну, ЯКІ ВИ МОЖЕТЕ ВИБРАТИ НА
                СВІЙ ПОГЛЯД І ВИ МАТИМЕТЕ 3 СПРОБИ НА ВИКОНАННЯ ВПРАВИ КРАЩИЙ
                РЕЗУЛЬТАТ ЗАПИСУЄТЬСЯ В ТАБЛИЦЮ
              </p>
            </div>
            <Link href={"/exercises"} className={styles.button} type="button">
              ДЕТАЛЬНІШЕ
            </Link>
          </div>
          <div className={styles.card}>
            <Image className={styles.image} src={img2} alt="MullerArms" />
            <div className={styles.text_wrapper}>
              <h3 className={styles.card_title}>завдання з пістолету</h3>
              <p className={styles.text}>
                МИ МАЄМО 5 БАЗОВИХ ВПРАВ з пістолету, ЯКІ ВИ МОЖЕТЕ ВИБРАТИ НА
                СВІЙ ПОГЛЯД І ВИ МАТИМЕТЕ 3 СПРОБИ НА ВИКОНАННЯ ВПРАВИ КРАЩИЙ
                РЕЗУЛЬТАТ ЗАПИСУЄТЬСЯ В ТАБЛИЦЮ
              </p>
            </div>
            <Link href={"/exercises"} className={styles.button} type="button">
              ДЕТАЛЬНІШЕ
            </Link>
          </div>
        </div>

        <Image className={styles.bg_top} src={bgTop} alt="MullerArms" />
        <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" />
      </div>
    </div>
  )
}

export default BasicExercises
