import React, {useState} from "react";
import { PasswordInput,Stack } from "@mantine/core";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FormWrapper } from "./FormWrapper";
import Link from "next/link";



const NewPassword:React.FC = () => {

    return(
        
        <FormWrapper >

                <h1 className="flex justify-center text-5xl font-bold py-1 text-black px-12 mb-3">
                    Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
                </h1>
                <div className="flex justify-center mt-8 mb-3">
                    <button className="text-md text-gray-800">         
                    <Link href = "/">Volver al <span className = "text-orange-600 hover:underline">Log in</span></Link>   
                    </button>
                </div>
                <label className="flex justify-center text-center font-thin text-lg mb-6">
                    Ingresa la nueva contraseña.  
                </label>
                <PasswordInput
                    label="Nueva contraseña"
                    placeholder="contraseña123"
                    visibilityToggleIcon={({ reveal }) => reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                    mb="xl"
                />
                
                <button className="w-full bg-orange-500 text-white rounded-md py-2 hover:bg-orange-600" type='submit'>
                    Reestablecer contraseña  
                </button>
        </FormWrapper>
    )
}

export default NewPassword;