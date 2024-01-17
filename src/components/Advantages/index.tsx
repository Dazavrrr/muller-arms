import React from "react";
import styles from './styles.module.scss'

const Advantages = () => {
  const advantages = [
    "Підходить для будь-якого рівня підготовки",
    "11 видів зброї",
    "Піклуємось про вашу безпеку",
    "3 площадки на вибір: тир (25*5м) та 2 полігони (50*40м та 300*20м)",
    "Персональні та групові тренування",
    "Тренери — військові з бойовим досвідом"
  ]
  return <section className={styles.advantages}>
    <h2 className={styles.advantages_title}>Стрілецький Клуб <span className={styles.orange}>  “Muller arms”</span></h2>

    <div className={styles.advantages_blocks}>
      {advantages.map((adv,i) => (
        <div className={styles.advantages_block} key={i}>
          <h3 className={styles.advantages_blockText}>{adv}</h3>
        </div>
      ))}

    </div>

    <div className={styles.btn}>Записатись на тренування</div>
  </section>
}

export default Advantages