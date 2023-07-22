import React, {useState} from 'react';
import Link from 'next/link';
import HamburgerButton from './hamburger';
import {useMediaQuery} from '@mantine/hooks'

const Header: React.FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    function scrollUp(){
        window.scrollTo({top:0, behavior: 'smooth'})
    }
      
    const mediumScreen = useMediaQuery("(min-width: 768px)");

    return(
        <div className= "w-full flex items-center border-b-2 py-2 h-20 shadow-sm fixed bg-white z-20">
            
            <button onClick={scrollUp} className='flex flex-row items-center'>
                <img src='/logoPawPal.png' alt='logo'/>
                <h1 className='font-bold text-xl'> Paw<span className='text-orange-500'>Pal</span> </h1>
            </button>
            <div className="grow w-full">
                <div className={mediumScreen ? '' :` rounded-l-xl shadow-xl gap-3 p-3 bg-white h-auto absolute top-[88px]  opacity-0 ${isOpen === true ? "opacity-100 -right-1 duration-700" : "-right-28"} `}>
                    <div className={mediumScreen ? 'flex justify-end flex-row gap-6' : `${isOpen === true ? "flex flex-col" : "hidden"}`}>
                        <button className={mediumScreen ?'hover:-translate-y-1 duration-300':''}>
                            Inicio
                        </button>
                        <button className={mediumScreen ?'hover:-translate-y-1 duration-300':''}>
                            <Link href={'/mapa'}>Mapa</Link>
                        </button>
                        <button className={mediumScreen ?'hover:-translate-y-1 duration-300':''}>
                            Contacto
                        </button>
                        <button className={mediumScreen ? 'border-2 w-36 rounded-md hover:bg-gray-200 active:bg-gray-200 p-1 transform transition duration-300 ease-in active:scale-[.98]': ""}>
                            <Link href={'/createAccount'}>Crear cuenta</Link>
                        </button>
                        <button className={mediumScreen ? 'border-2 w-36 border-black bg-black text-white p-1 md:mr-10 rounded-md hover:text-black hover:bg-white active:bg-black active:text-white transform transition duration-300 ease-in active:scale-[.98]' : ""}>
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
