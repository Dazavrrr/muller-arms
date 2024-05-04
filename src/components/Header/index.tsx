'use client'
//libs
import React, { useEffect, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
//styles
import styles from './styles.module.scss'
//images
import Logo from '../Icons/Logo'
import InstagramIcon from '../Icons/InstagramIcon'
import TelegramIcon from '../Icons/TelegramIcon'
import Link from 'next/link'
import useScrollDirection from '@/hooks/useScrollDirection'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const scrollDirection = useScrollDirection()
  const router = useRouter()
  const path = usePathname()
  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? 'hidden' : 'auto'
  }, [isMenuOpen])

  const scrollHandler = (id: string) => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
    setTimeout(
      () => {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth',
          block: handleWindowWidth() ? 'center' : 'start',
        })
      },
      isMenuOpen ? 500 : 0
    )
  }

  const handleWindowWidth = () =>
    typeof window !== 'undefined' && window.innerWidth > 780

  return (
    <header
      className={`${styles.header} ${
        scrollDirection === 'down' ? styles.header_hide : styles.header_show
      }`}
    >
      <div className={styles.header_container}>
        <Link href="/" className={styles.header_logo}>
          <Logo />
        </Link>

        <nav
          className={`${styles.header_navigation} ${
            isMenuOpen && styles.header_mobNavActive
          }`}
        >
          <div
            className={styles.header_navItem}
            onClick={() => {
              if (path != '/') {
                router.push('/')
                setTimeout(() => scrollHandler('aboutUs'), 100)
              } else {
                scrollHandler('aboutUs')
              }
            }}
          >
            Про нас
          </div>
          <Link className={styles.header_navItem} href="/trainings">
            Послуги
          </Link>
          <div
            className={styles.header_navItem}
            onClick={() => scrollHandler('announcements')}
          >
            Анонси
          </div>
          <div
            className={styles.header_navItem}
            onClick={() => scrollHandler('qualifications')}
          >
            Кваліфікації клубу
          </div>

          <Link className={styles.header_navItem} href="/blog">
            Блог
          </Link>

          <Link className={styles.header_navItem} href="/library">
            Бібліотека
          </Link>
          <div
            className={styles.header_navItem}
            onClick={() => scrollHandler('archive')}
          >
            Архів
          </div>
          <div
            className={styles.header_navItem}
            onClick={() => scrollHandler('shop')}
          >
            Магазин
          </div>
        </nav>

        <div
          className={`${styles.header_contacts} ${
            isMenuOpen && styles.header_mobContactsActive
          }`}
        >
          <a href="tel:380996533061" className={styles.header_phoneNum}>
            +38 (099) 653-30-61
          </a>
          <a href="https://t.me/+380996533061" className={styles.header_icon}>
            <TelegramIcon />
          </a>
          <a
            href="https://www.instagram.com/mullerarms/"
            className={styles.header_icon}
          >
            <InstagramIcon />
          </a>
        </div>
        <div className={styles.header_rightMob}>
          <a
            href="tel:380996533061"
            className={`${styles.header_phoneNum} ${styles.header_mobPhoneNum}`}
          >
            +38 (099) 653-30-61
          </a>

          <div className={styles.burger}>
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              color="white"
              size={25}
              rounded
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
