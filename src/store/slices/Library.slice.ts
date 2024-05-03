import {
  FetchStatus,
  LibCategory,
  LibCategoryCreateDto,
  LibDocResponseDto,
  PageWrapper,
} from '@/common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, guestInstance } from '@/api'
import { toast } from 'react-toastify'

const initialState: {
  categories: LibCategory[]
  docs: PageWrapper<LibDocResponseDto> | null
  currentDoc: LibDocResponseDto | null
  currentDocFetchStatus: FetchStatus
  docsFetchStatus: FetchStatus
  page: number
  searchValue: string
  selectedCategories: number[]
  checkbox: string[]
} = {
  categories: [],
  docs: null,
  currentDoc: null,
  currentDocFetchStatus: 'idle',
  docsFetchStatus: 'idle',
  page: 0,
  searchValue: '',
  selectedCategories: [],
  checkbox: [`BOOK`, `AUDIO`, `VIDEO`],
}

export const fetchAllCategories = createAsyncThunk(
  'library/fetchAllCategories',
  async () => {
    const response = await guestInstance.get('/library/categories')
    return await response.data
  }
)

export const fetchAllDocs = createAsyncThunk(
  'library/fetchAllDocs',
  async (page: number) => {
    const response = await guestInstance.get(`/library?page=${page}&size=10`)
    return await response.data
  }
)

export const fetchSearchDocs = createAsyncThunk(
  'library/fetchSearchDocs',
  async ({ name }: { name: string }) => {
    const response = await guestInstance.get(`/library/search?name=${name}`)
    return await response.data
  }
)

export const fetchDocsByCategories = createAsyncThunk(
  'library/fetchDocsByCategories',
  async ({
    categories,
    page,
    types,
  }: {
    categories: number[]
    page: number
    types: string[]
  }) => {
    const response = await guestInstance.get(
      `/library?page=${page}&size=12&categories=${categories}&types=${types}`
    )
    return await response.data
  }
)

export const fetchDocsByTypes = createAsyncThunk(
  'library/fetchDocsByTypes',
  async ({ types, page }: { types: string[]; page: number }) => {
    const response = await guestInstance.get(
      `/library?page=${page}&size=12&types=${types}`
    )
    return await response.data
  }
)

export const fetchAllDocsAdmin = createAsyncThunk(
  'library/fetchAllDocsAdmin',
  async () => {
    const response = await adminInstance.get(`/library/admin`)
    return await response.data
  }
)

export const fetchDocById = createAsyncThunk(
  'library/fetchDocById',
  async (id: number) => {
    const response = await guestInstance.get(`/library/${id}`)
    return await response.data
  }
)

export const createLibCategory = createAsyncThunk(
  'library/createCategory',
  async (category: LibCategoryCreateDto) => {
    try {
      const response = await toast.promise(
        adminInstance.post('/library/categories', JSON.stringify(category)),
        {
          pending: 'Запит в обробці...',
          success: 'Категорію створено !',
        }
      )
      return await response.data
    } catch (e: any) {
      return await toast.promise(Promise.reject(e), {
        error: `Сталася помилка... ${JSON.stringify(e.response.data)}`,
      })
    }
  }
)

