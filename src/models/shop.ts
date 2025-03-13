import { Category } from './category'

export interface ShopItem {
  id: number
  name: string
  description: string
  price: number
  image: string | null
  slug: string
  url: string
}

export interface Shop {
  items: ShopItem[]
  categories: Category[]
}
