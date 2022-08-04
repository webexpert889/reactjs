const initialState = {
  bankaccountNumber: null,
  bankrouting: null,
  bankname: null,
  paymentbillingaddress: null,
}
export default function (state = initialState, action: {type: any; payload: any}) {
  const {type, payload} = action
  switch (type) {
    case 'BANK_ACCOUNT_NUMBER':
      return {
        ...state,
        bankaccountNumber: action.payload,
      }
    case 'BANK_ROUTING':
      return {
        ...state,
        bankrouting: action.payload,
      }
    case 'BANK_NAME':
      return {
        ...state,
        bankname: action.payload,
      }
    case 'BILLING_ADDRESS':
      return {
        ...state,
        paymentbillingaddress: action.payload,
      }
    default:
      return state
  }
}
