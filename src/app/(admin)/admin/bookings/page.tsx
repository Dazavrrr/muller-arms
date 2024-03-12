'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
//styles
import styles from '../styles.module.scss'
import global from '@/styles/global.module.scss'
//redux
import { useAppDispatch, useAppSelector } from '@/store/hooks'
//styles
import spinner from '../../../../../public/images/spinner.svg'
import { fetchAllBookings } from '@/store/slices/Bookings.slice'
import BookingAdminCard from '@/components/BookingAdminCard/BookingAdminCard'

const BookingsPage = () => {
  const bookings = useAppSelector(state => state.Bookings.bookings)
  const bookingsFetchStatus = useAppSelector(state => state.Bookings.bookingsFetchStatus)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllBookings(0))
  }, [])

  if (bookingsFetchStatus === 'pending') {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }

  return (
    <div className={styles.container}>
      {bookings.map(b => <BookingAdminCard booking={b} key={b.id} />)}
    </div>
  )
}

export default BookingsPage
