import { FetchStatus } from '@/common/types'
import { TrainerAdminRequest, TrainerAdminResponse } from '@/common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, BASE_URL } from '@/api'
import { toast } from 'react-toastify'


const initialState: {
  trainers: TrainerAdminResponse[],
  trainersFetchStatus: FetchStatus,
  currentTrainer: TrainerAdminResponse | null,
  oneTrainerFetchStatus: FetchStatus,
  trainerCreateStatus: FetchStatus,
  trainerUpdateStatus: FetchStatus,
  trainerDeleteStatus: FetchStatus,
} = {
  trainers: [],
  currentTrainer: null,
  trainersFetchStatus: 'idle',
  oneTrainerFetchStatus: 'idle',
  trainerCreateStatus: 'idle',
  trainerUpdateStatus: 'idle',
  trainerDeleteStatus: 'idle',
}

export const fetchAllTrainers = createAsyncThunk(
  'adminTrainers/fetchAllTrainers',
  async () => {
    const response = await adminInstance.get(`${BASE_URL}/trainers/admin`)
    return await response.data
  },
)

export const fetchOneTrainer = createAsyncThunk(
  'adminTrainers/fetchOneTrainer',
  async (id: number) => {
    const response = await adminInstance.get(`/trainers/${id}`)
    return await response.data
  },
)

export const createTrainer = createAsyncThunk(
  'adminTrainers/createTrainer',
  async (trainer: TrainerAdminRequest) => {
    try {
      const response = await toast.promise(
        adminInstance.post('/trainers', JSON.stringify(trainer)),
        {
          pending: 'Запит в обробці...',
          success: 'Тренер створений !',
        },
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

export const updateTrainer = createAsyncThunk(
  'adminTrainers/updateTrainer',
  async ({ id, trainer }: { id: number, trainer: Partial<TrainerAdminRequest> }) => {
    try {
      const response = await toast.promise(
        adminInstance.patch(`/trainers/${id}`, JSON.stringify(trainer)),
        {
          pending: 'Запит в обробці...',
          success: 'Тренер оновлений !',
        },
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

export const deleteTrainer = createAsyncThunk(
  'adminTrainers/deleteTrainer',
  async (id: number) => {
    try {
      await toast.promise(
        adminInstance.delete(`/trainers/${id}`),
        {
          pending: 'Запит в обробці...',
          success: 'Тренер видалений !',
        },
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

const TrainersAdminSlice = createSlice({
  name: 'adminTrainers',
  initialState,
  reducers: {
    resetCurrentTrainer(state) {
      state.currentTrainer = null
    },
  },
  extraReducers: (builder) => {
    builder
      //All trainers
      .addCase(fetchAllTrainers.pending, (state) => {
        state.trainersFetchStatus = 'pending'
      })
      .addCase(fetchAllTrainers.fulfilled, (state, { payload }) => {
        state.trainersFetchStatus = 'idle'
        state.trainers = payload
      })
      .addCase(fetchAllTrainers.rejected, (state) => {
        state.trainersFetchStatus = 'error'
      })
      //One trainer
      .addCase(fetchOneTrainer.pending, (state) => {
        state.oneTrainerFetchStatus = 'pending'
      })
      .addCase(fetchOneTrainer.fulfilled, (state, { payload }) => {
        state.oneTrainerFetchStatus = 'idle'
        state.currentTrainer = payload
      })
      .addCase(fetchOneTrainer.rejected, (state) => {
        state.oneTrainerFetchStatus = 'error'
      })
      //Create trainer
      .addCase(createTrainer.pending, (state) => {
        state.trainerCreateStatus = 'pending'
      })
      .addCase(createTrainer.fulfilled, (state, { payload }) => {
        state.trainerCreateStatus = 'idle'
        state.trainers = [...state.trainers, payload]
        state.currentTrainer = payload;
      })
      .addCase(createTrainer.rejected, (state) => {
        state.trainerCreateStatus = 'error'
      })
      //Update trainer
      .addCase(updateTrainer.pending, (state) => {
        state.trainerUpdateStatus = 'pending'
      })
      .addCase(updateTrainer.fulfilled, (state, { payload }) => {
        state.trainerUpdateStatus = 'idle'
        state.trainers = state.trainers.map(t => {
          if (t.id === payload.id) {
            return payload
          }
          return t
        })
      })
      .addCase(updateTrainer.rejected, (state) => {
        state.trainerUpdateStatus = 'error'
      })
      //Delete Trainer
      .addCase(deleteTrainer.pending, (state) => {
        state.trainerDeleteStatus = 'pending'
      })
      .addCase(deleteTrainer.fulfilled, (state, { payload }) => {
        state.trainerDeleteStatus = 'idle'
        state.trainers = state.trainers.filter(t => t.id !== payload)
      })
      .addCase(deleteTrainer.rejected, (state) => {
        state.trainerDeleteStatus = 'error'
      })
  },
})

const { reducer, actions } = TrainersAdminSlice

export const { resetCurrentTrainer } = actions

export default reducer