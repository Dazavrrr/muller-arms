"use client"
//libs
import React, { useEffect, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
//styles
import styles from './styles.module.scss'
//images
import Logo from '../Icons/Logo'
import InstagramIcon from '../Icons/InstagramIcon'
import TelegramIcon from '../Icons/TelegramIcon'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ?  'hidden' : 'auto';
  }, [isMenuOpen])

  return <header className={styles.header}>
    <div className={styles.header_container}>
      <a href="" className={styles.header_logo}>
        <Logo />
      </a>

      <nav className={`${styles.header_navigation} ${isMenuOpen && styles.header_mobNavActive}`}>
        <div className={styles.header_navItem}>Про нас</div>
        <div className={styles.header_navItem}>Послуги</div>
        <div className={styles.header_navItem}>Тренери</div>
        <div className={styles.header_navItem}>Переваги</div>
      </nav>

      <div className={`${styles.header_contacts} ${isMenuOpen && styles.header_mobContactsActive}`} >
        <a href="tel:380996533061" className={styles.header_phoneNum}>+38 (099) 653-30-61</a>
        <a href="https://t.me/+380996533061" className={styles.header_icon}>
          <TelegramIcon />
        </a>
        <a href="https://www.instagram.com/mullerarms/" className={styles.header_icon}>
          <InstagramIcon />
        </a>
      </div>
      <div className={styles.header_rightMob}>
        <a href="tel:380996533061" className={`${styles.header_phoneNum} ${styles.header_mobPhoneNum}`}>+38 (099) 653-30-61</a>

        <div className={styles.burger}>
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} color="white" size={25} rounded />
        </div>
      </div>

    </div>
  </header>
}

export default Header
