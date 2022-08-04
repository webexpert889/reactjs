import {string} from 'yup'
import {IsLoggedin, EMAIL, OTP, PASSWORD, LOGINPHONE, PHONEMSG, OTPMSG} from './types/login'

export const setLoginEmail = (email: string) => {
  return {
    type: EMAIL,
    payload: email,
  }
}

export const setLoginPass = (password: string) => {
  return {
    type: PASSWORD,
    payload: password,
  }
}
export const setLoginPhone = (phoneNumber: string) => {
  return {
    type: LOGINPHONE,
    payload: phoneNumber,
  }
}
export const setPhoneMsg = (phonemsg: string) => {
  return {
    type: PHONEMSG,
    payload: phonemsg,
  }
}
export const setOtpMsg = (Otpmsg: string) => {
  return {
    type: OTPMSG,
    payload: Otpmsg,
  }
}
export const setLoginOTP = (otp: number) => {
  return {
    type: OTP,
    payload: otp,
  }
}

export const setIsLoggedIn = (LoginStatus: boolean) => {
  return {
    type: IsLoggedin,
    paylaod: LoginStatus,
  }
}
