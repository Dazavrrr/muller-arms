'use client'
import LeadersTablePistol from '@/components/LeadersTablePistol'
import '@/styles/global.module.scss'

type PageProps = {
  params: {
    tab: string
  }
}

export default function LeadersTableRiflePage({ params: { tab } }: PageProps) {
  return (
    <>
      <LeadersTablePistol tab={tab} />
    </>
  )
}
