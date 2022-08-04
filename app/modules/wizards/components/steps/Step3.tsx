import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Step3: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark text-center'>What Is Your Email Address That You Use For Work</h2>

        <div className='text-gray-400 fw-bold fs-6 text-center'>
         Enter the email address you want to use for account.
        </div>
      </div>

      <div className='fv-row mb-10'>
        <Field
            type='text'
            className='form-control form-control-lg form-control-solid'
            placeholder={"Enter Your Email Address"}
            name="emailAddress"
        ></Field>
      </div>
    </div>
  )
}

export {Step3}
