import { Category } from './category'

export interface ShopItem {
  id: number
  name: string
  description: string
  price: number
  colors: { name: string }[]
  images: { image: string }[]
  sizes: { size: string }[]
  slug: string
  url: string
}

export interface Shop {
  items: ShopItem[]
  categories: Category[]
}
