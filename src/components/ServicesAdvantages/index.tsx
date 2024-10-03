//libs
import React from "react";
import Image from "next/image";
//styles
import styles from './styles.module.scss'
//images
import photo from '../../../public/images/services/services-advantages-photo.webp'
import bottomBg from '../../../public/images/services/services-advantages-bottom-bg.webp'

const ServicesAdvantages = () => {
  return <section className={styles.advantages}>
    <div className={styles.advantages_wrapper}>
        <Image
          className={styles.advantages_photo_mob}
          src={photo}
          alt="MullerArms"
          width={335}
          height={226}
        />

      <div>
        <h3 className={styles.advantages_title}>Наші тренери визначать усі ваші слабкі й сильні сторони, й побудють покрокову програму вашого вдосконалення</h3>

        <div className={styles.advantages_article}>
          <p className={styles.advantages_text}>Усі наші курси, тренування й програми розраховані в першу чергу на підвищення рівня культури поводження зі зброєю громадян, усвідомлення того що, зброя лише інструмент, а стрілець його володар</p>
          <p className={styles.advantages_text}>Відповідальність, взаємоповага один до одного, прагнення до самовдосконалення, це ті якості які ми виховуємо в людях одночасно із покращенням стрілецьких навичок.</p>
          <p className={styles.advantages_text}>“Вбиває не зброя, а людина” <br /> @Семюель Кольт</p>
        </div>
      </div>
      
      <Image
        className={styles.advantages_photo}
        src={photo}
        alt="MullerArms"
        width={699}
        height={386}
      />

      <Image
        className={styles.advantages_bottom_bg}
        src={bottomBg}
        alt="MullerArms"
      />
      
    </div>
  </section>
}

export default ServicesAdvantages