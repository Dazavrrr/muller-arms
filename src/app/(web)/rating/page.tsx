import '@/styles/global.module.scss'
import RecordsOtherOurQualifications from '@/components/RecordsOtherOurQualifications'
import ThreePositionExercise from '@/components/ThreePositionExercise'
import RatingHero from '@/components/RatingHero'
import RatingDescription from '@/components/RatingDescription'

export default function Rating() {
  return (
    <>
      <RatingHero />
      <RatingDescription />
      <ThreePositionExercise />
      <RecordsOtherOurQualifications />
    </>
  )
}
