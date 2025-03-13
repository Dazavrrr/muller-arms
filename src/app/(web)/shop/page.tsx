import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import Shop from '@/components/Shop'
import { Shop as IShop } from '@/models/shop'
import '@/styles/global.module.scss'

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
