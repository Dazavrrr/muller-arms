//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import photo from '../../../public/images/weapons/weapons-photo.webp'
import photoMob from '../../../public/images/weapons/weapons-photo-mob.webp'
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
          <Image
            className={styles.weapons_photo_mob}
            src={photoMob}
            alt="MullerArms"
          />

          <div className={styles.weapons_info}>
            <p className={styles.weapons_text}>
              "У нашому тирі ви знайдете вражаючий асортимент високоякісної
              зброї, що включає тактичні карабіни, автоматичні карабіни, а також
              малокаліберні гвинтівки 22lr з оптичним прицілом. Наша колекція
              відомих моделей, таких як AR-15 і АКМ, дозволить вам випробувати
              та оцінити найсучасніші рішення в галузі вогнепальної техніки.
              Досвідчені інструктори та комфортні умови гарантують незабутній
              досвід для всіх рівнів стрільбищних навичок. Приєднуйтеся до нас і
              вдосконалюйте свою стрільбу з найкращою зброєю в нашому тирі"
            </p>

            <ul className={styles.weapons_names}>
              <li className={styles.weapons_name}>AR-15</li>
              <li className={styles.weapons_name}>АКМ</li>
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
