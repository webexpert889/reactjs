import React, {FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import { Field } from 'formik'

const Step5: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-dark text-center'>What Is Your Name?</h2>

        <div className='text-gray-400 fw-bold text-center fs-6'>
          Enter your first name and last name to continue.
        </div>
      </div>
      <div className='fv-row mb-10'>
        <Field
            type='text'
            className='form-control form-control-lg form-control-solid'
            placeholder={"Enter Your First Name"}
            name="firstName"
        ></Field>
      </div>

      <div className='fv-row mb-10'>
        <Field
            type='text'
            className='form-control form-control-lg form-control-solid'
            placeholder={"Enter Your Last Name"}
            name="lastName"
        ></Field>
      </div>
    </div>
  )
}

export {Step5}
