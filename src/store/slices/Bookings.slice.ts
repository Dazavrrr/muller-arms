import { FetchStatus, BookingResponse, BookingCreateRequest, NotificationCreateDto, Notification } from '@/common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, guestInstance } from '@/api'
import { BookingUpdateRequest } from '@/common/types'
import { toast } from 'react-toastify'
import { deleteSubscription, fetchAllSubscribers } from '@/store/slices/Notifications.slice'

const initialState: {
  bookings: BookingResponse[],
  bookingRequests: Notification[],
  bookingRequestsFetch: FetchStatus,
  currentBooking: BookingResponse | null,
  bookingsFetchStatus: FetchStatus,
  oneBookingFetchStatus: FetchStatus,
  bookingCreateStatus: FetchStatus,
  bookingUpdateStatus: FetchStatus,
  bookingDeleteStatus: FetchStatus,
} = {
  bookings: [],
  bookingRequests: [],
  bookingRequestsFetch: 'idle',
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

export const fetchAllBookingRequests = createAsyncThunk(
  'bookings/fetchAllBookingsRequests',
  async (page: number) => {
    const response = await adminInstance.get(`/bookings/requests?page=${page}&size=10`);
    return await response.data
  },
)

export const deleteBookingRequest = createAsyncThunk(
  'bookings/deleteBookingRequest',
  async (id: number) => {
    await adminInstance.delete(`/bookings/requests/${id}`)
    return id;
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
    const response = await adminInstance.post('/bookings', JSON.stringify(booking))
    return response.data
  },
)

export const createBookingRequest = createAsyncThunk(
  'booking/createBooking',
  async (booking: NotificationCreateDto) => {
    const response = await guestInstance.post('/bookings/requests', JSON.stringify(booking))
    return response.data
  },
)

export const updateBooking = createAsyncThunk(
  'booking/updateBooking',
  async ({ id, booking }: { id: number, booking: BookingUpdateRequest }) => {
    try {
      const response = await toast.promise(
        adminInstance.patch(`/bookings/${id}`, JSON.stringify(booking)),
        {
          pending: 'Запит в обробці...',
          success: 'Бронювання оновлено !',
        }
      )
      return response.data
    } catch (e: any) {
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${JSON.stringify(e.response.data)}`,
        },
      )
    }
  },
)

export const deleteBooking = createAsyncThunk(
  'booking/deleteBooking',
  async (id: number) => {
    try {
      await toast.promise(
        adminInstance.delete(`/bookings/${id}`),
        {
          pending: 'Запит в обробці...',
          success: 'Бронювання видалено !',
        }
      )
      return id
    } catch (e: any) {
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${JSON.stringify(e.response.data)}`,
        },
      )
    }

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
        state.currentBooking = payload;
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
        state.bookings = state.bookings.filter(t => t.id != payload);
      })
      .addCase(deleteBooking.rejected, (state) => {
        state.bookingDeleteStatus = 'error'
      })

      .addCase(fetchAllBookingRequests.pending, (state, { payload }) => {
        state.bookingRequestsFetch = 'pending'
      })
      .addCase(fetchAllBookingRequests.fulfilled, (state, { payload }) => {
        state.bookingRequestsFetch = 'idle'
        const set = new Set()
        state.bookingRequests = [...state.bookingRequests, ...payload].filter(el => {
          const duplicate = set.has(el.id)
          set.add(el.id)
          return !duplicate
        })
      })
      .addCase(fetchAllBookingRequests.rejected, (state, { payload }) => {
        state.bookingRequestsFetch = 'error'
      })
      .addCase(deleteBookingRequest.fulfilled, (state, { payload }) => {
        state.bookingRequests = state.bookingRequests.filter(s => s.id != payload);
      })
  },
})

const { reducer, actions } = BookingsSlice

export const {resetCurrentBooking} = actions

export default reducer
