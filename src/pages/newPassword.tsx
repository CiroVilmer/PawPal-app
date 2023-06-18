import React, {useState} from "react";
import { PasswordInput,Stack } from "@mantine/core";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import { FormWrapper } from "./Components/FormWrapper";

const NewPassword:React.FC = () => {
    return(

        <FormWrapper >

            <div className="flex justify-center font-bold ">
                <button>
                    <Link href="/">
                    <h1 className="flex justify-center text-5xl font-bold py-1 text-black px-12 mb-1">
                        Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
                    </h1>
                    </Link>
                </button>
            </div>
                <div className="flex justify-center mt-7 mb-3">
                    <button className="text-md text-gray-800">         
                    <Link href = "/logIn">Volver al <span className = "text-orange-600 hover:underline">Log in</span></Link>   
                    </button>
                </div>
                <label className="flex justify-center text-center font-thin text-lg mb-7">
                    Ingresa la nueva contraseña para efectuar el cambio.  
                </label>
                <PasswordInput
                    label="Nueva contraseña"
                    placeholder="contraseña123"
                    visibilityToggleIcon={({ reveal }) => reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                    mb={52}
                />
                
                <button className="w-full bg-orange-400 text-white rounded-md py-2 hover:bg-orange-500 active:bg-orange-600 transform transition duration-300 ease-in active:scale-[.98] mb-9" type='submit'>
                    Reestablecer contraseña  
                </button>
               
                
        </FormWrapper>
    )
}

export default NewPassword;