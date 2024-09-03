//hooks
import { useAppSelector } from '@/store/hooks'
//styles
import styles from './styles.module.scss'
//components
import AnnouncementsCard from '../AnnouncementsCard'

const AnnouncementsContent = () => {
  const announcements = useAppSelector((state) => state.Articles.announcements)

  return (
    <>
      {!!announcements && !!announcements.items.length && (
        <div className={styles.section}>
          <AnnouncementsCard card={announcements.items[0]} />
          <AnnouncementsCard card={announcements.items[1]} />
        </div>
      )}
    </>
  )
}

export default AnnouncementsContent
