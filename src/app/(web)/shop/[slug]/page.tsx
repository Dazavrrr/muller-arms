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

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { data } = await getData<ShopItem>(`${ApiPath.SHOP}${slug}`)

  if (!data || 'detail' in data) {
    return {
      title: 'Not found',
      description: 'Not Found',
    }
  }

  return {
    title: data.name,
    description: 'Магазин - MullerArms',
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
