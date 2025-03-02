//components
import TrainingDetails from '@/components/TrainingDetails/TrainingDetails'
import OtherTrainings from '@/components/OtherTrainings'
import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import { notFound } from 'next/navigation'
import { Training } from '@/models/training'

type PageProps = {
  params: {
    trainingSlug: string
  }
}

const TrainingPage = async ({ params: { trainingSlug } }: PageProps) => {
  const { data: training } = await getData<Training>(
    `${ApiPath.TRAININGS}${trainingSlug}`
  )

  if (!training) {
    return notFound()
  }

  return (
    <>
      <TrainingDetails training={training} />
      <OtherTrainings slug={trainingSlug} />
    </>
  )
}

export default TrainingPage
