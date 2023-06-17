import React from 'react';
import Link from 'next/link';
import {Input} from '@mantine/core'
import { FormWrapper } from './Components/FormWrapper';

const EmailForm : React.FC = () => {
    return(
        <FormWrapper>
            <div className="flex justify-center font-bold ">
                <button>
                    <Link href="/">
                    <h1 className="flex justify-center text-5xl font-bold py-1 text-black px-12 mb-3">
                        Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
                    </h1>
                    </Link>
                </button>
            </div>

            <div className="flex justify-center mt-5 mb-3">
                <button className="text-md text-gray-800">         
                    <Link href = "./logIn">Volver al <span className = "text-orange-600 hover:underline">Log in</span></Link>   
                </button>
            </div>
            <label className="flex justify-center text-center font-thin text-lg mb-5">
                Ingresa tu correo electrónico y te enviaremos un código para que recuperes el acceso a tu cuenta.  
            </label>
            <Input.Wrapper label="Correo electrónico" mb={28}>
                <Input
                    type="string"
                    id="email"
                    placeholder="Ejemplo@gmail.com"
                    required
                    // {...formik.getFieldProps('email')}

                />
                {/* {formik.errors.email && formik.touched.email ? <div className = "text-red-500 text-xs">{formik.errors.email}</div> : null} */}    
            </Input.Wrapper>
            <button className="w-full bg-orange-500 text-white rounded-md py-2 mb-8 hover:bg-orange-600" type='submit'>
                Enviar código  
            </button>
        </FormWrapper>
    )

}
export default EmailForm;
    
