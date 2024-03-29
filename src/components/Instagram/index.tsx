//libs
import React from "react";
import Image from "next/image";
//styles
import styles from './styles.module.scss'
//images
import photo1 from '../../../public/images/instagram/instagram-photo1.webp'
import photo2 from '../../../public/images/instagram/instagram-photo2.webp'
import photo3 from '../../../public/images/instagram/instagram-photo3.webp'
import photo4 from '../../../public/images/instagram/instagram-photo4.webp'

const Instagram = () => {
  return <section className={styles.instagram}>
    <div className={styles.instagram_wrapper}>
      <h2 className={styles.instagram_title}>НАШ INSTAGRAM</h2>
    
    <div className={styles.instagram_photos}>
      <Image
        className={styles.instagram_photo}
        src={photo1}
        width={267}
        height={268}
        placeholder={'blur'}
        alt="Muller Arms Instagram Photo"
      />
      <Image
        className={styles.instagram_photo}
        src={photo2}
        width={279}
        height={270}
        placeholder={'blur'}
        alt="Muller Arms Instagram Photo"
      />
      <Image
        className={styles.instagram_photo}
        src={photo3}
        width={279}
        height={270}
        placeholder={'blur'}
        alt="Muller Arms Instagram Photo"
      />
      <Image
        className={styles.instagram_photo}
        src={photo4}
        width={279}
        height={270}
        placeholder={'blur'}
        alt="Muller Arms Instagram Photo"
      />
    </div>

    <a className={styles.instagram_btn} href="https://www.instagram.com/mullerarms/">ПЕРЕЙТИ В INSTAGRAM</a>
    </div>
  </section>
}

export default Instagram