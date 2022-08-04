const initialState = {DocMcNumberType: 'dot'}
export default function (state = initialState, action: {type: any; payload: any}) {
  const {type, payload} = action
  switch (type) {
    case 'PHONE_NUMBER':
      return {
        ...state,
        phone_number: action.payload,
      }
    case 'OTP':
      return {
        ...state,
        OTP: action.payload,
      }
    case 'EMAIL':
      return {
        ...state,
        email: action.payload,
      }
    case 'PASSWORD':
      return {
        ...state,
        password: action.payload,
      }
    case 'PASSWORD_CONFIRM':
      return {
        ...state,
        password_confirm: action.payload,
      }
    case 'FIRST_NAME':
      return {
        ...state,
        first_name: action.payload,
      }
    case 'LAST_NAME':
      return {
        ...state,
        last_name: action.payload,
      }
    case 'TYPE':
      return {
        ...state,
        type: action.payload,
      }
    case 'VEHICAL_TYPE':
      return {
        ...state,
        vehicalType: action.payload,
      }
    case 'VEHICAL_EQUIPMENT':
      return {
        ...state,
        vehicalequipment: action.payload,
      }
    case 'VEHICAL_YEAR':
      return {
        ...state,
        vehicalYear: action.payload,
      }
    case 'VEHICAL_MAKE':
      return {
        ...state,
        vehicalmake: action.payload,
      }
    case 'VEHICAL_MODEL':
      return {
        ...state,
        vehicalmodel: action.payload,
      }
    case 'DOTMC_NUMBER':
      return {
        ...state,
        DocMcNumber: action.payload,
      }
    case 'DOTMC_NUMBER_VERIFIED':
      return {
        ...state,
        DocMcNumberVerified: action.payload,
      }
    case 'DOTMC_NUMBER_TYPE':
      return {
        ...state,
        DocMcNumberType: action.payload,
      }
    case 'DOTMC_NUMBER_COMPANY_ADDRESS':
      return {
        ...state,
        DocMcCompanyAdddress: action.payload,
      }
    case 'DOTMC_NUMBER_COMPANY_NAME':
      return {
        ...state,
        DocMcCompanyName: action.payload,
      }
    case 'PAYMENT':
      return {
        ...state,
        PaymentMethod: action.payload,
      }
    case 'AUTHENTICATION':
      return {
        ...state,
        Authkey: action.payload,
      }
    case 'USER_ID':
      return {
        ...state,
        user_id: action.payload,
      }
    default:
      return state
  }
}
