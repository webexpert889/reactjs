/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'

const Step1: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark flex-center'>
          To Start, What Is Your Mobile Number?
          {/* <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i> */}
        </h2>

        <div className='text-gray-400 fw-bold fs-6 text-center'>
         We will send you the 4 digit verification code.
        </div>
      </div>
      <div className='mb-10 fv-row'>
        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='accountName'
          placeholder={"Enter Your Mobile Number"}
          
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='accountName' />
        </div>
      </div>
    </div>
  )
}

export {Step1}
