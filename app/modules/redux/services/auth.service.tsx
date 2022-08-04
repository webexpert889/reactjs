import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000/api/user/'

const register = (name: string, email: string, password: string) => {
  return axios.post(API_URL + 'signup', {
    name,
    email,
    password,
  })
}

const login = (name: string, password: string) => {
  return axios
    .post(API_URL + 'login', {
      name,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
}
const logout = () => {
  localStorage.removeItem('user')
}
export default {
  register,
  login,
  logout,
}
