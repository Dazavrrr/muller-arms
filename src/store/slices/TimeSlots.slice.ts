import { FetchStatus, TimeSlotResponse } from '@/common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, guestInstance } from '@/api'
import { TimeSlotRequest } from '@/common/adminTypes'
import { toast } from 'react-toastify'

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


export const fetchTimeSlotsForDayByTrainer = createAsyncThunk(
  'timeSlot/fetchTimeSlotsForDayByTrainer',
  async ({day, trainerId}: {day: string, trainerId: number}) => {
    const response = await adminInstance.get(`/timeslots/admin?day=${day}&trainerId=${trainerId}`)
    return await response.data
  },
)

export const fetchTimeSlotsForDayByTrainerGuest = createAsyncThunk(
  'timeSlot/fetchTimeSlotsForDayByTrainer',
  async ({day, trainerId}: {day: string, trainerId: number}) => {
    const response = await adminInstance.get(`/timeslots?day=${day}&trainerId=${trainerId}`)
    return await response.data
  },
)

export const fetchAllTimeSlotsByTrainer = createAsyncThunk(
  'timeSlot/fetchAllTimeSlotsByTrainer',
  async ({month, trainerId}: {month: number, trainerId: number}) => {
    const response = await adminInstance.get(`/timeslots/range?month=${month}&trainerId=${trainerId}`)
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
    try {
      const response = await toast.promise(
        adminInstance.post('/timeslots', JSON.stringify(timeSlot)),
        {
          pending: 'Запит в обробці...',
          success: 'Таймслот створений !',
        }
      )
      return response.data
    } catch (e: any) {
      console.log(e)
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${e.response.data}`,
        },
      )
    }
  },
)

export const updateTimeSlot = createAsyncThunk(
  'timeSlot/updateTimeSlot',
  async ({ id, timeSlot }: { id: number, timeSlot: Partial<TimeSlotRequest> }) => {
    try {
      const response = await toast.promise(
        adminInstance.patch(`/timeslots/${id}`, JSON.stringify(timeSlot)),
        {
          pending: 'Запит в обробці...',
          success: 'Таймслот оновлений !',
        }
      )
      return response.data
    } catch (e: any) {
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${e.message}`,
        },
      )
    }
  },
)

export const deleteTimeSlot = createAsyncThunk(
  'timeSlot/deleteTimeSlot',
  async (id: number) => {
    try {
      await toast.promise(
        adminInstance.delete(`/timeslots/${id}`),
        {
          pending: 'Запит в обробці...',
          success: 'Таймслот видалений !',
        }
      )
      return id
    } catch (e: any) {
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${e.message}`,
        },
      )
    }
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
      //All timeSlots for one day
      .addCase(fetchTimeSlotsForDayByTrainer.pending, (state) => {
        state.timeSlotsFetchStatus = 'pending'
      })
      .addCase(fetchTimeSlotsForDayByTrainer.fulfilled, (state, { payload }) => {
        state.timeSlotsFetchStatus = 'idle'
        state.allTimeSlots = payload
      })
      .addCase(fetchTimeSlotsForDayByTrainer.rejected, (state) => {
        state.timeSlotsFetchStatus = 'error'
      })
      // //All timeSlots
      // .addCase(fetchAllTimeSlots.pending, (state) => {
      //   state.timeSlotsFetchStatus = 'pending'
      // })
      // .addCase(fetchAllTimeSlots.fulfilled, (state, { payload }) => {
      //   state.timeSlotsFetchStatus = 'idle'
      //   state.allTimeSlots = payload
      // })
      // .addCase(fetchAllTimeSlots.rejected, (state) => {
      //   state.timeSlotsFetchStatus = 'error'
      // })
      // //All timeSlots for trainer
      // .addCase(fetchAllTimeSlotsByTrainer.pending, (state) => {
      //   state.trainerTimeSlotsFetchStatus = 'pending'
      // })
      // .addCase(fetchAllTimeSlotsByTrainer.fulfilled, (state, { payload }) => {
      //   state.trainerTimeSlotsFetchStatus = 'idle'
      //   state.timeSlotsForTrainer = payload
      // })
      // .addCase(fetchAllTimeSlotsByTrainer.rejected, (state) => {
      //   state.trainerTimeSlotsFetchStatus = 'error'
      // })
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
