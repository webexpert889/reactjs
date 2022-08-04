import {createSlice} from '@reduxjs/toolkit'

const InputStatusSlice = createSlice({
  name: 'InputStatusSlice',
  initialState: {
    PHONE_NUMBER_STATUS: '',
    OTP_STATUS: '',
    EMAIL_STATUS: '',
    PASSWORD_STATUS: '',
    TYPE_STATUS: '',
    VEHICAL_TYPE_STATUS: '',
    DOT_NUMBER_STATUS: '',
    PAYMENT_STATUS: '',
    AUTHENTICATION_STATUS: '',
    USER_ID_STATUS: '',
    success: false,
    error: false,
    pending: false,
  },
  reducers: {
    InputStatusSliceStart: (state, action) => {
      state.PHONE_NUMBER_STATUS = ''
      state.OTP_STATUS = ''
      state.EMAIL_STATUS = ''
      state.PASSWORD_STATUS = ''
      state.TYPE_STATUS = ''
      state.VEHICAL_TYPE_STATUS = ''
      state.DOT_NUMBER_STATUS = ''
      state.PAYMENT_STATUS = ''
      state.AUTHENTICATION_STATUS = ''
      state.USER_ID_STATUS = ''
      state.error = false
      state.success = false
      state.pending = true
    },
    InputStatusSliceSuccess: (state, action) => {
      state.PHONE_NUMBER_STATUS = action.payload.PHONE_NUMBER_STATUS
      state.OTP_STATUS = action.payload.OTP_STATUS
      state.EMAIL_STATUS = action.payload.EMAIL_STATUS
      state.PASSWORD_STATUS = action.payload.PASSWORD_STATUS
      state.TYPE_STATUS = action.payload.TYPE_STATUS
      state.VEHICAL_TYPE_STATUS = action.payload.VEHICAL_TYPE_STATUS
      state.DOT_NUMBER_STATUS = action.payload.DOT_NUMBER_STATUS
      state.PAYMENT_STATUS = action.payload.PAYMENT_STATUS
      state.AUTHENTICATION_STATUS = action.payload.AUTHENTICATION_STATUS
      state.USER_ID_STATUS = action.payload.USER_ID_STATUS
      state.error = false
      state.success = true
      state.pending = false
    },
    InputStatusSliceError: (state, action) => {
      state.PHONE_NUMBER_STATUS = ''
      state.OTP_STATUS = ''
      state.EMAIL_STATUS = ''
      state.PASSWORD_STATUS = ''
      state.TYPE_STATUS = ''
      state.VEHICAL_TYPE_STATUS = ''
      state.DOT_NUMBER_STATUS = ''
      state.PAYMENT_STATUS = ''
      state.AUTHENTICATION_STATUS = ''
      state.USER_ID_STATUS = ''
      state.error = false
      state.success = false
      state.pending = false
    },
  },
})

export const {InputStatusSliceStart, InputStatusSliceSuccess, InputStatusSliceError} =
  InputStatusSlice.actions

export default InputStatusSlice.reducer
