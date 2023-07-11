import React, {useState} from "react";
import { PasswordInput,Stack } from "@mantine/core";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import { Progress } from '@mantine/core';
import FormWrapper from "../Components/formWrapper";


const NewPassword:React.FC = () => {
    return(

        <FormWrapper title=''  buttonText='' >
                <div className="flex justify-center mt-7 mb-3">
                    <button className="text-md text-gray-800">         
                        <Link href = "/logIn">Volver al <span className = "text-orange-600 hover:underline">Log in</span></Link>   
                    </button>
                </div>
                <label className="flex justify-center text-center font-thin text-lg mb-5">
                    Ingresa la nueva contraseña para efectuar el cambio.  
                </label>
                <PasswordInput
                    label="Nueva contraseña"
                    placeholder="contraseña123"
                    visibilityToggleIcon={({ reveal }) => reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                    mb={28}
                />
                    
                <Progress size={"sm"} value={66} color="orange"></Progress>
                <div className='flex justify-center mt-8'>
                    <button className="w-full bg-orange-400 text-white rounded-xl py-2 mb-1 hover:bg-orange-500 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-1 transform transition duration-400 ease-in active:scale-[.98]" type='submit'>
                        <Link href={'./newPassword'}> Cambiar contraseña </Link>
                    </button>
                </div>
        </FormWrapper>
    )
}

export default NewPassword;