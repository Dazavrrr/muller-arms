import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import Archive from '@/components/Archive'
import { Article } from '@/models/article'
import '@/styles/global.module.scss'

export default async function ArchivePage() {
  const { data } = await getData<Article[]>(ApiPath.ARCHIVE)
  return (
    <>
      <Archive data={data || []} />
    </>
  )
}
