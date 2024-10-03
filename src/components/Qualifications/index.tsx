//styles
import styles from './styles.module.scss'
//components
import QualificationExperience from '../QualificationExperience'
import QualificationsHero from '../QualificationsHero'
import FAQs from '../FAQs'
import QualificationsDescription from '../QualificationsDescription'

const Qualifications = () => {
  return (
    <div className={styles.section}>
      <QualificationsHero />
      <QualificationsDescription />
      <QualificationExperience />
      <FAQs />
    </div>
  )
}

export default Qualifications
