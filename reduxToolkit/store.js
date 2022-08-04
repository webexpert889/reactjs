import {configureStore} from '@reduxjs/toolkit'
import BankAccountSlice from './slices/BankAccountSlice'
import InputStatusSlice from './slices/InputStatusSlice'
import LoginReducer from './slices/LoginReducer'
import RegisterReducer from './slices/RegisterReducer'
import RegisterStepsSlice from './slices/RegisterStepsSlice'
import SetMessageSlice from './slices/SetMessageSlice'
import {combineReducers} from '@reduxjs/toolkit'
const reducer = combineReducers({
  LoginReducer: LoginReducer,
  RegisterReducer: RegisterReducer,
  BankAccountSlice: BankAccountSlice,
  InputStatusSlice: InputStatusSlice,
  RegisterStepsSlice: RegisterStepsSlice,
  SetMessageSlice: SetMessageSlice,
})

const store = configureStore({
  reducer,
})

export default store
