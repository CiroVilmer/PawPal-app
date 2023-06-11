import { Stepper,Flex, Button} from "@mantine/core"
import React, { ReactNode,useState } from "react"
import { multiStepForm } from "./multiStepForm"
import EmailForm from "./emailForm"
import RecoveryCode from "./recoveryCode"
import NewPassword from "./newPassword"
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { FormWrapper } from "./FormWrapper"
import Link from "next/link"
import { toast } from "react-toastify"





export function forgotPassword():JSX.Element
{
    const [active, setActive] = useState(1);
    const [highestStepVisited, setHighestStepVisited] = useState(active);
  
    const handleStepChange = (nextStep: number) => {
      const fueraDeLimite = nextStep > 2 || nextStep < 0;
  
      if (fueraDeLimite) {
        return;
      }
  
      setActive(nextStep);
      setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
    };
    const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

    const tostError = () => toast.error("Usuario o contraseña incorrectos", {
      
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
      })
    
    const {steps, step, currentStepIndex, back, next, isFirstStep, isLastStep} = multiStepForm([<EmailForm/>,<RecoveryCode/>,<NewPassword/>])
    
    return( 
        <div className="flex h-screen  items-center p-3 justify-center lg:justify-start  lg:ml-28">    
            <div className="flex flex-col border-solid border border-gray rounded-xl shadow-md p-8 max-w-md ">   
                {step}
                <div className="pt-10">


                <Stepper size={"sm"} active={currentStepIndex} color='orange' >
                    <Stepper.Step label="Paso 1" description="Ingresar mail" />
                    <Stepper.Step label="Paso 2" description="Código de seguridad" />
                    <Stepper.Step label="Paso 3" description="Nueva contraseña" /> 
                </Stepper>

                <Flex direction="row" className="pt-10 pb-3">
                    {!isFirstStep && (
                        <Button
                        type="button"
                        variant="light"
                        color="orange"
                        leftIcon={<AiOutlineArrowLeft />}
                        style={{ color: "orange" }}
                        onClick={back}
                        >
                        Volver
                        </Button>
                    )}

                    <Flex className="ml-auto">
                        {!isLastStep && (
                        <Button
                            type="button"
                            variant="light"
                            color="orange"
                            rightIcon={<AiOutlineArrowRight />}
                            className="text-orange-600"
                            onClick={next}
                        >
                            Siguiente
                        </Button>
                        )}
                    </Flex>
                </Flex>
                

                    
                    
                </div>
            </div>    
        </div>
    )
}

export default forgotPassword;


  
  
  