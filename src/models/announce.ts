export interface Announce {
  id: number
  title: string
  author: string
  image: string | null
  text: string
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
