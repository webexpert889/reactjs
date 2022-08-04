import React, {FC, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik';
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"

const Step4: FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(true)
  const [visibility, setVisibility] = useState(true)
  
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark text-center'>Create Password For Your Account</h2>

        <div className='text-gray-400 text-center fw-bold fs-6'>
          Enter the password you want to use for your account.
        </div>
      </div>
    
      <div className='row'>
        <div className='col-md-10'>
            <Field
                type= {passwordVisible ?  "password" : "text"}
                className='form-control form-control-lg form-control-solid'
                placeholder={"Password"}
                name="password"
            />
        </div>
        <div className='col-md-2 cursor-pointer m-auto' onClick={() => setPasswordVisible(passwordVisible ? false :  true )}>
            {passwordVisible ? 
                <AiOutlineEyeInvisible size={25} className="visibility-icon"/>
              : 
                <AiOutlineEye size={25} className="visibility-icon"/> }
          
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-md-10'>
            <Field
                type= {visibility ?  "password" : "text"}
                className='form-control form-control-lg form-control-solid'
                placeholder={"Confirm Password"}
                name="confirmPassword"
            />
        </div>
        <div className='col-md-2 cursor-pointer m-auto' onClick={() => setVisibility(visibility ? false :  true )}>
            {visibility ? 
                <AiOutlineEyeInvisible size={25} className="visibility-icon"/>
              : 
                <AiOutlineEye size={25} className="visibility-icon"/> }
          
        </div>
      </div>
      
   

     
    </div>
  )
}

export {Step4}
