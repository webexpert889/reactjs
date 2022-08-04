import {BANK_ACCOUNT_NUMBER, BANK_ROUTING, BANK_NAME, BILLING_ADDRESS} from './types/bankdetails'
export const setbankaccountnumber = (bankAccountNumber: string) => {
  return {
    type: BANK_ACCOUNT_NUMBER,
    payload: bankAccountNumber,
  }
}
export const setbankrounting = (bankrouting: string) => {
    return {
      type: BANK_ROUTING,
      payload: bankrouting,
    }
  }

  export const setBankName = (bankname: string) => {
    return {
      type: BANK_NAME,
      payload: bankname,
    }
  }

  export const setbillingaddress = (bankaddress: string) => {
    return {
      type: BILLING_ADDRESS,
      payload: bankaddress,
    }
  }
  

