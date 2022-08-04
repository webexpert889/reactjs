import {
  PHONENUMBER,
  OTP,
  PASSWORD,
  CONFIRMPASSWORD,
  MOBILEERROR,
  OTPERROR,
} from './types/forgotPassword'
export const setphoneNumber = (phoneNumber: string) => {
  return {
    type: PHONENUMBER,
    payload: phoneNumber,
  }
}
export const setOtp = (Otp: string) => {
  return {
    type: OTP,
    payload: Otp,
  }
}

export const setPassword = (password: string) => {
  return {
    type: PASSWORD,
    payload: password,
  }
}

export const setcnfpassword = (cnfPassword: string) => {
  return {
    type: CONFIRMPASSWORD,
    payload: cnfPassword,
  }
}

export const setMobileError = (errmsg: string) => {
  return {
    type: MOBILEERROR,
    payload: errmsg,
  }
}

export const setOtpError = (errmsg: string) => {
  return {
    type: OTPERROR,
    payload: errmsg,
  }
}
