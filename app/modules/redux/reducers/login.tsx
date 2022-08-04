const initialState = {
  loginEmail: '',
  loginPass: '',
  loginOTP: '',
  isLoggedin: false,
  loginPhoneNumber: '',
  loginPhonemsg: '',
  loginOtpmsg: '',
}

export default function (state = initialState, action: {type: any; payload: any}) {
  const {type, payload} = action
  switch (type) {
    case 'EMAIL':
      return {
        ...state,
        loginEmail: action.payload,
      }

    case 'PASSWORD':
      return {
        ...state,
        loginPass: action.payload,
      }

    case 'LOGINPHONE':
      return {
        ...state,
        loginPhoneNumber: action.payload,
      }
    case 'PHONEMSG':
      return {
        ...state,
        loginPhonemsg: action.payload,
      }
    case 'OTPMSG':
      return {
        ...state,
        loginOtpmsg: action.payload,
      }
    case 'OTP':
      return {
        ...state,
        loginOTP: action.payload,
      }

    case 'isLoggedin':
      return {
        ...state,
        isLoggedIn: action.payload,
      }
    default:
      return state
  }
}
