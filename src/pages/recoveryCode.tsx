import Link from 'next/link';
import React from 'react';
import { PinInput, Group } from '@mantine/core';
import { FormWrapper } from './Components/FormWrapper';

const RecoveryCode : React.FC = () => {
    return(
        <FormWrapper >
          
          <div className="flex justify-center font-bold ">
                <button>
                    <Link href="/">
                    <h1 className="flex justify-center text-5xl font-bold py-1 text-black px-12 mb-3">
                        Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
                    </h1>
                    </Link>
                </button>
            </div>
            <div className="flex justify-center mt-8 mb-5">
                <button className="text-md text-gray-800">         
                    <Link href = "/logIn">Volver al <span className = "text-orange-600 hover:underline">Log in</span></Link>   
                </button>
            </div>
            <label className="flex justify-center text-center font-thin text-lg mb-10">
                Te enviamos un código a tu casilla de mail
            </label>
            <Group position='center'mb={45}>
                <PinInput type="number" size='xl' autoFocus></PinInput>
            </Group>
            <button className="mb-6 w-full bg-orange-400 text-white rounded-md py-2 hover:bg-orange-500 active:bg-orange-600 transform transition duration-300 ease-in active:scale-[.98]" type='submit'>
                    Verificar código  
                </button>
            
        </FormWrapper>
    )
}
export default RecoveryCode;