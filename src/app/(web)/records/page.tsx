import '@/styles/global.module.scss'
import BasicExercises from '@/components/BasicExercises'
import RecordsOtherOurQualifications from '@/components/RecordsOtherOurQualifications'
import RecordsRegister from '@/components/RecordsRegister'
import RecordsHero from '@/components/RecordsHero'
import RecordsDescription from '@/components/RecordsDescription'

export default function Records() {
  return (
    <>
      <RecordsHero />
      <RecordsDescription />
      <BasicExercises />
      <RecordsRegister />
      <RecordsOtherOurQualifications />
    </>
  )
}
