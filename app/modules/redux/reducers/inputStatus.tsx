const initialState = {
  phone_number_status: '',
  OTP_status: '',
  email_status: '',
  password_status: '',
  firstlastname_status: '',
  type_status: '',
  DocMcNumber_status: '',
  PaymentMethod_status: '',
}
export default function (state = initialState, action: {type: any; payload: any}) {
  const {type, payload} = action
  switch (type) {
    case 'PHONE_NUMBER_STATUS':
      return {
        ...state,
        phone_number_status: action.payload,
      }
    case 'OTP_STATUS':
      return {
        ...state,
        OTP_status: action.payload,
      }
    case 'EMAIL_STATUS':
      return {
        ...state,
        email_status: action.payload,
      }
    case 'PASSWORD_STATUS':
      return {
        ...state,
        password_status: action.payload,
      }
    case 'FIRSTNAMELASTNAME_STATUS':
      return {
        ...state,
        firstlastname_status: action.payload,
      }
    case 'TYPE_STATUS':
      return {
        ...state,
        type_status: action.payload,
      }
    case 'VEHICAL_TYPE_STATUS':
      return {
        ...state,
        vehicalType_status: action.payload,
      }
    case 'VEHICAL_YEARMAKEMODEL_STATUS':
      return {
        ...state,
        vehicalYearMakeModel_status: action.payload,
      }
    case 'EQUIPMENT_STATUS':
      return {
        ...state,
        equipment_status: action.payload,
      }

    case 'DOT_NUMBER_STATUS':
      return {
        ...state,
        DocMcNumber_status: action.payload,
      }
    case 'DOT_NUMBERMSG_STATUS':
      return {
        ...state,
        DocMcNumbermsg_status: action.payload,
      }
    case 'PAYMENT_STATUS':
      return {
        ...state,
        PaymentMethod_status: action.payload,
      }
    case 'AUTHENTICATION_STATUS':
      return {
        ...state,
        Authkey_status: action.payload,
      }
    case 'USER_ID_STATUS':
      return {
        ...state,
        user_id_status: action.payload,
      }
    default:
      return state
  }
}
