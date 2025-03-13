export interface Trainer {
  id: number
  first_name: string
  last_name: string
  description: string
  email: string
  tall_image: null | string
  wide_image: null | string
  instagram_link: null | string
  instagram_name: null | string
}

export interface Slot {
  id: number
  date: string
  start_time: string
  end_time: string
  trainer: number
}

export interface Booking {
  trainer: Trainer
  available_slots: Slot[]
}
