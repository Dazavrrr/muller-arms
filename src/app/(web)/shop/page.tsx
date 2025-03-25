import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import Shop from '@/components/Shop'
import { Shop as IShop } from '@/models/shop'
import '@/styles/global.module.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Магазин - MullerArms',
  description: 'Магазин - MullerArms',
}

export default async function ShopPage() {
  const { data } = await getData<IShop>(`${ApiPath.SHOP}?ordering=asc`)

  if (!data) {
    return null
  }
  return (
    <>
      <Shop initialShop={data} />
    </>
  )
}
