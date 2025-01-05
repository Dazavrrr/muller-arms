//styles
import styles from './styles.module.scss'
//images
import img3 from '../../../public/images/club/IMG_6534.webp'
import Image from 'next/image'

const ClubValues = () => {
  return (
    <div className={styles.section}>
      <div className={styles.text_wrapper}>
        <p className={styles.text}>
          🔸 <span className={styles.bold}>33 резидента</span> – це серце і сила
          нашого клубу. Активні, цілеспрямовані, мотивовані особистості, які
          цінують самовдосконалення, взаємодію та прагнуть змінювати світ на
          краще.
        </p>
        <p className={styles.text}>
          <span className={styles.bold}>Взаємодія та спільний результат</span> –
          головні цінності клубу. Це проявляється не лише у спортивних
          досягненнях на змаганнях зі стрільби, а й у наших інших активностях.
          MullerArms – це велика родина, де допомога та увага один до одного є
          принципом. У нас знаходять друзів, партнерів по бізнесу, нові
          захоплення та ідеї.
        </p>
      </div>

      <Image
        src={img3}
        className={styles.img}
        width={400}
        alt="MullerArms group"
      />
    </div>
  )
}

export default ClubValues
