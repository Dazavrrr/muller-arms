import RifleExercises from '@/components/RifleExercises'
import '@/styles/global.module.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Завдання з Карабіну "MullerArms"',
  description:
    'Ми маємо 5 базових вправ з карабіну, які ви можете вибрати на свій погляд і ви матимете 3 спроби на виконання вправи. Кращий результат записується в таблицю.',
}

export default function RifleExercisesPage() {
  return (
    <>
      <RifleExercises />
    </>
  )
}
