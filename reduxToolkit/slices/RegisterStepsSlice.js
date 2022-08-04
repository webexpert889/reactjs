import {createSlice} from '@reduxjs/toolkit'

const RegisterStepsSlice = createSlice({
  name: 'RegisterStepsSlice',
  initialState: {
    PHONE_NUMBER: '',
    OTP: '',
    EMAIL: '',
    PASSWORD: '',
    FIRST_NAME: '',
    LAST_NAME: '',
    TYPE: '',
    VEHICAL_TYPE: '',
    DOTMC_NUMBER: '',
    DOTMC_NUMBER_TYPE: '',
    DOTMC_NUMBER_COMPANY_ADDRESS: '',
    DOTMC_NUMBER_COMPANY_NAME: '',
    PAYMENT: '',
    AUTHENTICATION: '',
    USER_ID: '',
    success: false,
    error: false,
    pending: false,
  },
  reducers: {
    RegisterStepsSliceStart: (state, action) => {
      state.PHONE_NUMBER = ''
      state.OTP = ''
      state.EMAIL = ''
      state.PASSWORD = ''
      state.FIRST_NAME = ''
      state.LAST_NAME = ''
      state.TYPE = ''
      state.VEHICAL_TYPE = ''
      state.DOTMC_NUMBER = ''
      state.DOTMC_NUMBER_VERIFIED = ''
      state.DOTMC_NUMBER_TYPE = ''
      state.DOTMC_NUMBER_COMPANY_ADDRESS = ''
      state.DOTMC_NUMBER_COMPANY_NAME = ''
      state.PAYMENT = ''
      state.AUTHENTICATION = ''
      state.USER_ID = ''
      state.error = false
      state.success = false
      state.pending = true
    },
    RegisterStepsSliceSuccess: (state, action) => {
      state.PHONE_NUMBER = action.payload.PHONE_NUMBER
      state.OTP = action.payload.OTP
      state.EMAIL = action.payload.EMAIL
      state.PASSWORD = action.payload.PASSWORD
      state.FIRST_NAME = action.payload.FIRST_NAME
      state.LAST_NAME = action.payload.LAST_NAME
      state.TYPE = action.payload.TYPE
      state.VEHICAL_TYPE = action.payload.VEHICAL_TYPE
      state.DOTMC_NUMBER = action.payload.DOTMC_NUMBER
      state.DOTMC_NUMBER_VERIFIED = action.payload.DOTMC_NUMBER_VERIFIED
      state.DOTMC_NUMBER_TYPE = action.payload.DOTMC_NUMBER_TYPE
      state.DOTMC_NUMBER_COMPANY_ADDRESS = action.payload.DOTMC_NUMBER_COMPANY_ADDRESS
      state.DOTMC_NUMBER_COMPANY_NAME = action.payload.DOTMC_NUMBER_COMPANY_NAME
      state.PAYMENT = action.payload.PAYMENT
      state.AUTHENTICATION = action.payload.AUTHENTICATION
      state.USER_ID = action.payload.USER_ID
      state.error = false
      state.success = true
      state.pending = false
    },
    RegisterStepsSliceError: (state, action) => {
      state.PHONE_NUMBER = ''
      state.OTP = ''
      state.EMAIL = ''
      state.PASSWORD = ''
      state.FIRST_NAME = ''
      state.LAST_NAME = ''
      state.TYPE = ''
      state.VEHICAL_TYPE = ''
      state.DOTMC_NUMBER = ''
      state.DOTMC_NUMBER_VERIFIED = ''
      state.DOTMC_NUMBER_TYPE = ''
      state.DOTMC_NUMBER_COMPANY_ADDRESS = ''
      state.DOTMC_NUMBER_COMPANY_NAME = ''
      state.PAYMENT = ''
      state.AUTHENTICATION = ''
      state.USER_ID = ''
      state.error = false
      state.success = false
      state.pending = false
    },
  },
})

export const {RegisterStepsSliceStart, RegisterStepsSliceSuccess, RegisterStepsSliceError} =
  RegisterStepsSlice.actions

export default RegisterStepsSlice.reducer
