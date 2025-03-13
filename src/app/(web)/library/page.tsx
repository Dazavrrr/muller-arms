import '@/styles/globals.scss'
import LibraryComponent from '@/components/LibraryComponent'
import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import { Library as ILibrary } from '@/models/library'

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
