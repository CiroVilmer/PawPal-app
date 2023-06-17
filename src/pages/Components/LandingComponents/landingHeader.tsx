import React, {useState} from 'react';
import Link from 'next/link';
import { Flex, Text, Button } from '@mantine/core';
import HamburgerButton from './hamburger';



export function Header():JSX.Element {

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
                <Flex direction={'row'} className='hidden md:flex md:items-center md:justify-end md:gap-3 lg:gap-8'>
                    <button className='hover:-translate-y-1 duration-300'>Inicio</button>
                    <button className='hover:-translate-y-1 duration-300'><Link href={'/mapa'}>Mapa</Link></button>
                    <button className='hover:-translate-y-1 duration-300'>Contacto</button>
                    <button className='border-2 p-1 w-36 rounded-md hover:bg-gray-100 active:bg-gray-200'><Link href={'/createAccount'}>Crear cuenta</Link></button>
                    <button className='border-2 border-black bg-black text-white p-1 w-36 mr-10 rounded-md hover:text-black hover:bg-white active:bg-black active:text-white'><Link href={'/logIn'}>Iniciar sesión</Link> </button>
                    
                </Flex>
                <div className='flex items-center mr-10 justify-end md:hidden'>
                    <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>

            </div>

        </div>
    )
}