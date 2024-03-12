import { FetchStatus, BookingResponse, BookingCreateRequest } from '@/common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, guestInstance } from '@/api'
import { BookingUpdateRequest } from '@/common/adminTypes'

const initialState: {
  bookings: BookingResponse[],
  currentBooking: BookingResponse | null,
  bookingsFetchStatus: FetchStatus,
  oneBookingFetchStatus: FetchStatus,
  bookingCreateStatus: FetchStatus,
  bookingUpdateStatus: FetchStatus,
  bookingDeleteStatus: FetchStatus,
} = {
  bookings: [],
  currentBooking: null,
  bookingsFetchStatus: 'idle',
  oneBookingFetchStatus: 'idle',
  bookingCreateStatus: 'idle',
  bookingUpdateStatus: 'idle',
  bookingDeleteStatus: 'idle',
}


export const fetchAllBookings = createAsyncThunk(
  'bookings/fetchAllBookings',
  async (page: number) => {
    const response = await adminInstance.get(`/bookings?page=${page}&size=10`);
    return await response.data
  },
)

export const fetchOneBooking = createAsyncThunk(
  'bookings/fetchOneBooking',
  async (id: number) => {
    const response = await adminInstance.get(`/bookings/${id}`)
    return await response.data
  },
)

export const createBooking = createAsyncThunk(
  'booking/createBooking',
  async (booking: BookingCreateRequest) => {
    const response = await adminInstance.post('/booking', JSON.stringify(booking))
    return response.data
  },
)

export const updateBooking = createAsyncThunk(
  'booking/updateBooking',
  async ({ id, booking }: { id: number, booking: BookingUpdateRequest }) => {
    const response = await adminInstance.patch(`/booking/${id}`, JSON.stringify(booking))
    return response.data
  },
)

export const deleteBooking = createAsyncThunk(
  'booking/deleteBooking',
  async (id: number) => {
    await adminInstance.delete(`/booking/${id}`)
    return id
  },
)


const BookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    resetCurrentBooking(state) {
      state.currentBooking = null
    },
  },
  extraReducers: (builder) => {
    builder
      //All bookings
      .addCase(fetchAllBookings.pending, (state) => {
        state.bookingsFetchStatus = 'pending'
      })
      .addCase(fetchAllBookings.fulfilled, (state, { payload }) => {
        state.bookingsFetchStatus = 'idle'
        state.bookings = payload
      })
      .addCase(fetchAllBookings.rejected, (state) => {
        state.bookingsFetchStatus = 'error'
      })
      //One booking
      .addCase(fetchOneBooking.pending, (state) => {
        state.oneBookingFetchStatus = 'pending'
      })
      .addCase(fetchOneBooking.fulfilled, (state, { payload }) => {
        state.oneBookingFetchStatus = 'idle'
        state.currentBooking = payload
      })
      .addCase(fetchOneBooking.rejected, (state) => {
        state.oneBookingFetchStatus = 'error'
      })
      //Create booking
      .addCase(createBooking.pending, (state) => {
        state.bookingCreateStatus = 'pending'
      })
      .addCase(createBooking.fulfilled, (state, { payload }) => {
        state.bookingCreateStatus = 'idle'
        state.bookings = [...state.bookings, payload]
      })
      .addCase(createBooking.rejected, (state) => {
        state.bookingCreateStatus = 'error'
      })
      //Update booking
      .addCase(updateBooking.pending, (state) => {
        state.bookingUpdateStatus = 'pending'
      })
      .addCase(updateBooking.fulfilled, (state, { payload }) => {
        state.bookingUpdateStatus = 'idle'
        state.bookings = state.bookings.map(t => {
          if (t.id === payload.id) {
            return payload
          }
          return t
        })
      })
      .addCase(updateBooking.rejected, (state) => {
        state.bookingUpdateStatus = 'error'
      })
      //Delete Booking
      .addCase(deleteBooking.pending, (state) => {
        state.bookingDeleteStatus = 'pending'
      })
      .addCase(deleteBooking.fulfilled, (state, { payload }) => {
        state.bookingDeleteStatus = 'idle'
        state.bookings = state.bookings.filter(t => t.id !== payload);
      })
      .addCase(deleteBooking.rejected, (state) => {
        state.bookingDeleteStatus = 'error'
      })
  },
})

const { reducer, actions } = BookingsSlice

export const {resetCurrentBooking} = actions

export default reducer
