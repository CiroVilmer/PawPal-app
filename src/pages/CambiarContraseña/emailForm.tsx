import React from 'react';
import Link from 'next/link';
import {Input, Button, Progress} from '@mantine/core'
import FormWrapper from '../Components/formWrapper';

const EmailForm : React.FC = () => {

    return(

        <FormWrapper>

                <div className="flex justify-center mt-5 mb-3">
                    <button className="text-md text-gray-800">         
                        <Link href = "./logIn">Volver al <span className = "text-orange-600 hover:underline">Log in</span></Link>   
                    </button>
                </div>
                <label className="flex justify-center text-center font-thin text-lg mb-5 w-80">
                    Ingresa el correo electrónico registrado y recibirás un código para cambiar tu contraseña.  
                </label>
                <Input.Wrapper label="Correo electrónico" mb={28}>
                    <Input
                        type="string"
                        id="email"
                        placeholder="Ejemplo@gmail.com"
                        size='sm'
                        required
                        // {...formik.getFieldProps('email')}

                    />
                    {/* {formik.errors.email && formik.touched.email ? <div className = "text-red-500 text-xs">{formik.errors.email}</div> : null} */}    
                </Input.Wrapper>
                <Progress size={"sm"} value={0}></Progress>
                <div className='flex justify-center mt-8'>
                    <button className="w-full bg-orange-400 text-white rounded-xl py-2 mb-1 hover:bg-orange-500 active:bg-orange-600 active:outline-none active:ring-2 active:ring-orange-200 active:ring-offset-1 transform transition duration-400 ease-in active:scale-[.98]" type='submit'>
                        <Link href={'./recoveryCode'}>Enviar código </Link> 
                    </button>
                </div>
        </FormWrapper>
    )

}
export default EmailForm;
    
