//libs
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'

//styles
import styles from './styles.module.scss'
//images
import open from './icons/open.svg'
import close from './icons/close.svg'
import Logo from '@/components/Icons/Logo'

const AdminSideBar = () => {
  const [isOpen, setOpen] = useState<boolean>(true)
  const path = usePathname()
  return (
    <>
      <Image src={open} alt={'open side bar'} className={`${styles.open} ${isOpen && styles.openHide}`}
             onClick={() => setOpen(true)} />
      <nav className={`${styles.container} ${!isOpen && styles.closed}`}>
        <div className={styles.header}>
          <Logo />
          <Image src={close} alt={'close side bar'} className={styles.close} onClick={() => setOpen(false)} />
        </div>
        <div className={styles.wrapper}>
          <Link href={'/admin/trainers'}
                className={`${styles.link} ${path.includes('/admin/trainers') && styles.active}`}>Тренери</Link>
          <Link href={'/admin/timeslots'}
                className={`${styles.link} ${path.includes('/admin/timeslots') && styles.active}`}>Таймслоти</Link>
          <Link href={'/admin/trainings'}
                className={`${styles.link} ${path.includes('/admin/trainings') && styles.active}`}>Тренування</Link>
          <Link href={'/admin/bookings'}
                className={`${styles.link} ${path.includes('/admin/bookings') && styles.active}`}>Бронювання</Link>
          <Link href={'/admin/topics'}
                className={`${styles.link} ${path.includes('/admin/topics') && styles.active}`}>Топіки</Link>
          <Link href={'/admin/notifications'}
          className={`${styles.link} ${path.includes('/admin/notifications') && styles.active}`}>В очікуванні</Link>
          <Link href={'/admin/library'}
                className={`${styles.link} ${path.includes('/admin/library') && styles.active}`}>Бібліотека</Link>
          <Link href={'/admin/qualifications'}
                className={`${styles.link} ${path.includes('/admin/qualifications') && styles.active}`}>Таблиці</Link>
          <Link href={'/admin/shop'}
                className={`${styles.link} ${path.includes('/admin/shop') && styles.active}`}>Магазин</Link>
        </div>
      </nav>
    </>

  )
}

export default AdminSideBar
