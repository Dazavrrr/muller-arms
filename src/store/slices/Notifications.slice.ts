import { FetchStatus, Notification, NotificationCreateDto } from '@/common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, guestInstance } from '@/api'
import {
  createTimeSlot, deleteTimeSlot,
  fetchOneTimeSlot,
  fetchTimeSlotsForDayByTrainer,
  updateTimeSlot,
} from '@/store/slices/TimeSlots.slice'

const initialState: {
  subscribers: Notification[],
  subscribersFetch: FetchStatus,
} = {
  subscribers: [],
  subscribersFetch: 'idle',
}

export const fetchAllSubscribers = createAsyncThunk(
  'notifications/fetchAllSubscribers',
  async (page: number) => {
    const response = await adminInstance.get(`/notifications?page=${page}&size=25`)
    return await response.data
  },
)

export const createSubscription = createAsyncThunk(
  'notifications/createSubscription',
  async (data: NotificationCreateDto) => {
    const response = await guestInstance.post('/notifications', JSON.stringify(data))
    return await response.data
  },
)

export const deleteSubscription = createAsyncThunk(
  'notifications/deleteSubscription',
  async (id: number) => {
    await adminInstance.delete(`/notifications/${id}`)
    return id;
  },
)

const NotificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSubscribers.pending, (state, { payload }) => {
        state.subscribersFetch = 'pending'
      })
      .addCase(fetchAllSubscribers.fulfilled, (state, { payload }) => {
        state.subscribersFetch = 'idle'
        const set = new Set()
        state.subscribers = [...state.subscribers, ...payload].filter(el => {
          const duplicate = set.has(el.id)
          set.add(el.id)
          return !duplicate
        })
      })
      .addCase(fetchAllSubscribers.rejected, (state, { payload }) => {
        state.subscribersFetch = 'error'
      })
      .addCase(deleteSubscription.fulfilled, (state, { payload }) => {
        state.subscribers = state.subscribers.filter(s => s.id != payload);
      })
  },
})

const { reducer, actions } = NotificationsSlice;
export default reducer