// Contact.tsx
import React from 'react';
import Header from './Components/LandingComponents/landingHeader';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"

const Contacto: React.FC = () => {

  return (
    <div>
        <Header />
        <div className='flex flex-col items-center justify-center h-screen font-Poppins background'>
            <div className='flex flex-col mt-12 items-start'>
                <h1 className='font-bold text-6xl mb-5 text-left'>Contactanos!</h1>
                <p className='text-lg'>Nos encantaría escuchar tus opiniones y/o propuestas</p>
                <form className='rounded-md h-auto w-[500px] flex flex-col items-start gap-5 mt-8'>
                    <div className = 'flex flex-row gap-5'>
                        <div className = 'flex flex-col gap-1'>
                            <label htmlFor="location" className='font-semibold'>Nombre</label>
                            <input type="text"  placeholder='' className='w-[145px] md:w-[180px] text-md rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                        </div>
                        <div className = 'flex flex-col gap-1'>
                            <label htmlFor="location" className='font-semibold'>Apellido</label>
                            <input type="text"  placeholder='' className='w-[145px] md:w-[180px] text-md rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                        </div>
                    </div>
                    <div className = 'flex flex-col gap-1'>
                        <label htmlFor="location" className='font-semibold'>Correo electrónico</label>
                        <input type="text"  placeholder='' className='w-[145px] md:w-[380px] text-md rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                    </div>
                    <div className = 'flex flex-col gap-1'>
                        <label htmlFor="location" className='font-semibold'>Número telefónico</label>
                        <input type="text"  placeholder='' className='w-[145px] md:w-[380px] text-md rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                    </div>
                    <div className = 'flex flex-col gap-1'>
                        <label htmlFor="location" className='font-semibold'>Mensaje</label>
                                    
                        <textarea id="description" name="description" className="md:w-[380px] w-auto max-h-[150px] rounded-md h-24 p-4 flex items-center outline-none text-sm border-gray-200 border-[1px] focus:border-orange-400 duration-500"
                            autoComplete="off" spellCheck="false" placeholder="Color, caracter, collar...">
                        </textarea>
                    </div>
                    <button type='submit' className='w-[380px] mt-3 bg-orange-400 text-white rounded-lg py-2 mb-1 hover:bg-orange-500 active:bg-orange-600 active:outline-none active:ring-2 active:ring-orange-200 active:ring-offset-1 transform transition duration-400 ease-in active:scale-[.98]'>Enviar mensaje</button>


                </form>
            </div>
        </div>
    </div>
   
  );
};

export default Contacto;