export const createDoc = createAsyncThunk(
  'library/createDoc',
  async (doc: FormData) => {
    try {
      const response = await toast.promise(
        adminInstance.post('/library', doc, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
        {
          pending: 'Запит в обробці...',
          success: 'Документ створено !',
        }
      )
      return await response.data
    } catch (e: any) {
      return await toast.promise(Promise.reject(e), {
        error: `Сталася помилка... ${JSON.stringify(e.response.data)}`,
      })
    }
  }
)

export const updateLibDoc = createAsyncThunk(
  'library/updateLibDoc',
  async ({ id, doc }: { id: number; doc: FormData }) => {
    try {
      const response = await toast.promise(
        adminInstance.put(`/library/${id}`, doc, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
        {
          pending: 'Запит в обробці...',
          success: 'Документ оновлено !',
        }
      )
      return await response.data
    } catch (e: any) {
      return await toast.promise(Promise.reject(e), {
        error: `Сталася помилка... ${JSON.stringify(e.response.data)}`,
      })
    }
  }
)

export const deleteCategory = createAsyncThunk(
  'library/deleteCategory',
  async (id: number) => {
    try {
      await toast.promise(adminInstance.delete(`/library/categories/${id}`), {
        pending: 'Запит в обробці...',
        success: 'Категорію видалено !',
      })
      return id
    } catch (e: any) {
      return await toast.promise(Promise.reject(e), {
        error: `Сталася помилка... ${JSON.stringify(e.response.data)}`,
      })
    }
  }
)

export const deleteDoc = createAsyncThunk(
  'library/deleteDoc',
  async (id: number) => {
    try {
      await toast.promise(adminInstance.delete(`/library/${id}`), {
        pending: 'Запит в обробці...',
        success: 'Документ видалено !',
      })
      return id
    } catch (e: any) {
      return await toast.promise(Promise.reject(e), {
        error: `Сталася помилка... ${JSON.stringify(e.response.data)}`,
      })
    }
  }
)

const LibrarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    resetCurrentDoc(state) {
      state.currentDoc = null
    },
    handlePage(state, { payload }) {
      state.page = payload
    },
    handleSearch(state, { payload }) {
      state.searchValue = payload
    },
    handleCheckbox(state, { payload }) {
      state.checkbox = payload
    },
    handleCategories(state, { payload }) {
      state.selectedCategories = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.fulfilled, (state, { payload }) => {
        state.categories = payload
      })
      .addCase(fetchAllDocsAdmin.pending, (state, { payload }) => {
        state.docsFetchStatus = 'pending'
      })
      .addCase(fetchAllDocsAdmin.fulfilled, (state, { payload }) => {
        state.docsFetchStatus = 'idle'
        state.docs = payload
      })
      .addCase(fetchAllDocsAdmin.rejected, (state, { payload }) => {
        state.docsFetchStatus = 'error'
      })
      .addCase(fetchAllDocs.pending, (state, { payload }) => {
        state.docsFetchStatus = 'pending'
      })
      .addCase(fetchAllDocs.fulfilled, (state, { payload }) => {
        state.docsFetchStatus = 'idle'
        state.docs = payload
      })
      .addCase(fetchAllDocs.rejected, (state, { payload }) => {
        state.docsFetchStatus = 'error'
      })
      .addCase(fetchSearchDocs.pending, (state, { payload }) => {
        state.docsFetchStatus = 'pending'
      })
      .addCase(fetchSearchDocs.fulfilled, (state, { payload }) => {
        state.docsFetchStatus = 'idle'
        state.docs = payload
      })
      .addCase(fetchSearchDocs.rejected, (state, { payload }) => {
        state.docsFetchStatus = 'error'
      })
      .addCase(fetchDocById.pending, (state, { payload }) => {
        state.currentDocFetchStatus = 'pending'
      })
      .addCase(fetchDocById.fulfilled, (state, { payload }) => {
        state.currentDocFetchStatus = 'idle'
        state.currentDoc = payload
      })
      .addCase(fetchDocById.rejected, (state, { payload }) => {
        state.currentDocFetchStatus = 'error'
      })
      .addCase(fetchDocsByCategories.pending, (state, { payload }) => {
        state.docsFetchStatus = 'pending'
      })
      .addCase(fetchDocsByCategories.fulfilled, (state, { payload }) => {
        state.docsFetchStatus = 'idle'
        state.docs = payload
      })
      .addCase(fetchDocsByCategories.rejected, (state, { payload }) => {
        state.docsFetchStatus = 'error'
      })
      .addCase(fetchDocsByTypes.pending, (state, { payload }) => {
        state.docsFetchStatus = 'pending'
      })
      .addCase(fetchDocsByTypes.fulfilled, (state, { payload }) => {
        state.docsFetchStatus = 'idle'
        state.docs = payload
      })
      .addCase(fetchDocsByTypes.rejected, (state, { payload }) => {
        state.docsFetchStatus = 'error'
      })
      .addCase(createLibCategory.fulfilled, (state, { payload }) => {
        state.categories = [...state.categories, payload]
      })
      .addCase(createDoc.fulfilled, (state, { payload }) => {
        if (state.docs == null) {
          state.docs = payload
          return
        }
        state.docs.hasNext = payload.hasNext
        state.docs.allItemsCount = payload.allItemsCount
        state.docs.items = [...state.docs.items, payload.items]
      })
      .addCase(updateLibDoc.fulfilled, (state, { payload }) => {
        if (state.docs == null) {
          return
        }
        state.docs.items = state.docs.items.map((c) => {
          if (c.id == payload.id) {
            return payload
          }
          return c
        })
      })
      .addCase(deleteCategory.fulfilled, (state, { payload }) => {
        state.categories = state.categories.filter((c) => c.id != payload)
      })
      .addCase(deleteDoc.fulfilled, (state, { payload }) => {
        if (state.docs == null) {
          return
        }
        state.docs.items = state.docs.items.filter((c) => c.id != payload)
      })
  },
})

const { reducer, actions } = LibrarySlice

export const {
  resetCurrentDoc,
  handleCategories,
  handleCheckbox,
  handlePage,
  handleSearch,
} = actions

export default reducer
