import React, {FC} from 'react'
import {useState, useEffect} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Field} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {setFirstName} from '../../../redux/actions/registrationstep'
import {setLastName} from '../../../redux/actions/registrationstep'
import '../Custom.css'
const CreateStep5: FC = () => {
  const dispatch = useDispatch()
  const [firstname, setFirstname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const firstlastname_message = useSelector((state: any) => state.inputState.firstlastname_status)

  useEffect(() => {
    // console.log(firstname);
    dispatch(setFirstName(firstname))
  }, [firstname])

  useEffect(() => {
    // console.log(lastname);
    dispatch(setLastName(lastname))
  }, [lastname])
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFirstname(e.currentTarget.value)
          }}
          type='text'
          className='form-control form-control-lg form-control-solid'
          placeholder={'Enter Your First Name'}
          name='firstName'
        ></Field>
      </div>

      <div className='fv-row mb-10'>
        <Field
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLastname(e.currentTarget.value)
          }}
          type='text'
          className='form-control form-control-lg form-control-solid'
          placeholder={'Enter Your Last Name'}
          name='lastName'
        ></Field>
        <div className='text-danger mt-2 errormessagediv2'>
          <p>{firstlastname_message}</p>
        </div>
      </div>
    </div>
  )
}

export {CreateStep5}
