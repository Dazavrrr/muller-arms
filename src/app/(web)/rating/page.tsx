import '@/styles/global.module.scss'
import RecordsOtherOurQualifications from '@/components/RecordsOtherOurQualifications'
import ThreePositionExercise from '@/components/ThreePositionExercise'
import RatingHero from '@/components/RatingHero'
import RatingDescription from '@/components/RatingDescription'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кваліфікація / Рейтинг Спортсменів Клубу',
  description:
    'Дана кваліфікація складіється лише із однієї вправи середньої складності та показує загальний рейтинг й рівень усіх стрільців нашого клубу. Це по суті головний рекорд клубу, який визначає кращих спортсменів для формування команд в регіональних чемпіонатах та кубках, чемпіонатах та кубках України а також для прийняття участі в заходах за кордоном.',
}

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
