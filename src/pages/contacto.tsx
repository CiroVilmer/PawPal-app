// Contact.tsx
import React from 'react';
import Header from './Components/LandingComponents/landingHeader';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
import {useMediaQuery} from "@mantine/hooks";


const Contacto: React.FC = () => {

    const mediumScreen =  useMediaQuery('(min-width: 768px)');

  return (
    <body>
        <Header />
        <div className='flex flex-col items-start justify-center h-screen font-Poppins background'>
            <div className={mediumScreen ? 'flex flex-col py-6 w-[440px] mt-20 items-center ml-28 bg-white shadow-lg rounded-lg' : 'flex flex-col items-center mt-16 overflow-hidden justify-center'}>
                <div className = "flex flex-col gap-2 mb-5 md:mb-0">
                    <h1 className={mediumScreen ? 'font-bold text-[36px] text-center' : 'font-bold text-4xl mb-3 text-center'}>Ponete en contacto</h1>
                    <p className='text-sm md:text-lg text-center max-w-[280px] mx-12'>
                        Danos tu <span className="text-[#144F60] font-medium">opinión</span> para mejorar nuestro servicio!
                    </p>
                </div>
                
                <form className={mediumScreen ? 'rounded-md h-auto w-[500px] flex flex-col items-center gap-3 mt-6' : 'flex flex-col items-center justify-end  gap-1'}>
                    <div className = 'flex flex-row gap-5'>
                        <div className = 'flex flex-col gap-1'>
                            <label htmlFor="location" className='font-semibold'>Nombre</label>
                            <input type="text"  placeholder='' className='w-[250px] md:w-[150px] text-md rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                        </div>
                        {mediumScreen ? <div className = 'flex flex-col gap-1'>
                            <label htmlFor="location" className='font-semibold'>Apellido</label>
                            <input type="text"  placeholder='' className='w-[145px] md:w-[150px] text-md rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                        </div> : <></>}
                    </div>
                    {mediumScreen ? <></> : 
                        
                        <div className = 'flex flex-col gap-1'>
                            <label htmlFor="apellido" className='font-semibold'>Apellido</label>
                            <input type="text"  placeholder='' className='w-[250px] md:w-[150px] text-md rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                        </div>
                    }
                    <div className = 'flex flex-col gap-1'>
                        <label htmlFor="mail" className='font-semibold'>Correo electrónico</label>
                        <input type="text"  placeholder='' className='w-[250px] md:w-[320px] text-md rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                    </div>
                   
                    <div className = 'flex flex-col gap-1'>
                        <label htmlFor="mensaje" className='font-semibold'>Mensaje</label>
                                    
                        <textarea id="description" name="description" className="md:w-[320px] w-[250px] max-h-[150px] rounded-md h-18 p-4 flex items-center outline-none text-sm border-gray-200 border-[1px] focus:border-orange-400 duration-500"
                            autoComplete="off" spellCheck="false" placeholder="Color, caracter, collar...">
                        </textarea>
                    </div>
                    <button type='submit' className='w-[250px] md:w-[320px] mt-3 bg-orange-400 text-white rounded-lg py-2 mb-1 hover:bg-orange-500 active:bg-orange-600 active:outline-none active:ring-2 active:ring-orange-200 active:ring-offset-1 transform transition duration-400 ease-in active:scale-[.98]'>Enviar mensaje</button>


                </form>
            </div>
        </div>
    </body>
   
  );
};

export default Contacto;
