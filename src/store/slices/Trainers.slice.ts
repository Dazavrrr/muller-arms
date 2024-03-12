import { FetchStatus, TrainerResponse } from '@/common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { guestInstance } from '@/api'

const initialState: {
  trainers: TrainerResponse[],
  trainersFetchStatus: FetchStatus,
} = {
  trainers: [],
  trainersFetchStatus: 'idle',
}


export const fetchAllTrainers = createAsyncThunk(
  'trainers/fetchAllTrainers',
  async () => {
    const response = await guestInstance.get('/trainers')
    return await response.data
  },
)



const TrainersSlice = createSlice({
  name: 'trainers',
  initialState,
  reducers: {
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
  },
})

const { reducer, actions } = TrainersSlice

export const {} = actions

export default reducer
