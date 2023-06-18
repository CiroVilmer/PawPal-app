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
import { procedureTypes } from "@trpc/server"


export function forgotPassword():JSX.Element
{
    
    let {step, nextStep, currentStepIndex, isLastStep} = multiStepForm([<EmailForm/>,<RecoveryCode/>,<NewPassword/>])
    
    
    return( 
        <div className="flex h-screen  items-center justify-center lg:justify-start  lg:ml-28">    
            <div className="flex flex-col border-solid border border-gray rounded-xl shadow-md p-8 max-w-md ">   
                {/* TENGO QUE SUMARLE A CURRENT STEP INDEX PARA MOSTRAR LOS FORMS */}
                {step}
                                
                {!isLastStep && (
                <Button 
                    type='button' 
                    variant="light" 
                    color='orange' 
                    rightIcon={<AiOutlineArrowRight></AiOutlineArrowRight>} 
                    className='text-orange-600 w-1/2 self-center transition duration-200 hover:-translate-y-1' 
                    onClick={nextStep}
                    
                    
                    >

                    Siguiente
                </Button>)}
            </div>   
            
                    
                            
            
        </div>
    )
}

export default forgotPassword;


  
  
  