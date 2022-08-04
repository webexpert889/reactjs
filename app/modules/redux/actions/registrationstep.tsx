import {
  PHONE_NUMBER,
  OTP,
  EMAIL,
  PASSWORD,
  PASSWORD_CONFIRM,
  TYPE,
  DOTMC_NUMBER,
  PAYMENT,
  AUTHENTICATION,
  USER_ID,
  FIRST_NAME,
  LAST_NAME,
  VEHICAL_TYPE,
  DOTMC_NUMBER_VERIFIED,
  DOTMC_NUMBER_TYPE,
  DOTMC_NUMBER_COMPANY_NAME,
  DOTMC_NUMBER_COMPANY_ADDRESS,
  VEHICAL_YEAR,
  VEHICAL_MAKE,
  VEHICAL_MODEL,
  VEHICAL_EQUIPMENT,
} from './steps'
export const setPhoneNumber = (phone: string) => {
  console.log(phone)
  return {
    type: PHONE_NUMBER,
    payload: phone,
  }
}
export const setOTP = (otp: string) => ({
  type: OTP,
  payload: otp,
})
export const setEmail = (email: string) => ({
  type: EMAIL,
  payload: email,
})
export const setPassword = (pass: string) => ({
  type: PASSWORD,
  payload: pass,
})
export const setPasswordConfirm = (passconf: string) => ({
  type: PASSWORD_CONFIRM,
  payload: passconf,
})
export const setFirstName = (firstname: string) => ({
  type: FIRST_NAME,
  payload: firstname,
})
export const setLastName = (lastname: string) => ({
  type: LAST_NAME,
  payload: lastname,
})
export const setTYPE = (type: number | null) => ({
  type: TYPE,
  payload: type,
})
export const setVehicalTYPE = (vehicaltype: number) => ({
  type: VEHICAL_TYPE,
  payload: vehicaltype,
})

export const setVehicalYear = (vehicalYear: number) => ({
  type: VEHICAL_YEAR,
  payload: vehicalYear,
})
export const setVehicalmake = (vehicalmake: string) => ({
  type: VEHICAL_MAKE,
  payload: vehicalmake,
})
export const setVehicalmodel = (vehicalmodel: string) => ({
  type: VEHICAL_MODEL,
  payload: vehicalmodel,
})
export const setVehicalequipment = (vehicalequipment: string) => ({
  type: VEHICAL_EQUIPMENT,
  payload: vehicalequipment,
})
export const setDotMCNumber = (dotnumber: string) => ({
  type: DOTMC_NUMBER,
  payload: dotnumber,
})
export const setDotMCNumberVerified = (dotnumberVerified: string) => ({
  type: DOTMC_NUMBER_VERIFIED,
  payload: dotnumberVerified,
})
export const setDotNumberType = (dotnumbertype: string) => ({
  type: DOTMC_NUMBER_TYPE,
  payload: dotnumbertype,
})
export const setDotNumberCompanyName = (dotnumberComp: string) => ({
  type: DOTMC_NUMBER_COMPANY_NAME,
  payload: dotnumberComp,
})
export const setDotNumberCompanyAddress = (dotnumberCompAdd: string) => ({
  type: DOTMC_NUMBER_COMPANY_ADDRESS,
  payload: dotnumberCompAdd,
})
export const setpayment_type = (payment: number) => ({
  type: PAYMENT,
  payload: payment,
})
export const setAuthKey = (Authkey: string) => ({
  type: AUTHENTICATION,
  payload: Authkey,
})
export const setUserId = (user_id: number) => ({
  type: USER_ID,
  payload: user_id,
})
