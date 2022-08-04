const initialState = {
  phoneNumber: '',
  otp: '',
  password: '',
  cnfpassword: '',
  mobilemsg: '',
  otpmsg: '',
}

export default function (state = initialState, action: {type: any; payload: any}) {
  const {type, payload} = action
  switch (type) {
    case 'PHONENUMBER':
      return {
        ...state,
        phoneNumber: action.payload,
      }
    case 'OTP':
      return {
        ...state,
        otp: action.payload,
      }
    case 'PASSWORD':
      return {
        ...state,
        password: action.payload,
      }
    case 'CONFIRMPASSWORD':
      return {
        ...state,
        cnfpassword: action.payload,
      }
    case 'MOBILEERROR':
      return {
        ...state,
        mobilemsg: action.payload,
      }
    case 'OTPERROR':
      return {
        ...state,
        otpmsg: action.payload,
      }
    default:
      return state
  }
}
