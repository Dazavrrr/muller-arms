import { Metadata, ResolvingMetadata } from 'next'
import store from '@/store/store'

type MetaProps = {
  params: { locale: string; slug?: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type MetaDataFunction = (
  props: MetaProps,
  parent: ResolvingMetadata,
) => Promise<Metadata>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type FetchStatus = 'pending' | 'idle' | 'error';

export type PageWrapper<T> = {
  items: T[],
  allItemsCount: number,
  hasNext: boolean
}

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
  shortDescription: string,
  image: string,
  slug: string,
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
  prepaid: boolean,
  canceled: boolean,
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

export type ArticleResponse = {
  id: number,
  title: string,
  author: string,
  imageId: number,
  imagePath: string,
  text: string,
  slug: string,
  isArchived: boolean,
  isNews: boolean,
  eventTime: Date | null,
  eventAddress: string | null,
  sections: SectionResponse[],
  creationDate: Date,
  lastModifiedDate: Date,
}

export type ArticleSmallResponse = {
  id: number,
  title: string,
  author: string,
  imagePath: string,
  text: string,
  slug: string,
  creationDate: Date,
  eventTime: Date | null,
  eventAddress: string | null,
}

export type ArticleCreateRequest = {
  title: string,
  author: string,
  base64Image: string,
  isArchived: boolean,
  isNews: boolean,
  eventTime: Date | null,
  eventAddress: string | null,
  text: string,
  slug: string,
  sections: Partial<SectionCreateRequest>[],
}

export type SectionResponse = {
  id: number,
  title: string,
  text: string,
  imagesId: number[],
  images: string[],
  article: ArticleResponse,
  creationDate: Date,
  lastModifiedDate: Date,
}

export type SectionCreateRequest = {
  id: number,
  articleId: number,
  title: string,
  text: string,
  images: string[],
}

export type Notification = {
  id: number,
  name: string,
  phone: string,
  creationDate: Date,
}

export type NotificationCreateDto = {
  name: string,
  phone: string,
}

export type TableSlot = {
  id: number,
  name: string,
  finishTime: number,
  lastTryDate: Date,
  description: string,
  task: number | null,
  type: TableSlotsType,
}

export type TableSlotCreateDto = {
  name: string,
  finishTime: number,
  lastTryDate: Date,
  description: string,
  task: number | null,
  type: TableSlotsType,
}


export type TrainerAdminResponse = {
  id: number,
  firstName: string,
  lastName: string,
  description: string,
  email: string,
  instagramLink: string,
  instagramName: string,
  tallImage: string,
  wideImage: string,
  calendarId: string,
}

export type TrainerAdminRequest = {
  firstName: string,
  lastName: string,
  description: string,
  email: string,
  instagramLink: string,
  instagramName: string,
  base64ImageTall: ImageData | File | string | Blob,
  base64ImageWide: ImageData | File | string | Blob,
  calendarId: string,
}

export type TrainingRequest = {
  name: string,
  pricePerHour: number,
  prepay: number,
  isFlexible: boolean,
  slug: string,
  description: string,
  shortDescription: string,
  base64Image: string,
}
export type TimeSlotRequest = {
  dateTime: string,
  trainerId: number
}
export type BookingUpdateRequest = {
  totalHours: number,
  trainerId: number,
  trainingId: number,
  timeslotId: number | string
}

export type LoginInputs = {
  email: string,
  password: string
}

export type TableSlotsType = 'CLASSIFICATION' | 'PISTOL' | 'CARBINE'

export type LibCategory = {
  id: number,
  name: string
}

export type LibCategoryCreateDto = {
  name: string
}

export type LibDocResponseDto = {
  id: number,
  name: string
  imagePath: string,
  type: LibDocType,
  downloadUrl: string,
  categoryIds: number[],
}

export type LibDocCreateDto = {
  name: string,
  base64Image: string,
  type: LibDocType
  categoryIds: number[],
}


export enum LibDocType {
  BOOK,
  AUDIO,
  VIDEO
}

export type ShopCategoryResponseDto = {
  id: number,
  name: string,
  categorySection: string,
}

export type ShopCategoryCreateDto = {
  name: string,
  categorySection: string,
}

export type ShopItemCreateDto = {
  name: string,
  slug: string,
  description: string,
  sizes: string[],
  base64Images: string[],
  price:  number,
  isCertificate: boolean,
  categoryIds: number[]
}

export type ShopItemResponseDto = {
   id: number,
   name: string,
   slug: string,
   description: string,
   images: string[],
   sizes: string[],
  categoryIds: number[]
   price:  number,
   isCertificate: boolean,
}