import axios from 'axios'
import * as process from 'process'

export const ENV_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const BASE_URL = `${ENV_URL}/api`;


export const guestInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const adminInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

adminInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = "Bearer " + localStorage.getItem("access")
  return config;
});

adminInstance.interceptors.response.use(function (response) {
  return response;
}, async function (error) {
  if (401 === error.response.status) {
    const originalRequest = error.config;

    if (!originalRequest._retry) {
      originalRequest._retry = true;
    }

    try {
      if (localStorage.getItem("refresh")) {
        const response = await axios.post(`${BASE_URL}/auth/refresh`,
          JSON.stringify(
            {refresh: localStorage.getItem("refresh")}
          ),
          {headers: {'Content-Type': 'application/json'}}
        );

        if (response.status === 200) {
          localStorage.setItem("access", response.data.access);
          originalRequest.headers.Authorization = "Bearer " + response.data.access;
          return axios(originalRequest);
        }
      }
      return Promise.reject();
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  } else {
    return Promise.reject(error);
  }
});