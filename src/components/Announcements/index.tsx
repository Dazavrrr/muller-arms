//styles
import styles from './styles.module.scss'
//components
import AnnouncementsHero from '../AnnouncementsHero'

const Announcements = () => {
  return (
    <div className={styles.section}>
      <AnnouncementsHero />
    </div>
  )
}

export default Announcements
