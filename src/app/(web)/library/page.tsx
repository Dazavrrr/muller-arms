import '@/styles/globals.scss'
import LibraryComponent from '@/components/LibraryComponent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Бібліотека "MullerArms"',
  description:
    'Вправи мілітарі класифікації включають усі основні елементи, якими має володіти стрілець. Після проходження класифікації стрілець може проаналізувати свої найслабші сторони та побудувати відповідний план тренувань. Запрошуємо вас приєднатися до нашого навчального процесу та отримати цінний досвід для подальшого успішного розвитку.',
}

export default function Library() {
  return (
    <>
      <LibraryComponent />
    </>
  )
}
