import AxiosInstance from 'axios'

const baseURL =
  process.env.NODE_ENV === 'dev'
    ? import.meta.env.VITE_BASE_URL_LOCAL
    : 'http://34.71.55.220:8000/'

console.log(baseURL)
export const axios = AxiosInstance.create({
  baseURL
})

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    const { error } = response.data
    if (error && error.includes('Invalid Token')) {
      localStorage.clear()
      return window.location.reload()
    }

    return response.data
  },
  function (error): Promise<string> {
    // Do something with response error
    return Promise.reject(
      error?.response?.data?.message ??
        error?.response?.statusText ??
        'Something went wrong'
    )
  }
)
