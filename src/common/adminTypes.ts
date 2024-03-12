
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
  description: string,
  base64Image: string
}
export type TimeSlotRequest = {
  dateTime: string,
  trainerId: number
}
export type BookingUpdateRequest = {
  totalHours: number,
  trainerId: number,
  trainingId: number,
  timeslotId: number
}

export type LoginInputs = {
  email: string,
  password: string
}