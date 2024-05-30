//libs
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import img from '../../../public/images/briefing-image.webp'
import bgTop from '../../../public/images/qualifications/experience-bg-top.webp'
import bgBottom from '../../../public/images/qualifications/experience-bg-bottom.webp'

const Briefing = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Image className={styles.image} src={img} alt="MullerArms" />

        <div className={styles.content}>
          <h2 className={styles.title}>брифінг</h2>
          <div className={styles.text_wrapper}>
            <p className={styles.text}>Кодекс стрільця</p>
            <p className={styles.text}>
              Заряджання зброї як із положення «із піраміди» так і з положення
              «на ремені» здійснюється виключно зі стволом спрямованим в мішень,
              не вище бруствера
            </p>
            <p className={styles.text}>
              Виконання усіх умов важливо! В першу чергу для отримання
              об’єктивних результатів. Тому будуть використовуватись такі
              штрафи: заступання за штрафну лінію, та неякісне використання
              укриття; враження цілей ізза укриття не в черговості їх появлення;
              перехід від одного укриття до іншого не змінивши магазин там де це
              потрібно було виконати; кількість набоїв в магазині була більшою і
              стрілець здійснив достріл
            </p>
            <p className={styles.text}>
              Основним принципом, завдяки якому можна отримати високий результат
              є «БАЛАНС», тому виконуємо усі маніпуляції й саму стрільбу,
              безпосередньо, на на максимально можливій швидкості, при якій
              влучання будуть в альфі а моторика при маніпуляціях залишиться
              чіткою й рівною, тому швидко, але спокійно, без суєти
            </p>
            <p className={styles.text}>
              Підраховуємо бали за системою Вікерса. Обмежена кількість
              пострілів на вправі. За достріл штраф. +10 сек
            </p>
          </div>
        </div>
      </div>
      <Image className={styles.bg_top} src={bgTop} alt="MullerArms" />
      <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" />
    </div>
  )
}

export default Briefing
