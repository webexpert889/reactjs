/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"

const LoginStep1: FC = () => {

    const [passwordVisible, setPasswordVisible] = useState(true)
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark flex-center'>
          Hi! Welcome Back
          {/* <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i> */}
        </h2>

        <div className='text-gray-400 fw-bold fs-6 text-center'>
         Enter the email address and password to login your account
        </div>
      </div>
      <div className='mb-10 fv-row'>
        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='emailAddress'
          placeholder={"Enter Your Email Address"}
          
        />
      </div>

      <div className='row'>
        <div className='col-md-11'>
            <Field
                type= {passwordVisible ?  "password" : "text"}
                className='form-control form-control-lg form-control-solid'
                placeholder={"Password"}
                name="password"
            />
        </div>
        <div className='col-md-1 cursor-pointer m-auto' onClick={() => setPasswordVisible(passwordVisible ? false :  true )}>
            {passwordVisible ? 
                <AiOutlineEyeInvisible size={25} className="visibility-icon"/>
              : 
                <AiOutlineEye size={25} className="visibility-icon"/> }
          
        </div>
      </div>
    </div>
  )
}

export {LoginStep1}
