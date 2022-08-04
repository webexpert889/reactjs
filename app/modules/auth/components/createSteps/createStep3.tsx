import React, {FC, useState, useEffect} from 'react'
import {Field, ErrorMessage} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {setEmail} from '../../../redux/actions/registrationstep'
import {string} from 'yup'
// import {useDispatch, useSelector} from 'react-redux'
import '../Custom.css'
const CreateStep3: FC = () => {
  // const [email, setEmailaddress] = useState<string>('')
  const dispatch = useDispatch()
  // console.log(email)
  // useEffect(() => {
  //   console.log(email.currentTarget.value)
  //   dispatch(setEmail(email))
  // }, [email])
  const Email_message = useSelector((state: any) => state.inputState.email_status)
  const setEmailadd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.currentTarget.value
    // setPhoneNumber(number)
    // console.log(email)
    dispatch(setEmail(email))
    // console.log(stepone)
  }
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark text-center'>
          What Is Your Email Address That You Use For Work
        </h2>

        <div className='text-gray-400 fw-bold fs-6 text-center'>
          Enter the email address you want to use for account.
        </div>
      </div>

      <div className='fv-row mb-10'>
        <Field
          onChange={setEmailadd}
          type='text'
          className='form-control form-control-lg form-control-solid'
          placeholder={'Enter Your Email Address'}
          name='emailAddress'
        ></Field>
        <div className='text-danger mt-2 errormessagediv2'>
          <p>{Email_message}</p>
        </div>
      </div>
    </div>
  )
}

export {CreateStep3}
