//libs
import React from 'react'
import Link from 'next/link'
//styles
import styles from './styles.module.scss'
//icons
import InstagramIcon from '../Icons/InstagramIcon'
import TelegramIcon from '../Icons/TelegramIcon'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <iframe
          className={styles.footer_map}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5072.516055265364!2d30.238731000000005!3d50.529371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b3180ac175cbf%3A0x8338dd1327c5a9ba!2z0LLRg9C70LjRhtGPINCc0ZbQvdC10YDQsNC70YzQvdCwLCA3LCDQhtGA0L_RltC90YwsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7LiwgMDgyMDA!5e0!3m2!1suk!2sua!4v1703325940124!5m2!1suk!2sua"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className={styles.footer_info}>
          <div className={styles.footer_schedule}>
            <h2 className={styles.footer_title}>Графік роботи</h2>
            <p className={styles.footer_text}>
              ПРАЦЮЄМО ЗА попереднім записом 9:00 - 20:00
            </p>
          </div>

          <div className={styles.footer_contacts}>
            <h2 className={styles.footer_title}>Контакти</h2>
            <a href="tel:380960264475" className={styles.footer_text}>
              +38 (096) 026-44-75
            </a>
            <a href="tel:380996533061" className={styles.footer_text}>
              +38 (099) 653-30-61
            </a>
            <a
              href="mailto:mullerarms@gmail.com"
              className={styles.footer_text}
            >
              mullerarms@gmail.com
            </a>
          </div>

          <div className={styles.footer_icons}>
            <a href="https://t.me/+380996533061" className={styles.footer_icon}>
              <TelegramIcon />
            </a>
            <a
              href="https://www.instagram.com/mullerarms/"
              className={styles.footer_icon}
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className={styles.footer_form}>
          <h2 className={styles.footer_formTitle}>
            Залиште ваші контакти <br /> для бронювання
          </h2>

          <div className={styles.footer_formFields}>
            <input
              className={styles.footer_input}
              type="text"
              placeholder="Ім'я"
            />
            <input
              className={styles.footer_input}
              type="text"
              placeholder="Номер телефону"
            />
            <button className={styles.footer_button} type="button">
              Передзвоніть мені
            </button>
          </div>
        </div>
      </div>

      <div className={styles.footer_politics}>
        <p>ALL RIGHTS RESERVED.</p>
        <Link href="/politics">ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</Link>
      </div>
    </footer>
  )
}

export default Footer
