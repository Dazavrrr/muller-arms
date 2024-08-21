import {
  ArticleCreateRequest,
  ArticleResponse,
  ArticleSmallResponse,
  FetchStatus,
  PageWrapper,
} from '@/common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminInstance, guestInstance } from '@/api'

import { toast } from 'react-toastify'
import { createSection, updateSection } from '@/store/slices/Sections.slise'

const initialState: {
  articles: PageWrapper<ArticleSmallResponse> | null
  news: PageWrapper<ArticleSmallResponse> | null
  announcements: PageWrapper<ArticleSmallResponse> | null
  archives: PageWrapper<ArticleSmallResponse> | null
  currentArticle: ArticleResponse | null
  articlesFetchStatus: FetchStatus
  oneArticleFetchStatus: FetchStatus
  articleCreateStatus: FetchStatus
  articleUpdateStatus: FetchStatus
  articleDeleteStatus: FetchStatus
  updatedSectionIndex: number | null
} = {
  articles: null,
  news: null,
  announcements: null,
  archives: null,
  currentArticle: null,
  articlesFetchStatus: 'idle',
  oneArticleFetchStatus: 'idle',
  articleCreateStatus: 'idle',
  articleUpdateStatus: 'idle',
  articleDeleteStatus: 'idle',
  updatedSectionIndex: null,
}

export const fetchAllArticles = createAsyncThunk(
  'articles/fetchAllArticles',
  async (page: number) => {
    const response = await guestInstance.get(`/articles?page=${page}&size=9`)
    return await response.data
  }
)

export const fetchAllNews = createAsyncThunk(
  'articles/fetchAllNews',
  async (page: number) => {
    const response = await guestInstance.get(
      `/articles/news?page=${page}&size=9`
    )
    return await response.data
  }
)

export const fetchAllAnnouncements = createAsyncThunk(
  'articles/fetchAllAnnouncements',
  async (page: number) => {
    const response = await guestInstance.get(
      `/articles/events?page=${page}&size=9`
    )
    return await response.data
  }
)

export const fetchAllArchives = createAsyncThunk(
  'articles/fetchAllArchives',
  async (page: number) => {
    const response = await guestInstance.get(
      `/articles/archive?page=${page}&size=9`
    )
    return await response.data
  }
)

export const fetchOneArticle = createAsyncThunk(
  'articles/fetchOneArticle',
  async (id: number) => {
    const response = await guestInstance.get(`/articles/${id}`)
    return await response.data
  }
)

export const fetchOneArticleBySlug = createAsyncThunk(
  'articles/fetchOneArticleBySlug',
  async (slug: string) => {
    const response = await guestInstance.get(`/articles/slug/${slug}`)
    return await response.data
  }
)

export const createArticle = createAsyncThunk(
  'article/createArticle',
  async (article: ArticleCreateRequest) => {
    try {
      const response = await toast.promise(
        adminInstance.post('/articles', JSON.stringify(article)),
        {
          pending: 'Запит в обробці...',
          success: 'Статтю створено !',
        }
      )
      return response.data
    } catch (e: any) {
      return await toast.promise(Promise.reject(e), {
        error: `Сталася помилка... ${JSON.stringify(
          e.response.data
        ).toString()}`,
      })
    }
  }
)

export const updateArticle = createAsyncThunk(
  'article/updateArticle',
  async ({
    id,
    article,
  }: {
    id: number
    article: Partial<ArticleCreateRequest>
  }) => {
    try {
      const response = await toast.promise(
        adminInstance.patch(`/articles/${id}`, JSON.stringify(article)),
        {
          pending: 'Запит в обробці...',
          success: 'Статтю оновлено !',
        }
      )
      return response.data
    } catch (e: any) {
      return await toast.promise(Promise.reject(e), {
        error: `Сталася помилка... ${JSON.stringify(e.response.data)}`,
      })
    }
  }
)

export const deleteArticle = createAsyncThunk(
  'article/deleteArticle',
  async (id: number) => {
    try {
      await toast.promise(adminInstance.delete(`/articles/${id}`), {
        pending: 'Запит в обробці...',
        success: 'Статтю видалено !',
      })
      return id
    } catch (e: any) {
      return await toast.promise(Promise.reject(e), {
        error: `Сталася помилка... ${JSON.stringify(e.response.data)}`,
      })
    }
  }
)

const ArticlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    resetCurrentArticle(state) {
      state.currentArticle = null
    },
    updateSectionIndex(state, { payload }) {
      state.updatedSectionIndex = payload
    },
  },
  extraReducers: (builder) => {
    builder
      //All articles
      .addCase(fetchAllArticles.pending, (state) => {
        state.articlesFetchStatus = 'pending'
      })
      .addCase(fetchAllArticles.fulfilled, (state, { payload }) => {
        state.articlesFetchStatus = 'idle'
        const set = new Set()
        state.articles = payload
      })
      .addCase(fetchAllArticles.rejected, (state) => {
        state.articlesFetchStatus = 'error'
      })
      .addCase(fetchAllNews.fulfilled, (state, { payload }) => {
        const set = new Set()
        state.news = payload
      })
      .addCase(fetchAllAnnouncements.fulfilled, (state, { payload }) => {
        const set = new Set()
        state.announcements = payload
      })
      .addCase(fetchAllArchives.fulfilled, (state, { payload }) => {
        const set = new Set()
        state.archives = payload
      })
      //One article
      .addCase(fetchOneArticle.pending, (state) => {
        state.oneArticleFetchStatus = 'pending'
      })
      .addCase(fetchOneArticle.fulfilled, (state, { payload }) => {
        state.oneArticleFetchStatus = 'idle'
        state.currentArticle = payload
      })
      .addCase(fetchOneArticle.rejected, (state) => {
        state.oneArticleFetchStatus = 'error'
      })
      .addCase(fetchOneArticleBySlug.pending, (state) => {
        state.oneArticleFetchStatus = 'pending'
      })
      .addCase(fetchOneArticleBySlug.fulfilled, (state, { payload }) => {
        state.oneArticleFetchStatus = 'idle'
        state.currentArticle = payload
      })
      .addCase(fetchOneArticleBySlug.rejected, (state) => {
        state.oneArticleFetchStatus = 'error'
      })
      //Create article
      .addCase(createArticle.pending, (state) => {
        state.articleCreateStatus = 'pending'
      })
      .addCase(createArticle.fulfilled, (state, { payload }) => {
        state.articleCreateStatus = 'idle'
        if (
          !state.news ||
          !state.announcements ||
          !state.archives ||
          !state.articles
        ) {
          return
        }
        if (payload.isNews) {
          state.news.items = [...state.news.items, payload]
          return
        }
        if (payload.eventAddress != null) {
          state.announcements.items = [...state.announcements.items, payload]
          return
        }
        if (payload.isArchive) {
          state.archives.items = [...state.archives.items, payload]
          return
        }
        state.articles.items = [...state.articles.items, payload]
      })
      .addCase(createArticle.rejected, (state) => {
        state.articleCreateStatus = 'error'
      })
      //Update article
      .addCase(updateArticle.pending, (state) => {
        state.articleUpdateStatus = 'pending'
      })
      .addCase(updateArticle.fulfilled, (state, { payload }) => {
        if (!state.articles) {
          return
        }
        state.articleUpdateStatus = 'idle'
        state.articles.items = state.articles.items.map((t) => {
          if (t.id === payload.id) {
            return payload
          }
          return t
        })
        state.currentArticle = payload
      })
      .addCase(updateArticle.rejected, (state) => {
        state.articleUpdateStatus = 'error'
      })
      //Delete Article
      .addCase(deleteArticle.pending, (state) => {
        state.articleDeleteStatus = 'pending'
      })
      .addCase(deleteArticle.fulfilled, (state, { payload }) => {
        if (!state.articles) {
          return
        }
        state.articleDeleteStatus = 'idle'
        state.articles.items = state.articles.items.filter(
          (t) => t.id != payload
        )
      })
      .addCase(deleteArticle.rejected, (state) => {
        state.articleDeleteStatus = 'error'
      })
      .addCase(createSection.fulfilled, (state, { payload }) => {
        if (state.currentArticle && state.updatedSectionIndex) {
          state.currentArticle.sections = state.currentArticle.sections.map(
            (s, i) => {
              if (i == state.updatedSectionIndex) {
                return payload
              }
              return s
            }
          )
          state.updatedSectionIndex = null
        }
      })
  },
})

const { reducer, actions } = ArticlesSlice

export const { resetCurrentArticle, updateSectionIndex } = actions

export default reducer
