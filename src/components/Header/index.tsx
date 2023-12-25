import React from 'react'
import styles from './styles.module.scss'
import Logo from '../Icons/Logo'
import InstagramIcon from '../Icons/InstagramIcon'
import TelegramIcon from '../Icons/TelegramIcon'

const Header = () => {
  return <header className={styles.header}>
    <Logo />

    <ul className={styles.navItems}>
      <li>Про нас</li>
      <li>Послуги</li>
      <li>Тренери</li>
      <li>Про клуб</li>
    </ul>

    <div className={styles.navContacts}>
      <a href="tel:380960264475" className={styles.phoneNumber}>+38 (096) 026-44-75</a>
      <a href="">
        <TelegramIcon />
      </a>
      <a href='https://www.instagram.com/mullerarms/'>
        <InstagramIcon />
      </a>
    </div>
  </header>
}

export default Header
