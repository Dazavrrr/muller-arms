'use client'
import Image, { StaticImageData } from 'next/image'
import { ReactNode, useState } from 'react'
//styles
import styles from './styles.module.scss'
//images
import arrow from '../../../public/images/booking/arrow.svg'

const BookingTab = ({ icon, title, children }: { icon: StaticImageData, title: string, children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className={`${styles.container} ${isOpen && styles.openContainer}`}>
      <div className={styles.header} onClick={() => setIsOpen(prev => !prev)}>
        <Image src={icon} alt={'tab icon'} />
        <p>{title}</p>
        <Image src={arrow} alt={'arrow icon'} className={`${styles.arrow} ${isOpen && styles.arrowOpen}`} />
      </div>
      <div className={styles.children}>
        {children}
      </div>
    </div>
  )
}

export default BookingTab
