import '@/styles/global.module.scss'
import BasicExercises from '@/components/BasicExercises'
import GunExercises from '@/components/GunExercises'
import RecordsOtherOurQualifications from '@/components/RecordsOtherOurQualifications'
import RecordsRegister from '@/components/RecordsRegister'
import RifleExercises from '@/components/RifleExercises'
import RecordsHero from '@/components/RecordsHero'
import RecordsDescription from '@/components/RecordsDescription'

export default function Records() {
  return (
    <>
      <RecordsHero />
      <RecordsDescription />
      <BasicExercises />
      <RifleExercises />
      <GunExercises />
      <RecordsRegister />
      <RecordsOtherOurQualifications />
    </>
  )
}
