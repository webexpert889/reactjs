import React, {FC, Key, useEffect, useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Field} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {setTYPE} from '../../../redux/actions/registrationstep'

const CreateStep6: FC<any> = ({setSkipRoute}) => {
  const dispatch = useDispatch()
  const [selectBox, setSelectBox] = useState<number>(0)
  const usertype_message = useSelector((state: any) => state.inputState.type_status)

  // console.log(selectBox)
  const userType = [
    {
      id: 1,
      title: 'Carrier',
      description:
        'You own your vehicle and have authority to book your own loads for you or your fleet.',
    },
    {
      id: 2,
      title: 'Dispatcher',
      description: 'A company owns the truck you drive and move loads the company assigns you.',
    },
    {
      id: 3,
      title: 'Driver',
      description:
        'You mostly assign loads to your drivers and either drive or don’t drive yourself.',
    },
  ]

  const handleSelectBox = (itemId: any) => {
    // console.log('list', itemId)
    setSelectBox(itemId)
    setSkipRoute(itemId)
  }
  useEffect(() => {
    if (selectBox !== 0) {
      dispatch(setTYPE(selectBox))
    }
  }, [selectBox])

  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-dark text-center'>Which Best Describe You</h2>

        <div className='text-gray-400 fw-bold fs-6 text-center'>Choose user type</div>
      </div>
      <div>
        {userType.map((item: {id: Number; title: String; description: String}, id) => {
          return (
            <div
              className='userBox'
              style={{backgroundColor: item?.id == selectBox ? '#F26E21' : '#F1F1F1'}}
              key={item.id as Key}
              onClick={() => handleSelectBox(item?.id)}
            >
              <h5 style={{color: item?.id == selectBox ? '#fff' : '#232323'}}>{item.title}</h5>
              <div style={{color: item?.id == selectBox ? '#fff' : '#232323'}}>
                {item.description}
              </div>
            </div>
          )
        })}
      </div>
      <div className='pb-10'>
        <div className='text-danger mt-2 errormessagediv2'>
          <p>{usertype_message}</p>
        </div>
      </div>
    </div>
  )
}

export {CreateStep6}
