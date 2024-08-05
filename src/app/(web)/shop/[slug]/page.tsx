import ProductDetails from '@/components/ProductDetails'
import patch from '../../../../../public/images/shop-item-image.webp'

type PageProps = {
  params: {
    productSlug: string
  }
}

const ProductPage = ({ params: { productSlug } }: PageProps) => {
  const products = [
    {
      image: patch,
      productName: 'Патч',
      price: '₴300.00',
      text: 'Ця нашивка представляє собою вражаючий вигляд космічної галактики, яка розкриває перед вами таємничі глибини всесвіту. Вона виготовлена з високоякісних матеріалів, які надають їй довговічність та стійкість до впливу зовнішніх чинників.',
      slug: 'patch',
    },
    {
      image: patch,
      productName: 'Патч',
      price: '₴300.00',
      text: 'Ця нашивка представляє собою вражаючий вигляд космічної галактики, яка розкриває перед вами таємничі глибини всесвіту. Вона виготовлена з високоякісних матеріалів, які надають їй довговічність та стійкість до впливу зовнішніх чинників.',
      slug: 'patch',
    },
    {
      image: patch,
      productName: 'Патч',
      price: '₴300.00',
      text: 'Ця нашивка представляє собою вражаючий вигляд космічної галактики, яка розкриває перед вами таємничі глибини всесвіту. Вона виготовлена з високоякісних матеріалів, які надають їй довговічність та стійкість до впливу зовнішніх чинників.',
      slug: 'patch',
    },
  ]

  const product = products.find((p) => p.slug == productSlug)
  return <>{product && <ProductDetails product={product} />}</>
}

export default ProductPage
