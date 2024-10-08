//libs
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//images
import topBg from '../../../public/images/certificates/certificates-top-bg.webp'
import bottomBg from '../../../public/images/certificates/certificates-bottom-bg.webp'

const Certificates = () => {
  return (
    <section className={styles.certificates}>
      <div className={styles.certificates_wrapper}>
        <div className={styles.certificates_optionsBlock}>
          <h2 className={styles.certificates_title}>
            оберіть подарунковий сертифікат
          </h2>
          <div className={styles.certificates_text}>
            <p>
              Наші сертифікати найкращий варіант подарунку - незабутні емоції й
              корисний досвід, який залишиться на все життя. Сертифікати не
              мають обмежень. Ви можете покласти на депозит будь яку суму. А
              людина якій ви зробите такий подарунок зможе обрати собі будь які
              опції на тренування на свій смак, в межах суми депозиту.
            </p>
            <p>
              Після отримання сертифікату, потрібно звʼязатись із адміністрацією
              клубу впродоовж місяця та зареєструватись на тренування в
              найближчі три місяці. Сертифікати не підлягають перепродажу та
              поверненню коштів.
            </p>
          </div>

          <ul className={styles.certificates_cards}>
            <li className={styles.certificates_card}>
              <div className={styles.certificates_card_info}>
                <h2 className={styles.certificates_card_name}>muller arms</h2>
                <p className={styles.certificates_card_price}>будь-яка сума</p>
              </div>
              <Link
                href="/certificates"
                className={styles.certificates_card_btn}
              >
                КУПИТИ
              </Link>
            </li>

            <li className={styles.certificates_card}>
              <div className={styles.certificates_card_info}>
                <h2 className={styles.certificates_card_name}>muller arms</h2>
                <p className={styles.certificates_card_price}>1500 грн</p>
              </div>
              <Link
                href="/certificates"
                className={styles.certificates_card_btn}
              >
                КУПИТИ
              </Link>
            </li>

            <li className={styles.certificates_card}>
              <div className={styles.certificates_card_info}>
                <h2 className={styles.certificates_card_name}>muller arms</h2>
                <p className={styles.certificates_card_price}>3500 грн</p>
              </div>
              <Link
                href="/certificates"
                className={styles.certificates_card_btn}
              >
                КУПИТИ
              </Link>
            </li>

            <li className={styles.certificates_card}>
              <div className={styles.certificates_card_info}>
                <h2 className={styles.certificates_card_name}>muller arms</h2>
                <p className={styles.certificates_card_price}>6500 грн</p>
              </div>
              <Link
                href="/certificates"
                className={styles.certificates_card_btn}
              >
                КУПИТИ
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.certificates_videoBlock}>
          <h1 className={styles.certificates_title}>
            дізнайтеся більше про наші сертифікати у цьому відео
          </h1>

          <iframe
            className={styles.certificates_video}
            src="https://www.youtube.com/embed/ZniXOsuoFq0"
            title="MullerArms Expert"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <Image
          className={styles.certificates_top_bg}
          src={topBg}
          alt="MullerArms"
        />
        <Image
          className={styles.certificates_bottom_bg}
          src={bottomBg}
          alt="MullerArms"
        />
      </div>
    </section>
  )
}

export default Certificates
