import Link from 'next/link';
import React from 'react';
import { PinInput, Group } from '@mantine/core';
import { Progress } from '@mantine/core';

const RecoveryCode : React.FC = () => {
    return(
        <div className="flex h-screen items-end md:items-center max-w-screen justify-center  lg:justify-start" style={{ backgroundImage: 'url(/Group-2.png)', backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
            <div className="w-full max-w-md md:border-solid md:border md:shadow-lg rounded-t-2xl mb-15 lg:ml-28 md:rounded-xl p-8 bg-slate-50">
            
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
                <Group position='center'mb={28}>
                    <PinInput type="number" size='xl' autoFocus></PinInput>
                </Group>
                <Progress size={"sm"} value={33} animate color='orange'></Progress>
                <div className='flex justify-center mt-8'>
                    <button className="w-full bg-orange-400 text-white rounded-xl py-2 mb-1 hover:bg-orange-500 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-1 transform transition duration-400 ease-in active:scale-[.98]" type='submit'>
                        <Link href={'./newPassword'}>Verificar código </Link>
                    </button>
                </div>
                
            </div>
        </div>
    )
}
export default RecoveryCode;