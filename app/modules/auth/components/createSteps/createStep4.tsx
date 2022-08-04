import React, {FC, useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import {useDispatch, useSelector} from 'react-redux'
import {setPassword} from '../../../redux/actions/registrationstep'
import '../Custom.css'
const CreateStep4: FC = () => {
  const dispatch = useDispatch()
  const [passwordVisible, setPasswordVisible] = useState(true)
  const [visibility, setVisibility] = useState(true)

  const [password, setPasswordd] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [passwordMatch, setPasswordMatch] = useState<boolean>(false)
  const password_message = useSelector((state: any) => state.inputState.password_status)
  // console.log(password)
  useEffect(() => {
    if (password === passwordConfirm) {
      setPasswordMatch(true)
      // console.log(passwordConfirm.currentTarget.value);
      dispatch(setPassword(passwordConfirm))
    } else {
      dispatch(setPassword(''))
    }
  }, [passwordConfirm])
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark text-center'>Create Password For Your Account</h2>

        <div className='text-gray-400 text-center fw-bold fs-6'>
          Enter the password you want to use for your account.
        </div>
      </div>

      <div className='row'>
        <div className='col-md-10 col-10'>
          <Field
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPasswordd(e.currentTarget.value)
            }}
            type={passwordVisible ? 'password' : 'text'}
            className='form-control form-control-lg form-control-solid'
            placeholder={'Password'}
            name='password'
          />
        </div>
        <div
          className='col-md-2 col-2 cursor-pointer m-auto'
          onClick={() => setPasswordVisible(passwordVisible ? false : true)}
        >
          {passwordVisible ? (
            <AiOutlineEyeInvisible size={25} className='visibility-icon' />
          ) : (
            <AiOutlineEye size={25} className='visibility-icon' />
          )}
        </div>
      </div>

      <div className='row mt-5 pb-10'>
        <div className='col-md-10 col-10'>
          <Field
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPasswordConfirm(e.currentTarget.value)
            }}
            type={visibility ? 'password' : 'text'}
            className='form-control form-control-lg form-control-solid'
            placeholder={'Confirm Password'}
            name='confirmPassword'
          />
        </div>
        <div
          className='col-md-2 col-2 cursor-pointer m-auto'
          onClick={() => setVisibility(visibility ? false : true)}
        >
          {visibility ? (
            <AiOutlineEyeInvisible size={25} className='visibility-icon' />
          ) : (
            <AiOutlineEye size={25} className='visibility-icon' />
          )}
        </div>
      </div>
      <div className='text-danger mt-2 errormessagediv2'>
        <p>{password_message}</p>
      </div>
    </div>
  )
}

export {CreateStep4}
