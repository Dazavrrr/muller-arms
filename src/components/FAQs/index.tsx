'use client'
//libs
import { useState } from 'react'
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
//images
import plus from '../../../public/icons/accordion/accordion-plus.svg'
import minus from '../../../public/icons/accordion/accordion-minus.svg'
import logo from '../../../public/icons/muller-arms-logo.svg'
import bgBottom from '../../../public/images/instagram/instagram-bg-bottom.webp'

const questions = [
  {
    question: 'КОЛИ БУДУТЬ ПРОХОДИТИ МІЛІТАРІ КЛАСИФІКАЦІЯ',
    answer:
      'ПРО ЦЮ НОВИНУ МИ ПОВІДОМЛЯЄМО В НАШИХ АНОНСАХ, ТАКОЖ ВИ МОЖЕТЕ ЗАЛИШИТИ ВАШІ КОНТАКТНІ ДАНІ, І МИ ЗВ’ЯЖЕМОСЯ З ВАМИ І ПОВІДОМИМО ВАМ',
  },
  {
    question: 'КОЛИ БУДУТЬ ПРОХОДИТИ МІЛІТАРІ КЛАСИФІКАЦІЯ',
    answer:
      'ПРО ЦЮ НОВИНУ МИ ПОВІДОМЛЯЄМО В НАШИХ АНОНСАХ, ТАКОЖ ВИ МОЖЕТЕ ЗАЛИШИТИ ВАШІ КОНТАКТНІ ДАНІ, І МИ ЗВ’ЯЖЕМОСЯ З ВАМИ І ПОВІДОМИМО ВАМ',
  },
  {
    question: 'КОЛИ БУДУТЬ ПРОХОДИТИ МІЛІТАРІ КЛАСИФІКАЦІЯ',
    answer:
      'ПРО ЦЮ НОВИНУ МИ ПОВІДОМЛЯЄМО В НАШИХ АНОНСАХ, ТАКОЖ ВИ МОЖЕТЕ ЗАЛИШИТИ ВАШІ КОНТАКТНІ ДАНІ, І МИ ЗВ’ЯЖЕМОСЯ З ВАМИ І ПОВІДОМИМО ВАМ',
  },
  {
    question: 'КОЛИ БУДУТЬ ПРОХОДИТИ МІЛІТАРІ КЛАСИФІКАЦІЯ',
    answer:
      'ПРО ЦЮ НОВИНУ МИ ПОВІДОМЛЯЄМО В НАШИХ АНОНСАХ, ТАКОЖ ВИ МОЖЕТЕ ЗАЛИШИТИ ВАШІ КОНТАКТНІ ДАНІ, І МИ ЗВ’ЯЖЕМОСЯ З ВАМИ І ПОВІДОМИМО ВАМ',
  },
]

const FAQs = () => {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Поширені запитання</h2>
        <div className={styles.content}>
          <div className={styles.logo_wrapper}>
            <p className={styles.text}>Найчастіші запитання зібрані тут</p>
            <Image src={logo} alt="MullerArms logo" />
          </div>

          <div className={styles.accordion}>
            {questions.map((item, i) => (
              <div
                className={styles.questions}
                key={i}
                onClick={() => toggle(i)}
              >
                <div className={styles.item}>
                  <div className={styles.question}>
                    <h3>{item.question}</h3>
                    <span>
                      {selected === i ? (
                        <Image src={minus} alt="minus" />
                      ) : (
                        <Image src={plus} alt="plus" />
                      )}
                    </span>
                  </div>
                  <div
                    className={
                      selected === i ? styles.answer_show : styles.answer
                    }
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Image className={styles.bg_bottom} src={bgBottom} alt="MullerArms" />
      </div>
    </div>
  )
}

export default FAQs
