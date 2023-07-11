import Link from 'next/link';
import React from 'react';
import { PinInput, Group } from '@mantine/core';
import { Progress } from '@mantine/core';
import FormWrapper from '../Components/formWrapper';

const RecoveryCode : React.FC = () => {
    return(
        <FormWrapper title=''  buttonText='' >
            <div className="flex justify-center mt-8 mb-5">
                <button className="text-md text-gray-800">         
                    <Link href = "/logIn">Volver al <span className = "text-orange-600 hover:underline">Log in</span></Link>   
                </button>
            </div>
            <label className="flex justify-center text-center font-thin text-lg mb-10">
                Te enviamos un código a tu casilla de mail
            </label>
            <Group position='center'mb={28}>
                <PinInput type="number" size='xl' autoFocus></PinInput>
            </Group>
            <Progress size={"sm"} value={33}  color='orange'></Progress>
            <div className='flex justify-center mt-8'>
                <button className="w-full bg-orange-400 text-white rounded-xl py-2 mb-1 hover:bg-orange-500 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-1 transform transition duration-400 ease-in active:scale-[.98]" type='submit'>
                    <Link href={'./newPassword'}>Verificar código </Link>
                </button>
            </div>    
        </FormWrapper>
    )
}
export default RecoveryCode;