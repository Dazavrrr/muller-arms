'use client'
//libs
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchAllTrainers } from '@/store/slices/TrainersAdmin.slice'
//styles
import styles from '../styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import spinner from '../../../../../public/images/spinner.svg'
import Image from 'next/image'
import Link from 'next/link'
import TrainerAdminCard from '@/components/TrainerAdminCard/TrainerAdminCard'

const TrainersPage = () => {
  const trainers = useAppSelector(state => state.TrainersAdmin.trainers)
  const trainersFetchStatus = useAppSelector(state => state.TrainersAdmin.trainersFetchStatus)

  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!trainers.length) {
      dispatch(fetchAllTrainers())
    }
    //eslint-disable-next-line
  }, [])

  if (trainersFetchStatus === 'pending') {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }

  return (
    <div className={styles.container}>
      <Link href={'trainers/new'} className={`${styles.new} ${global.primaryBtn}`}>Додати нового тренера</Link>

      <div className={styles.list}>
        {trainers.map(t => (
          <TrainerAdminCard trainer={t} key={t.id} />
        ))}
      </div>
    </div>
  )
}

export default TrainersPage
