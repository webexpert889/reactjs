import React, {FC, useState} from 'react'
import { Field } from 'formik'
import { Button } from 'react-bootstrap'

const Step8: FC = () => {
    const [dotContent, setDotContent] = useState(false)

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

  
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
            <h2 className='fw-bolder text-dark text-center '>Add DOT/MC Number</h2>

            <div className='text-gray-400 fw-bold fs-6 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing.
            </div>

      </div>
    <div className='d-flex flex-direction-row justify-content-center'>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                <label className="form-check-label" onClick={() => setDotContent(!dotContent)}>
                   DOT Number
                </label>
        </div>
        <div className="form-check ms-5">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                <label className="form-check-label">
                    MC Number
                </label>
        </div>
    </div>
        <div className='mt-10'> 
            <Field
                type='text'
                className='form-control form-control-lg form-control-solid'
                placeholder= "Enter DOT Number"
                name="dotNumber"
            />
        </div>
        {dotContent ?
           <div>
           <p className='verified-text'>Your DOT number is verified.Below is your carrier information.</p>

           <div className="carrierDetailBlock">
               <h5>Company Name</h5>
               <p>Sharya Trucking INC</p>

               <h5>Address</h5>
               <p className='mb-0'>6312, Linc Road, San Diego, California. 112366</p>
           </div>
           <div className='col-lg-6 m-auto mt-10'>
            <Button variant="dark" className='raiseTicket w-100'>Raise A Ticket</Button>
            <p className='mt-5 text-center'>Contact Administrator</p>
           </div>
            <Button variant="dark" className ="webButton">Edit Info</Button>

       </div> : null }
     
       
    </div>
  )
}

export {Step8}
