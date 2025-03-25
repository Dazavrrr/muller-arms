import '@/styles/globals.scss'
import Briefing from '@/components/Briefing'
import MilitaryDescription from '@/components/MilitaryDescription'
import MilitaryHero from '@/components/MilitaryHero'
import OtherOurQualifications from '@/components/MilitaryOtherOurQualifications'
import OurSetOfExercises from '@/components/OurSetOfExercises'
import ShooterClasses from '@/components/ShooterClassses'
import Standings from '@/components/Standings'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Мілітарі Класифікація',
  description:
    'Класифікація це фіксований і стандартизований комплекс вправ з карабіну, який усі бажаючі можуть прострілювати із певною періодичнстю, та спостерігати за власною прогресією чи навпаки, виявляти, аналізувати та опрацьовувати помилки.',
}

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
