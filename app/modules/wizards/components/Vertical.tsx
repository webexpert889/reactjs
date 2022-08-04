import React, {FC, useEffect, useRef, useState} from 'react'
import {KTSVG} from '../../../../_metronic/helpers'
import { LoginStep1 } from './loginSteps/loginStep1'
import { LoginStep2 } from './loginSteps/loginStep2'
import {Step2} from './steps/Step2'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {ICreateAccount, createAccountSchemas, inits} from './CreateAccountWizardHelper'

const Vertical: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div
      ref={stepperRef}
      className='stepper stepper-pills stepper-column   d-flex flex-column flex-xl-row flex-row-fluid'
      id='kt_create_account_stepper'
    >
      <div className='d-flex justify-content-center bg-white rounded justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9'>
        <div className='px-6 px-lg-10 px-xxl-15 py-20'>
          <div className='stepper-nav'>
            <div className='stepper-item current' data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>1</span>
              </div>

              <div className='stepper-label'>
                <h3 className='stepper-title'>Login Account</h3>

              </div>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>2</span>
              </div>

              <div className='stepper-label'>
                <h3 className='stepper-title'>Fill OTP</h3>
              </div>
            </div>

         
          </div>
        </div>
      </div>

      <div className='d-flex flex-row-fluid flex-center bg-white rounded'>
        <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
          {() => (
            <Form className='py-20 w-100 w-xl-700px px-9' noValidate id='kt_create_account_form'>
              <div className='current' data-kt-stepper-element='content'>
                <LoginStep1 />
              </div>

              <div data-kt-stepper-element='content'>
                <LoginStep2 />
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
                  <button type='submit' className='btn btn-lg btn-primary me-3'>
                    <span className='indicator-label'>
                      {stepper.current?.currentStepIndex !==
                        stepper.current?.totatStepsNumber! - 1 && 'Continue'}
                      {stepper.current?.currentStepIndex ===
                        stepper.current?.totatStepsNumber! - 1 && 'Submit'}
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr064.svg'
                        className='svg-icon-3 ms-2 me-0'
                      />
                    </span>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export {Vertical}
