//libs
import React from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import base from '../../../public/images/services/services-photo1.webp'
import group from '../../../public/images/services/services-photo2.webp'
import individual from '../../../public/images/services/services-photo3.webp'
import course from '../../../public/images/services/services-photo4.webp'

const Services = () => {
  const trainings = [
    {
      image: base,
      trainingName: 'Базове тренування з автоматом',
      mainText: 'РОБОТА ІЗ АВТОМАТОМ/КАРАБІНОМ В СКЛАДІ ГРУПИ 6-10 ЛЮДЕЙ\n' +
        '\n' +
        'ТРЕНУВАННЯ ДУЖЕ НАСИЧЕНЕ Й ЗМІСТОВНЕ, РОЗРАХОВАНЕ НА НОВАЧКІВ, ЛЮДЕЙ ЯКІ НЕ МАЮТЬ ВЛАСНОЇ ЗБРОЇ, ПРОТЕ ХОЧУТЬ ЗДОБУТИ ПЕРШИЙ ДОСВІД. МОЖЛИВІСТЬ ОВОЛОДІТИ СТРІЛЕЦЬКИМИ НАВИЧКАМИ ТЕПЕР ДОСТУПНА ДЛЯ ВСІХ.',
      price: '1 400 грн',
    },
    {
      image: group,
      trainingName: 'Групові тренування',
      mainText: 'ТРЕНУВАННЯ ПРОХОДЯТЬ В ДВОХ ФОРМАТАХ: «МІЛІТАРІ» ТА «СПОРТ» ' +
        'ПРИЗНАЧЕНЕ ДЛЯ СТРІЛЬЦІВ, ЯКІ' +
        ' СИСТЕМАТИЧНО ПРАКТИКУЮТЬ І ПРАГНУТЬ ДО ПОСТІЙНОГО ПОКРАЩЕННЯ СВОГО РІВНЯ МАЙСТЕРНОСТІ. УЧАСНИКИ ЦИХ ТРЕНУВАНЬ ПРАЦЮЮТЬ НАД СВОЇМИ НАВИЧКАМИ З ВЕЛИКОЮ ВІДДАНІСТЮ, ВКЛАДАЮЧИ В ЦЕЙ ПРОЦЕС УСЮ СВОЮ СИЛУ ТА ЕНЕРГІЮ' +
        'ЯКЩО ЦЕЙ ОПИС ПРО ВАС — ЗАПИСУЙТЕСЬ НА ТРЕНУВАННЯ',
      price: '1 500 грн',
      weapons: ['FOrt 12, fort 14, fort 18', 'АКМ 7.62*39', 'AR-15 223rem', 'Mossberg 500 12 cal', 'Savage cal 22lr'],
    },
    {
      image: individual,
      trainingName: 'Індивідуальні тренування',
      mainText: 'НА ПОЧАТКУ ВАШОГО НАВЧАННЯ ІНДИВІДУАЛЬНІ ТРЕНУВАННЯ НАЙЕФЕКТИВНІШИЙ ФОРМАТ\n' +
        'ОСОБИСТИЙ ПІДХІД\n' +
        'ТРЕНЕР НЕ ПЕРЕХОДИТЬ ДО НАСТУПНОЇ ТЕМИ, ЯКЩО ПОПЕРЕДНЯ НЕДОСТАТНЬО ЗАСВОЄНА\n' +
        'ПЕРСОНАЛЬНА ПРОГРАМА\n' +
        'ПРОГРАМА БУДУЄТЬСЯ ЗВАЖАЮЧИ НА ВАШІ ВМІННЯ ТА ЦІЛІ\n' +
        'НАЙВИЩА ЕФЕКТИВНІСТЬ\n' +
        '‍ТРЕНЕР ФОКУСУЄТЬСЯ ЛИШЕ НА ВАС ТОМУ ПРОГРЕС У НАВИЧКАХ БУДЕ ЗНАЧНО ШВИДШИМ, НІЖ ПІД ЧАС ГРУПОВИХ ЗАНЯТЬ\n' +
        'ВИ МОЖЕТЕ ОБРАТИ ЗРУЧНИЙ ДЛЯ ВАС ЧАС ТА МІСЦЕ ДЛЯ ЗАНЯТЬ',
      price: '1 500 грн',
      weapons: ['FOrt 12, fort 14, fort 18', 'АКМ 7.62*39', 'AR-15 223rem', 'Mossberg 500 12 cal', 'Savage cal 22lr'],
    },
    {
      image: course,
      trainingName: 'Курс майбутнього бійця',
      mainText: 'КМБ СКЛАДАЄТЬСЯ З 3 МОДУЛІВ, ЯКІ ВМІЩУЮТЬ В СОБІ ТЕОРІЮ ТА ПРАКТИЧНІ ВПРАВИ:\n' +
        '\n' +
        '1. ДОГЛЯД ЗА ЗБРОЄЮ\n' +
        '2. БЕЗПЕЧНЕ ПОВОДЖЕННЯ ЗІ ЗБРОЄЮ\n' +
        '3. СТРІЛЬБА З РІЗНИХ ПОЛОЖЕНЬ\n' +
        '4. ПЕРЕМІЩЕННЯ ЗІ ЗБРОЄЮ\n' +
        '5. ОГЛЯД ЕКІПІРУВАННЯ\n' +
        'КОЖЕН МОДУЛЬ ПРОВОДИТЬСЯ НА ІНШІЙ ЛОКАЦІЇ. ЦЕ ДАЄ МОЖЛИВІСТЬ ПРОПРАЦЮВАТИ ПОВНИЙ СПЕКТР ЕЛЕМЕНТІВ БАЗОВОГО РІВНЯ В РІЗНИХ УМОВАХ ТА НА РІЗНИХ ДИСТАНЦІЯХ.\n' +
        'ПО ЗАКІНЧЕННІ КУРСУ ВИ ОТРИМАЄТЕ:\n' +
        '\n' +
        '1. СЕРТИФІКАТ ПРО УСПІШНЕ ЗАВЕРШЕННЯ КУРСУ\n' +
        '2. МЕТОДИЧКУ-ПАМʼЯТКУ\n' +
        '3. ДОВІДКУ ПРО ВОЛОДІННЯ ЗБРОЄЮ (ЗА ДОДАТКОВУ ПЛАТУ)',
      price: '9 900 грн',
      weapons: ['FOrt 12, fort 14, fort 18', 'АКМ 7.62*39', 'AR-15 223rem', 'Mossberg 500 12 cal', 'Savage cal 22lr'],
    },
  ]

  return (
    <section className={styles.services}>
      <h2 className={styles.services_title}>Наші послуги</h2>
      <p className={styles.services_text}>
        Навчайтесь та здобувайте безцінний досвід зі стрільби
      </p>

      <div className={styles.services_cards}>
        {trainings.map(({ image, trainingName, weapons, price }, index) => (
          <div className={styles.services_card}>
            <div className={styles.services_photo}>
              <Image
                className={styles.services_image}
                src={image}
                alt={trainingName}
                width={267}
                height={200}
              />
            </div>
            <div className={styles.services_info}>
              <h3 className={styles.services_infoTitle}>
                {trainingName}
              </h3>
              <div className={styles.services_infoPrice}>
                <p>ВАРТІСТЬ:</p>
                <p className={styles.services_infoPriceOrange}>{price}</p>
              </div>
              <div className={styles.services_infoBtn}>
                <a className={styles.services_btn} href="">ДІЗНАТИСЬ БІЛЬШЕ</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
