'use client'
//styles
import styles from './styles.module.scss'
//images
import ArrowLeft from '../Icons/ArrowLeft'
import ArrowRight from '../Icons/ArrowRight'
//components
import ArchiveCard from '../ArchiveCard'
//swiper
import '@/styles/swiper.scss'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Article } from '@/models/article'
import moment from 'moment'
import 'moment/locale/uk'
import { useEffect, useState } from 'react'

const Archive = ({ data }: { data: Article[] }) => {
  const [months, setMonths] = useState<string[]>([])
  const [currentMonthIdx, setCurrentMonthIdx] = useState<number>(0)
  const [groupedArticles, setGroupedArticles] = useState<
    Record<string, Article[]>
  >({})

  useEffect(() => {
    const dataByMonth = data
      .filter((item) => item.event_time)
      .reduce((acc: Record<string, Article[]>, event) => {
        const monthYear = `${moment(event.event_time).format('YYYY-MM')}-01`

        if (!acc[monthYear]) {
          acc[monthYear] = []
        }

        acc[monthYear].push(event)
        return acc
      }, {})
    const sortedData = Object.fromEntries(
      Object.entries(dataByMonth).sort(
        (a, b) =>
          moment(b[0], 'YYYY-MM').toDate().getTime() -
          moment(a[0], 'YYYY-MM').toDate().getTime()
      )
    )
    setGroupedArticles(sortedData)
    setMonths(Object.keys(sortedData))
  }, [data])

  const handleChangeMonth = (type: 'prev' | 'next') => {
    if (months.length) {
      if (type === 'next') {
        setCurrentMonthIdx((state) => {
          if (state === months.length - 1) {
            return 0
          }
          return state + 1
        })
      } else {
        setCurrentMonthIdx((state) => {
          if (state === 0) {
            return months.length - 1
          }
          return state - 1
        })
      }
    }
  }

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav_content}>
          {months.length > 1 && (
            <div className={styles.icons}>
              <div onClick={() => handleChangeMonth('prev')}>
                <ArrowLeft />
              </div>
              <div onClick={() => handleChangeMonth('next')}>
                <ArrowRight />
              </div>
            </div>
          )}
          <p className={styles.nav_date}>
            {moment(months[currentMonthIdx]).locale('uk').format('MMMM YYYY')}
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              {months.length ? 'Архів' : 'Наразі архів порожній'}
            </h1>
            <div className={styles.cards}>
              <div className={styles.card}>
                {groupedArticles[months[currentMonthIdx]]?.map(
                  (item, index) => <ArchiveCard item={item} key={index} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Archive
