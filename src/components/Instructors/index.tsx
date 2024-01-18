//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'

const Instructors = () => {
  return <section className={styles.instructors} id={"instructors"}>
    <div>
      <h2 className={styles.instructors_title}>Наші ТРЕНЕРИ</h2>
      <p className={styles.instructors_subtitle}>РУШІЙНОЮ СИЛОЮ НАШОГО КЛУБУ Є ВЕДУЧІ ТРЕНЕРИ, ЯКІ ДОПОМОЖУТЬ ВАМ
        ВДОСКОНАЛИТИ ВАШУ ТЕХНІКУ ТА НАВИЧКИ</p>
    </div>

    <div className={styles.instructors_cards}>
      <div className={styles.instructors_card}>
        <Image
          className={styles.instructors_photos}
          src="/images/instructors/instructor-muller.webp"
          alt="Instructor Muller"
          width={480}
          height={340}
        />

        <div className={styles.instructors_info}>
          <div className={styles.instructors_infoContent}>
            <a
              href="https://www.instagram.com/instructor_muller/"
              className={styles.instructors_infoTitle}>
              Олександр Мельник {`\n`}
              <span className={styles.orange}>“instructor_Muller”</span>
            </a>
            <p className={styles.instructors_infoText}>
              ПОЧАВ СВІЙ ШЛЯХ ЩЕ В 2006 РОЦІ ЗАСВОЮЮЧИ СТАРЕНЬКИЙ ПМ, ПОТІМ СЛУЖБА В СПЕЦ ПІДРОЗДІЛІ, ДЕРЖАВНІЙ ТА
              ПРИВАТНИХ СЛУЖБАХ БЕЗПЕКИ, ЗАВЖДИ СУПРОВОДЖУВАЛАСЬ СПЕЦІАЛЬНОЮ СТРІЛЕЦЬКОЮ ПІДГОТОВКОЮ. СЕРТИФІКОВАНИЙ
              СУДДЯ (RANGE OFFICER) ТА ІНСТРУКТОР IPSC. НЕОДНОРАЗОВИЙ ПРИЗЕР ЗМАГАНЬ З ТАКТИКО-ПРИКЛАДНОЇ, ПРАКТИЧНОЇ
              СТРІЛЬБИ ТА В ДИСЦИПЛІНІ FIT&SHOOTING. З 24 ЛЮТОГО ПО 20 БЕРЕЗНЯ ПРИЙМАВ УЧАСТЬ В ОБОРОНІ КИЇВЩИНИ, У
              СКЛАДІ ГРУПИ ДОБРОВОЛЬЦІВ ЗАБЕЗПЕЧУВАВ БЕЗПЕКУ БАТАРЕЇ РСЗО. 20 БЕРЕЗНЯ ОТРИМАВ ВАЖКЕ ПОРАНЕННЯ ТА ПІСЛЯ
              ТРИВАЛОЇ РЕАБІЛІТАЦІЇ ПОВЕРНУВСЯ ДО ІНСТРУКТОРСЬКОЇ ДІЯЛЬНОСТІ.
            </p>
          </div>

          <a className={styles.instructors_btn} href="">Записатись до інструктора</a>
        </div>
      </div>

      <div className={styles.instructors_card}>
        <Image
          className={styles.instructors_photos}
          src="/images/instructors/instructor-chizh.webp"
          alt="Instructor Chizh"
          width={480}
          height={340}
        />

        <div className={styles.instructors_info}>
          <div className={styles.instructors_infoContent}>
            <a
              href="https://www.instagram.com/pozyvniy_chizh/"
              className={styles.instructors_infoTitle}>
              Олександр Чиж {`\n`}
              <span className={styles.orange}>“pozyvniy_chizh”</span>
            </a>

            <p className={styles.instructors_infoText}>
              ОЛЕКСАНДР МАЄ ВЕЛИКИЙ ДОСВІД РОБОТИ В СФЕРІ ФІЗИЧНОЇ БЕЗПЕКИ, ДОСВІД ПРАКТИЧНОГО ВИКОРИСТАННЯ ЗБРОЇ БІЛЬШЕ
              11 РОКІВ. МАЄ ВІЙСЬКОВИЙ ДОСВІД БІЛЬШЕ 8 РОКІВ. ПРАЦЮЄ З ВІЙСЬКОВИМИ ПІДРОЗДІЛАМИ, МАЄ ДОСВІД ТА
              ВІДПОВІДНІ
              СЕРТИФІКАТИ ПРОХОДЖЕННЯ ДОМЕДИЧНОЇ ПІДГОТОВКИ. РОБОТА З ОЛЕКСАНДРОМ - ЦЕ ЗАВЖДИ ЗМІСТОВНО, ЦІКАВО, ВІН НЕ
              ДАЄ МОЖЛИВОСТІ ПРОЯВЛЯТИ СЛАБКІСТЬ ТА ПОЄДНУЄ ПРАКТИЧНУ, ТАКТИКО - ПРИКЛАДНУ СТРІЛЬБУ ІЗ ФІЗИЧНИМИ
              НАВАНТАЖЕННЯМИ
            </p>
          </div>
          <a className={styles.instructors_btn} href="">Записатись до інструктора</a>
        </div>
      </div>
    </div>
  </section>
}

export default Instructors