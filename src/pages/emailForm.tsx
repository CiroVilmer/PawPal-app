import React from 'react';
import Link from 'next/link';
import { FormWrapper } from './FormWrapper';

const EmailForm : React.FC = () => {
    return(

        <FormWrapper >

                <h1 className="flex justify-center text-5xl font-bold py-1 text-black px-12 mb-3">
                    Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
                </h1>
                <div className="flex justify-center mt-8 mb-5">
                    <button className="text-md text-gray-800">         
                    <Link href = "/">Volver al <span className = "text-orange-600 hover:underline">Log in</span></Link>   
                    </button>
                </div>
                <label className="flex justify-center text-center font-thin text-lg mb-10">
                    Ingresa tu correo electrónico y te enviaremos un código para que recuperes el acceso a tu cuenta.  
                </label>
                
                <label className = "text-md px-1 font-semibold"> 
                    Correo electronico
                </label>
                <input
                    type="string"
                    id="email"
                    className="block w-full border border-gray-300 rounded-md py-2 px-2 font-normal"
                    placeholder="ejemplo@gmail.com"
                    required
                    //{...formik.getFieldProps('email')}
                    />
                {/* {formik.errors.email && formik.touched.email ? <div className = "text-red-500 text-xs">{formik.errors.email}</div> : null} */}
            
        </FormWrapper>
    )
   
}
export default EmailForm;