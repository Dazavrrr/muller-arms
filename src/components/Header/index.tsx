//libs
import React from 'react'
//styles
import styles from './styles.module.scss'
//icons
import Logo from '../Icons/Logo'
import InstagramIcon from '../Icons/InstagramIcon'
import TelegramIcon from '../Icons/TelegramIcon'

const Header = () => {
  return <header className={styles.header}>
    <div className={styles.header_container}>
      <a href="" className={styles.header_logo}>
        <Logo />
      </a>

    <ul className={styles.header_navigation}>
      <li className={styles.header_navItem}>Про нас</li>
      <li className={styles.header_navItem}>Послуги</li>
      <li className={styles.header_navItem}>Тренери</li>
      <li className={styles.header_navItem}>Переваги</li>
    </ul>

    <div className={styles.header_contacts}>
      <a href="tel:380996533061" className={styles.header_phoneNum}>+38 (099) 653-30-61</a>
      <a href="https://t.me/+380996533061" className={styles.header_icon}>
        <TelegramIcon />
      </a>
      <a href='https://www.instagram.com/mullerarms/' className={styles.header_icon}>
        <InstagramIcon />
      </a>
    </div>
    </div>
  </header>
}

export default Header
