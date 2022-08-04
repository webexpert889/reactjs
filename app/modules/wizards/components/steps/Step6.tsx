import React, {FC, Key, useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import { Field } from 'formik'

const Step6: FC = () => {
    const [selectBox, setSelectBox] = useState()

    const userType = [
        {
			id: 1,
			title: "Carrier",
			description:
				"You own your vehicle and have authority to book your own loads for you or your fleet.",
		},
		{
			id: 2,
			title: "Dispatcher",
			description:
				"A company owns the truck you drive and move loads the company assigns you.",
		},
		{
			id: 3,
			title: "Driver",
			description:
				"You mostly assign loads to your drivers and either drive or don’t drive yourself.",
		},
    ]

    const handleSelectBox = (itemId: any) =>{
        console.log("list", itemId)
        setSelectBox(itemId)
    }
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-dark text-center'>Which Best Describe You</h2>

        <div className='text-gray-400 fw-bold fs-6 text-center'>
         Choose user type
        </div>
      </div>
        <div>
            {userType.map((item:{id:Number,title:String,description:String},id) => {
                return(
                    <div 
                        className='userBox' 
                        style={{backgroundColor : item?.id == selectBox ? "#F26E21" : "#F1F1F1"}}
                        key={item.id as Key}
                        onClick= {() => handleSelectBox(item?.id)}
                    >
                        <div style={{color : item?.id == selectBox ? "#fff" : "#232323"}}>{item.title}</div>
                        <div style={{color : item?.id == selectBox ? "#fff" : "#232323"}}>{item.description}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export {Step6}
