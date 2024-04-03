'use client'
//libs
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import { useEffect } from 'react'
//styles
import styles from '@/app/(admin)/admin/styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import spinner from '../../../../../public/images/spinner.svg'
import { fetchAllTrainings } from '@/store/slices/Trainings.slice'
import TrainingAdminCard from '@/components/TrainingAdminCard/TrainingAdminCard'



const TrainingsPage = () => {
  const trainings = useAppSelector(state => state.Trainings.trainings)
  const trainingsFetchStatus = useAppSelector(state => state.Trainings.trainingsFetchStatus)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!trainings.length) {
      dispatch(fetchAllTrainings());
    }
    //eslint-disable-next-line
  }, [])

  if (trainingsFetchStatus === 'pending') {
    return <Image src={spinner} alt={'spinner'} className={global.spinnerAbsolute} />
  }

  return (
    <div className={styles.container}>
      <Link href={'trainings/new'} className={`${styles.new} ${global.primaryBtn}`}>Додати нове тренування</Link>

      <div className={styles.list}>
        {trainings.map(t => (
          <TrainingAdminCard training={t} key={t.id}/>
        ))}
      </div>
    </div>
  )
}

export default TrainingsPage
