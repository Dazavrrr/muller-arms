import React from 'react'
import styles from './styles.module.scss'

const Hero = () => {
  return <div className={styles.hero}>

    <h1 className={styles.hero_title}>
      Стрілецький клуб
      <br />
      <span className={styles.hero_titleOrange}>“Muller arms”</span>
    </h1>
    <p className={styles.hero_text}>
      Сучасні, професійні методики навчання із пістолетів, напівавтоматичних карабінів та гладкоствольних рушниць.
    </p>

    <div className={styles.hero_form}>
      <input className={styles.hero_formField} type="text" placeholder="Ім'я"/>
      <input className={styles.hero_formField} type="text" placeholder="Номер телефону" />
      <button className={styles.hero_button} type='button'>Передзвоніть мені</button>
    </div>
  </div>
}

export default Hero