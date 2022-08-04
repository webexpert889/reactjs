import React, {FC, Key, useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import { Field } from 'formik'

const Step9: FC = () => {
   const [achPayment, setAchPayment] = useState(false)
   const [checkPayment, setCheckPayment] = useState(false)

   const handlePaymentBoxes = () =>{
       if(!achPayment) {
           setAchPayment(true)
           setCheckPayment(false)
       }
       else{
        setAchPayment(false)
        setCheckPayment(true)
       }
   }
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-dark text-center'>How Do You Prefer Payments?</h2>

        <div className='text-gray-400 fw-bold fs-6 text-center'>
         Choose the payment options best suits you.
        </div>
      </div>
        <div className='paymentBox' onClick={() => handlePaymentBoxes()}>
            <h5>Payment By ACH</h5>
            <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </div>
        {achPayment ? 
        <>
        <div className='fv-row mb-10'>
            <Field
                type='text'
                className='form-control form-control-lg form-control-solid'
                placeholder={"Bank Name"}
                name="bankName"
            />
        </div>
       <div className='fv-row mb-10'>
            <Field
                type='text'
                className='form-control form-control-lg form-control-solid'
                placeholder={"Bank Routing"}
                name="bankRouting"
            />
       </div>
       <div className='fv-row mb-10'>
            <Field
                type='text'
                className='form-control form-control-lg form-control-solid'
                placeholder={"Bank Account Number"}
                name="accountNumber"
            />
       </div>
       </>
       :
        null 
       }
         <div className='paymentBox' onClick={() => handlePaymentBoxes()}>
            <h5>Payment By Check</h5>
            <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </div>
        {checkPayment ? <>
            <div className='fv-row mb-10'>
                    <Field
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder={"Billing Address"}
                        name="billingAddress"
                    />
            </div>
            <div className='fv-row mb-10'>
                    <Field
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder={"3469 Mesa Drive"}
                        name="location"
                    />
            </div>
            <div className='fv-row mb-10'>
                    <Field
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder={"Mesquite"}
                        name="city"
                    />
            </div>
            <div className='fv-row mb-10'>
                    <Field
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder={"Nevada"}
                        name="city"
                    />
            </div>
            <div className='fv-row mb-10'>
                    <Field
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder={"89027"}
                        name="pinNumber"
                    />
            </div></>: null}
        
    </div>
  )
}

export {Step9}

