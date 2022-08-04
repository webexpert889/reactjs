import React, {FC, useEffect, useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import {Form} from 'react-bootstrap'
import OtpInput from 'react-otp-input'
import {useDispatch, useSelector} from 'react-redux'
import {setLoginOTP} from '../../../redux/actions/login'
import '../Custom.css'
const Step2: FC = () => {
  const dispatch = useDispatch()
  const [otpCode, setOtpCode] = useState<string>('')
  const OTPmessage = useSelector((state: any) => state.login.loginOtpmsg)
  useEffect(() => {
    const otpcodevalue = parseInt(otpCode)
    dispatch(setLoginOTP(otpcodevalue))
  }, [otpCode])
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15 text-center'>
        <h2 className='fw-bolder text-dark '>Please Enter OTP for Verification</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          Enter the OTP sent to +62 88 *****98
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            edit
          </a>
          .
        </div>
      </div>
      {/* <Form> */}
      <div className='col-lg-8 m-auto'>
        <OtpInput
          inputStyle={{
            width: '70%',
            height: 45,
            borderRadius: 10,
            // marginBottom: 10,
            backgroundColor: 'transparent',
            borderColor: '#272B30',
            color: '#272B30',
            fontSize: 14,
          }}
          value={otpCode}
          onChange={setOtpCode}
          numInputs={4}
        />
      </div>
      {/* </Form> */}
      <div className='text-danger mt-2 errormessagediv'>
        <p>{OTPmessage}</p>
      </div>
    </div>
  )
}

export {Step2}
