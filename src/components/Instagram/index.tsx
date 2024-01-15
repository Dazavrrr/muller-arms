import React from "react";
import styles from './styles.module.scss'
import Image from "next/image";

const Instagram = () => {
  return <section className={styles.instagram}>
    <h2 className={styles.instagram_title}>НАШ INSTAGRAM</h2>
    
    <div className={styles.instagram_photos}>
      <Image
        className={styles.instagram_photo}
        src="/images/instagram/instagram-photo1.webp"
        width={267}
        height={268}
        alt="inst_photo"
      />
      <Image
        className={styles.instagram_photo}
        src="/images/instagram/instagram-photo2.webp"
        width={267}
        height={268}
        alt="inst_photo"
      />
      <Image
        className={styles.instagram_photo}
        src="/images/instagram/instagram-photo3.webp"
        width={267}
        height={268}
        alt="inst_photo"
      />
      <Image
        className={styles.instagram_photo}
        src="/images/instagram/instagram-photo4.webp"
        width={267}
        height={268}
        alt="inst_photo"
      />
    </div>

    <a className={styles.instagram_btn} href="https://www.instagram.com/mullerarms/">ПЕРЕЙТИ В INSTAGRAM</a>
  </section>
}

export default Instagram