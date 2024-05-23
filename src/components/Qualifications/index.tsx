//styles
import styles from './styles.module.scss'
//components
import QualificationExperience from '../QualificationExperience'
import QualificationsHero from '../QualificationsHero'
import ShooterClasses from '../ShooterClassses'
import Briefing from '../Briefing'

const Qualifications = () => {
  return (
    <div className={styles.section}>
      <QualificationsHero />
      <QualificationExperience />
      <ShooterClasses />
      <Briefing />
    </div>
  )
}

export default Qualifications
