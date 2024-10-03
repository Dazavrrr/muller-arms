'use client'
import LeadersTableRifle from '@/components/LeadersTableRifle'
import '@/styles/global.module.scss'

type PageProps = {
  params: {
    tab: string
  }
}

export default function LeadersTableRiflePage({ params: { tab } }: PageProps) {
  return (
    <>
      <LeadersTableRifle tab={tab} />
    </>
  )
}
