import { FetchStatus, TimeSlotRequest, TimeSlotResponse } from '@/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, guestInstance } from '@/api'

const initialState: {
  allTimeSlots: TimeSlotResponse[],
  timeSlotsForTrainer: TimeSlotResponse[],
  currentTimeSlot: TimeSlotResponse | null,
  timeSlotsFetchStatus: FetchStatus,
  trainerTimeSlotsFetchStatus: FetchStatus,
  oneTimeSlotFetchStatus: FetchStatus,
  timeSlotCreateStatus: FetchStatus,
  timeSlotUpdateStatus: FetchStatus,
  timeSlotDeleteStatus: FetchStatus,
} = {
  allTimeSlots: [],
  timeSlotsForTrainer: [],
  currentTimeSlot: null,
  timeSlotsFetchStatus: 'idle',
  trainerTimeSlotsFetchStatus: 'idle',
  oneTimeSlotFetchStatus: 'idle',
  timeSlotCreateStatus: 'idle',
  timeSlotUpdateStatus: 'idle',
  timeSlotDeleteStatus: 'idle',
}


export const fetchAllTimeSlotsByTrainer = createAsyncThunk(
  'timeSlot/fetchAllTimeSlotsByTrainer',
  async ({page, trainerId}: {page: number, trainerId: number}) => {
    const response = await guestInstance.get(`/timeslots?page=${page}&size=31&trainerId=${trainerId}`)
    return await response.data
  },
)

export const fetchAllTimeSlots = createAsyncThunk(
  'timeSlot/fetchAllTimeSlots',
  async (page: number) => {
    const response = await guestInstance.get(`/timeslots?page=${page}&size=31`)
    return await response.data
  },
)

export const fetchOneTimeSlot = createAsyncThunk(
  'timeSlot/fetchOneTimeSlot',
  async (id: number) => {
    const response = await guestInstance.get(`/timeslots/${id}`)
    return await response.data
  },
)

export const createTimeSlot = createAsyncThunk(
  'timeSlot/createTimeSlot',
  async (timeSlot: TimeSlotRequest) => {
    const response = await adminInstance.post('/timeslots', JSON.stringify(timeSlot))
    return response.data
  },
)

export const updateTimeSlot = createAsyncThunk(
  'timeSlot/updateTimeSlot',
  async ({ id, timeSlot }: { id: number, timeSlot: Partial<TimeSlotRequest> }) => {
    const response = await adminInstance.patch(`/timeslots/${id}`, JSON.stringify(timeSlot))
    return response.data
  },
)

export const deleteTimeSlot = createAsyncThunk(
  'timeSlot/deleteTimeSlot',
  async (id: number) => {
    await adminInstance.delete(`/timeslots/${id}`)
    return id
  },
)


const TimeSlotsSlice = createSlice({
  name: 'timeSlot',
  initialState,
  reducers: {
    resetCurrentTimeSlot(state) {
      state.currentTimeSlot = null
    },
  },
  extraReducers: (builder) => {
    builder
      //All timeSlots
      .addCase(fetchAllTimeSlots.pending, (state) => {
        state.timeSlotsFetchStatus = 'pending'
      })
      .addCase(fetchAllTimeSlots.fulfilled, (state, { payload }) => {
        state.timeSlotsFetchStatus = 'idle'
        state.allTimeSlots = payload
      })
      .addCase(fetchAllTimeSlots.rejected, (state) => {
        state.timeSlotsFetchStatus = 'error'
      })
      //All timeSlots for trainer
      .addCase(fetchAllTimeSlotsByTrainer.pending, (state) => {
        state.trainerTimeSlotsFetchStatus = 'pending'
      })
      .addCase(fetchAllTimeSlotsByTrainer.fulfilled, (state, { payload }) => {
        state.trainerTimeSlotsFetchStatus = 'idle'
        state.timeSlotsForTrainer = payload
      })
      .addCase(fetchAllTimeSlotsByTrainer.rejected, (state) => {
        state.trainerTimeSlotsFetchStatus = 'error'
      })
      //One timeSlot
      .addCase(fetchOneTimeSlot.pending, (state) => {
        state.oneTimeSlotFetchStatus = 'pending'
      })
      .addCase(fetchOneTimeSlot.fulfilled, (state, { payload }) => {
        state.oneTimeSlotFetchStatus = 'idle'
        state.currentTimeSlot = payload
      })
      .addCase(fetchOneTimeSlot.rejected, (state) => {
        state.oneTimeSlotFetchStatus = 'error'
      })
      //Create timeSlot
      .addCase(createTimeSlot.pending, (state) => {
        state.timeSlotCreateStatus = 'pending'
      })
      .addCase(createTimeSlot.fulfilled, (state, { payload }) => {
        state.timeSlotCreateStatus = 'idle'
        state.allTimeSlots = [...state.allTimeSlots, payload]
      })
      .addCase(createTimeSlot.rejected, (state) => {
        state.timeSlotCreateStatus = 'error'
      })
      //Update timeSlot
      .addCase(updateTimeSlot.pending, (state) => {
        state.timeSlotUpdateStatus = 'pending'
      })
      .addCase(updateTimeSlot.fulfilled, (state, { payload }) => {
        state.timeSlotUpdateStatus = 'idle'
        state.allTimeSlots = state.allTimeSlots.map(t => {
          if (t.id === payload.id) {
            return payload
          }
          return t
        })
      })
      .addCase(updateTimeSlot.rejected, (state) => {
        state.timeSlotUpdateStatus = 'error'
      })
      //Delete TimeSlot
      .addCase(deleteTimeSlot.pending, (state) => {
        state.timeSlotDeleteStatus = 'pending'
      })
      .addCase(deleteTimeSlot.fulfilled, (state, { payload }) => {
        state.timeSlotDeleteStatus = 'idle'
        state.allTimeSlots = state.allTimeSlots.filter(t => t.id !== payload);
      })
      .addCase(deleteTimeSlot.rejected, (state) => {
        state.timeSlotDeleteStatus = 'error'
      })
  },
})

const { reducer, actions } = TimeSlotsSlice

export const {resetCurrentTimeSlot} = actions

export default reducer
