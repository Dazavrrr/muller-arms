import axios from 'axios'
import * as process from 'process'

export const ENV_URL = process.env.NEXT_PUBLIC_BASE_URL

export const BASE_URL = `${ENV_URL}/api`

interface ApiResponse<T> {
  data?: T | null
  error?: unknown
}

export const getData = async <T>(
  url: string,
  params?: RequestInit
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...params?.headers,
      },
      cache: 'no-store',
      ...params,
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data: T = await response.json()
    return { data }
  } catch (error) {
    console.error('API error:', error)
    return { data: null, error }
  }
}

export async function postData<T>(url: string, data: unknown): Promise<T> {
  const body = JSON.stringify(data)
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    })

    if (!response.ok) {
      const error: unknown = await response.json()
      throw { data: error }
    }

    return await response.json()
  } catch (error) {
    console.error('Error in postData:', error)
    throw error
  }
}

export const guestInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const adminInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

adminInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('access')
  return config
})

adminInstance.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    if (
      (error.response &&
        error.response.status &&
        401 === error.response.status) ||
      403 === error.response.status
    ) {
      const originalRequest = error.config
      if (!originalRequest._retry) {
        originalRequest._retry = true
      }
      if (localStorage.getItem('refresh')) {
        const refresh = localStorage.getItem('refresh')

        try {
          const response = await axios.post(
            `${BASE_URL}/auth/refresh`,
            JSON.stringify({ refresh: refresh }),
            { headers: { 'Content-Type': 'application/json' } }
          )
          if (response.status === 200) {
            localStorage.setItem('access', response.data.access)
            originalRequest.headers.Authorization =
              'Bearer ' + response.data.access
            return axios(originalRequest)
          }
          localStorage.removeItem('access')
          localStorage.removeItem('refresh')
          window.location.href = '/login'
        } catch (exception) {
          localStorage.removeItem('access')
          localStorage.removeItem('refresh')
          window.location.href = '/login'
        }
      }
    }
    return Promise.reject(error)
  }
)
