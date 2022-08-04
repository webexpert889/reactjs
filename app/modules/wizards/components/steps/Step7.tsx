import React, {FC, Key, useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import { Field } from 'formik'
import { FormControl, InputGroup } from 'react-bootstrap'
import {AiOutlineSearch} from 'react-icons/ai'

const Step7: FC = () => {
    const [selectBox, setSelectBox] = useState()

    const userType = [
        {
			id: 1,
			title: "Flat Bed",
		
		},
		{
			id: 2,
			title: "53 Dry Van",
			
		},
		{
			id: 3,
			title: "33 Dry Van",
			
		},
    ]

    const handleSelectBox = (itemId: any) =>{
        console.log("list", itemId)
        setSelectBox(itemId)
    }
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-dark text-center '>Select The Type Of Vehicle You Usually Drive </h2>


      </div>
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><AiOutlineSearch size={20}/></InputGroup.Text>
                    <FormControl
                    placeholder="Search for a vehicle"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
            </InputGroup>
        </div>
    
            {userType.map((item:{id:Number,title:String},id) => {
                return(
                    <div 
                        className='userBox' 
                        style={{backgroundColor : item?.id == selectBox ? "#F26E21" : "#F1F1F1"}}
                        key={item.id as Key}
                        onClick= {() => handleSelectBox(item?.id)}
                    >
                        <div style={{color : item?.id == selectBox ? "#fff" : "#232323"}}>{item.title}</div>
                       
                    </div>
                )
            })}
       
    </div>
  )
}

export {Step7}
