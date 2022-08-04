import {
  PHONE_NUMBER_STATUS,
  OTP_STATUS,
  EMAIL_STATUS,
  PASSWORD_STATUS,
  TYPE_STATUS,
  DOT_NUMBER_STATUS,
  PAYMENT_STATUS,
  FIRSTNAMELASTNAME_STATUS,
  DOT_NUMBERMSG_STATUS,
  VEHICAL_YEARMAKEMODEL_STATUS,
  EQUIPMENT_STATUS,
} from './inputsStatus'
export const setPhoneNumberStatus = (phone_status: string) => {
  return {
    type: PHONE_NUMBER_STATUS,
    payload: phone_status,
  }
}
export const setOTPStatus = (otp_status: string) => {
  return {
    type: OTP_STATUS,
    payload: otp_status,
  }
}
export const setEmailStatus = (email_status: string) => {
  return {
    type: EMAIL_STATUS,
    payload: email_status,
  }
}
export const setPasswordStatus = (pass_status: string) => {
  return {
    type: PASSWORD_STATUS,
    payload: pass_status,
  }
}
export const setFirstnamelastnameStatus = (firstname_status: string) => {
  return {
    type: FIRSTNAMELASTNAME_STATUS,
    payload: firstname_status,
  }
}
export const setTYPEStatus = (TYPE_status: string) => {
  return {
    type: TYPE_STATUS,
    payload: TYPE_status,
  }
}
export const setYearMakeModelStatus = (TYPE_status: string) => {
  return {
    type: VEHICAL_YEARMAKEMODEL_STATUS,
    payload: TYPE_status,
  }
}
export const setEquipmentStatus = (equipment: string) => {
  return {
    type: EQUIPMENT_STATUS,
    payload: equipment,
  }
}
export const setDotNumberStatus = (dotnumber_status: boolean) => {
  return {
    type: DOT_NUMBER_STATUS,
    payload: dotnumber_status,
  }
}
export const setDotNumberMessageStatus = (dotnumbermsg_status: string) => {
  return {
    type: DOT_NUMBERMSG_STATUS,
    payload: dotnumbermsg_status,
  }
}
export const setBankDetailsStatus = (bankinputs_status: string) => {
  return {
    type: PAYMENT_STATUS,
    payload: bankinputs_status,
  }
}
//   export const setNumber = (dotNumber:string) => ({
//     type: PAYMENT,
//     payload: dotNumber,
//   });
