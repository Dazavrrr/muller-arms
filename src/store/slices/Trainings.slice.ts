import { FetchStatus, TrainingResponse } from '@/common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, guestInstance } from '@/api'
import { TrainingRequest } from '@/common/adminTypes'
import { toast } from 'react-toastify'

const initialState: {
  trainings: TrainingResponse[],
  currentTraining: TrainingResponse | null,
  trainingsFetchStatus: FetchStatus,
  oneTrainingFetchStatus: FetchStatus,
  trainingCreateStatus: FetchStatus,
  trainingUpdateStatus: FetchStatus,
  trainingDeleteStatus: FetchStatus,
} = {
  trainings: [],
  currentTraining: null,
  trainingsFetchStatus: 'idle',
  oneTrainingFetchStatus: 'idle',
  trainingCreateStatus: 'idle',
  trainingUpdateStatus: 'idle',
  trainingDeleteStatus: 'idle',
}


export const fetchAllTrainings = createAsyncThunk(
  'trainings/fetchAllTrainings',
  async () => {
    const response = await guestInstance.get('/trainings')
    return await response.data
  },
)

export const fetchOneTraining = createAsyncThunk(
  'trainings/fetchOneTraining',
  async (id: number) => {
    const response = await guestInstance.get(`/trainings/${id}`)
    return await response.data
  },
)

export const createTraining = createAsyncThunk(
  'training/createTraining',
  async (training: TrainingRequest) => {
    try {
      const response = await toast.promise(
        adminInstance.post('/trainings', JSON.stringify(training)),
        {
          pending: 'Запит в обробці...',
          success: 'Тренування створено !',
        },
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

export const updateTraining = createAsyncThunk(
  'training/updateTraining',
  async ({ id, training }: { id: number, training: Partial<TrainingRequest> }) => {
    try {
      const response = await toast.promise(
        adminInstance.patch(`/trainings/${id}`, JSON.stringify(training)),
        {
          pending: 'Запит в обробці...',
          success: 'Тренування оновлено !',
        },
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

export const deleteTraining = createAsyncThunk(
  'training/deleteTraining',
  async (id: number) => {
    try {
      await toast.promise(
        adminInstance.delete(`/trainings/${id}`),
        {
          pending: 'Запит в обробці...',
          success: 'Тренування видалено !',
        },
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


const TrainingsSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {
    resetCurrentTraining(state) {
      state.currentTraining = null
    },
  },
  extraReducers: (builder) => {
    builder
      //All trainings
      .addCase(fetchAllTrainings.pending, (state) => {
        state.trainingsFetchStatus = 'pending'
      })
      .addCase(fetchAllTrainings.fulfilled, (state, { payload }) => {
        state.trainingsFetchStatus = 'idle'
        state.trainings = payload
      })
      .addCase(fetchAllTrainings.rejected, (state) => {
        state.trainingsFetchStatus = 'error'
      })
      //One training
      .addCase(fetchOneTraining.pending, (state) => {
        state.oneTrainingFetchStatus = 'pending'
      })
      .addCase(fetchOneTraining.fulfilled, (state, { payload }) => {
        state.oneTrainingFetchStatus = 'idle'
        state.currentTraining = payload
      })
      .addCase(fetchOneTraining.rejected, (state) => {
        state.oneTrainingFetchStatus = 'error'
      })
      //Create training
      .addCase(createTraining.pending, (state) => {
        state.trainingCreateStatus = 'pending'
      })
      .addCase(createTraining.fulfilled, (state, { payload }) => {
        state.trainingCreateStatus = 'idle'
        state.trainings = [...state.trainings, payload]
        window.location.href = `/admin/trainings/${payload.id}`;
      })
      .addCase(createTraining.rejected, (state) => {
        state.trainingCreateStatus = 'error'
      })
      //Update training
      .addCase(updateTraining.pending, (state) => {
        state.trainingUpdateStatus = 'pending'
      })
      .addCase(updateTraining.fulfilled, (state, { payload }) => {
        state.trainingUpdateStatus = 'idle'
        state.trainings = state.trainings.map(t => {
          if (t.id === payload.id) {
            return payload
          }
          return t
        })
      })
      .addCase(updateTraining.rejected, (state) => {
        state.trainingUpdateStatus = 'error'
      })
      //Delete Training
      .addCase(deleteTraining.pending, (state) => {
        state.trainingDeleteStatus = 'pending'
      })
      .addCase(deleteTraining.fulfilled, (state, { payload }) => {
        state.trainingDeleteStatus = 'idle'
        state.trainings = state.trainings.filter(t => t.id !== payload)
      })
      .addCase(deleteTraining.rejected, (state) => {
        state.trainingDeleteStatus = 'error'
      })
  },
})

const { reducer, actions } = TrainingsSlice

export const { resetCurrentTraining } = actions

export default reducer
