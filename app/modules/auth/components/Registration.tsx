import React, {FC, useEffect, useRef, useState} from 'react'
import {KTSVG} from '../../../../_metronic/helpers'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {
  ICreateAccount,
  createAccountSchemas,
  inits,
} from '../../wizards/components/CreateAccountWizardHelper'
import {CreateStep1} from './createSteps/createStep1'
import {CreateStep2} from './createSteps/createStep2'
import {CreateStep3} from './createSteps/createStep3'
import {CreateStep4} from './createSteps/createStep4'
import {CreateStep5} from './createSteps/createStep5'
import {CreateStep6} from './createSteps/createStep6'
import {CreateStep6_2} from './createSteps/createStep6_2'
import {CreateStep7} from './createSteps/createStep7'
import {CreateStep8} from './createSteps/createStep8'
import {CreateStep9} from './createSteps/createStep9'
import {CreateStep10} from './createSteps/createStep10'
import {Link, useNavigate} from 'react-router-dom'
// import {Alert} from 'react-bootstrap'
import appLogo from '../../../../_metronic/assets/images/logo.png'
import {Image} from 'react-bootstrap'
import {AiFillCloseCircle} from 'react-icons/ai'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {setAuthKey, setTYPE} from '../../redux/actions/registrationstep'
import {setUserId} from '../../redux/actions/registrationstep'
import {setDotNumberCompanyName} from '../../redux/actions/registrationstep'
import {setDotNumberCompanyAddress} from '../../redux/actions/registrationstep'
import {setDotNumberStatus} from '../../redux/actions/signupinputs'
import {setDotNumberMessageStatus} from '../../redux/actions/signupinputs'
import {setForward} from '../../redux/actions/message'
import {setbackward} from '../../redux/actions/message'
import {setPhoneNumberStatus} from '../../redux/actions/signupinputs'
import {setEmailStatus} from '../../redux/actions/signupinputs'
import {setPasswordStatus} from '../../redux/actions/signupinputs'
import {setTYPEStatus} from '../../redux/actions/signupinputs'
import {setOTPStatus} from '../../redux/actions/signupinputs'
import {setFirstnamelastnameStatus} from '../../redux/actions/signupinputs'
import {setYearMakeModelStatus} from '../../redux/actions/signupinputs'
import {setEquipmentStatus} from '../../redux/actions/signupinputs'
import {setBankDetailsStatus} from '../../redux/actions/signupinputs'
import {setDotMCNumberVerified} from '../../redux/actions/registrationstep'
import AxiosInstance from '../../../../AxiosInstance'
import {string} from 'yup'
import {phone} from 'phone'
import config from './config'
import * as EmailValidator from 'email-validator'
import * as Yup from 'yup'
import {Navigate} from 'react-router-dom'

