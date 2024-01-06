import React from "react";
import styles from './styles.module.scss'
import Image from "next/image";
import Instagram_Photo1 from 'public/images/Instagram_Photo1.png'
import Instagram_Photo2 from 'public/images/Instagram_Photo2.png'
import Instagram_Photo3 from 'public/images/Instagram_Photo3.jpg'
import Instagram_Photo4 from 'public/images/Instagram_Photo4.png'

const Instagram = () => {
  return <div className={styles.instagram}>
    <h1 className={styles.instagram_title}>НАШ INSTAGRAM</h1>
    
    <div className={styles.instagram_photos}>
      <Image
        className={styles.instagram_photo}
        src={Instagram_Photo1}
        width={267}
        height={268}
        alt="inst_photo"
      />
      <Image
        className={styles.instagram_photo}
        src={Instagram_Photo2}
        width={267}
        height={268}
        alt="inst_photo"
      />
      <Image
        className={styles.instagram_photo}
        src={Instagram_Photo3}
        width={267}
        height={268}
        alt="inst_photo"
      />
      <Image
        className={styles.instagram_photo}
        src={Instagram_Photo4}
        width={267}
        height={268}
        alt="inst_photo"
      />
    </div>

    <a className={styles.instagram_btn} href="https://www.instagram.com/mullerarms/">ПЕРЕЙТИ В INSTAGRAM</a>
  </div>
}

export default Instagram