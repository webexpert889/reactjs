import React, {FC, useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import { Form } from 'react-bootstrap'
import OtpInput from "react-otp-input";

const LoginStep2: FC = () => {

  const [otpCode, setOtpCode] = useState();
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark text-center'>Please Enter OTP for Verification</h2>

        <div className='text-gray-400 text-center fw-bold fs-6'>
          Enter the OTP sent to +62 88 *****98 
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
              edit
          </a>
          .
        </div>
      </div>
    {/* <Form> */}
      <div className="col-lg-8 m-auto">
        <OtpInput
          inputStyle={{
            width: "55%",
            height: 45,
            borderRadius: 10,
            // marginBottom: 10,
            backgroundColor: "transparent",
            borderColor: "#272B30",
            color: "#272B30",
            fontSize: 14,
          }}
          value={otpCode}
          onChange={setOtpCode}
          numInputs={4}
        />
    </div>
    {/* </Form> */}
    
    </div>
  )
}

export {LoginStep2}
