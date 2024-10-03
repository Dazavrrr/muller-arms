//components
import MilitaryHero from '../MilitaryHero'
import MilitaryDescription from '../MilitaryDescription'
import ShooterClasses from '../ShooterClassses'
import OurSetOfExercises from '../OurSetOfExercises'
import Briefing from '../Briefing'
import Standings from '../Standings'
import OtherOurQualifications from '../MilitaryOtherOurQualifications'

const Military = () => {
  return (
    <section>
      <MilitaryHero />
      <MilitaryDescription />
      <ShooterClasses />
      <OurSetOfExercises />
      <Briefing />
      <Standings />
      <OtherOurQualifications />
    </section>
  )
}

export default Military