// import {validate} from 'email-validator'
export function Registration() {
  console.log('page loading starts')
  const base_url = config.base_url
  console.log('base url', base_url)
  const store_mobile = useSelector((state: any) => state.registrationsteps.phone_number)
  const store_otp = useSelector((state: any) => state.registrationsteps.OTP)
  const store_authkey = useSelector((state: any) => state.registrationsteps.Authkey)
  const store_user_id = useSelector((state: any) => state.registrationsteps.user_id)
  const store_email_id = useSelector((state: any) => state.registrationsteps.email)
  const store_password = useSelector((state: any) => state.registrationsteps.password)
  const store_first_name = useSelector((state: any) => state.registrationsteps.first_name)
  const store_last_name = useSelector((state: any) => state.registrationsteps.last_name)
  const store_type = useSelector((state: any) => state.registrationsteps.type)
  const store_vehicalType = useSelector((state: any) => state.registrationsteps.vehicalType)
  const store_vehicalyear = useSelector((state: any) => state.registrationsteps.vehicalYear)
  const store_vehicalMake = useSelector((state: any) => state.registrationsteps.vehicalmake)
  const store_vehicalmodel = useSelector((state: any) => state.registrationsteps.vehicalmodel)
  const store_DocMcNumber = useSelector((state: any) => state.registrationsteps.DocMcNumber)
  const store_DocMcNumberverified = useSelector(
    (state: any) => state.registrationsteps.DocMcNumberVerified
  )
  const store_DocMcNumberType = useSelector((state: any) => state.registrationsteps.DocMcNumberType)
  const store_PaymentMethod = useSelector((state: any) => state.registrationsteps.PaymentMethod)
  // const store_vehicalmodel = useSelector((state: any) => state.registrationsteps.vehicalmodel)
  const store_accountNumber = useSelector((state: any) => state.bankDetails.bankaccountNumber)
  const store_routing = useSelector((state: any) => state.bankDetails.bankrouting)
  const store_bankname = useSelector((state: any) => state.bankDetails.bankname)
  const forward_state = useSelector((state: any) => state.message.forwardState)
  const backward_state = useSelector((state: any) => state.message.backwardState)
  // console.log('bank name:', store_bankname)
  // console.log('bank store_accountNumber:', store_accountNumber)
  // console.log('bank store_routing:', store_routing)
  const store_billingaddress = useSelector((state: any) => state.bankDetails.paymentbillingaddress)
  // console.log('store_authkey:', store_authkey, ',store_used_id:', store_user_id)
  const [steperNumber, setStepperNumber] = useState(10)
  const [steperchanger, setsteperchanger] = useState(11)
  const [steperchangerback, setsteperchangerback] = useState(11)
  const [showAlert, setShowAlert] = useState(false)
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [dotmcVerifybtn, setDotMcVerifybtn] = useState<boolean>(true)
  const [skipRoute, setSkipRoute] = useState<null | number>()
  const [currentUserId, setCurrentUserId] = useState<null | number>()
  const [errorlog, setErrorlog] = useState<null | string>()
  const [disable, setDisable] = useState(false)
  const [disableBack, setDisableBack] = useState(false)
  const [dotverifyBtn, setdotverifyBtn] = useState(false)
  console.log('disable_back:', disableBack)
  console.log('disable_submit:', disable)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const SignupSchema = Yup.object().shape({
    // name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
    phone: Yup.string()
      .min(10, 'Enter a valid mobile Number!')
      .required('Phone Number is required'),
    otp: Yup.string().min(4, 'OTP should be of 4 digit').required('Please enter OTP to proceed'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(4, 'Password Should be of 4 digits!')
      .required('Please enter OTP to proceed'),
    confirmpassword: Yup.string()
      .min(4, 'Password Should be of 4 digits!!')
      .required('Please enter OTP to proceed'),
  })

  const prevStep = () => {
    if (!backward_state) {
      return
    } else if (!stepper.current) {
      return
    } else if (skipRoute === 1 || skipRoute === 2) {
      stepper.current?.goto(6)
      // dispatch(setTYPE(null))
    } else {
      stepper.current.goPrev()
      setStepperNumber(steperNumber + 1)
      setsteperchangerback(steperchangerback + 1)
      setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
    }
  }
  // useEffect(()=>{
  //   const data = {
  //     skipRoute
  //   }
  //   dispatch()
  // },[])

  const submitStep = () => {
    console.log('Stepper value:', stepper.current)
    // if (!forward_state) {
    //   return
    // }
    if (!stepper.current) {
      // navigate("/dashboard")
      return
    }
    if (stepper.current.currentStepIndex === 6 && store_vehicalmodel === '') {
      setErrorlog('Model feild cannot be empty')
      console.log('setErrorlog', errorlog)
      return
    }
    // if (skipRoute === 1 || skipRoute === 2) {
    //   stepper.current?.goto(9)
    //   setStepperNumber(2)
    //   if (skipRoute) {
    //     setSkipRoute(null)
    //   }
    //   skipRoute === null && stepper.current.goNext()
    // }
    // if (stepper.current.currentStepIndex === 8) {
    //   stepper.current.goto(9)
    // }

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      setsteperchanger(steperchanger - 1)
      // stepper.current.goNext()
      // setsteperchanger(steperchanger - 1)

      dispatch(setForward(false))
    } else {
      setShowAlert(true)
      navigate('/dashboard')
      // alert('You have successfully create an account')
      // navigate("/dashboard")
      console.log('go to dashboard')
      setStepperNumber(0)
      // stepper.current.goto(1)
      // setStepperNumber(10)
      // actions.resetForm()
    }
  }

  useEffect(() => {
    console.log('Step change UseEffet is being called:')
    // if (!forward_state) {
    //   return
    // }
    if (!stepper.current) {
      // navigate("/dashboard")
      return
    }
    console.log('Step change UseEffet is being called2:')
    // if (stepper.current.currentStepIndex === 6 && store_vehicalmodel === '') {
    //   setErrorlog('Model feild cannot be empty')
    //   console.log('setErrorlog', errorlog)
    //   return
    // }
    // if (skipRoute === 1 || skipRoute === 2) {
    //   stepper.current?.goto(8)
    //   if (skipRoute) {
    //     setSkipRoute(null)
    //   }
    //   skipRoute === null && stepper.current.goNext()
    // }
    // if (stepper.current.currentStepIndex === 8) {
    //   stepper.current.goto(9)
    // }

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex])

    if (
      stepper.current.currentStepIndex !== stepper.current.totatStepsNumber &&
      forward_state === true
    ) {
      stepper.current.goNext()
      console.log('forward step is being called by go next')

      // setStepperNumber(steperNumber - 1)
    }
    // else {
    //   setShowAlert(true)

    // alert('You have successfully create an account')
    // navigate("/dashboard")
    // console.log('go to dashboard')
    // setStepperNumber(0)
    // stepper.current.goto(1)
    // setStepperNumber(10)
    // actions.resetForm()
    // }
  }, [forward_state])
  // console.log(phoneNumber);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('dsfmhsdfkj sbdf jsbdmfkjsbdk')
      setShowAlert(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [showAlert])

  const redirectDashboard = () => {
    navigate('/dashboard')
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  //   useEffect(() => {
  // dispatch({
  //   type:ADD_USER
  // })
  // }, [])
  //  const [successful, setSuccessful] = useState(false)
  //   const handleRegister = (e: { preventDefault: () => void }) => {
  //     // e.preventDefault();
  //     setSuccessful(false);
  //     // form.current.validateAll();
  //     // if (checkBtn.current.context._errors.length === 0) {
  //       dispatch(register(username, email, password))
  //         .then(() => {
  //           setSuccessful(true);
  //         })
  //         .catch(() => {
  //           setSuccessful(false);
  //         });
  //     // }
  //   };
  console.log('steperNumber:', steperNumber)
  console.log(stepper)

  //----------------------- VERIFY DOT NUMBER--------------------- //
  const verifyDotnumber = (e: any) => {
    e.preventDefault()
    if (store_DocMcNumber) {
      setdotverifyBtn(true)
      console.log('working')
      // setDotMcVerifybtn(false)

      var axios = require('axios')
      if (store_DocMcNumberType === 'mc') {
        var data = JSON.stringify({
          searchBy: store_DocMcNumberType,
          mc_number: store_DocMcNumber,
        })
      } else {
        var data = JSON.stringify({
          searchBy: store_DocMcNumberType,
          dot: store_DocMcNumber,
        })
      }

      // var data = JSON.stringify({
      // })

      var config = {
        method: 'post',
        url: base_url + 'external/search-carrier',
        headers: {
          Authorization: 'Bearer ' + store_authkey,
          'Content-Type': 'application/json',
        },
        data: data,
      }

      axios(config)
        .then(function (response: any) {
          console.log(JSON.stringify(response.data))
          if (response.data.status === true) {
            setDotMcVerifybtn(false)
            dispatch(setDotMCNumberVerified(store_DocMcNumber))
            dispatch(setDotNumberStatus(true))
            dispatch(setDotNumberCompanyName(response.data.carrierInformation.name))
            dispatch(setDotNumberCompanyAddress(response.data.carrierInformation.address))
            dispatch(setDotNumberMessageStatus(''))
          } else if (response.data.status === false) {
            setdotverifyBtn(false)
            dispatch(setDotNumberMessageStatus('Carrier not found'))
          }
        })
        .catch(function (error: any) {
          console.log(error)
        })
    } else {
      dispatch(setDotNumberMessageStatus('Enter DOT or MC number to verify'))
    }
  }

  useEffect(() => {
    const current_step = steperNumber
    if (current_step === 8) {
      console.log('set steppper back is set to true')
      setDisableBack(true)
    }
    if (current_step === 6) {
      console.log('set steppper back is set to true')
      setDisableBack(true)
    }
    if (current_step === 2) {
      console.log('set steppper back is set to true')
      setDisableBack(true)
    }
  }, [steperchangerback])

  // --------------------------------API CALLS ------------------------------ //

  useEffect(() => {
    const current_step = steperNumber
    console.log('api useEffet id called')
    // console.log(current_step)
    if (current_step === 10) {
      console.log('In step 10')
      if (store_mobile) {
        setDisable(true)
        var axios = require('axios')
        var data = JSON.stringify({
          mobile: store_mobile,
        })

        var config = {
          method: 'post',
          url: base_url + 'user/signup',
          headers: {
            'Content-Type': 'application/json',
          },
          data: data,
        }

        axios(config)
          .then(function (response: any) {
            console.log('user/signup', response.data)
            if (response.data.status === true) {
              setCurrentUserId(response.data.userId)
              dispatch(setForward(true))
              setStepperNumber(steperNumber - 1)
              setDisable(false)
            }
            //  else if (response.data.status === false) {
            //   if (response.data.errorCode === 'ER_DUP_ENTRY') {
            //     dispatch(setPhoneNumberStatus('The Mobile Number is already registered with us'))
            //   } else {
            //     dispatch(setPhoneNumberStatus('Enter a valid phone number'))
            //   }
            // }
          })
          .catch(function (error: any) {
            if (error.status === false) {
              if (error.errorCode === 'ER_DUP_ENTRY') {
                dispatch(setPhoneNumberStatus('The Mobile Number is already registered with us'))
              } else {
                dispatch(setPhoneNumberStatus('Enter a valid phone number'))
              }
            }
            dispatch(
              setPhoneNumberStatus('The Mobile Number is Invalid or is already registered with us')
            )
            setDisable(false)
            console.log(error)
          })
      }
      // else {
      //   // console.log('Outside step 10')
      //   // dispatch(setPhoneNumberStatus('Please Enter Mobile Number to proceed'))
      // }
    } else if (current_step === 9) {
      if (store_mobile && store_otp) {
        setDisable(true)
        var axios = require('axios')
        var data = JSON.stringify({
          mobile: store_mobile,
          OTP: store_otp,
        })
        var config = {
          method: 'post',
          url: base_url + 'user/on-boarding',
          headers: {
            'Content-Type': 'application/json',
          },
          data: data,
        }

        axios(config)
          .then(function (response: any) {
            console.log(response.data)
            if (response.data.status === true) {
              const user = {
                auth_key: response.data.token,
                user_id: response.data.user.id,
              }
              const auth_key = response.data.token
              localStorage.setItem('token', auth_key)
              localStorage.setItem('user', JSON.stringify(user))
              const user_id = response.data.user.id
              dispatch(setAuthKey(auth_key))
              dispatch(setUserId(user_id))
              setStepperNumber(steperNumber - 1)
              dispatch(setForward(true))
              setDisable(false)
              setDisableBack(true)
            } else if (response.data.status === false) {
              console.log('dispatch Otp is being dcalled')
              dispatch(setOTPStatus(response.data.message))
              console.log('OTP_ERROR_IS', response.data)
              setDisable(false)
            }
          })
          .catch(function (error: any) {
            console.log('dispatch Otp is being dcalled')
            console.log(error)
            setDisable(false)
            dispatch(setOTPStatus('false'))
          })
      }
    } else if (current_step === 8) {
      if (EmailValidator.validate(store_email_id)) {
        console.log('email is valid')
        setStepperNumber(steperNumber - 1)
        dispatch(setForward(true))
        setDisableBack(false)
      } else {
        dispatch(setEmailStatus('Please enter a valid Email'))
        console.log('emailerror')
      }
      // var axios = require('axios')
      // var data = JSON.stringify({
      //   email: store_email_id,
      // })
      // let config = {
      //   method: 'put',
      //   url: base_url +'user/profile/update/' + store_user_id,
      //   headers: {
      //     Authorization: 'Bearer ' + store_authkey,
      //     'Content-Type': 'application/json',
      //   },
      //   data: data,
      // }
      // axios(config)
      //   .then(function (response: any) {
      //     console.log(JSON.stringify(response.data))
      //   })
      //   .catch(function (error: any) {
      //     console.log(error)
      //   })
    } else if (current_step === 7) {
      if (store_password) {
        dispatch(setPasswordStatus(' '))
        var axios = require('axios')
        var data = JSON.stringify({
          email: store_email_id,
          password: store_password,
        })
        let config = {
          method: 'put',
          url: base_url + 'user/profile/update/' + currentUserId,
          headers: {
            Authorization: 'Bearer ' + store_authkey,
            'Content-Type': 'application/json',
          },
          data: data,
        }
        axios(config)
          .then(function (response: any) {
            console.log(JSON.stringify(response.data))
            if (response.data.status === true) {
              setStepperNumber(steperNumber - 1)
              dispatch(setForward(true))
              setDisableBack(true)
            }
          })
          .catch(function (error: any) {
            console.log(error)
          })
      } else {
        if (!store_password) {
          dispatch(setPasswordStatus('Password and Confirm password does not match or empty'))
        }
        console.log('wrongpassowrd')
      }
    } else if (current_step === 6) {
      if (store_first_name && store_last_name) {
        setStepperNumber(steperNumber - 1)
        dispatch(setForward(true))
        setDisableBack(false)
        dispatch(setFirstnamelastnameStatus(''))
      } else {
        if (!store_first_name) {
          dispatch(setFirstnamelastnameStatus('Enter First name to proceed'))
        } else if (!store_last_name) {
          dispatch(setFirstnamelastnameStatus('Enter Last name to proceed'))
        }
      }
      // var axios = require('axios')
      // var data = JSON.stringify({
      //   first_name: store_first_name,
      //   last_name: store_last_name,
      // })
      // let config = {
      //   method: 'put',
      //   url: base_url +'user/profile/update/'+store_user_id,
      //   headers: {
      //     'Authorization': 'Bearer '+store_authkey,
      //     'Content-Type': 'application/json'
      //   },
      //   data: data,
      // }
      // axios(config)
      //   .then(function (response: any) {
      //     console.log(JSON.stringify(response.data))
      //   })
      //   .catch(function (error: any) {
      //     console.log(error)
      //   })
    } else if (current_step === 5) {
      if (store_first_name && store_last_name && store_type) {
        var axios = require('axios')
        var data = JSON.stringify({
          first_name: store_first_name,
          last_name: store_last_name,
          type: store_type,
          // vehical_type: store_vehicalType,
        })
        console.log('data', data)

        let config = {
          method: 'put',
          url: base_url + 'user/profile/update/' + currentUserId,
          headers: {
            Authorization: 'Bearer ' + store_authkey,
            'Content-Type': 'application/json',
          },
          data: data,
        }
        axios(config)
          .then(function (response: any) {
            console.log(JSON.stringify(response.data))
            if (response.data.status === true) {
              if (skipRoute === 1 || skipRoute === 2) {
                stepper.current?.goto(9)
                setStepperNumber(2)
                if (skipRoute) {
                  setSkipRoute(null)
                  setDisableBack(true)
                }
                // skipRoute === null && stepper.current.goNext()
              } else {
                setStepperNumber(steperNumber - 1)
                dispatch(setForward(true))
                setDisableBack(true)
              }
            }
          })
          .catch(function (error: any) {
            console.log(error)
          })
      } else {
        if (!store_type) {
          dispatch(setTYPEStatus('Please Select a Type to proceed'))
        }
      }
    } else if (current_step === 4) {
      if (store_vehicalyear && store_vehicalMake && store_vehicalmodel) {
        setStepperNumber(steperNumber - 1)
        dispatch(setForward(true))
        dispatch(setYearMakeModelStatus(''))
      } else {
        if (!store_vehicalyear) {
          dispatch(setYearMakeModelStatus('Please Select Vehical Year'))
        } else if (!store_vehicalMake) {
          dispatch(setYearMakeModelStatus('Please Select Vehical Make'))
        } else if (!store_vehicalmodel) {
          dispatch(setYearMakeModelStatus('Please Select Vehical Model to proceed'))
        }
      }
      // var axios = require('axios')
      // var data = JSON.stringify({
      //   first_name: store_first_name,
      //   last_name: store_last_name,
      //   type: store_type,
      //   vehical_type: store_vehicalType,
      // })

      // let config = {
      //   method: 'put',
      //   url: base_url +'user/profile/update/' + currentUserId,
      //   headers: {
      //     Authorization: 'Bearer ' + store_authkey,
      //     'Content-Type': 'application/json',
      //   },
      //   data: data,
      // }

      // axios(config)
      //   .then(function (response: any) {
      //     console.log(JSON.stringify(response.data))
      //   })
      //   .catch(function (error: any) {
      //     console.log(error)
      //   })
    } else if (current_step === 3) {
      if (store_vehicalType) {
        var axios = require('axios')
        var data = JSON.stringify({
          user_id: store_user_id,
          year: store_vehicalyear,
          make: store_vehicalMake,
          model: store_vehicalmodel,
          vin: '',
          type: store_vehicalType,
        })

        let config = {
          method: 'post',
          url: base_url + 'user/vehicle/add/',
          headers: {
            Authorization: 'Bearer ' + store_authkey,
            'Content-Type': 'application/json',
          },
          data: data,
        }

        axios(config)
          .then(function (response: any) {
            console.log(JSON.stringify(response.data))
            if (response.data.status === true) {
              setStepperNumber(steperNumber - 1)
              dispatch(setForward(true))
            }
          })
          .catch(function (error: any) {
            console.log(error)
          })
      } else {
        if (!store_vehicalType) {
          dispatch(setEquipmentStatus('Please select a type to proceed'))
        }
      }
    } else if (current_step === 2) {
      if (store_DocMcNumberverified) {
        var axios = require('axios')
        if (store_DocMcNumberType === 'mc') {
          var data = JSON.stringify({
            mc_number: store_DocMcNumberverified,
          })
        } else {
          var data = JSON.stringify({
            dot_number: store_DocMcNumberverified,
          })
        }
        let config = {
          method: 'put',
          url: base_url + 'user/profile/update/' + store_user_id,
          headers: {
            Authorization: 'Bearer ' + store_authkey,
            'Content-Type': 'application/json',
          },
          data: data,
        }
        // const sendGetRequest = async () => {
        //   try {
        //     const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
        //     console.log(resp.data)
        //   } catch (err) {
        //     // Handle Error Here
        //     console.error(err)
        //   }
        // }

        axios(config)
          .then(function (response: any) {
            console.log(JSON.stringify(response.data))
            if (response.data.status === true) {
              setStepperNumber(steperNumber - 1)
              dispatch(setForward(true))
            }
          })
          .catch(function (error: any) {
            console.log(error)
          })
      } else {
        if (!store_DocMcNumber) {
          dispatch(setDotNumberMessageStatus('Please Enter DOT or MC number and Verify to proceed'))
        }
      }
    } else if (current_step === 1) {
      if (store_PaymentMethod) {
        if (store_PaymentMethod === 1 && store_bankname && store_accountNumber && store_routing) {
          var axios = require('axios')
          var data = JSON.stringify({
            payment_type: store_PaymentMethod,
          })
          let config = {
            method: 'put',
            url: base_url + 'user/profile/update/' + currentUserId,
            headers: {
              Authorization: 'Bearer ' + store_authkey,
              'Content-Type': 'application/json',
            },
            data: data,
          }

          axios(config)
            .then(function (response: any) {
              if (response.data.status === true) {
                var data = JSON.stringify({
                  bank_name: store_bankname,
                  bank_routing: store_routing,
                  bank_account_number: store_accountNumber,
                })
                // else if (store_PaymentMethod === 2) {
                //   var data = JSON.stringify({
                //     bank_name: '',
                //     bank_routing: '',
                //     bank_account_number: '',
                //     billing_address: store_billingaddress,
                //   })
                // }
                console.log(data)
                var config = {
                  method: 'post',
                  url: base_url + 'user/payment-info/save/' + currentUserId,
                  headers: {
                    Authorization: 'Bearer ' + store_authkey,
                    'Content-Type': 'application/json',
                  },
                  data: data,
                }

                axios(config)
                  .then(function (response: any) {
                    console.log(JSON.stringify(response.data))
                    if (response.data.status === true) {
                      setStepperNumber(steperNumber - 1)
                      dispatch(setForward(true))
                    }
                  })
                  .catch(function (error: any) {
                    console.log(error)
                  })
              }
            })
            .catch(function (error: any) {
              console.log(error)
            })
        } else {
          if (store_PaymentMethod === 1) {
            if (!store_bankname) {
              console.log('in if of payment not store bankname')
              dispatch(setBankDetailsStatus('Please Enter Bank Name'))
            } else if (!store_accountNumber) {
              dispatch(setBankDetailsStatus('Please Enter Account Number'))
            } else if (!store_routing) {
              dispatch(setBankDetailsStatus('Please Enter Bank Routing'))
            }
          }

          if (store_PaymentMethod === 2 && store_billingaddress) {
            var axios = require('axios')
            var data = JSON.stringify({
              payment_type: store_PaymentMethod,
            })
            let config = {
              method: 'put',
              url: base_url + 'user/profile/update/' + currentUserId,
              headers: {
                Authorization: 'Bearer ' + store_authkey,
                'Content-Type': 'application/json',
              },
              data: data,
            }

            axios(config)
              .then(function (response: any) {
                if (response.data.status === true) {
                  var data = JSON.stringify({
                    bank_name: '',
                    bank_routing: '',
                    bank_account_number: '',
                    billing_address: store_billingaddress,
                  })
                  console.log(data)
                  var config = {
                    method: 'post',
                    url: base_url + 'user/payment-info/save/' + currentUserId,
                    headers: {
                      Authorization: 'Bearer ' + store_authkey,
                      'Content-Type': 'application/json',
                    },
                    data: data,
                  }

                  axios(config)
                    .then(function (response: any) {
                      console.log(JSON.stringify(response.data))
                      if (response.data.status === true) {
                        setStepperNumber(steperNumber - 1)
                        dispatch(setForward(true))
                      }
                    })
                    .catch(function (error: any) {
                      console.log(error)
                    })
                }
              })
              .catch(function (error: any) {
                console.log(error)
              })
          } else {
            if (store_PaymentMethod === 2) {
              if (!store_billingaddress) {
                dispatch(setBankDetailsStatus('Please fill all feilds for in banking address'))
              }
            }
          }
        }
      } else {
        if (!store_PaymentMethod) {
          dispatch(setBankDetailsStatus('Please select a payment type'))
        }
      }
    }
    //
  }, [steperchanger])

  console.log('currentUserId', currentUserId)

  return (
    <>
      {showAlert ? (
        <div className='custom-alert'>
          <div
            className='d-flex justify-content-end cursor-pointer'
            onClick={() => setShowAlert(!showAlert)}
          >
            <AiFillCloseCircle size={25} className='close-icon' />
          </div>
          <div className='pt-4 p-8 success-msg'>Your account is created successfully</div>
        </div>
      ) : null}

      <div className='arc-box'>
        <div>
          <div className='roundArc bg-white rounded shadow-sm p-15 mx-auto authStyle'>
            <div className='swingLogo'>
              <Image src={appLogo} className='img-fluid swingLogo' />
            </div>
          </div>

          <div
            className='custom-box'
            style={{width: `${steperNumber * 10}%`, transition: 'width linear 0.5s'}}
          ></div>
          <div className='rotated-half-circle rounded shadow-sm p-lg-15 mx-auto'></div>
        </div>
      </div>

      <div className='card loginCard'>
        <div className='card-body p-0'>
          <div
            ref={stepperRef}
            className='stepper stepper-pills  col-lg-12 flex-column flex-xl-row flex-row-fluid pb-10'
            id='kt_create_account_stepper'
          >
            <div className='d-flex justify-content-center rounded justify-content-xl-start flex-row-auto  me-9'>
              <div className='pt-10'>
                <div className='stepper-nav d-none'>
                  <div className='stepper-item current' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>1</span>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>2</span>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>3</span>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>4</span>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>5</span>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>6</span>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>7</span>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>8</span>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>9</span>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>10</span>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>11</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='d-flex flex-row-fluid flex-center col-lg-12 bg-white rounded'>
              <Formik
                validationSchema={SignupSchema}
                initialValues={{
                  phone: '',
                  otp: '',
                }}
                onSubmit={submitStep}
              >
                {() => (
                  <Form className='w-100 w-xl-700px px-9' noValidate id='kt_create_account_form'>
                    <div className='current' data-kt-stepper-element='content'>
                      <CreateStep1 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <CreateStep2 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <CreateStep3 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <CreateStep4 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <CreateStep5 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <CreateStep6 setSkipRoute={setSkipRoute} />
                    </div>
                    <div data-kt-stepper-element='content'>
                      <CreateStep6_2 />
                    </div>
                    <div data-kt-stepper-element='content'>
                      <CreateStep7 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <CreateStep8 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <CreateStep9 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <CreateStep10 />
                    </div>

                    <div className='d-flex flex-stack'>
                      <div className='mr-2'>
                        <button
                          disabled={disableBack}
                          onClick={prevStep}
                          type='button'
                          className='btn btn-lg btn-light-primary me-3'
                          data-kt-stepper-action='previous'
                        >
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr063.svg'
                            className='svg-icon-4 me-1'
                          />
                          Back
                        </button>
                      </div>
                      <div>
                        {dotmcVerifybtn && stepper.current?.currentStepIndex === 9 ? (
                          <button
                            disabled={dotverifyBtn}
                            className='btn btn-lg btn-primary me-3'
                            onClick={verifyDotnumber}
                          >
                            <span className='indicator-label'>
                              Verify
                              <KTSVG
                                path='/media/icons/duotune/arrows/arr064.svg'
                                className='svg-icon-3 ms-2 me-0'
                              />
                            </span>
                          </button>
                        ) : (
                          <button
                            onClick={submitStep}
                            disabled={disable}
                            type='submit'
                            className='btn btn-lg btn-primary me-3'
                          >
                            <span className='indicator-label'>
                              {stepper.current?.currentStepIndex !==
                                stepper.current?.totatStepsNumber! - 1 && 'Continue'}
                              {stepper.current?.currentStepIndex ===
                                stepper.current?.totatStepsNumber! - 1 && 'Submit'}
                              <KTSVG
                                path='/media/icons/duotune/arrows/arr064.svg'
                                className='svg-icon-3 ms-2 me-0'
                              />
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
function email(username: any, email: any, password: any): import('redux').AnyAction {
  throw new Error('Function not implemented.')
}

function password(
  username: any,
  email: (username: any, email: any, password: any) => import('redux').AnyAction,
  password: any
): import('redux').AnyAction {
  throw new Error('Function not implemented.')
}

function username(
  username: any,
  email: (username: any, email: any, password: any) => import('redux').AnyAction,
  password: (
    username: any,
    email: (username: any, email: any, password: any) => import('redux').AnyAction,
    password: any
  ) => import('redux').AnyAction
): import('redux').AnyAction {
  throw new Error('Function not implemented.')
}
