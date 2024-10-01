import {
  FetchStatus, PageWrapper,
  ShopCategoryCreateDto,
  ShopCategoryResponseDto,
  ShopItemCreateDto,
  ShopItemResponseDto,
} from '@/common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, guestInstance } from '@/api'
import { toast } from 'react-toastify'

const initialState: {
  categories: ShopCategoryResponseDto[],
  categoriesFetchStatus: FetchStatus,
  items: PageWrapper<ShopItemResponseDto> | null,
  itemsFetchStatus: FetchStatus,
  currentItem: ShopItemResponseDto | null,
  currentItemFetchStatus: FetchStatus,
  selectedCategories: number[],
  searchValue: string,
  sortValue: 'REC' | 'PRICE_ASC' | 'PRICE_DESC' | 'ALPH_ASC' | 'ALPH_DESC',
  prices: number[],
  filtersUpdated: boolean
} = {
  categories: [],
  items: null,
  itemsFetchStatus: 'pending',
  categoriesFetchStatus: 'pending',
  currentItem: null,
  currentItemFetchStatus: 'idle',
  selectedCategories: [],
  searchValue: '',
  sortValue: 'REC',
  prices: [0, 50000],
  filtersUpdated: false,
}

export const fetchAllCategories = createAsyncThunk(
  'shop/fetchAllCategories',
  async () => {
    const response = await guestInstance.get('/shop/categories')
    return await response.data
  },
)

export const createCategory = createAsyncThunk(
  'shop/createCategory',
  async (data: ShopCategoryCreateDto) => {
    try {
      const response = await toast.promise(
        adminInstance.post('/shop/categories', JSON.stringify(data)),
        {
          pending: 'Запит в обробці...',
          success: 'Категорію створено !',
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

export const deleteCategory = createAsyncThunk(
  'shop/deleteCategory',
  async (id: number) => {
    try {
      await toast.promise(
        adminInstance.delete(`/shop/categories/${id}`),
        {
          pending: 'Запит в обробці...',
          success: 'Категорію видалено !',
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

export const fetchAllItemsAdmin = createAsyncThunk(
  'shop/fetchAllItemsAdmin',
  async () => {
    const response = await adminInstance.get('/shop/admin')
    return await response.data
  },
)

export const fetchAllItems = createAsyncThunk(
  'shop/fetchAllItems',
  async ({ page, size, searchValue, sortValue, categories, prices }:
           {
             page: number,
             size: number,
             searchValue?: string,
             sortValue: string,
             categories?: number[],
             prices?: number[]
           },
  ) => {
    let url = `/shop?page=${page}&size=${size}&sortValue=${sortValue}`;
    if (searchValue && searchValue.length > 0){
      url = url + `&searchValue=${searchValue}`
    }
    if (categories && categories.length > 0){
      url = url + `&categoryIds=${categories}`;
    }
    if (prices){
      url = url + `&minPrice=${prices[0]}&maxPrice=${prices[1]}`;
    }

    const response = await guestInstance.get(url)
    return await response.data
  },
)


export const fetchOneShopItem = createAsyncThunk(
  'shop/findOneShopItem',
  async (id: number | string) => {
    const response = await adminInstance.get(`/shop/${id}`)
    return await response.data
  },
)


export const createShopItem = createAsyncThunk(
  'shop/createShopItem',
  async (data: ShopItemCreateDto) => {
    try {
      const response = await toast.promise(
        adminInstance.post('/shop', JSON.stringify(data)),
        {
          pending: 'Запит в обробці...',
          success: 'Товар створено !',
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

export const updateShopItem = createAsyncThunk(
  'shop/updateShopItem',
  async ({ id, data }: { data: ShopItemCreateDto, id: number }) => {

    try {
      const response = await toast.promise(
        adminInstance.patch(`/shop/${id}`, JSON.stringify(data)),
        {
          pending: 'Запит в обробці...',
          success: 'Товар оновлено !',
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

export const deleteShopItem = createAsyncThunk(
  'shop/deleteShopItem',
  async (id: number) => {
    try {
      await toast.promise(
        adminInstance.delete(`/shop/${id}`),
        {
          pending: 'Запит в обробці...',
          success: 'Товар видалено !',
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

const ShopSlice = createSlice(
  {
    name: 'shop',
    initialState,
    reducers: {
      resetCurrentItem(state) {
        state.currentItem = null
      },
      handleSearch(state, { payload }) {
        state.searchValue = payload;
        state.filtersUpdated = true
      },
      resetFiltersUpd(state) {
        state.filtersUpdated = false;
      },
      handlePrices(state, { payload }) {
        state.prices = payload
        state.filtersUpdated = true
      },
      handleSort(state, { payload }: { payload: 'REC' | 'PRICE_ASC' | 'PRICE_DESC' | 'ALPH_ASC' | 'ALPH_DESC' }) {
        state.sortValue = payload
        state.filtersUpdated = true
      },
      changeSelectedCategories(state, { payload }) {
        state.selectedCategories = payload
        state.filtersUpdated = true
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllCategories.pending, (state) => {
          state.categoriesFetchStatus = 'pending'
        })
        .addCase(fetchAllCategories.fulfilled, (state, { payload }) => {
          state.categories = payload
          state.categoriesFetchStatus = 'idle'
        })
        .addCase(createCategory.fulfilled, (state, { payload }) => {
          state.categories = [...state.categories, payload]
        })
        .addCase(deleteCategory.fulfilled, (state, { payload }) => {
          state.categories = state.categories.filter(c => c.id != payload)
        })
        .addCase(fetchAllItemsAdmin.pending, (state) => {
          state.itemsFetchStatus = 'pending'
        })
        .addCase(fetchAllItemsAdmin.fulfilled, (state, { payload }) => {
          state.itemsFetchStatus = 'idle'
          state.items = payload
        })
        .addCase(fetchAllItemsAdmin.rejected, (state) => {
          state.itemsFetchStatus = 'error'
        })
        .addCase(fetchAllItems.pending, (state) => {
          state.itemsFetchStatus = 'pending'
        })
        .addCase(fetchAllItems.fulfilled, (state, { payload }) => {
          state.itemsFetchStatus = 'idle'
          state.items = payload
        })
        .addCase(fetchAllItems.rejected, (state) => {
          state.itemsFetchStatus = 'error'
        })
        .addCase(fetchOneShopItem.pending, (state) => {
          state.currentItemFetchStatus = 'pending'
        })
        .addCase(fetchOneShopItem.fulfilled, (state, { payload }) => {
          state.currentItemFetchStatus = 'idle'
          state.currentItem = payload
        })
        .addCase(fetchOneShopItem.rejected, (state) => {
          state.currentItemFetchStatus = 'error'
        })
        .addCase(createShopItem.fulfilled, (state, { payload }) => {
          if (state.items){
            state.items.items = [...state.items.items, payload]
          }
        })
        .addCase(updateShopItem.fulfilled, (state, { payload }) => {
           if (state.items){
             state.items.items = state.items.items.map(item => item.id == payload.id ? payload : item)
           }

        })
        .addCase(deleteShopItem.fulfilled, (state, { payload }) => {
           if (state.items){
             state.items.items = state.items.items.filter(item => item.id != payload)
           }
        })
    },
  },
)

const { actions, reducer } = ShopSlice


export const { resetCurrentItem, changeSelectedCategories, handleSearch, handlePrices, handleSort,resetFiltersUpd } = actions

export default reducer