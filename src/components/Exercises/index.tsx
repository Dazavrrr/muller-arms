'use client'
//libs
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
//styles
import styles from './styles.module.scss'
import global from '../../styles/global.module.scss'
import NavArrow from '../Icons/NavArrow'
//images
import image from '../../../public/images/exercises-image.webp'
import CloseIcon from '../Icons/CloseIcon'

const Exercises = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleShowModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const quantityText = () => {
    return window.innerWidth < 490 ? 'к-сть' : 'кількість'
  }

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Link href="/qualifications" className={styles.nav_prev}>
            кваліфікація клубу
          </Link>
          <div>
            <NavArrow />
          </div>
          <Link href="/military" className={styles.nav_prev}>
            мілітарі класифікація
          </Link>
          <div>
            <NavArrow />
          </div>
          <p className={styles.nav_current}>вправи</p>
        </div>

        <div className={styles.content}>
          <div className={styles.image_wrapper}>
            <h1 className={styles.title}>
              Класифікація зі стрільби із карабіну / гвинтівки
            </h1>
            <Image className={styles.image} src={image} alt="MullerArms" />

            <div className={styles.button_wrapper}>
              <button type="button" className={styles.button}>
                ЗАРЕЄСТРУВАТИСЯ
              </button>
            </div>
          </div>

          <div className={styles.exercises}>
            <div className={styles.exercise}>
              <div className={styles.title_wrapper}>
                <h2 className={styles.exercise_title}>
                  Вправа 1 ( Зміна Позицій )
                </h2>
                <h3 className={styles.subtitle}>Стартове положення</h3>
                <div className={styles.text_wrapper}>
                  <p className={styles.text}>
                    1 етап: стрілець розслаблений на позиції «А»;
                  </p>
                  <p className={styles.text}>
                    2-5 етапи – стрілець розслаблений, карабін на ремені.
                    Положення зброї: 1 етап- розряджена, в піраміді, магазини на
                    собі : магазин пристебнутий, патронник пустий. Кількість
                    пострілів: 15 (приготувати три магазини по два патрони)
                  </p>
                </div>
              </div>

              <div className={styles.exercise_table}>
                <h3 className={styles.subtitle}>порядок виконання вправ</h3>

                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={styles.step}>етап</th>
                      <th className={styles.position}>Позиція</th>
                      <th className={styles.technique}>порядок дій</th>
                      <th className={styles.quantity}>{quantityText()}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>В</td>
                      <td>
                        Виконати по 2 постріли в корпус мішеней Т1-Т3
                        використовуючи слабе плече. Запобіжник вимкнений
                      </td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>e-f</td>
                      <td>
                        Стрімкий перехід із позиції «Е» в позицію «F», із
                        позиції «F» виконати по одному пострілу в голову мішеней
                        Т1-Т3
                      </td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>f-g</td>
                      <td>
                        Безперервно рухаючись із позиції «F» до позиції «G»
                        виконати по 2 постріли в корпус мішеней Т1-Т3. Всі
                        постріли обов’язково виконуються під час руху, за
                        штрафні планки не заступати!
                      </td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>g</td>
                      <td>
                        Два магазина по 6 патронів. Виконати по 2 постріла в
                        корпус мішеней Т1-Т3, здійснити екстренну заміну
                        магазину та виконати по 2 постріли в корпус мішеней
                        Т1-Т3.
                      </td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td></td>
                      <td>
                        Безперервно рухаючись із позиції «G» до позиції «F»
                        виконати по 2 постріли в корпус мішеней Т1-Т3. Всі
                        постріли обов’язково виконуються під час руху, за
                        штрафні планки не заступати!
                      </td>
                      <td>6</td>
                    </tr>
                  </tbody>
                </table>

                <p className={styles.text_big}>
                  Після завершення вправи 1, мішені Т4 і Т5 перенести й
                  встановити на місця Т1 і Т2!
                </p>
              </div>
            </div>
            <div className={styles.exercise}>
              <div className={styles.title_wrapper}>
                <h2 className={styles.exercise_title}>
                  Вправа 2 ( Тактичні переміщення )
                </h2>
                <h3 className={styles.subtitle}>
                  Стартове положення: “Low Ready”
                </h3>
                <div className={styles.text_wrapper}>
                  <p className={styles.text}>
                    Положення зброї: заряджено, на запобіжнику
                  </p>
                  <p className={styles.text}>
                    Кількість пострілів: 18 (приготувати два магазини по 9
                    набоїв)
                  </p>
                </div>
              </div>

              <div className={styles.exercise_table}>
                <h3 className={styles.subtitle}>порядок виконання вправ</h3>

                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={styles.step}>етап</th>
                      <th className={styles.position}>Позиція</th>
                      <th className={styles.technique}>порядок дій</th>
                      <th className={styles.quantity}>{quantityText()}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>В</td>
                      <td>
                        Виконати по одному пострілу в корпус мішеней Т1-Т3,
                        справа від укриття, за укриттям виконати тактичну заміну
                        магазину, та в позіції «на коліно» виконати по одному
                        пострілу в корпус мішеней Т1-Т3 зліва від укриття
                      </td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>В-с</td>
                      <td>
                        Виконати по одному пострілу в корпус мішеней Т1-Т3,
                        зліва від укриття «В», за укриттям виконати тактичну
                        заміну магазину, перехід на позицію «С» та виконати по
                        одному пострілу в позиціїї «на коліно» в корпус мішеней
                        Т1- Т3 справа від укриття
                      </td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>С-d</td>
                      <td>
                        Виконати по одному пострілу в корпус мішеней Т1-Т3,
                        справа від укриття «С», за укриттям виконати тактичну
                        заміну магазину, та здійснити перехід в позицію «D» в
                        позіції «на коліно» виконати по одному пострілу в корпус
                        мішеней Т1-Т3 зліва від укриття «D»
                      </td>
                      <td>6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.exercise}>
              <div className={styles.title_wrapper}>
                <h2 className={styles.exercise_title}>
                  Вправа 3 ( Динамічна стрільба )
                </h2>
                <h3 className={styles.subtitle}>
                  Стартове положення: “Low Ready”
                </h3>
                <div className={styles.text_wrapper}>
                  <p className={styles.text}>
                    Положення зброї: заряджено, на запобіжнику
                  </p>
                  <p className={styles.text}>
                    Кількість пострілів: 33 (Підготувати магазини на 9 та чотири
                    на 6 набоїв)
                  </p>
                </div>
              </div>

              <div className={styles.exercise_table}>
                <h3 className={styles.subtitle}>порядок виконання вправ</h3>

                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={styles.step}>етап</th>
                      <th className={styles.position}>Позиція</th>
                      <th className={styles.technique}>порядок дій</th>
                      <th className={styles.quantity}>{quantityText()}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>В</td>
                      <td>
                        Виконати по 2 постріли в корпус мішеней Т1-Т3
                        використовуючи слабе плече. Запобіжник вимкнений
                      </td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>e-f</td>
                      <td>
                        Стрімкий перехід із позиції «Е» в позицію «F», із
                        позиції «F» виконати по одному пострілу в голову мішеней
                        Т1-Т3
                      </td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>f-g</td>
                      <td>
                        Безперервно рухаючись із позиції «F» до позиції «G»
                        виконати по 2 постріли в корпус мішеней Т1-Т3. Всі
                        постріли обов’язково виконуються під час руху, за
                        штрафні планки не заступати!
                      </td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>g</td>
                      <td>
                        Два магазина по 6 патронів. Виконати по 2 постріла в
                        корпус мішеней Т1-Т3, здійснити екстренну заміну
                        магазину та виконати по 2 постріли в корпус мішеней
                        Т1-Т3.
                      </td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td></td>
                      <td>
                        Безперервно рухаючись із позиції «G» до позиції «F»
                        виконати по 2 постріли в корпус мішеней Т1-Т3. Всі
                        постріли обов’язково виконуються під час руху, за
                        штрафні планки не заступати!
                      </td>
                      <td>6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.button_wrapper_mob}>
          <button
            type="button"
            className={`${global.primaryBtn} ${styles.button} ${styles.button_transparent}`}
            onClick={handleShowModal}
          >
            ПОКАЗАТИ СХЕМУ
          </button>
          <button type="button" className={styles.button}>
            ЗАРЕЄСТРУВАТИСЯ
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalScheme}>
          <div className={styles.modalScheme_content}>
            <Image
              className={styles.modalScheme_image}
              src={image}
              alt="MullerArms"
            />
            <button
              type="button"
              className={styles.modalScheme_close}
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Exercises
