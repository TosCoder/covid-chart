import axios from 'axios'

const axiosService = axios.create({
  baseURL: 'https://disease.sh/v3/covid-19',
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosService.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return error.response
  }
)

const service = () => {
  return {
    get: async (url) => {
      return await axiosService.get(url)
    },
    post: async (url, params) => {
      return await axiosService.post(url, params)
    },
    patch: async (url, params) => {
      return await axiosService.patch(url, params)
    },
    delete: async (url) => {
      return await axiosService.delete(url)
    },
  }
}

const api = service()
export default api
