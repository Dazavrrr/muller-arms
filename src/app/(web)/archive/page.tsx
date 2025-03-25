import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import Archive from '@/components/Archive'
import { Article } from '@/models/article'
import '@/styles/global.module.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Архів "MullerArms"',
  description:
    'Взаємодія та спільний результат – головні цінності клубу. Це проявляється не лише у спортивних досягненнях на змаганнях зі стрільби, а й у наших інших активностях. MullerArms – це велика родина, де допомога та увага один до одного є принципом. У нас знаходять друзів, партнерів по бізнесу, нові захоплення та ідеї.',
}

export default async function ArchivePage() {
  const { data } = await getData<Article[]>(ApiPath.ARCHIVE)
  return (
    <>
      <Archive data={data || []} />
    </>
  )
}
