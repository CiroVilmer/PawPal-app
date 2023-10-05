import React, {useState} from 'react';
import Link from 'next/link';
import HamburgerButton from './hamburger';
import {useMediaQuery} from '@mantine/hooks'
import { Divider } from '@mui/material';
import Image from 'next/image';

const Header: React.FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    function scrollUp(){
        window.scrollTo({top:0, behavior: 'smooth'})
    }
      
    const mediumScreen = useMediaQuery("(min-width: 768px)");

    return(
        <div className= "w-full flex items-center border-b-2 py-2 h-20 shadow-sm fixed bg-white z-20 font-Poppins">
            
            <button onClick={scrollUp} className='flex flex-row items-center'>
                <Image src='/logoPawPal.png' alt='logo' width={120} height={0}></Image>
                <h1 className='font-bold text-xl'> Paw<span className='text-orange-500'>Pal</span> </h1>
            </button>
            <div className="grow w-full">
                <div className={mediumScreen ? '' :` rounded-l-xl shadow-xl gap-3 p-3 bg-white h-auto absolute top-[88px] ${isOpen === true ? "opacity-100 -right-1 duration-700" : "-right-40 opacity-100 ease-in duration-500"} `}>
                    <div className={mediumScreen ? 'flex justify-end flex-row gap-6' : `flex flex-col gap-2 p-2 items-center ${isOpen === true ? "" : ""}`}>
                        <button className={mediumScreen ?'hover:-translate-y-[2.8px] duration-300 btn-landing':''}>
                            <Link href={'/publicaciones'}>Inicio</Link> 
                        </button>                        
                        {mediumScreen === false ? <Divider className=" w-12 opacity-30 bg-gray-300" ></Divider> : ""}

                        <button className={mediumScreen ?'hover:-translate-y-[2.8px] duration-300  btn-landing':''}>
                            <Link href={'/mapa'}>Mapa</Link>
                        </button>

                        {mediumScreen === false ? <Divider className="w-12 opacity-30 bg-gray-300 " ></Divider> : ""}

                        <button className={mediumScreen ?'hover:-translate-y-[2.8px] duration-300 btn-landing':''}>
                            <Link href="/contacto">Contacto</Link>
                        </button>
                        {mediumScreen === false ? <Divider className=" w-12 opacity-30 bg-gray-300" ></Divider> : ""}

                        <button className={mediumScreen ? 'border-2 w-36 rounded-md hover:bg-gray-200 active:bg-gray-200 p-1 transform transition duration-300 ease-in active:scale-[.98]': ""}>
                            <Link href={'/createAccount'}>Crear cuenta</Link>
                        </button>
                        {mediumScreen === false ? <Divider className=" w-12 opacity-30 bg-gray-300" ></Divider> : ""}

                        <button className={mediumScreen ? 'border-2 w-36 border-[#144F60] azul text-white p-1 md:mr-10 rounded-md hover:text-[#144F60] hover:bg-white active:bg-black active:text-white transform transition duration-300 ease-in active:scale-[.98]' : ""}>
                            <Link href={'/logIn'}>Iniciar sesión</Link> 
                        </button>
                    </div>
                </div>
                <div className='absolute right-7 top-7 md:hidden'>
                    <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>

            </div>

        </div>

    )
}

export default Header;
