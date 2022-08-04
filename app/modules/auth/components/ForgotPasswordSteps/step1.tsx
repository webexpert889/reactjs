/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
// import {setPhoneNumber} from '../../../redux/actions/registrationstep'
import {setForward} from '../../../redux/actions/message'
import {setphoneNumber} from '../../../redux/actions/forgotpassword'
import '../Custom.css'
const Step1: FC = () => {
  const [phoneNumberStatus, setPhoneNumberStatus] = useState<boolean>(false)
  const phone_message = useSelector((state: any) => state.forgotpassword.mobilemsg)

  // console.log(phoneNumber);
  const dispatch = useDispatch()
  const stepone = useSelector((state: any) => state.registrationsteps.phone_number)
  const callsetphoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberp = e.currentTarget.value
    if (numberp.trim().length === 0) {
      setPhoneNumberStatus(false)
    } else {
      setPhoneNumberStatus(true)
    }
    // setPhoneNumber(number)
    // console.log(numberp)
    dispatch(setphoneNumber(numberp))
    // console.log(stepone)
  }

  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark flex-center'>
          Enter your registered mobile number
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
      <div className='mb-5 fv-row'>
        <Field
          onKeyUp={callsetphoneNumber}
          // onChange={(e:number) => setPhoneNumber(e.target.value)}
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='phone'
          placeholder={'Enter Your Mobile Number'}
        />
        {/* <ErrorMessage name='phone'>{phone_message}</ErrorMessage> */}
        <div className='text-danger mt-2 errormessagediv'>
          <p>{phone_message}</p>
        </div>
      </div>
      <Link to='/auth'>
        <div className='text-center text-dark pb-10'>
          Already have an account? <span style={{fontWeight: 700, color: '#F26E21'}}>Login</span>
        </div>
      </Link>
    </div>
  )
}

export {Step1}
