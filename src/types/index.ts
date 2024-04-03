import store from '@/store/store'

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type FetchStatus = "pending" | "idle" | "error";

export type TrainerResponse = {
  id: number,
  firstName: string,
  lastName: string,
  description: string,
  email: string,
  instagramLink: string,
  instagramName: string,
  image: string,
  upcomingTimeSlots: TimeSlotResponse[],
}

export type TrainerRequest = {
  firstName: string,
  lastName: string,
  description: string,
  email: string,
  instagramLink: string,
  instagramName: string,
  base64Image: string,
  calendarId: string,
}

export type TrainingResponse = {
  id: number,
  name: string,
  pricePerHour: number,
  prepay: number
}

export type TrainingRequest = {
  name: string,
  pricePerHour: number,
  prepay: number
}

export type TimeSlotResponse = {
  id: number,
  dateTime: Date,
  isBooked: boolean
}

export type TimeSlotRequest = {
  dateTime: Date,
  trainerId: number
}

export type BookingResponse = {
  id: number,
  clientName: string,
  clientPhone: string,
  clientEmail: string,
  description: string,
  eventId: string,
  totalHours: number,
  totalPrice: number,
  untilReserved: Date,
  isPrepaid: boolean,
  isCanceled: boolean,
  creationDate: Date,
  lastModifiedDate: Date,
  trainer: TrainerResponse,
  timeslots: TimeSlotResponse[]
  training: TrainingResponse
}

export type BookingCreateRequest = {
  clientName: string,
  clientPhone: string,
  clientEmail: string,
  description: string,
  totalHours: number,
  trainerId: number,
  trainingId: number | null,
  timeslotId: number | null
}

export type BookingUpdateRequest = {
  totalHours: number,
  trainerId: number,
  trainingId: number,
  timeslotId: number
}