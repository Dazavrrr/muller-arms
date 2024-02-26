//libs
import React from "react";
import Image from "next/image";
//styles
import styles from './styles.module.scss'
//images
import bgTop from '../../../public/images/experience/experience-bottom-bc.webp'

const Advantages = () => {
  return <section className={styles.advantages} id={"advantages"}>
    <div className={styles.advantages_wrapper}>
          <h2 className={styles.advantages_title}>Чому обирають нас?</h2>

    <div className={styles.advantages_texts}>
      <div className={styles.advantages_line}></div>

      <div className={styles.advantages_info}>
        <h3 className={styles.advantages_info_number}>01</h3>
        <h3 className={styles.advantages_info_title}>Експертні інструктори</h3>
        <p className={styles.advantages_info_text}>Наші тренери отримали тривалий й різносторонній досвід. Служба в спецпідрозділах, активна участь в спорті, в великій кількості різновидів спортивних стрілецьких дисциплін, служба безпеки, самооборона та охорона, як обʼєктів, так і окремих персон, а також участь в бойових діях. Весь цей досвід сформував широке розуміння й власне бачення ефективного оперування зброєю. Цьому ми й вчимо. Без зайвої «води». Максимально корисна концентрована інформація.</p>
      </div>

      <div className={styles.advantages_line}></div>

      <div className={styles.advantages_info}>
        <h3 className={styles.advantages_info_number}>02</h3>
        <h3 className={styles.advantages_info_title}>Безпека та комфорт</h3>
        <p className={styles.advantages_info_text}>В наших стінах стрілець може обрати будь який напрямок розвитку.  1). Тактична вогнева підготовкка, ми маємо досвід в цій царині, й успішно просуваємо його, як із діючими підроздділами сил оборони України так і з цивільними.  2). Спорт (практична стрільба) цей напрямок особливий, вважаємо що для цивільних це найкращий шлях оволодіння зброєю та розуміння принципів збалансованої й результативної стрільби. Наші тренери готують спортсменів, а наш клуб формує команди й приймає участь в офіційних змаганнях України, таких як Кубки та Чемпіонати України тощо.  3). Самооборона із вогнепальною зброєю. Як пістолет так і довгоствольна зброя застосовується в цьому форматі. Напрацьовуємо як базу так і певні сценарії можливого розвитку подій й відповідні алгоритми дій.  4). Стрілецькі вправи після фізичних навантажень, часто додаємо як до спортивного формату тренувань так і до тактики. І ще велика кількість проміжних тренувальних форматів</p>
      </div>

      <div className={styles.advantages_line}></div>

      <div className={styles.advantages_info}>
        <h3 className={styles.advantages_info_number}>03</h3>
        <h3 className={styles.advantages_info_title}>Сучасне спорядження</h3>
        <p className={styles.advantages_info_text}>Ми не обмежуємося однією локацією. В залежності від завдань та рівня стрільців обираємо площадку для тренування. Це може бути як закритий тир, так і відкриті галереї із дистанціями до 50 метрів та до 300 м. Стрілець на наших тренуваннях може отримати повний спектр навичок, абсолютно рекордно різнопланових як по складності так і за видами дисциплін, видами зброї, мішенноої обстановки тощо.</p>
      </div>

      <div className={styles.advantages_line}></div>

       <Image
        className={styles.advantages_bg_top}
        src={bgTop}
        alt='MullerArms'
      />
    </div>
    </div>
  </section>
}

export default Advantages
