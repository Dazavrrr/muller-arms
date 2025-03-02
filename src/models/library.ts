import { Category } from './category'

export interface LibraryItem {
  id: number
  name: string
  slug: string
  image: string
  main_file: string
  file_type: string
  categories: number[]
}

export interface Library {
  items: LibraryItem[]
  categories: Category[]
}
