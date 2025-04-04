import '@/styles/globals.scss'
import LibraryComponent from '@/components/LibraryComponent'
import { Metadata } from 'next'
import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import { Library as ILibrary } from '@/models/library'

export const metadata: Metadata = {
  title: 'Бібліотека "MullerArms"',
  description:
    'Вправи мілітарі класифікації включають усі основні елементи, якими має володіти стрілець. Після проходження класифікації стрілець може проаналізувати свої найслабші сторони та побудувати відповідний план тренувань. Запрошуємо вас приєднатися до нашого навчального процесу та отримати цінний досвід для подальшого успішного розвитку.',
}

export default async function Library() {
  const { data } = await getData<ILibrary>(`${ApiPath.LIBRARY}?ordering=rec`)

  return (
    <>
      <LibraryComponent
        initialDocs={data?.items || []}
        categories={data?.categories || []}
      />
    </>
  )
}
