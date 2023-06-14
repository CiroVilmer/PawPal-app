import { Stepper,Flex, Button} from "@mantine/core"
import React, { ReactNode,useState } from "react"
import { multiStepForm } from "./Components/multiStepForm"
import EmailForm from "./emailForm"
import RecoveryCode from "./recoveryCode"
import NewPassword from "./newPassword"
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { FormWrapper } from "./Components/FormWrapper"
import Link from "next/link"
import { toast } from "react-toastify"
import { Formik, useFormik } from "formik"
import next from "next/types"


export function forgotPassword():JSX.Element
{
    function handleClick() {
        nextStep();
    }

    const {nextStep, steps, currentStepIndex} = multiStepForm([<EmailForm/>,<RecoveryCode/>,<NewPassword/>])

    return( 
        <div className="flex h-screen  items-center p-3 justify-center lg:justify-start  lg:ml-28">    
            <div className="flex flex-col border-solid border border-gray rounded-xl shadow-md p-8 max-w-md ">   
                {/* TENGO QUE SUMARLE A CURRENT STEP INDEX PARA MOSTRAR LOS FORMS */}
                {steps[currentStepIndex]}
                
            </div>   
            <button className="w-full bg-orange-500 text-white rounded-md py-2 hover:bg-orange-600" type='submit' onClick={handleClick}>
                   {currentStepIndex} Enviar código 
            </button> 
        </div>
    )
}

export default forgotPassword;


  
  
  