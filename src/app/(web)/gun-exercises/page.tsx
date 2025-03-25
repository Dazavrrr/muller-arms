import GunExercises from '@/components/GunExercises'
import '@/styles/global.module.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Завдання з Пістолету "MullerArms"',
  description:
    'Ми маємо 5 базових вправ з пістолету, які ви можете вибрати на свій погляд і ви матимете 3 спроби на виконання вправи. Кращий результат записується в таблицю.',
}

export default function GunExercisesPage() {
  return (
    <>
      <GunExercises />
    </>
  )
}
