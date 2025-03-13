import ProductDetails from '@/components/ProductDetails'
import { getData } from '@/api'
import { ApiPath } from '@/common/enums'
import { ShopItem } from '@/models/shop'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    slug: string
  }
}

const ProductPage = async ({ params: { slug } }: PageProps) => {
  const { data } = await getData<ShopItem>(`${ApiPath.SHOP}${slug}`)

  if (!data) {
    return notFound()
  }
  return <ProductDetails product={data} />
}

export default ProductPage
