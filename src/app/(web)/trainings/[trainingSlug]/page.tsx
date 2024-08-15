//components
import TrainingDetails from '@/components/TrainingDetails/TrainingDetails'
import OtherTrainings from '@/components/OtherTrainings'
import base from '../../../../../public/images/trainings/1.webp'
import group from '../../../../../public/images/trainings/2.webp'
import individual from '../../../../../public/images/trainings/3.webp'
import course from '../../../../../public/images/trainings/4.webp'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import {
  fetchAllTrainings,
  fetchOneTrainingBySlug,
} from '@/store/slices/Trainings.slice'

type PageProps = {
  params: {
    trainingSlug: string
  }
}

const TrainingPage = ({ params: { trainingSlug } }: PageProps) => {
  const dispatch = useAppDispatch()
  const training = useAppSelector((state) => state.Trainings.currentTraining)
  const trainings = useAppSelector((state) => state.Trainings.trainings)

  useEffect(() => {
    if (trainingSlug) {
      dispatch(fetchOneTrainingBySlug(trainingSlug))
    }
    if (trainings.length === 0) {
      dispatch(fetchAllTrainings())
    }
    //eslint-disable-next-line
  }, [trainingSlug, trainings])

  return (
    <>
      {training && <TrainingDetails training={training} />}
      <OtherTrainings trainings={trainings} slug={trainingSlug} />
    </>
  )
}

export default TrainingPage
