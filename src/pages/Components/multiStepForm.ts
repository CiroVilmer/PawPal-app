import {ReactElement, useState, useEffect} from 'react';

export function multiStepForm(steps: ReactElement[]){

    const [currentStepIndex, setCurrentStepIndex] = useState(0) ;

    const [step, setStep] = useState(steps[currentStepIndex])

    useEffect(() => {
        setStep(steps[currentStepIndex]);
    }, [currentStepIndex, steps]);

    function nextStep(){
        setCurrentStepIndex(i=> {
            if (i>steps.length - 1) return i
            return i+1})
    }

    return{
        currentStepIndex,
        steps,
        step: steps[currentStepIndex],
        nextStep,        
    }
    
}

