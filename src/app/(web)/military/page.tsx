import '@/styles/globals.scss'
import Briefing from '@/components/Briefing'
import MilitaryDescription from '@/components/MilitaryDescription'
import MilitaryHero from '@/components/MilitaryHero'
import OtherOurQualifications from '@/components/MilitaryOtherOurQualifications'
import OurSetOfExercises from '@/components/OurSetOfExercises'
import ShooterClasses from '@/components/ShooterClassses'
import Standings from '@/components/Standings'

export default function Military() {
  return (
    <>
      <MilitaryHero />
      <MilitaryDescription />
      <ShooterClasses />
      <OurSetOfExercises />
      <Briefing />
      <Standings />
      <OtherOurQualifications />
    </>
  )
}
