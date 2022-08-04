import {createSlice} from '@reduxjs/toolkit'

const RegisterReducer = createSlice({
  name: 'RegisterReducer',
  initialState: {
    isLoggedIn: false,
    user: null,
    error: false,
    pending: false,
  },
  reducers: {
    UserRegisterStart: (state, action) => {
      state.user = null
      state.pending = true
      state.isLoggedIn = false
      state.error = false
    },
    UserRegisterSuccess: (state, action) => {
      state.user = action.payload
      state.pending = false
      state.isLoggedIn = false
      state.error = false
    },
    UserRegisterError: (state, action) => {
      state.user = null
      state.pending = false
      state.isLoggedIn = false
      state.error = action.payload
    },
  },
})

export const {UserRegisterStart, UserRegisterSuccess, UserRegisterError} = RegisterReducer.actions

export default RegisterReducer.reducer
