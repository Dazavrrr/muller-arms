'use client'
//libs

//styles
import styles from '../styles.module.scss'
import global from '@/styles/global.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import spinner from '../../../../../public/images/spinner.svg'
import React, { useEffect, useState } from 'react'
import { deleteSubscription, fetchAllSubscribers } from '@/store/slices/Notifications.slice'
import moment from 'moment'

const Notifications = () => {
  const subscribers = useAppSelector(state => state.Notifications.subscribers)
  const subscribersFetch = useAppSelector(state => state.Notifications.subscribersFetch)
  const [page, setPage] = useState<number>(0)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllSubscribers(page)).then(() => setPage(prev => prev + 1))
  }, [])

  if (subscribersFetch === 'pending') {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>В очікуванні на старт класифікації</h1>
      <table className={styles.table}>
        <thead>
        <tr>
          <th className={styles.head}>Ім'я</th>
          <th className={styles.head}>Телефон</th>
          <th className={styles.head}>Дата створення</th>
        </tr>
        </thead>
        <tbody>
        {subscribers.map(s => (
          <tr key={s.id}>
            <th className={styles.value}>{s.name}</th>
            <th className={styles.value}>{s.phone}</th>
            <th className={styles.value}>{moment(s.creationDate).format("DD-MM-YYYY")}
            <span onClick={() => dispatch(deleteSubscription(s.id))}>X</span>
            </th>
          </tr>
        ))}
        </tbody>
      </table>
      <button className={global.primaryBtn}>Завантажити ще</button>
    </div>
  )
}

export default Notifications
