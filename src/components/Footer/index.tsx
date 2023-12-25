import React from 'react'
import styles from './styles.module.scss'

const Footer = () => {
  return <div className={styles.footer}>
    <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5072.516055265364!2d30.238731000000005!3d50.529371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b3180ac175cbf%3A0x8338dd1327c5a9ba!2z0LLRg9C70LjRhtGPINCc0ZbQvdC10YDQsNC70YzQvdCwLCA3LCDQhtGA0L_RltC90YwsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7LiwgMDgyMDA!5e0!3m2!1suk!2sua!4v1703325940124!5m2!1suk!2sua" referrerPolicy="no-referrer-when-downgrade"></iframe>
      
    <div className={styles.contacts}>
      <h2 className={styles.title}>Графік роботи</h2>
      <p>ПРАЦЮЄМО ЗА попереднім записом 9:00 - 20:00</p>
      <h2>Контакти</h2>
      <p>+38 (096) 026-44-75</p>
      <p>mullerarms@gmail.com</p>
    </div>
    
    <div className={styles.form}>
      <h2>Залиште ваші контакти для бронювання</h2>
      <input type="text" placeholder="Ім'я" />
      <input type="text" placeholder="Номер телефону" />
      <button type='submit'></button>
    </div>
  </div>
}

export default Footer
