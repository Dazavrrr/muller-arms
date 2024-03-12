import { Metadata, ResolvingMetadata } from "next";

type MetaProps = {
  params: { locale: string; slug?: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type MetaDataFunction = (
  props: MetaProps,
  parent: ResolvingMetadata
) => Promise<Metadata>;

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
  tallImage: string,
  wideImage: string,
  upcomingTimeSlots: TimeSlotResponse[],
}

export type TrainingResponse = {
  id: number,
  name: string,
  pricePerHour: number,
  prepay: number,
  isFlexible: boolean,
  description: string,
  image: string
}

export type TimeSlotResponse = {
  id: number,
  dateTime: Date,
    booked: boolean
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
