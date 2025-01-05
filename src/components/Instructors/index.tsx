//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'

const Instructors = () => {
  return (
    <section className={styles.instructors} id={'instructors'}>
      <div className={styles.instructors_wrapper}>
        <h2 className={styles.instructors_title}>Наші ТРЕНЕРИ</h2>
        <p className={styles.instructors_subtitle}>
          Ведучі вас до майстерності: Досвід, Професіоналізм та Дружня Підтримка
          в Навчанні зі Стрільб
        </p>

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
                <div className={styles.instructors_infoTitle}>
                  <a
                    href="https://www.instagram.com/instructor_muller/"
                    className={styles.instructors_info_inst}
                  >
                    instructor_Muller
                  </a>
                  <p className={styles.instructors_info_name}>
                    Олександр Мельник
                  </p>
                </div>

                <p className={styles.instructors_infoText}>
                  ПОЧАВ СВІЙ ШЛЯХ ЩЕ В 2006 РОЦІ ЗАСВОЮЮЧИ СТАРЕНЬКИЙ ПМ, ПОТІМ
                  СЛУЖБА В СПЕЦ ПІДРОЗДІЛІ, ДЕРЖАВНІЙ ТА ПРИВАТНИХ СЛУЖБАХ
                  БЕЗПЕКИ, ЗАВЖДИ СУПРОВОДЖУВАЛАСЬ СПЕЦІАЛЬНОЮ СТРІЛЕЦЬКОЮ
                  ПІДГОТОВКОЮ. СЕРТИФІКОВАНИЙ СУДДЯ (RANGE OFFICER) ТА
                  ІНСТРУКТОР IPSC. НЕОДНОРАЗОВИЙ ПРИЗЕР ЗМАГАНЬ З
                  ТАКТИКО-ПРИКЛАДНОЇ, ПРАКТИЧНОЇ СТРІЛЬБИ ТА В ДИСЦИПЛІНІ
                  FIT&SHOOTING. З 24 ЛЮТОГО ПО 20 БЕРЕЗНЯ ПРИЙМАВ УЧАСТЬ В
                  ОБОРОНІ КИЇВЩИНИ, У СКЛАДІ ГРУПИ ДОБРОВОЛЬЦІВ ЗАБЕЗПЕЧУВАВ
                  БЕЗПЕКУ БАТАРЕЇ РСЗО. 20 БЕРЕЗНЯ ОТРИМАВ ВАЖКЕ ПОРАНЕННЯ ТА
                  ПІСЛЯ ТРИВАЛОЇ РЕАБІЛІТАЦІЇ ПОВЕРНУВСЯ ДО ІНСТРУКТОРСЬКОЇ
                  ДІЯЛЬНОСТІ.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.instructors_line}></div>

          <div className={styles.instructors_card_bottom}>
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
                  <div className={styles.instructors_infoTitle}>
                    <a
                      href="https://www.instagram.com/pozyvniy_chizh/"
                      className={styles.instructors_info_inst}
                    >
                      pozyvniy_chizh
                    </a>
                    <p className={styles.instructors_info_name}>
                      Олександр Чиж
                    </p>
                  </div>
                  <p className={styles.instructors_infoText}>
                    ОЛЕКСАНДР МАЄ ВЕЛИКИЙ ДОСВІД РОБОТИ В СФЕРІ ФІЗИЧНОЇ
                    БЕЗПЕКИ, ДОСВІД ПРАКТИЧНОГО ВИКОРИСТАННЯ ЗБРОЇ БІЛЬШЕ 11
                    РОКІВ. МАЄ ВІЙСЬКОВИЙ ДОСВІД БІЛЬШЕ 8 РОКІВ. ПРАЦЮЄ З
                    ВІЙСЬКОВИМИ ПІДРОЗДІЛАМИ, МАЄ ДОСВІД ТА ВІДПОВІДНІ
                    СЕРТИФІКАТИ ПРОХОДЖЕННЯ ДОМЕДИЧНОЇ ПІДГОТОВКИ. РОБОТА З
                    ОЛЕКСАНДРОМ - ЦЕ ЗАВЖДИ ЗМІСТОВНО, ЦІКАВО, ВІН НЕ ДАЄ
                    МОЖЛИВОСТІ ПРОЯВЛЯТИ СЛАБКІСТЬ ТА ПОЄДНУЄ ПРАКТИЧНУ, ТАКТИКО
                    - ПРИКЛАДНУ СТРІЛЬБУ ІЗ ФІЗИЧНИМИ НАВАНТАЖЕННЯМИ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instructors
