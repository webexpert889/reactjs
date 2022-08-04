import {createSlice} from '@reduxjs/toolkit'

const LoginReducer = createSlice({
  name: 'LoginReducer',
  initialState: {
    isLoggedIn: false,
    user: null,
    error: false,
    pending: false,
  },
  reducers: {
    UserLoginStart: (state, action) => {
      state.user = null
      state.pending = true
      state.isLoggedIn = false
      state.error = false
    },
    UserLoginSuccess: (state, action) => {
      state.user = action.payload
      state.pending = false
      state.isLoggedIn = false
      state.error = false
    },
    UserLoginError: (state, action) => {
      state.user = null
      state.pending = false
      state.isLoggedIn = false
      state.error = action.payload
    },
  },
})

export const {UserLoginStart, UserLoginSuccess, UserLoginError} = LoginReducer.actions

export default LoginReducer.reducer
