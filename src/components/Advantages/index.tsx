import React from "react";
import styles from './styles.module.scss'

const Advantages = () => {
  return <div className={styles.advantages}>
    <h1 className={styles.advantages_title}>Стрілецький Клуб  <span className={styles.orange}>  “Muller arms”</span></h1>
    
    <div className={styles.advantages_blocks}>
      <div className={styles.advantages_block}>
        <h1 className={styles.advantages_blockText}>Підходить для будь-якого рівня підготовки</h1>
      </div>

      <div className={styles.advantages_block}>
        <h1 className={styles.advantages_blockText}>11 видів зброї</h1>
      </div>

      <div className={styles.advantages_block}>
        <h1 className={styles.advantages_blockText}>Піклуємось про вашу безпеку</h1>
      </div>

      <div className={styles.advantages_block}>
        <h1 className={styles.advantages_blockText}>3 площадки на вибір: <br /> тир (25*5м) та 2 полігони (50*40м та 300*20м)</h1>
      </div>

      <div className={styles.advantages_block}>
        <h1 className={styles.advantages_blockText}>Персональні та групові тренування</h1>
      </div>

      <div className={styles.advantages_block}>
        <h1 className={styles.advantages_blockText}>Тренери — військові з бойовим досвідом</h1>
      </div>
    </div>
  </div>
}

export default Advantages