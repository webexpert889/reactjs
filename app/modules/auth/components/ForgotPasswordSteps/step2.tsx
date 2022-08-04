import React, {FC, useEffect, useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import {Form} from 'react-bootstrap'
import OtpInput from 'react-otp-input'
import {useDispatch, useSelector} from 'react-redux'
// import {setOTP} from '../../../redux/actions/registrationstep'
import {number} from 'yup'
import {setOtp} from '../../../redux/actions/forgotpassword'
import {setPassword} from '../../../redux/actions/forgotpassword'
import {setcnfpassword} from '../../../redux/actions/forgotpassword'
import '../Custom.css'
const Step2: FC = () => {
  const otpvalue = useSelector((state: any) => state.registrationsteps.OTP)
  const mobileNumber = useSelector((state: any) => state.registrationsteps.phone_number)
  const [otpCode, setOtpCode] = useState<string>('')
  const dispatch = useDispatch()
  const OTP_message = useSelector((state: any) => state.forgotpassword.otpmsg)
  const otp = useSelector((state: any) => state.forgotpassword.mobilemsg)
  // console.log(otpCode)
  const resendOtp = () => {
    console.log('Resend otp API will be Called')
  }
  useEffect(() => {
    // console.log(otpvalue)
    dispatch(setOtp(otpCode))
    // console.log('updated value of store: ', otpvalue)
  }, [otpCode])

  const callsetpass = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pass = e.currentTarget.value
    // setPassword(pass)
    // setPhoneNumber(number)
    // console.log(numberp)
    dispatch(setPassword(pass))
    // console.log(stepone)
  }

  const callsetpasscnf = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passcnf = e.currentTarget.value

    // setPhoneNumber(number)
    // console.log(numberp)
    dispatch(setcnfpassword(passcnf))
    // console.log(stepone)
  }
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark text-center'>Please Enter OTP and New Password</h2>

        <div className='text-gray-400 text-center fw-bold fs-6'>
          Enter the OTP sent to {mobileNumber}
          <a className='link-primary fw-bolder'> edit</a>.
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
          //   name='otp'
        />
        <a onClick={resendOtp} className='link-primary fw-bolder resendotpbtn'>
          {' '}
          Resend OTP
        </a>

        <div style={{paddingBottom: '10px'}}>
          <Field
            //   onKeyUp={callsetphoneNumber}
            // onChange={(e:number) => setPhoneNumber(e.target.value)}
            type='password'
            className='form-control form-control-lg form-control-solid'
            name='password'
            placeholder={'Enter New password'}
            onKeyUp={callsetpass}
          />
        </div>

        <div style={{paddingBottom: '10px'}}>
          <Field
            //   onKeyUp={callsetphoneNumber}
            // onChange={(e:number) => setPhoneNumber(e.target.value)}
            type='password'
            className='form-control form-control-lg form-control-solid'
            name='cnfpassword'
            placeholder={'Confirm New Password'}
            onKeyUp={callsetpasscnf}
          />
        </div>
        <div className='text-danger mt-2 errormessagediv2'>
          <p>{OTP_message}</p>
        </div>
      </div>
      {/* </Form> */}
    </div>
  )
}

export {Step2}
