export interface Article {
  id: number
  url: string
  image: string | null
  title: string
  author: string
  text: string
  rendered_text: string
  slug: string
  is_archived: boolean
  is_news: boolean
  is_announce: boolean
  event_address: string | null
  event_time: string | null
  created_at: string
  updated_at: string
  description: string | null
}
