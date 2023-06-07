import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';




export function forgotPassword()
{
    
    return( 
        <div className="container max-w-md mr-auto absolute mt-15 left-28">
                
                <div className="border-solid border border-gray rounded-md shadow-md p-8">
                <div className="flex justify-center font-bold py-1 text-xl mb-3 ">
                    <h1 className="text-5xl font-bold text-black px-12">
                    Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
                    </h1>
                </div> 
                
                

                
                <div className = "flex justify-center mb-1 text-gray-500">
                    <label>
                    - o -
                    </label>
                </div>
                
                
                <p className="text-center text-gray-500 text-sm  py-2">
                    ¿Todavía no creaste una cuenta?{' '}<br></br>

                    <button className="text-sm text-orange-500 hover:underline">
                    
                    <Link href = "/">Volver</Link>
                    
                </button>
                </p>   
                
            </div>
        </div>
    )
}

export default forgotPassword;