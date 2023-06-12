
import Link from 'next/link';
import React from 'react';
import { PinInput, Group } from '@mantine/core';
import { FormWrapper } from './FormWrapper';


const RecoveryCode : React.FC = () => {
    return(
        <FormWrapper >
          
            <h1 className="flex justify-center text-5xl font-bold py-1 text-black px-12 mb-3">
                Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
            </h1>
            <div className="flex justify-center mt-8 mb-5">
                <button className="text-md text-gray-800">         
                    <Link href = "/">Volver al <span className = "text-orange-600 hover:underline">Log in</span></Link>   
                </button>
            </div>
            <label className="flex justify-center text-center font-thin text-lg mb-16">
                Te enviamos un código a tu casilla de mail
            </label>
            <Group position='center'mb={30}>
                <PinInput type="number" size='xl' autoFocus></PinInput>
            </Group>
            
        </FormWrapper>
    )
}
export default RecoveryCode;