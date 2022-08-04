import {combineReducers} from 'redux'
import auth from './auth'
import message from './message'
import registrationsteps from './registrationsteps'
import inputState from './inputStatus'
import bankDetails from './bankdetails'
import login from './login'
import forgotpassword from './forgotpassword'
export default combineReducers({
  auth,
  message,
  registrationsteps,
  inputState,
  bankDetails,
  login,
  forgotpassword,
})
