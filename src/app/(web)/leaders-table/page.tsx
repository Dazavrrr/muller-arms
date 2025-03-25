'use client'
import LeadersTable from '@/components/LeadersTable'
import '@/styles/globals.scss'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Таблиця Лідерів Учасників "MullerArms"',
//   description: '',
// }

export default function LeadersTablePage() {
  return (
    <>
      <LeadersTable />
    </>
  )
}
