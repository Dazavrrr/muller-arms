//libs
import React from "react";
import Image from "next/image";
//styles
import styles from './styles.module.scss'
//images
import bg from '../../../public/images/experience/experience-bg.webp'
import bgMob from '../../../public/images/experience/experience-mob-bg.webp'
import bgTop from '../../../public/images/experience/experience-top-bc.webp'
import bgBottom from '../../../public/images/experience/experience-bottom-bc.webp'


const Experience = () => {
  return <section className={styles.experience}>
      <Image
        className={styles.experience_bg}
        src={bg}
        placeholder={'blur'}
        alt="MullerArms Photo"
    />
      <Image
        className={styles.experience_bg_top}
        src={bgTop}
        placeholder={'blur'}
        alt="MullerArms Photo"
    />
    <Image
        className={styles.experience_bg_bottom}
        src={bgBottom}
        placeholder={'blur'}
        alt="MullerArms Photo"
    />
    <Image
      className={styles.experience_bg_mob}
      src={bgMob}
      placeholder={'blur'}
      alt="MullerArms Photo"
    />
  </section>
}

export default Experience