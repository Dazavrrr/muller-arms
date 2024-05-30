//styles
import styles from './styles.module.scss'
//components
import QualificationExperience from '../QualificationExperience'
import QualificationsHero from '../QualificationsHero'
import FAQs from '../FAQs'
import MilitaryDescription from '../MilitaryDescription'

const Qualifications = () => {
  return (
    <div className={styles.section}>
      <QualificationsHero />
      <MilitaryDescription />
      <QualificationExperience />
      <FAQs />
    </div>
  )
}

export default Qualifications
