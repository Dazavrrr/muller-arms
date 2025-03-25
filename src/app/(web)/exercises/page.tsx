import Exercises from '@/components/Exercises'
import '@/styles/globals.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Вправи - Класифікація зі стрільби із карабіну / гвинтівки',
  description:
    'Вправи мілітарі класифікації включають усі основні елементи, якими має володіти стрілець. Після проходження класифікації стрілець може проаналізувати свої найслабші сторони та побудувати відповідний план тренувань. Запрошуємо вас приєднатися до нашого навчального процесу та отримати цінний досвід для подальшого успішного розвитку.',
}

export default function ExercisesPage() {
  return (
    <>
      <Exercises />
    </>
  )
}
