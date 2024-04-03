import { SectionCreateRequest, SectionResponse, FetchStatus } from '@/common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, guestInstance } from '@/api'

import { toast } from 'react-toastify'

const initialState: {
  sections: SectionResponse[],
  currentSection: SectionResponse | null,
  sectionsFetchStatus: FetchStatus,
  oneSectionFetchStatus: FetchStatus,
  sectionCreateStatus: FetchStatus,
  sectionUpdateStatus: FetchStatus,
  sectionDeleteStatus: FetchStatus,
} = {
  sections: [],
  currentSection: null,
  sectionsFetchStatus: 'idle',
  oneSectionFetchStatus: 'idle',
  sectionCreateStatus: 'idle',
  sectionUpdateStatus: 'idle',
  sectionDeleteStatus: 'idle',
}


export const fetchAllSections = createAsyncThunk(
  'sections/fetchAllSections',
  async (articleId: number) => {
    const response = await guestInstance.get(`/sections/${articleId}`);
    return await response.data
  },
)


export const createSection = createAsyncThunk(
  'section/createSection',
  async (section: Partial<SectionCreateRequest>) => {
    try {
      const response = await toast.promise(
        adminInstance.post('/sections', JSON.stringify(section)),
        {
          pending: 'Запит в обробці...',
          success: 'Параграф створено !',
        }
      )
      return response.data
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

export const updateSection = createAsyncThunk(
  'section/updateSection',
  async ({ id, section }: { id: number, section: Partial<SectionResponse> }) => {
    try {
      const response = await toast.promise(
        adminInstance.patch(`/sections/${id}`, JSON.stringify(section)),
        {
          pending: 'Запит в обробці...',
          success: 'Параграф оновлено !',
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

export const deleteSection = createAsyncThunk(
  'section/deleteSection',
  async (id: number) => {
    try {
      await toast.promise(
        adminInstance.delete(`/sections/${id}`),
        {
          pending: 'Запит в обробці...',
          success: 'Параграф видалено !',
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


const SectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    resetCurrentSection(state) {
      state.currentSection = null
    },
  },
  extraReducers: (builder) => {
    builder
      //All sections
      .addCase(fetchAllSections.pending, (state) => {
        state.sectionsFetchStatus = 'pending'
      })
      .addCase(fetchAllSections.fulfilled, (state, { payload }) => {
        state.sectionsFetchStatus = 'idle'
        state.sections = payload
      })
      .addCase(fetchAllSections.rejected, (state) => {
        state.sectionsFetchStatus = 'error'
      })
      //Create section
      .addCase(createSection.pending, (state) => {
        state.sectionCreateStatus = 'pending'
      })
      .addCase(createSection.fulfilled, (state, { payload }) => {
        state.sectionCreateStatus = 'idle'
        state.sections = [...state.sections, payload]
      })
      .addCase(createSection.rejected, (state) => {
        state.sectionCreateStatus = 'error'
      })
      //Update section
      .addCase(updateSection.pending, (state) => {
        state.sectionUpdateStatus = 'pending'
      })
      .addCase(updateSection.fulfilled, (state, { payload }) => {
        state.sectionUpdateStatus = 'idle'
        state.sections = state.sections.map(t => {
          if (t.id === payload.id) {
            return payload
          }
          return t
        })
        state.currentSection = payload;
      })
      .addCase(updateSection.rejected, (state) => {
        state.sectionUpdateStatus = 'error'
      })
      //Delete Section
      .addCase(deleteSection.pending, (state) => {
        state.sectionDeleteStatus = 'pending'
      })
      .addCase(deleteSection.fulfilled, (state, { payload }) => {
        state.sectionDeleteStatus = 'idle'
        state.sections = state.sections.filter(t => t.id != payload);
      })
      .addCase(deleteSection.rejected, (state) => {
        state.sectionDeleteStatus = 'error'
      })
  },
})

const { reducer, actions } = SectionsSlice

export const {resetCurrentSection} = actions

export default reducer
