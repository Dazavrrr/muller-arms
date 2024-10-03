//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import photos from '../../../public/images/about/about-photos.webp'
import Link from 'next/link'


const About = () => {
  return <section className={styles.about} id={"aboutUs"}>
    <div className={styles.about_wrapper}>

      <div className={styles.about_info}>
        <div className={styles.about_text}>
          <h2 className={styles.about_title}>Про наш клуб</h2>
          
          <div className={styles.about_photos_mob}>
            <Image
              className={styles.about_photo}
              src={photos}
              placeholder={'blur'}
              alt="Group of people"
              width={536}
              height={567}
            />
        </div>

          <p>СЕРЦЕ НАШОГО КЛУБУ В МІСТІ ІРПІНЬ. ЦЕ ДУЖЕ КОМФОРТНИЙ Й ЯКІСНО ОБЛАДНАНИЙ ТИР. ПРОТЕ МИ НЕ ОБМЕЖУЄМОСЯ ЛИШЕ
            ТИРОМ. НАШОЮ ОСНОВНОЮ ПЕРЕВАГОЮ Є ГНУЧКІСТЬ Й МОБІЛЬНІСТЬ. МИ ПРАЦЮЄМО НА РІЗНИХ ЛОКАЦІЯХ, В ЗАЛЕЖНОСТІ ВІД
            ПОТРЕБИ.</p>
          <p>ДЛЯ РОБОТИ ІЗ ПІСТОЛЕТОМ ЧИ ДЛЯ ОЗНАЙОМЧИХ ЗАНЯТЬ ІЗ ПОЧАТКІВЦЯМИ МИ ОБИРАЄМО ТИР, У ВИПАДКУ НАПРАЦЮВАНЬ
            ЕЛЕМЕНТІВ САМОЗАХИСТУ, ТАКТИКИ ЧИ КОРОТКИХ СПОРТИВНИХ ВПРАВ ПРАЦЮЄМО НА ССК “ПРАКТИКА” В КАПІТАНІВЦІ. РОБОТУ
            НА ДИСТАНЦІЇ ДО 300 М ДЛЯ БІЛЬШ ДОСВІДЧЕНИХ СТРІЛЬЦІВ ІЗ ГВИНТІВКАМИ ВЕДЕМО НА ССК “СТРІЛОК” В БРОВАРАХ.</p>
          <p>ДЛЯ НАС СТРІЛЬБА — ЦЕ ОКРЕМА КУЛЬТУРА ТА ФІЛОСОФІЯ. ЦЕ ДИСЦИПЛІНА, ВІДДАНІСТЬ ТА НАВИЧКИ, ЯКІ ОБОВʼЯЗКОВО
            ВСІМ НАМ ЗНАДОБЛЯТЬСЯ У ЖИТТІ.</p>
          <p>НЕЗАЛЕЖНО ВІД ВАШОГО РІВНЯ ВПРАВНОСТІ, НАШІ ТРЕНЕРИ ГОТОВІ ДОПОМОГТИ ВАМ ВДОСКОНАЛЮВАТИ ТЕХНІКУ ТА
            НАВИЧКИ.</p>
          <Link className={styles.about_btn} href="/booking">ЗАПИСАТИСЬ ДО ІНСТРУКТОРА</Link>
        </div>

        <div className={styles.about_photos}>
            <Image
              className={styles.about_photo}
              src={photos}
              placeholder={'blur'}
              alt="Group of people"
              width={536}
              height={567}
            />
        </div>
      </div>
    </div>
  </section>
}

export default About