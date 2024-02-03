//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import photo1 from '../../../public/images/about/about-photo1.webp'
import photo2 from '../../../public/images/about/about-photo2.webp'
import photo3 from '../../../public/images/about/about-photo3.webp'


const About = () => {
  return <section className={styles.about} id={"aboutUs"}>
    <div className={styles.about_wrapper}>

      <div className={styles.about_info}>
        <div className={styles.about_text}>
          <h2 className={styles.about_title}>Про наш клуб</h2>
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
          <a className={styles.about_btn} href="">ЗАПИСАТИСЬ ДО ІНСТРУКТОРА</a>
        </div>

        <div className={styles.about_photos}>
          <div className={styles.about_photosFlex}>
            <Image
            className={styles.about_photo}
            src={photo1}
            placeholder={'blur'}
            alt="Group of people"
            width={358}
            height={255}
            
            />
            <Image
            className={styles.about_photo}
            src={photo3}
            placeholder={'blur'}
            alt="Group of people"
            width={158}
            height={351}
            />
          </div>
          <Image
            className={styles.about_photo}
            src={photo2}
            placeholder={'blur'}
            alt="Group of people"
            width={536}
            height={292}
          />
        </div>
      </div>
    </div>
  </section>
}

export default About