import React, {FC, useEffect, useRef, useState} from 'react'
import {KTSVG} from '../../../../_metronic/helpers'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {Step4} from './steps/Step4'
import {Step5} from './steps/Step5'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {ICreateAccount, createAccountSchemas, inits} from './CreateAccountWizardHelper'
import { Step6 } from './steps/Step6'
import { Step7 } from './steps/Step7'
import { Step8 } from './steps/Step8'
import { Step9 } from './steps/Step9'
import { Step10 } from './steps/Step10'

const Horizontal: FC = () => {
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
    <div className='card'>
      <div className='card-body p-0'>
    <div
      ref={stepperRef}
      className='stepper stepper-pills  col-lg-12 flex-column flex-xl-row flex-row-fluid'
      id='kt_create_account_stepper'
    >
      <div className='d-flex justify-content-center rounded justify-content-xl-start flex-row-auto  me-9'>
        <div className='px-6 px-lg-10 px-xxl-15 pt-10'>
          <div className='stepper-nav'>
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

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>3</span>
              </div>

             
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>4</span>
              </div>

             
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>5</span>
              </div>

             
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>6</span>
              </div>

             
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>7</span>
              </div>

             
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>8</span>
              </div>

             
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>9</span>
              </div>

             
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>10</span>
              </div>

             
            </div>


          </div>
        </div>
      </div>

      <div className='d-flex flex-row-fluid flex-center col-lg-12 bg-white rounded'>
        <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
          {() => (
            <Form className='py-20 w-100 w-xl-700px px-9' noValidate id='kt_create_account_form'>
              <div className='current' data-kt-stepper-element='content'>
                <Step1 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step2 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step3 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step4 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step5 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step6 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step7 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step8 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step9 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step10 />
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
    </div>
    </div>
  )
}

export {Horizontal}
