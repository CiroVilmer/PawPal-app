import React from 'react';
import { useState } from 'react';
import { Stepper,Button, Group, ColorPicker } from '@mantine/core';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { multiStepForm } from './multiStepForm';
import NewPassword from './newPassword';
import EmailForm from './emailForm';
import RecoveryCode from './recoveryCode';


    


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

    
    
    const {steps, step, currentStepIndex, back, next, isFirstStep, isLastStep} = multiStepForm([<EmailForm/>,<RecoveryCode/>,<NewPassword/>])
    
    return( 
        
        <div className='flex max-w-md items-center'>
            
            
               {step}
               
               <Stepper size="xs" active={currentStepIndex} color='orange'>
                    <Stepper.Step label="Paso 1" description="Ingresar mail" />
                    <Stepper.Step label="Paso 2" description="Código de seguridad" />
                    <Stepper.Step label="Paso 3" description="Reestablecer contraseña" /> 
                </Stepper>

                <div className='pt-5 pb-3'>
                    {!isFirstStep && 
                    <Button type="button" variant="light" color='orange' leftIcon={<AiOutlineArrowLeft></AiOutlineArrowLeft>} style={{color:"orange"}} onClick={back}>
                        Back
                    </Button>}
                        
                    {!isLastStep && (
                    <Button type='button' variant="light" color='orange' rightIcon={<AiOutlineArrowRight></AiOutlineArrowRight>} className='text-orange-600 relative' onClick={next}>
                        {isLastStep ? "Reestablecer contraseña" : "Obtener codigo"}
                    </Button>)}                
                </div>  
            
        </div>     
    )
}

export default forgotPassword;