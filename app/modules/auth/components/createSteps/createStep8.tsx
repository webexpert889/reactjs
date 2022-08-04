import React, {FC, useEffect, useState} from 'react'
import {Field} from 'formik'
import {Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {setDotNumberType} from '../../../redux/actions/registrationstep'
import {setDotMCNumber} from '../../../redux/actions/registrationstep'
import '../Custom.css'
const CreateStep8: FC = () => {
  const store_DocMcNumberType = useSelector((state: any) => state.inputState.DocMcNumber_status)
  const store_DocMcCompanyName = useSelector(
    (state: any) => state.registrationsteps.DocMcCompanyName
  )
  const store_DocMcCompanyAddress = useSelector(
    (state: any) => state.registrationsteps.DocMcCompanyAdddress
  )
  // console.log("DotNumberStatus: ",store_DocMcNumberType)
  const dispatch = useDispatch()
  const DOTMC_message = useSelector((state: any) => state.inputState.DocMcNumbermsg_status)
  const [dotSelected, setDotSelected] = useState<boolean>(true)
  const [mcSelected, setMcSelected] = useState<boolean>(false)
  const [DOTvalue, changeDotValue] = useState<string>('')
  const [MCvalue, setMcValue] = useState<string>('')
  const [dotContent, setDotContent] = useState(false)
  // console.log(dotContent)

  const DotNumberisSelected = () => {
    // console.log('dotworking')
    setDotSelected(true)
    setMcSelected(false)
    dispatch(setDotNumberType('dot'))
  }
  const McNumberisSelected = () => {
    setDotSelected(false)
    setMcSelected(true)
    dispatch(setDotNumberType('mc'))
  }
  useEffect(() => {}, [dotSelected, mcSelected])

  useEffect(() => {
    // console.log('dotvalueSet')
    dispatch(setDotMCNumber(DOTvalue))
    // console.log(DOTvalue)
  }, [DOTvalue])

  useEffect(() => {
    // console.log('mcavalueSet')
    dispatch(setDotMCNumber(MCvalue))
    // console.log(MCvalue)
  }, [MCvalue])
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-dark text-center '>Add DOT/MC Number</h2>
        <div className='text-gray-400 fw-bold fs-6 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </div>
      </div>

      <div className='d-flex flex-direction-row justify-content-center'>
        <div className='form-check'>
          <input
            onClick={DotNumberisSelected}
            className='form-check-input'
            type='radio'
            name='exampleRadios'
            id='exampleRadios1'
            value='option1'
            // checked
          />
          <label className='form-check-label' onClick={() => setDotContent(!dotContent)}>
            DOT Number
          </label>
        </div>
        <div className='form-check ms-5'>
          <input
            onClick={McNumberisSelected}
            className='form-check-input'
            type='radio'
            name='exampleRadios'
            id='exampleRadios2'
            value='option2'
          />
          <label className='form-check-label'>MC Number</label>
        </div>
      </div>
      {dotSelected ? (
        <div className='mt-10'>
          <Field
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              changeDotValue(e.currentTarget.value)
            }}
            type='text'
            className='form-control form-control-lg form-control-solid mb-10'
            placeholder='Enter DOT Number'
            name='dotNumber'
          />
        </div>
      ) : null}
      {mcSelected ? (
        <div className='mt-10'>
          <Field
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setMcValue(e.currentTarget.value)
            }}
            type='text'
            className='form-control form-control-lg form-control-solid mb-10'
            placeholder='Enter MC Number'
            name='mcNumber'
          />
        </div>
      ) : null}

      {store_DocMcNumberType ? (
        <div>
          <p className='verified-text'>
            Your DOT number is verified.Below is your carrier information.
          </p>

          <div className='carrierDetailBlock'>
            <h5>Company Name</h5>
            <p>{store_DocMcCompanyName}</p>

            <h5>Address</h5>
            <p className='mb-0'>{store_DocMcCompanyAddress}</p>
          </div>
          <div className='col-lg-6 m-auto mt-10'>
            <Button variant='dark' className='raiseTicket w-100'>
              Raise A Ticket
            </Button>
            <p className='mt-5 text-center'>Contact Administrator</p>
          </div>
          <Button variant='dark' className='webButton mb-10'>
            Edit Info
          </Button>
        </div>
      ) : null}

      <div className='text-danger mt-2 errormessagediv2'>
        <p>{DOTMC_message}</p>
      </div>
    </div>
  )
}

export {CreateStep8}
