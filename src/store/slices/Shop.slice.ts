import {
  FetchStatus,
  ShopCategoryCreateDto,
  ShopCategoryResponseDto,
  ShopItemCreateDto,
  ShopItemResponseDto,
} from '@/common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, guestInstance } from '@/api'
import { toast } from 'react-toastify'

const initialState : {
  categories: ShopCategoryResponseDto[],
  items: ShopItemResponseDto[],
  itemsFetchStatus: FetchStatus,
  currentItem: ShopItemResponseDto | null,
  currentItemFetchStatus: FetchStatus
} = {
  categories: [],
  items: [],
  itemsFetchStatus: 'idle',
  currentItem: null,
  currentItemFetchStatus: 'idle'
}

export const fetchAllCategories = createAsyncThunk(
  "shop/fetchAllCategories",
  async () => {
    const response = await guestInstance.get("/shop/categories");
    return await response.data;
  }
)

export const createCategory = createAsyncThunk(
  "shop/createCategory",
  async (data: ShopCategoryCreateDto) => {
    try {
      const response = await toast.promise(
        adminInstance.post("/shop/categories",JSON.stringify(data)),
        {
          pending: 'Запит в обробці...',
          success: 'Категорію створено !',
        }
      )
      return await response.data;
    }  catch (e: any) {
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${JSON.stringify(e.response.data).toString()}`,
        },
      )
    }
  }
)

export const deleteCategory = createAsyncThunk(
  "shop/deleteCategory",
  async (id: number) => {
    try {
      await toast.promise(
        adminInstance.delete(`/shop/categories/${id}`),
        {
          pending: 'Запит в обробці...',
          success: 'Категорію видалено !',
        }
      )
      return id;
    }  catch (e: any) {
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${JSON.stringify(e.response.data).toString()}`,
        },
      )
    }
  }
)

export const fetchAllItemsAdmin = createAsyncThunk(
  "shop/fetchAllItemsAdmin",
  async () => {
    const response = await adminInstance.get("/shop/admin");
    return await response.data;
  }
)

export const fetchOneShopItem = createAsyncThunk(
  "shop/findOneShopItem",
  async (id: number) => {
    const response = await adminInstance.get(`/shop/${id}`);
    return await response.data;
  }
)

export const createShopItem = createAsyncThunk(
  "shop/createShopItem",
  async (data: ShopItemCreateDto) => {
    try {
      const response = await toast.promise(
        adminInstance.post("/shop", JSON.stringify(data)),
        {
          pending: 'Запит в обробці...',
          success: 'Товар створено !',
        }
      )
      return await response.data;
    } catch (e: any) {
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${JSON.stringify(e.response.data).toString()}`,
        },
      )
    }
  }
)

export const updateShopItem = createAsyncThunk(
  "shop/updateShopItem",
  async ({ id, data } : {data: ShopItemCreateDto, id: number}) => {

    try {
      const response = await toast.promise(
        adminInstance.patch(`/shop/${id}` ,JSON.stringify(data)) ,
        {
          pending: 'Запит в обробці...',
          success: 'Товар оновлено !',
        }
      )
      return await response.data;
    } catch (e: any) {
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${JSON.stringify(e.response.data).toString()}`,
        },
      )
    }
  }
)

export const deleteShopItem = createAsyncThunk(
  "shop/deleteShopItem",
  async (id: number) => {
    try {
      await toast.promise(
        adminInstance.delete(`/shop/${id}`),
        {
          pending: 'Запит в обробці...',
          success: 'Товар видалено !',
        }
      )
      return id;
    }  catch (e: any) {
      return await toast.promise(
        Promise.reject(e),
        {
          error: `Сталася помилка... ${JSON.stringify(e.response.data).toString()}`,
        },
      )
    }
  }
)

const ShopSlice = createSlice(
  {
    name: "shop",
    initialState,
    reducers:{
      resetCurrentItem(state){
        state.currentItem = null
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllCategories.fulfilled, (state, {payload}) => {
          state.categories = payload;
        })
        .addCase(createCategory.fulfilled, (state, {payload}) => {
          state.categories = [...state.categories,payload];
        })
        .addCase(deleteCategory.fulfilled,  (state, {payload}) => {
          state.categories = state.categories.filter(c => c.id != payload);
        })
        .addCase(fetchAllItemsAdmin.pending,(state) => {
          state.itemsFetchStatus = 'pending';
        })
        .addCase(fetchAllItemsAdmin.fulfilled,(state, {payload}) => {
          state.itemsFetchStatus = 'idle';
          state.items = payload;
        })
        .addCase(fetchAllItemsAdmin.rejected,(state) => {
          state.itemsFetchStatus = 'error';
        })
        .addCase(fetchOneShopItem.pending, (state) => {
          state.currentItemFetchStatus = 'pending';
        })
        .addCase(fetchOneShopItem.fulfilled, (state, {payload}) => {
          state.currentItemFetchStatus = 'idle';
          state.currentItem = payload;
        })
        .addCase(fetchOneShopItem.rejected, (state) => {
          state.currentItemFetchStatus = 'error';
        })
        .addCase(createShopItem.fulfilled,(state, {payload}) => {
          state.items = [...state.items,payload]
        })
        .addCase(updateShopItem.fulfilled,(state, {payload}) => {
          state.items = state.items.map(item => item.id == payload.id ? payload : item)
        })
        .addCase(deleteShopItem.fulfilled,(state, {payload}) => {
          state.items = state.items.filter(item => item.id != payload);
        })
    }
  }
)

const {actions,reducer} = ShopSlice;


export const {resetCurrentItem} = actions

export default reducer;