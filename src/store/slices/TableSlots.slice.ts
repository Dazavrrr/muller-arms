import { TableSlot, TableSlotCreateDto, TableSlotsType } from '@/common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, guestInstance } from '@/api'
import { toast } from 'react-toastify'


const initialState: {
  slots: TableSlot[]
} = {
  slots: [],
}


export const fetchAllClassifications = createAsyncThunk(
  'tableSlots/fetchAllClassifications',
  async () => {
    const response = await guestInstance.get(`/tables`)
    return await response.data
  },
)

export const fetchAllTableSlotsByType = createAsyncThunk(
  'tableSlots/fetchAllTableSlotsByType',
  async ({ type, task }: { type: TableSlotsType, task: number }) => {
    const response = await guestInstance.get(`/tables/type?type=${type}&task=${task}`)
    return await response.data
  },
)

export const createTableSlot = createAsyncThunk(
  'tableSlots/createTableSlot',
  async (data: TableSlotCreateDto) => {
    try {
      const response = await toast.promise(
        adminInstance.post('/tables', JSON.stringify(data)),
        {
          pending: 'Запит в обробці...',
          success: 'Запис доданий',
        },
      )
      return await response.data
    } catch (e: any) {
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${JSON.stringify(e.response.data).toString()}`,
        },
      )
    }
  },
)

export const createTableSlotsFromList = createAsyncThunk(
  'tableSlots/createTableSlotsFromList',
  async (data: TableSlotCreateDto[]) => {
    try {
      const response = await toast.promise(
        adminInstance.post('/tables/list', JSON.stringify(data)),
        {
          pending: 'Запит в обробці...',
          success: 'Запис доданий',
        },
      )
      return await response.data
    } catch (e: any) {
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${JSON.stringify(e.response.data).toString()}`,
        },
      )
    }
  },
)

export const updateTableSlot = createAsyncThunk(
  'tableSlots/updateTableSlot',
  async ({ id, data }: { id: number, data: Partial<TableSlotCreateDto> }) => {
    try {
      const response = await toast.promise(
        adminInstance.put(`/tables/${id}`, JSON.stringify(data)),
        {
          pending: 'Запит в обробці...',
          success: 'Запис оновлений',
        },
      )
      return await response.data
    } catch (e: any) {
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${JSON.stringify(e.response.data).toString()}`,
        },
      )
    }
  },
)

export const deleteTableSlot = createAsyncThunk(
  'tableSlots/deleteTableSlot',
  async (id: number) => {
    try {
      const response = await toast.promise(
        adminInstance.delete(`/tables/${id}`),
        {
          pending: 'Запит в обробці...',
          success: 'Запис видалено',
        },
      )
      return id
    } catch (e: any) {
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${JSON.stringify(e.response.data).toString()}`,
        },
      )
    }
  },
)

const TableSlotsSlice = createSlice({
  name: 'TableSlots',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllClassifications.fulfilled, (state, { payload }) => {
        state.slots = payload
      })
      .addCase(fetchAllTableSlotsByType.fulfilled, (state, { payload }) => {
        state.slots = payload
      })
      .addCase(createTableSlot.fulfilled, (state, { payload }) => {
        state.slots = [...state.slots, payload]
      })
      .addCase(createTableSlotsFromList.fulfilled, (state, { payload }) => {
        state.slots = payload;
      })
      .addCase(updateTableSlot.fulfilled, (state, { payload }) => {
        state.slots = state.slots.map(s => {
          if (s.id == payload.id) {
            return payload
          }
          return s
        })
      })
      .addCase(deleteTableSlot.fulfilled, (state, { payload }) => {
        state.slots = state.slots.filter(s => s.id != payload)
      })
  },
})

const { reducer, actions } = TableSlotsSlice

export default reducer