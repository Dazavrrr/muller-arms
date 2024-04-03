//components
import TrainingDetails from '@/components/TrainingDetails/TrainingDetails'
import OtherTrainings from '@/components/OtherTrainings'
import base from '../../../../../public/images/trainings/1.webp'
import group from '../../../../../public/images/trainings/2.webp'
import individual from '../../../../../public/images/trainings/trainings/3.webp'
import course from '../../../../../public/images/trainings/4.webp'


type PageProps = {
  params: {
    trainingSlug: string
  }
}

const TrainingPage = ({ params: { trainingSlug } }: PageProps) => {
  const trainings = [
    {
      image: base,
      trainingName: "Базове тренування з автоматом (карабіном)",
      mainText: "РОБОТА ІЗ АВТОМАТОМ/КАРАБІНОМ В СКЛАДІ ГРУПИ 6-10 ЛЮДЕЙ\n" +
        "\n" +
        "ТРЕНУВАННЯ ДУЖЕ НАСИЧЕНЕ Й ЗМІСТОВНЕ, РОЗРАХОВАНЕ НА НОВАЧКІВ, ЛЮДЕЙ ЯКІ НЕ МАЮТЬ ВЛАСНОЇ ЗБРОЇ, ПРОТЕ ХОЧУТЬ ЗДОБУТИ ПЕРШИЙ ДОСВІД. МОЖЛИВІСТЬ ОВОЛОДІТИ СТРІЛЕЦЬКИМИ НАВИЧКАМИ ТЕПЕР ДОСТУПНА ДЛЯ ВСІХ.",
      price: "1 400 грн",
      slug: 'base-training'
    },
    {
      image: group,
      trainingName: "Групові тренування",
      mainText: "ТРЕНУВАННЯ ПРОХОДЯТЬ В ДВОХ ФОРМАТАХ: «МІЛІТАРІ» ТА «СПОРТ» \n \n" +
        "ПРИЗНАЧЕНЕ ДЛЯ СТРІЛЬЦІВ, ЯКІ" +
        " СИСТЕМАТИЧНО ПРАКТИКУЮТЬ І ПРАГНУТЬ ДО ПОСТІЙНОГО ПОКРАЩЕННЯ СВОГО РІВНЯ МАЙСТЕРНОСТІ. УЧАСНИКИ ЦИХ" +
        " ТРЕНУВАНЬ ПРАЦЮЮТЬ НАД СВОЇМИ НАВИЧКАМИ З ВЕЛИКОЮ ВІДДАНІСТЮ, ВКЛАДАЮЧИ В ЦЕЙ ПРОЦЕС УСЮ СВОЮ СИЛУ ТА" +
        " ЕНЕРГІЮ \n \n" +
        "ЯКЩО ЦЕЙ ОПИС ПРО ВАС — ЗАПИСУЙТЕСЬ НА ТРЕНУВАННЯ",
      price: "1 500 грн",
      weapons: ["FOrt 12, fort 14, fort 18", "АКМ 7.62*39", "AR-15 223rem", "Mossberg 500 12 cal", "Savage cal 22lr"],
      slug: 'group-training'
    },
    {
      image: individual,
      trainingName: "Індивідуальні тренування",
      mainText: "НА ПОЧАТКУ ВАШОГО НАВЧАННЯ ІНДИВІДУАЛЬНІ ТРЕНУВАННЯ НАЙЕФЕКТИВНІШИЙ ФОРМАТ\n \n" +
        "ОСОБИСТИЙ ПІДХІД\n" +
        "ТРЕНЕР НЕ ПЕРЕХОДИТЬ ДО НАСТУПНОЇ ТЕМИ, ЯКЩО ПОПЕРЕДНЯ НЕДОСТАТНЬО ЗАСВОЄНА\n \n" +
        "ПЕРСОНАЛЬНА ПРОГРАМА\n" +
        "ПРОГРАМА БУДУЄТЬСЯ ЗВАЖАЮЧИ НА ВАШІ ВМІННЯ ТА ЦІЛІ\n" +
        "НАЙВИЩА ЕФЕКТИВНІСТЬ\n \n" +
        "‍ТРЕНЕР ФОКУСУЄТЬСЯ ЛИШЕ НА ВАС ТОМУ ПРОГРЕС У НАВИЧКАХ БУДЕ ЗНАЧНО ШВИДШИМ, НІЖ ПІД ЧАС ГРУПОВИХ ЗАНЯТЬ\n" +
        " \n" +
        "ВИ МОЖЕТЕ ОБРАТИ ЗРУЧНИЙ ДЛЯ ВАС ЧАС ТА МІСЦЕ ДЛЯ ЗАНЯТЬ",
      price: "1 500 грн",
      weapons: ["FOrt 12, fort 14, fort 18", "АКМ 7.62*39", "AR-15 223rem", "Mossberg 500 12 cal", "Savage cal 22lr"],
      slug: 'individual-training'
    },
    {
      image: course,
      trainingName: "Курс майбутнього бійця",
      mainText: "КМБ СКЛАДАЄТЬСЯ З 3 МОДУЛІВ, ЯКІ ВМІЩУЮТЬ В СОБІ ТЕОРІЮ ТА ПРАКТИЧНІ ВПРАВИ:\n" +
        "\n" +
        "1. ДОГЛЯД ЗА ЗБРОЄЮ\n" +
        "2. БЕЗПЕЧНЕ ПОВОДЖЕННЯ ЗІ ЗБРОЄЮ\n" +
        "3. СТРІЛЬБА З РІЗНИХ ПОЛОЖЕНЬ\n" +
        "4. ПЕРЕМІЩЕННЯ ЗІ ЗБРОЄЮ\n" +
        "5. ОГЛЯД ЕКІПІРУВАННЯ\n" +
        "КОЖЕН МОДУЛЬ ПРОВОДИТЬСЯ НА ІНШІЙ ЛОКАЦІЇ. ЦЕ ДАЄ МОЖЛИВІСТЬ ПРОПРАЦЮВАТИ ПОВНИЙ СПЕКТР ЕЛЕМЕНТІВ БАЗОВОГО" +
        " РІВНЯ В РІЗНИХ УМОВАХ ТА НА РІЗНИХ ДИСТАНЦІЯХ.\n \n" +
        "ПО ЗАКІНЧЕННІ КУРСУ ВИ ОТРИМАЄТЕ:\n" +
        "\n" +
        "1. СЕРТИФІКАТ ПРО УСПІШНЕ ЗАВЕРШЕННЯ КУРСУ\n" +
        "2. МЕТОДИЧКУ-ПАМʼЯТКУ\n" +
        "3. ДОВІДКУ ПРО ВОЛОДІННЯ ЗБРОЄЮ (ЗА ДОДАТКОВУ ПЛАТУ)",
      price: "9 900 грн",
      slug: 'soldier-course',
    },
  ]
  const train = trainings.find(t => t.slug == trainingSlug)
  return (
    <>
      {train && <TrainingDetails training={train} />}
      <OtherTrainings trainings={trainings} slug={trainingSlug} />
    </>
  )
}

export default TrainingPage
