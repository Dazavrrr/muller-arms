import Shop from '@/components/Shop'
import '@/styles/global.module.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Магазин - MullerArms',
  description: 'Магазин - MullerArms',
}

export default function ShopPage() {
  return (
    <>
      <Shop />
    </>
  )
}
