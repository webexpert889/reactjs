import axios from 'axios'
import config from './app/modules/auth/components/config'
// import API from './constants/API'
const token = localStorage?.getItem('token')
const base_url = config.base_url
const AxiosInstance = axios.create({
  base_url: config.base_url,
  headers: {
    'content-type': 'application/json , text/plain',
    Authorization: `Bearer ${token}`,
  },
})
// AxiosInstance.interceptors.request.use(
//   (request) => {
//     const user = JSON.parse(localStorage.getItem('user'))
//     const token = user?.data?.result?.access_token
//     if (token) {
//       request.headers.Authorization = `Bearer ${token}`
//     }
//     return request
//   },
//   (error) => Promise.reject(error)
// )
// AxiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       // store.dispatch(logoutUser());
//     }
//     return Promise.reject(error)
//   }
// )
export default AxiosInstance
