import axios from 'axios'

const serve = axios.create({
  baseURL: '/api',
})
serve.interceptors.request.use((config) => {
  return config
})
serve.interceptors.response.use((response) => {
  return response
})
