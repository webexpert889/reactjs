import React, {FC, useEffect, useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import {Form} from 'react-bootstrap'
import OtpInput from 'react-otp-input'
import {useDispatch, useSelector} from 'react-redux'
import {setOTP} from '../../../redux/actions/registrationstep'
import {number} from 'yup'
import config from '../config'
import '../Custom.css'
import {setOTPStatus} from '../../../redux/actions/signupinputs'
const CreateStep2: FC = () => {
  const base_url = config.base_url
  const otpvalue = useSelector((state: any) => state.registrationsteps.OTP)
  const mobileNumber = useSelector((state: any) => state.registrationsteps.phone_number)
  const [otpCode, setOtpCode] = useState<string>('')
  const dispatch = useDispatch()
  const OTP_message = useSelector((state: any) => state.inputState.OTP_status)

  // console.log(otpCode)
  const resendOtp = () => {
    console.log('Resend otp API will be Called')
    var axios = require('axios')
    var data = JSON.stringify({
      mobile: mobileNumber,
    })

    var config = {
      method: 'post',
      url: base_url + 'user/resend',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then(function (response: any) {
        console.log(JSON.stringify(response.data))
        dispatch(setOTPStatus(response.data.message))
      })
      .catch(function (error: any) {
        console.log(error)
      })
  }
  useEffect(() => {
    // console.log(otpvalue)
    dispatch(setOTP(otpCode))
    // console.log('updated value of store: ', otpvalue)
  }, [otpCode])
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark text-center'>Please Enter OTP for Verification </h2>

        <div className='text-gray-400 text-center fw-bold fs-6'>
          Enter the OTP sent to {mobileNumber}
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            edit
          </a>
          .
        </div>
      </div>
      {/* <Form> */}
      <div className='col-lg-8 col-8 m-auto pb-10'>
        <OtpInput
          inputStyle={{
            width: '55%',
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
        <a onClick={resendOtp} className='link-primary fw-bolder resendotpbtn'>
          Resend OTP
        </a>
        <div className='text-danger mt-2 errormessagediv2'>
          <p>{OTP_message}</p>
        </div>
      </div>
      {/* </Form> */}
    </div>
  )
}

export {CreateStep2}
