//libs
import React from "react";
import Image from "next/image";
//styles
import styles from './styles.module.scss'
//images
import bg from '../../../public/images/experience/experience-bg.webp'
import bgTop from '../../../public/images/experience/experience-top-bc.webp'

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
  </section>
}

export default Experience