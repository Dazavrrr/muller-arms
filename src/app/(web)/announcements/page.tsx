'use client'

import '@/styles/globals.scss'
import Announcements from '@/components/Announcements'
import { useAppDispatch } from '@/store/hooks'
import { useEffect } from 'react'
import { fetchAllAnnouncements } from '@/store/slices/Articles.slise'
import AnnouncementsContent from '@/components/AnnouncementsContent'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Анонси - MullerArms',
//   description:
//     'Взаємодія та спільний результат – головні цінності клубу. Це проявляється не лише у спортивних досягненнях на змаганнях зі стрільби, а й у наших інших активностях. MullerArms – це велика родина, де допомога та увага один до одного є принципом. У нас знаходять друзів, партнерів по бізнесу, нові захоплення та ідеї.',
// }

export default function AnnouncementsPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllAnnouncements(0))
  }, [])

  return (
    <>
      <Announcements />
      <AnnouncementsContent />
    </>
  )
}
