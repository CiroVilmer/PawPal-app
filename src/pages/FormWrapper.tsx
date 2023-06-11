import { Stepper,Flex, Button } from "@mantine/core"
import React, { ReactNode } from "react"
import { multiStepForm } from "./multiStepForm"
import EmailForm from "./emailForm"
import RecoveryCode from "./recoveryCode"
import NewPassword from "./newPassword"
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
 

type FormWrapperProps = {
    children:ReactNode
}

export function FormWrapper({children} : FormWrapperProps){

    const {currentStepIndex, isFirstStep, isLastStep, back, next} = multiStepForm([<EmailForm/>,<RecoveryCode/>,<NewPassword/>])


    return (
        <div className="">
            <div className="">
                
                {children} 
                
            </div>
          
        </div>
    );
}
// type FormWrapperProps = {
//     title: string
//     children: ReactNode
// }

// export function FormWrapper({children, currentStepIndex, isFirstStep, isLastStep, back, next} : FormWrapperProps){

//     const {currentStepIndex, isFirstStep, isLastStep, back, next} = multiStepForm([<EmailForm/>,<RecoveryCode/>,<NewPassword/>])


//     return (
//         <div className="flex h-screen w-60 items-center p-3  justify-center lg:ml-28 lg:justify-start">
//             <div className="border-solid border border-gray rounded-xl shadow-md p-8">
                
//                 {children} 
//                 <Stepper size={"sm"} active={currentStepIndex} color='orange'>
//                     <Stepper.Step label="Paso 1" description="Ingresar mail" />
//                     <Stepper.Step label="Paso 2" description="Código de seguridad" />
//                     <Stepper.Step label="Paso 3" description="Reestablecer contraseña" /> 
//                 </Stepper>

//                 <Flex direction={"row"} className='pt-8 pb-3 justify-between'>
//                     {!isFirstStep && 
//                     <Button type="button" variant="light" color='orange' leftIcon={<AiOutlineArrowLeft></AiOutlineArrowLeft>} style={{color:"orange"}} onClick={back}>
//                         Back
//                     </Button>}
                        
//                     {!isLastStep && (
//                     <Button type='button' variant="light" color='orange' rightIcon={<AiOutlineArrowRight></AiOutlineArrowRight>} className='text-orange-600' onClick={next}>
//                         {isLastStep ? "Reestablecer contraseña" : "Obtener codigo"}
//                     </Button>)}                
//                 </Flex>
//             </div>
          
//         </div>
//     );
// }