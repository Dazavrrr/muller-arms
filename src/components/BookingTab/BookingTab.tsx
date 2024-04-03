'use client'
import Image, { StaticImageData } from 'next/image'
import { FC, ReactNode, useState } from 'react'
//styles
import styles from './styles.module.scss'
//images
import arrow from '../../../public/images/booking/arrow.svg'

interface Props {
  icon: StaticImageData,
  title: string,
  children: ReactNode,
  isDisabled: boolean
}

const BookingTab: FC<Props> = ({ icon, title, children, isDisabled }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className={`${styles.container} ${isOpen && styles.openContainer} ${isDisabled && styles.disabled}`}>
      <div className={styles.header} onClick={() => {
        if (!isDisabled) {
          setIsOpen(prev => !prev)
        }
      }}>
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
