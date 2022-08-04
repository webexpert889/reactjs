import React, {FC, useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import {useDispatch, useSelector} from 'react-redux'
import {setPassword} from '../../../redux/actions/registrationstep'
import Select from 'react-select'
import '../Custom.css'
import AxiosInstance from '../../../../../AxiosInstance'
import {setVehicalYear} from '../../../redux/actions/registrationstep'
import {setVehicalmake} from '../../../redux/actions/registrationstep'
import {setVehicalmodel} from '../../../redux/actions/registrationstep'
import config from '../config'
import '../Custom.css'
// import Select from 'react-select'
const CreateStep6_2: FC = () => {
  const base_url = config.base_url
  var axios = require('axios')
  const dispatch = useDispatch()
  const [vehicleYears, setVehicleYears] = useState<any>([])
  const [vehileMakeType, setVehicleMakeType] = useState<any>([])
  const [vehicleModel, setvehicleModel] = useState<any>([])
  const [selectedVehicalYear, setselectedVehicalYear] = useState<any>('')
  const [selectedVehicalMake, setselectedVehicalMake] = useState<any>('')
  const [selectedVehicalmodel, setselectedVehicalmodel] = useState<any>('')
  const store_authkey = useSelector((state: any) => state.registrationsteps.Authkey)
  const YearmakeModel_message = useSelector(
    (state: any) => state.inputState.vehicalYearMakeModel_status
  )
  // var selectedVehicalYear = ''
  // var selectedVehicalMake = ''
  // console.log('sekectedYear:', selectedVehicalYear.value)
  // console.log('selectedVehicalMake:', selectedVehicalMake.value)
  // const vehicalyearData = () => {
  //   var axios = require('axios')
  //   var data = ''
  //   const token = localStorage?.getItem('token') as string
  //   console.log('token', token)

  //   var config = {
  //     method: 'get',
  //     url: 'http://127.0.0.1:8000/api/external/vehicle-years',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     data: data,
  //   }

  //   axios(config)
  //     .then(function (response: any) {
  //       console.log(JSON.stringify(response.data))
  //       const vehicalyear = response.data.years
  //     })
  //     .catch(function (error: any) {
  //       console.log(error)
  //     })
  // }
  useEffect(() => {
    // vehicalyearData()
    var axios = require('axios')
    var data = ''
    const token = localStorage?.getItem('token') as string

    var config = {
      method: 'get',
      url: base_url + 'external/vehicle-years',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    }

    axios(config)
      .then(function (response: any) {
        setVehicleYears(response.data.years)
      })
      .catch(function (error: any) {
        console.log(error)
      })

    var axios = require('axios')
    var data2 = ''

    var config2 = {
      method: 'get',
      url: base_url + 'external/vehicle-makes',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data2,
    }

    axios(config2)
      .then(function (response: any) {
        setVehicleMakeType(response.data.makes)
        console.log(JSON.stringify(response.data))
      })
      .catch(function (error: any) {
        console.log(error)
      })

    // AxiosInstance.get('external/vehicle-makes').then((res: any) => {
    //   setVehicleMakeType(res.data.makes)
    // })
  }, [store_authkey])

  useEffect(() => {
    dispatch(setVehicalYear(selectedVehicalYear.value))
    dispatch(setVehicalmake(selectedVehicalMake.value))
    var data = JSON.stringify({
      year: parseInt(selectedVehicalYear.value),
      make: selectedVehicalMake.value,
    })
    console.log(data)
    const token = localStorage?.getItem('token') as string
    var config = {
      method: 'post',
      url: base_url + 'external/vehicle-model',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then(function (response: any) {
        console.log(JSON.stringify(response.data))
        setvehicleModel(response.data.models)
        setselectedVehicalmodel('')
      })
      .catch(function (error: any) {
        console.log(error)
      })
  }, [selectedVehicalYear, selectedVehicalMake])

  useEffect(() => {
    dispatch(setVehicalmodel(selectedVehicalmodel.value))
  }, [selectedVehicalmodel])
  const Years = vehicleYears?.map((year: any, i: number) => {
    return {value: year.year, label: year.year}
  })

  const VehilceMake = vehileMakeType?.map((vehicle: any, i: number) => {
    return {value: vehicle.make, label: vehicle.make}
  })

  const Models = vehicleModel?.map((models: any, i: number) => {
    return {value: models.model, label: models.model}
  })
  const VehicalYearComponent = () => (
    <Select value={selectedVehicalYear} options={Years} onChange={setselectedVehicalYear} />
  )

  // const vehicalmake = [
  //   {value: 'chocolate', label: 'Chocolate'},
  //   {value: 'strawberry', label: 'Strawberry'},
  //   {value: 'vanilla', label: 'Vanilla'},
  // ]

  const VehicalMakeComponent = () => (
    <Select value={selectedVehicalMake} options={VehilceMake} onChange={setselectedVehicalMake} />
  )

  const vehicalmodel = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
  ]

  const VehicalModelComponent = () => (
    <Select value={selectedVehicalmodel} options={Models} onChange={setselectedVehicalmodel} />
  )

  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark text-center'>Select Vehical Year and Type</h2>

        {/* <div className='text-gray-400 text-center fw-bold fs-6'>
          Enter the password you want to use for your account.
        </div> */}
      </div>

      <div className='row'>
        <div className='col-md-12 col-12'>
          {/* <Field name='vehicalYear' as='select' className='vehical_type'>
            <option value='' selected>
              Vehical Year
            </option>
            <option value='red'>2018</option>
            <option value='green'>2019</option>
            <option value='blue'>2020</option>
          </Field> */}
          <VehicalYearComponent />
        </div>
      </div>

      <div className='row mt-5 '>
        <div className='col-md-12 col-12'>
          {/* <Field name='vehicalMake' as='select' className='vehical_type'>
            <option value='' selected>
              Vehical make
            </option>
            <option value='red'>2018</option>
            <option value='green'>2019</option>
            <option value='blue'>2020</option>
          </Field> */}
          <VehicalMakeComponent />
        </div>
      </div>

      <div className='row mt-5 pb-10'>
        <div className='col-md-12 col-12'>
          {/* <Field name='vehicalModal' as='select' className='vehical_type'>
            <option value='' selected>
              Vehical model
            </option>
            <option value='red'>2018</option>
            <option value='green'>2019</option>
            <option value='blue'>2020</option>
          </Field> */}
          <VehicalModelComponent />
        </div>
      </div>

      <div className='text-danger mt-2 errormessagediv2'>
        <p>{YearmakeModel_message}</p>
      </div>
    </div>
  )
}

export {CreateStep6_2}
