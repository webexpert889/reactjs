import React, {FC, Key, useState, useEffect} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Field} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {FormControl, InputGroup} from 'react-bootstrap'
import {AiOutlineSearch} from 'react-icons/ai'
import {setVehicalTYPE} from '../../../redux/actions/registrationstep'
import config from '../config'
import '../Custom.css'
const CreateStep7: FC = () => {
  const base_url = config.base_url
  const equipment_message = useSelector((state: any) => state.inputState.equipment_status)
  const [selectedequipment, setselectedVehicalequipment] = useState<any>('')
  const [vehicleEquipment, setvehicleEquipment] = useState<any>([])
  const [searchbyName, setSearchByName] = useState<string>('')
  const dispatch = useDispatch()
  const [selectBox, setSelectBox] = useState<number>(0)
  const store_vehicalyear = useSelector((state: any) => state.registrationsteps.vehicalYear)
  const store_authkey = useSelector((state: any) => state.registrationsteps.Authkey)
  useEffect(() => {
    var axios = require('axios')
    var data = JSON.stringify({
      search: searchbyName,
    })
    const token = localStorage?.getItem('token') as string
    var config = {
      method: 'post',
      url: base_url + 'user/vehicle/search-equipments',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: data,
    }
    axios(config)
      .then(function (response: any) {
        console.log(JSON.stringify(response.data))
        setvehicleEquipment(response.data.equipments)
      })
      .catch(function (error: any) {
        console.log(error)
      })
  }, [searchbyName, store_authkey])

  // const vehicleEquipment = [
  //   {
  //     id: 1,
  //     title: 'Flat Bed',
  //   },
  //   {
  //     id: 2,
  //     title: '53 Dry Van',
  //   },
  //   {
  //     id: 3,
  //     title: '33 Dry Van',
  //   },
  // ]
  const serchbyname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchvalue = e.currentTarget.value
    setSearchByName(searchvalue)
    // setPhoneNumber(number)
    // console.log(stepone)
  }
  const handleSelectBox = (itemId: any) => {
    // console.log('list', itemId)
    setSelectBox(itemId)
    dispatch(setVehicalTYPE(itemId))
  }
  // useEffect(() => {}, [selectBox])
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-dark text-center '>
          Select The Type Of Vehicle You Usually Drive{' '}
        </h2>
      </div>
      <div>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon1'>
            <AiOutlineSearch size={20} />
          </InputGroup.Text>
          <FormControl
            value={searchbyName}
            placeholder='Search for a vehicle'
            aria-label='Username'
            aria-describedby='basic-addon1'
            onChange={serchbyname}
          />
        </InputGroup>
      </div>
      <div className='equipmentsCategory'>
        {vehicleEquipment.map((item: any, i: number) => {
          return (
            <div
              className='userBox'
              style={{backgroundColor: item?.id == selectBox ? '#F26E21' : '#F1F1F1'}}
              key={item.id as Key}
              onClick={() => handleSelectBox(item?.id)}
            >
              <div style={{color: item?.id == selectBox ? '#fff' : '#232323'}}>{item.name}</div>
            </div>
          )
        })}
      </div>

      <div className='pb-10'></div>
      <div className='text-danger mt-2 errormessagediv2'>
        <p>{equipment_message}</p>
      </div>
    </div>
  )
}

export {CreateStep7}
