import {Stepper} from '@mantine/core';
import { multiStepForm } from './multiStepForm';


export function ProgressBar() : JSX.Element {

    const {currentStepIndex} = multiStepForm([])
    
    return(

    
        <Stepper size="xs" active={currentStepIndex} color='orange'>
            <Stepper.Step label="Paso 1" description="Ingresar mail" />
            <Stepper.Step label="Paso 2" description="Código de seguridad" />
            <Stepper.Step label="Paso 3" description="Reestablecer contraseña" /> 
        </Stepper>
    )
} 