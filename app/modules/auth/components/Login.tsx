import React, {FC, useEffect, useRef, useState} from 'react'
import {KTSVG} from '../../../../_metronic/helpers'
import {Step1} from './logSteps/step1'
import {Step2} from './logSteps/step2'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {
  ICreateAccount,
  createAccountSchemas,
  inits,
} from '../../wizards/components/CreateAccountWizardHelper'
import {useNavigate} from 'react-router-dom'
import appLogo from '../../../../_metronic/assets/images/logo.png'
import {Image} from 'react-bootstrap'
import * as EmailValidator from 'email-validator'
import {useDispatch, useSelector} from 'react-redux'
import config from './config'
import {setLoginPhone} from '../../redux/actions/login'
import {setMobileError} from '../../redux/actions/forgotpassword'
import {setPhoneMsg} from '../../redux/actions/login'
import {setOtpMsg} from '../../redux/actions/login'
export function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [steperNumber, setStepperNumber] = useState(2)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [disablesub, setdisablesub] = useState(false)
  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
    if (stepper.current) {
      console.log(' stepper.current.currentStepIndex', stepper.current.currentStepIndex)
    }
  }
  const storeEmail = useSelector((state: any) => state.login.loginEmail)
  const storePasword = useSelector((state: any) => state.login.loginPass)
  const storePhone = useSelector((state: any) => state.login.loginPhoneNumber)
  const storeOTP = useSelector((state: any) => state.login.loginOTP)
  const base_url = config.base_url
  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
    setStepperNumber(steperNumber - 1)
  }
  const submitStepChecker = () => {
    console.log(steperNumber)
  }
  // API caliing for
  const submitStep = () => {
    if (stepper.current) {
      console.log(' stepper.current.currentStepIndex', stepper.current.currentStepIndex)
      console.log(
        stepper.current.currentStepIndex !== stepper.current.totatStepsNumber,
        stepper.current.currentStepIndex,
        stepper.current.totatStepsNumber
      )

      // (
      // navigate("/dashboard")
      setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex])

      if (steperNumber !== 0) {
        console.log('Inside 1')
        if (steperNumber === 2) {
          if (storeEmail && storePasword) {
            setdisablesub(true)
            console.log('Inside 2')
            var axios = require('axios')
            var data = JSON.stringify({
              email: storeEmail,
              password: storePasword,
            })

            var config = {
              method: 'post',
              url: base_url + 'user/login',
              headers: {
                'Content-Type': 'application/json',
              },
              data: data,
            }

            axios(config)
              .then(function (response: any) {
                console.log(JSON.stringify(response.data))
                if (response.data.status === true) {
                  console.log('Inside 3')
                  if (stepper.current) {
                    stepper.current.goNext()
                    setStepperNumber(1)
                  }
                  dispatch(setLoginPhone(response.data.mobile))
                  setdisablesub(false)
                  dispatch(setPhoneMsg(''))
                } else if (response.data.status === false) {
                  dispatch(setPhoneMsg(response.data.message))
                  setdisablesub(false)
                }
              })
              .catch(function (error: any) {
                console.log(error)
                dispatch(setPhoneMsg(error.response.data.message))
                setdisablesub(false)
              })
          } else {
            console.log('Please enter both email and password to continue')
            dispatch(setPhoneMsg('Please enter both email and password to continue'))
          }
        } else if (steperNumber === 1) {
          console.log('Inside 21')
          if (storeOTP) {
            console.log('Inside 21')
            var axios = require('axios')
            var data = JSON.stringify({
              mobile: storePhone,
              otp: storeOTP,
            })

            var config = {
              method: 'post',
              url: base_url + 'user/veirfy-login-otp',
              headers: {
                'Content-Type': 'application/json',
              },
              data: data,
            }
            axios(config)
              .then(function (response: any) {
                console.log('Inside 22')

                console.log(JSON.stringify(response.data))
                if (response.data.status === true) {
                  const user = {
                    auth_key: response.data.token,
                    user_id: response.data.user.id,
                  }
                  localStorage.setItem('user', JSON.stringify(user))
                  dispatch(setOtpMsg(''))
                  navigate('/dashboard')
                } else if (response.data.status === false) {
                  dispatch(setOtpMsg(response.data.message))
                }
              })
              .catch(function (error: any) {
                console.log(error)
                dispatch(setOtpMsg(error.response.data.message))
              })
          } else {
            dispatch(setOtpMsg('Please enter OTP of 4 digits to continue'))
          }
        }
      } else {
        navigate('/dashboard')
        stepper.current.goto(1)
        alert('Thank you for to create an account')
        // console.log("step-2")
        // actions.resetForm()
        //
      }
      // )
    } else {
      console.log('else')
      navigate('/dashboard')
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <>
      <div className='arc-box '>
        <div className='roundArc bg-white rounded shadow-sm p-15 mx-auto'>
          <div className='swingLogo'>
            <Image src={appLogo} className='img-fluid' />
          </div>
        </div>
      </div>
      <div className='card loginCard'>
        <div className='card-body p-0'>
          <div
            ref={stepperRef}
            className='stepper stepper-pills  col-lg-12 flex-column flex-xl-row flex-row-fluid'
            id='kt_create_account_stepper'
          >
            <div className='d-flex justify-content-center rounded flex-row-auto  me-9'>
              <div className=' pt-10'>
                <div className='stepper-nav d-none '>
                  <div className='stepper-item current' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>1</span>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='d-flex flex-row-fluid flex-center col-lg-12 bg-white rounded'>
              <Formik
                validationSchema={currentSchema}
                initialValues={initValues}
                onSubmit={submitStepChecker}
              >
                {() => (
                  <Form
                    className='w-100 w-xl-700px px-9 pb-10'
                    noValidate
                    id='kt_create_account_form'
                  >
                    <div className='current' data-kt-stepper-element='content'>
                      <Step1 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <Step2 />
                    </div>

                    <div className='d-flex flex-stack pt-10'>
                      <div className='mr-2'>
                        <button
                          onClick={prevStep}
                          type='button'
                          className='btn btn-lg btn-light-primary me-3'
                          data-kt-stepper-action='previous'
                        >
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr063.svg'
                            className='svg-icon-4 me-1'
                          />
                          Back
                        </button>
                      </div>

                      <div>
                        <button
                          disabled={disablesub}
                          type='submit'
                          className='btn btn-lg btn-primary me-3'
                          onClick={submitStep}
                        >
                          <span className='indicator-label'>
                            {steperNumber === 2 && 'Continue'}
                            {steperNumber === 1 && 'Submit'}
                            {/* <KTSVG
                        path='/media/icons/duotune/arrows/arr064.svg'
                        className='svg-icon-3 ms-2 me-0'
                      /> */}
                          </span>
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
