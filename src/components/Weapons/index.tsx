//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import photo from '../../../public/images/weapons/weapons-photo.webp'
import bgBottom from '../../../public/images/instagram/instagram-bg-bottom.webp'

const Weapons = () => {
  return (
    <section className={styles.weapons}>
      <div className={styles.weapons_wrapper}>
        <h2 className={styles.weapons_title}>ми працюємо із такою зброєю</h2>

        <div className={styles.weapons_infoBlock}>
          <Image
            className={styles.weapons_photo}
            src={photo}
            alt="MullerArms"
          />

          <div className={styles.weapons_info}>
            <p className={styles.weapons_text}>
              Випробуйте найкращу стрілецьку зброю в нашому тирі! Нарізні
              карабіни та гвинтівки, рушниці, снайперські гвинтівки,
              малокаліберні гвинтівки та пістолети. Усе це доступно в
              комфортному середовищі під наглядом досвідчених тренерів.Ідеально
              для новачків і стрільців з досвідом. Забронюйте сеанс вже
              сьогодні!
            </p>

            <ul className={styles.weapons_names}>
              <li className={styles.weapons_name}>AR-15</li>
              <li className={styles.weapons_name}>АКМ</li>
              <li className={styles.weapons_name}>Marlyn</li>
              <li className={styles.weapons_name}>Delta Pro</li>
              <li className={styles.weapons_name}>Perun</li>
              <li className={styles.weapons_name}>
                Гладкоствольні рушниці 12 калібру
              </li>
              <li className={styles.weapons_name}>
                Малокаліберна гвинтівка 22lr із оптичним прицілом
              </li>
              <li className={styles.weapons_name}>ФОРТ 12</li>
              <li className={styles.weapons_name}>ФОРТ 14</li>
              <li className={styles.weapons_name}>ФОРТ 18</li>
            </ul>
          </div>
        </div>

        <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" />
      </div>
    </section>
  )
}

export default Weapons
