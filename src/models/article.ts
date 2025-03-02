export interface Article {
  id: number
  url: string
  image: string | null
  title: string
  author: string
  text: string
  slug: string
  is_archived: boolean
  is_news: boolean
  is_announce: boolean
  event_address: string
  event_time: string
  created_at: string
  updated_at: string
}
