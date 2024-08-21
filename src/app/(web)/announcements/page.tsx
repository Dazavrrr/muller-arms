'use client'

import '@/styles/globals.scss'
import Announcements from '@/components/Announcements'
import { useAppDispatch } from '@/store/hooks'
import { useEffect } from 'react'
import { fetchAllAnnouncements } from '@/store/slices/Articles.slise'
import AnnouncementsContent from '@/components/AnnouncementsContent'

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
