import { FetchStatus, TrainerRequest, TrainerResponse } from '@/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, guestInstance } from '@/api'

const initialState: {
  trainers: TrainerResponse[],
  currentTrainer: TrainerResponse | null,
  trainersFetchStatus: FetchStatus,
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
  'trainers/fetchAllTrainers',
  async () => {
    const response = await guestInstance.get('/trainers')
    return await response.data
  },
)

export const fetchOneTrainer = createAsyncThunk(
  'trainers/fetchOneTrainer',
  async (id: number) => {
    const response = await guestInstance.get(`/trainers/${id}`)
    return await response.data
  },
)

export const createTrainer = createAsyncThunk(
  'trainer/createTrainer',
  async (trainer: TrainerRequest) => {
    const response = await adminInstance.post('/trainer', JSON.stringify(trainer))
    return response.data
  },
)

export const updateTrainer = createAsyncThunk(
  'trainer/updateTrainer',
  async ({ id, trainer }: { id: number, trainer: Partial<TrainerRequest> }) => {
    const response = await adminInstance.patch(`/trainer/${id}`, JSON.stringify(trainer))
    return response.data
  },
)

export const deleteTrainer = createAsyncThunk(
  'trainer/deleteTrainer',
  async (id: number) => {
    await adminInstance.delete(`/trainer/${id}`)
    return id
  },
)


const TrainersSlice = createSlice({
  name: 'trainers',
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
        state.trainers = state.trainers.filter(t => t.id !== payload);
      })
      .addCase(deleteTrainer.rejected, (state) => {
        state.trainerDeleteStatus = 'error'
      })
  },
})

const { reducer, actions } = TrainersSlice

export const {resetCurrentTrainer} = actions

export default reducer
