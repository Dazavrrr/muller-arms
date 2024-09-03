'use client'
import ProductDetails from '@/components/ProductDetails'
import patch from '../../../../../public/images/shop-item-image.webp'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import { fetchOneShopItem } from '@/store/slices/Shop.slice'

type PageProps = {
  params: {
    slug: string
  }
}

const ProductPage = ({ params: { slug } }: PageProps) => {

  const dispatch = useAppDispatch();
  const product = useAppSelector(state => state.Shop.currentItem)
  const currentItemFetchStatus = useAppSelector(state => state.Shop.currentItemFetchStatus)

  useEffect(() => {
    dispatch(fetchOneShopItem(slug))
  }, [])

  if (currentItemFetchStatus === 'pending') {
    return <p>loading</p>
  }
  return <>
    {!!product && <ProductDetails product={product} />}
  </>
}

export default ProductPage
