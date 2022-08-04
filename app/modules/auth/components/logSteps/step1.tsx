/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {getUserByToken, login} from '../../core/_requests'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {useAuth} from '../../core/Auth'
import {useSelector, useDispatch} from 'react-redux'
import {setLoginEmail} from '../../../redux/actions/login'
import {setLoginPass} from '../../../redux/actions/login'
import {Field} from 'formik'
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: '',
  password: '',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Step1() {
  const [emailvalue, setemailvalue] = useState('')
  const [passwordvalue, setpasswordvalue] = useState('')
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()
  const dispatch = useDispatch()
  const phone_message = useSelector((state: any) => state.login.loginPhonemsg)
  const updateEmailhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Update Email handler')
    const emailValue = e.currentTarget.value
    console.log(' e.target.value', emailValue)
    dispatch(setLoginEmail(emailValue))
  }
  const updatePasswordhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Update password hndler')
    const passwordValue = e.currentTarget.value
    console.log(' e.target.value', passwordValue)
    dispatch(setLoginPass(passwordValue))
  }
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await login(values.email, values.password)
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token)
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The login detail is incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='mb-10 text-center'>
        <h1 className='text-dark mb-3'>Sign In to Cargoflare</h1>
        <div className='text-gray-400 fw-bold fs-4'>
          New Here?{' '}
          <Link to='/auth/registration' className='link-primary fw-bolder'>
            Create an Account
          </Link>
        </div>
      </div>
      {/* begin::Heading */}

      {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : null}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        {/* <label className='form-label fs-6 fw-bolder text-dark'>Email</label> */}
        <Field
          placeholder='Email'
          {...formik.getFieldProps('email')}
          className={clsx('form-control form-control-lg form-control-solid')}
          type='email'
          name='email'
          autoComplete='off'
          onKeyUp={updateEmailhandler}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.email}</span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row '>
        <div className='d-flex justify-content-between mt-n5'>
          <div className='d-flex flex-stack mb-2'>
            {/* begin::Label */}
            {/* <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label> */}
            {/* end::Label */}
            {/* begin::Link */}

            {/* end::Link */}
          </div>
        </div>
        <Field
          placeholder='Password'
          {...formik.getFieldProps('password')}
          className={clsx('form-control form-control-lg form-control-solid')}
          type='password'
          name='password'
          autoComplete='off'
          onKeyUp={updatePasswordhandler}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      <div className='text-danger mt-2 errormessagediv'>
        <p>{phone_message}</p>
      </div>
      <Link
        to='/auth/forgot-password'
        className='link-primary fs-6 fw-bolder mt-5'
        style={{marginLeft: '5px', float: 'right'}}
      >
        Forgot Password ?
      </Link>

      {/* end::Form group */}

      {/* begin::Action */}
      {/* <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div> */}
      {/* end::Action */}
    </form>
  )
}
