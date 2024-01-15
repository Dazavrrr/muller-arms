import React from "react";
import styles from './styles.module.scss'

const Advantages = () => {
  return <section className={styles.advantages}>
    <h2 className={styles.advantages_title}>Стрілецький Клуб <span className={styles.orange}>  “Muller arms”</span></h2>

    <div className={styles.advantages_blocks}>
      <div className={styles.advantages_block}>
        <h3 className={styles.advantages_blockText}>Підходить для будь-якого рівня підготовки</h3>
      </div>

      <div className={styles.advantages_block}>
        <h3 className={styles.advantages_blockText}>11 видів зброї</h3>
      </div>

      <div className={styles.advantages_block}>
        <h3 className={styles.advantages_blockText}>Піклуємось про вашу безпеку</h3>
      </div>

      <div className={styles.advantages_block}>
        <h3 className={styles.advantages_blockText}>3 площадки на вибір: <br /> тир (25*5м) та 2 полігони (50*40м та
          300*20м)</h3>
      </div>

      <div className={styles.advantages_block}>
        <h3 className={styles.advantages_blockText}>Персональні та групові тренування</h3>
      </div>

      <div className={styles.advantages_block}>
        <h3 className={styles.advantages_blockText}>Тренери — військові з бойовим досвідом</h3>
      </div>
    </div>

    <div className={styles.btn}>Записатись на тренування</div>
  </section>
}

export default Advantages