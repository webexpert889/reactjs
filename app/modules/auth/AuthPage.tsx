/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import { Step9 } from '../wizards/components/steps/Step9'
import { CreateStep8 } from './components/createSteps/createStep8'

const AuthLayout = () => {
  // useEffect(() => {
  //   document.body.classList.add('bg-white')
  //   return () => {
  //     document.body.classList.remove('bg-white')
  //   }
  // }, [])

  return (
    <div
      className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/sketchy-1/14.png')})`,
      }}
    >
      {/* begin::Content */}
      <div className='d-flex flex-center flex-column flex-column-fluid  pb-lg-20 authCard'>
        {/* begin::Logo */}
        <a href='#'>
          {/* <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo.png')} className='h-45px' /> */}
        </a>
        {/* end::Logo */}
        {/* begin::Wrapper */}

        <div className='w-100 w-sm-500px bg-white rounded shadow-sm  mx-auto authStyle'>
          <Outlet />
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      {/* <div className='d-flex flex-center flex-column-auto p-10'>
        <div className='d-flex align-items-center fw-bold fs-6'>
          <a href='#' className='text-muted text-hover-primary px-2'>
            About
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Contact
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Contact Us
          </a>
        </div>
      </div> */}
      {/* end::Footer */}
    </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      {/* <Route path='login' element={<Login />} /> */}
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
