import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useState } from 'react';
import { api } from "~/utils/api";
import { Stepper,Button, Group, ColorPicker } from '@mantine/core';
import { IconSquareRounded } from '@tabler/icons-react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { multiStepForm } from './multiStepForm';
import { relative } from 'path';
import { emailForm } from './emailForm';

    


export function forgotPassword():JSX.Element
{
    const [active, setActive] = useState(1);
    const [highestStepVisited, setHighestStepVisited] = useState(active);
  
    const handleStepChange = (nextStep: number) => {
      const fueraDeLimite = nextStep > 3 || nextStep < 0;
  
      if (fueraDeLimite) {
        return;
      }
  
      setActive(nextStep);
      setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
    };
    const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

    const {steps, currentStepIndex, back, next, isFirstStep, isLastStep} = multiStepForm([])
    
    return( 
        
        //<div className="container max-w-md mr-auto absolute mt-15 left-28">
        <div className = "flex justify-start max-w-md mt-20 ml-28">        
            
      
            <Button className="w-full bg-orange-500 text-white rounded-xl py-2 hover:bg-orange-600" variant='normal'>
                <Link href="/emailForm">formulario email</Link>
            </Button>
                    

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
                    <Button type='button' variant="light" color='orange' rightIcon={<AiOutlineArrowRight></AiOutlineArrowRight>} className='text-orange-600 relative ' onClick={next}>{isLastStep ? "Reestablecer contraseña":"Next step"}</Button>
                </div>  
               
                    
                
                
                           
            
        </div>
        
        
    )
}

export default forgotPassword;