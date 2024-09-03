'use client'
//libs
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
//styles
import styles from '../styles.module.scss'
import global from '@/styles/global.module.scss'
//redux
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { deleteSubscription, fetchAllSubscribers } from '@/store/slices/Notifications.slice'
import { deleteBookingRequest, fetchAllBookingRequests } from '@/store/slices/Bookings.slice'
//images
import spinner from '../../../../../public/images/spinner.svg'

const Notifications = () => {
  const subscribers = useAppSelector(state => state.Notifications.subscribers)
  const bookingRequests = useAppSelector(state => state.Bookings.bookingRequests)
  const bookingRequestsFetch = useAppSelector(state => state.Bookings.bookingRequestsFetch)
  const subscribersFetch = useAppSelector(state => state.Notifications.subscribersFetch)
  const [page, setPage] = useState<number>(0);
  const [tab, setTab] = useState<number>(1);

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllBookingRequests(page))
    dispatch(fetchAllSubscribers(page))
  }, [])


  useEffect(() => {
    if (tab === 1){
      dispatch(fetchAllBookingRequests(page))
    } else {
      dispatch(fetchAllSubscribers(page))
    }
  }, [page])

  useEffect(() => {
    setPage(0)
  }, [tab])

  const data = tab === 1 ? bookingRequests : subscribers


  if (subscribersFetch === 'pending' || bookingRequestsFetch === 'pending') {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>В очікуванні</h1>
      <div className={styles.header}>
        <div className={`${global.primaryBtn} ${styles.tab} ${tab === 1 && styles.activeTab}`}
        onClick={() => setTab(1)}>Бронювання</div>
        <div className={`${global.primaryBtn} ${styles.tab} ${tab === 2 && styles.activeTab}`}
        onClick={() => setTab(2)}>Кваліфікація</div>
      </div>
      <table className={styles.table}>
        <thead>
        <tr>
          <th className={styles.head}>Ім'я</th>
          <th className={styles.head}>Телефон</th>
          <th className={styles.head}>Дата створення</th>
        </tr>
        </thead>
        <tbody>
        {data.map(s => (
          <tr key={s.id}>
            <th className={styles.value}>{s.name}</th>
            <th className={styles.value}>{s.phone}</th>
            <th className={styles.value}>{moment(s.creationDate).format("DD-MM-YYYY")}
              <span onClick={() => {
                tab === 1 ? dispatch(deleteBookingRequest(s.id)) : dispatch(deleteSubscription(s.id))
              }}>X</span>
            </th>
          </tr>
        ))}
        </tbody>
      </table>
      <button className={global.primaryBtn} onClick={() => setPage(prev => prev + 1)}>Завантажити ще</button>
    </div>
  )
}

export default Notifications
