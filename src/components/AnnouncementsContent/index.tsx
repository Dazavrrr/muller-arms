//styles
import styles from './styles.module.scss'
//components
import AnnouncementsCard from '../AnnouncementsCard'

import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import { Announce } from '@/models/announce'

const AnnouncementsContent = async () => {
  const { data: announcements } = await getData<Announce[]>(ApiPath.ANNOUNCE)

  return (
    <>
      {!!announcements?.length && (
        <div className={styles.section}>
          {announcements.slice(0, 2).map((item) => (
            <AnnouncementsCard key={item.id} card={item} />
          ))}
        </div>
      )}
    </>
  )
}

export default AnnouncementsContent
