import React, {useState} from 'react';
import Link from 'next/link';
import { Flex, Text, Button } from '@mantine/core';
import HamburgerButton from './hamburger';



export function Header(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    
      

    return(
        <div className= 
            "w-full flex items-center border-b-2 py-2 h-20 shadow-sm sticky top-0 bg-white z-20"
        >
            
            <button className='flex flex-row items-center'>
                <img src='/logoPawPal.png' alt='logo'/>
                <h1 className='font-bold text-xl'> Paw<span className='text-orange-500'>Pal</span> </h1>
            </button>
            <div className="grow w-full ">
                <div className='flex bg-slate-50 h-auto mt-72 p-3 justify-end right-8 flex-col gap-3 md:mt-0 md:bg-transparent md:p-0 md:flex md:flex-row md:justify-end md:items-center lg:gap-8'>
                    
                    <button className='hover:-translate-y-1 duration-300'>Inicio</button>
                    <button className='hover:-translate-y-1 duration-300'><Link href={'/mapPage'}>Mapa</Link></button>
                    <button className='hover:-translate-y-1 duration-300'>Contacto</button>
                    <button className='md:border-2 p-1 md:w-36 rounded-md hover:bg-gray-100 active:bg-gray-200 transform transition duration-300 ease-in active:scale-[.98]'><Link href={'/createAccount'}>Crear cuenta</Link></button>
                    <button className='md:border-2 md:border-black md:bg-black md:text-white p-1 md:w-36 md:mr-10 rounded-md hover:text-black hover:bg-white active:bg-black active:text-white transform transition duration-300 ease-in active:scale-[.98]'><Link href={'/logIn'}>Iniciar sesión</Link> </button>
                    
                </div>
                <div className='absolute right-7 top-7 md:hidden'>
                    <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>

            </div>

        </div>
    )
}

