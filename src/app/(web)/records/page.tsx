import '@/styles/global.module.scss'
import BasicExercises from '@/components/BasicExercises'
import RecordsOtherOurQualifications from '@/components/RecordsOtherOurQualifications'
import RecordsRegister from '@/components/RecordsRegister'
import RecordsHero from '@/components/RecordsHero'
import RecordsDescription from '@/components/RecordsDescription'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Рекорди Клубу - MullerArms',
  description:
    'Рекорди клубу це короткі й відносно нескладні вправи, які стрільці клубу виконують із певною перідочністю та мають можливість встановити власний рекорд. Такі вправи не мають чіткого спортивного чи прикладного забарвлення, вони суто базові, загальнотренувальні. Кожен стрілець має три спроби на виконання вправи, кращий результат вноситься в таблицю.',
}

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
