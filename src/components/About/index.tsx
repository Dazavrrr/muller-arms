//libs
import React from "react";
import Image from "next/image";
//styles
import styles from './styles.module.scss'

const About = () => {
  return <section className={styles.about}>
  <div className={styles.about_wrapper}>
    <h2 className={styles.about_title}>Про наш клуб</h2>

    <div className={styles.about_info}>
      <div className={styles.about_photos}>
        <Image
          className={styles.about_photo}
          src="/images/about/about-photo1.webp"
          width={500}
          height={300}
          alt="Group of people"
        />
        <Image
          className={styles.about_photo}
          src="/images/about/about-photo2.webp"
          width={500}
          height={300}
          alt="Group of people"
        />
      </div>
      <div className={styles.about_text}>
        <p>СЕРЦЕ НАШОГО КЛУБУ В МІСТІ ІРПІНЬ. ЦЕ ДУЖЕ КОМФОРТНИЙ Й ЯКІСНО ОБЛАДНАНИЙ ТИР. ПРОТЕ МИ НЕ ОБМЕЖУЄМОСЯ ЛИШЕ ТИРОМ. НАШОЮ ОСНОВНОЮ ПЕРЕВАГОЮ Є ГНУЧКІСТЬ Й МОБІЛЬНІСТЬ. МИ ПРАЦЮЄМО НА РІЗНИХ ЛОКАЦІЯХ, В ЗАЛЕЖНОСТІ ВІД ПОТРЕБИ.</p>
        <p>ДЛЯ РОБОТИ ІЗ ПІСТОЛЕТОМ ЧИ ДЛЯ ОЗНАЙОМЧИХ ЗАНЯТЬ ІЗ ПОЧАТКІВЦЯМИ МИ ОБИРАЄМО ТИР, У ВИПАДКУ НАПРАЦЮВАНЬ ЕЛЕМЕНТІВ САМОЗАХИСТУ, ТАКТИКИ ЧИ КОРОТКИХ СПОРТИВНИХ ВПРАВ ПРАЦЮЄМО НА ССК “ПРАКТИКА” В КАПІТАНІВЦІ. РОБОТУ НА ДИСТАНЦІЇ ДО 300 М ДЛЯ БІЛЬШ ДОСВІДЧЕНИХ СТРІЛЬЦІВ ІЗ ГВИНТІВКАМИ ВЕДЕМО НА ССК “СТРІЛОК” В БРОВАРАХ.</p>
        <p>ДЛЯ НАС СТРІЛЬБА — ЦЕ ОКРЕМА КУЛЬТУРА ТА ФІЛОСОФІЯ. ЦЕ ДИСЦИПЛІНА, ВІДДАНІСТЬ ТА НАВИЧКИ, ЯКІ ОБОВʼЯЗКОВО ВСІМ НАМ ЗНАДОБЛЯТЬСЯ У ЖИТТІ.</p>
        <p>НЕЗАЛЕЖНО ВІД ВАШОГО РІВНЯ ВПРАВНОСТІ, НАШІ ТРЕНЕРИ ГОТОВІ ДОПОМОГТИ ВАМ ВДОСКОНАЛЮВАТИ ТЕХНІКУ ТА НАВИЧКИ.</p>

        <a className={styles.about_btn} href="">ЗАПИСАТИСЬ ДО ІНСТРУКТОРА</a>
      </div>
    </div>
    </div>
  </section>
}

export default About