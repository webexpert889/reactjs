import React, {FC, Key, useEffect, useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Field} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {setbankaccountnumber} from '../../../redux/actions/bankdetails'
import {setbankrounting} from '../../../redux/actions/bankdetails'
import {setBankName} from '../../../redux/actions/bankdetails'
import {setbillingaddress} from '../../../redux/actions/bankdetails'
import {setpayment_type} from '../../../redux/actions/registrationstep'
import '../Custom.css'
const CreateStep9: FC = () => {
  const dispatch = useDispatch()
  const [achPayment, setAchPayment] = useState(false)
  const [checkPayment, setCheckPayment] = useState(false)
  const [paymentType, setpaymentType] = useState<number>(0)
  const [bnkckhaddress, setbnkckhaddress] = useState('')
  const [bnkchkloc, setbnkchkloc] = useState('')
  const [bnkchkstate, setbnkchkstate] = useState('')
  const [bnkchkcity, setbnkchkcity] = useState('')
  const [bnkchkpin, setbnkchkpin] = useState('')
  const bankInput_message = useSelector((state: any) => state.inputState.PaymentMethod_status)
  // console.log(bankName);

  useEffect(() => {
    if (bnkckhaddress && bnkchkloc && bnkchkstate && bnkchkcity && bnkchkpin) {
      const billingAddress =
        bnkckhaddress + ' ' + bnkchkloc + ' ' + bnkchkstate + ' ' + bnkchkcity + ' ' + bnkchkpin
      dispatch(setbillingaddress(billingAddress))
    }
  }, [bnkckhaddress, bnkchkloc, bnkchkstate, bnkchkcity, bnkchkpin])
  const setBankAccountNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("hh")
    dispatch(setbankaccountnumber(e.currentTarget.value))
  }
  const setBankRoutingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("hh")
    dispatch(setbankrounting(e.currentTarget.value))
  }
  const setBankNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("hh")
    dispatch(setBankName(e.currentTarget.value))
  }

  const setPaymentTypeACH = () => {
    setpaymentType(1)
    setAchPayment(true)
    setCheckPayment(false)
  }

  const setPaymentTypeCheck = () => {
    setpaymentType(2)
    setAchPayment(false)
    setCheckPayment(true)
  }

  useEffect(() => {
    dispatch(setpayment_type(paymentType))
  }, [paymentType])
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-dark text-center'>How Do You Prefer Payments?</h2>
        <div className='text-gray-400 fw-bold fs-6 text-center'>
          Choose the payment options best suits you.
        </div>
      </div>
      <div
        className='paymentBox'
        style={{backgroundColor: achPayment ? '#ef6e21' : '#F1F1F1'}}
        onClick={() => setPaymentTypeACH()}
      >
        <h5 style={{color: achPayment ? '#f1f1f1' : '#232323'}}>Payment By ACH</h5>
        <p className='mb-0' style={{color: achPayment ? '#f1f1f1' : '#232323'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </p>
      </div>
      {achPayment ? (
        <>
          <div className='fv-row mb-10'>
            <Field
              onChange={(e: any) => setBankNameHandler(e)}
              type='text'
              className='form-control form-control-lg form-control-solid'
              placeholder={'Bank Name'}
              name='bankName'
            />
          </div>
          <div className='fv-row mb-10'>
            <Field
              onChange={(e: any) => setBankRoutingHandler(e)}
              type='text'
              className='form-control form-control-lg form-control-solid'
              placeholder={'Bank Routing'}
              name='bankRouting'
            />
          </div>
          <div className='fv-row mb-10'>
            <Field
              onChange={(e: any) => setBankAccountNumberHandler(e)}
              type='text'
              className='form-control form-control-lg form-control-solid'
              placeholder={'Bank Account Number'}
              name='accountNumber'
            />
          </div>
        </>
      ) : null}
      <div
        className='paymentBox mb-10'
        style={{backgroundColor: checkPayment ? '#ef6e21' : '#F1F1F1'}}
        onClick={() => setPaymentTypeCheck()}
      >
        <h5 style={{color: checkPayment ? '#f1f1f1' : '#232323'}}>Payment By Check</h5>
        <p className='mb-0' style={{color: checkPayment ? '#f1f1f1' : '#232323'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </p>
      </div>
      {checkPayment ? (
        <>
          <div className='fv-row mb-10'>
            <Field
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setbnkckhaddress(e.currentTarget.value)
              }
              type='text'
              className='form-control form-control-lg form-control-solid'
              placeholder={'Billing Address'}
              name='billingAddress'
            />
          </div>
          <div className='fv-row mb-10'>
            <Field
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setbnkchkloc(e.currentTarget.value)
              }
              type='text'
              className='form-control form-control-lg form-control-solid'
              placeholder={'Location'}
              name='location'
            />
          </div>
          <div className='fv-row mb-10'>
            <Field
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setbnkchkstate(e.currentTarget.value)
              }
              type='text'
              className='form-control form-control-lg form-control-solid'
              placeholder={'State'}
              name='city'
            />
          </div>
          <div className='fv-row mb-10'>
            <Field
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setbnkchkcity(e.currentTarget.value)
              }
              type='text'
              className='form-control form-control-lg form-control-solid'
              placeholder={'City'}
              name='city'
            />
          </div>
          <div className='fv-row mb-10'>
            <Field
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setbnkchkpin(e.currentTarget.value)
              }
              type='text'
              className='form-control form-control-lg form-control-solid'
              placeholder={'Pin Number'}
              name='pinNumber'
            />
          </div>
        </>
      ) : null}

      <div className='text-danger mt-2 errormessagediv2'>
        <p>{bankInput_message}</p>
      </div>
    </div>
  )
}

export {CreateStep9}
