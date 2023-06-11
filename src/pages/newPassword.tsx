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
                
            <label className="flex justify-center text-center font-thin text-lg mb-10">
                Ingresar la nueva contraseña
            </label>
            <Stack maw={360} mx="auto">
                <PasswordInput
                    label="Contraseña"
                    placeholder="contraseña123"
                    visibilityToggleIcon={({ reveal }) => reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                />
                <PasswordInput
                    label="Confirmar contraseña"
                    placeholder="contraseña123"
                    visibilityToggleIcon={({ reveal }) => reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                />
                <button className="w-full bg-orange-500 text-white rounded-md py-2 hover:bg-orange-600" type='submit'>
                    Reestablecer contraseña  
                </button>
                
            </Stack>

        </FormWrapper>
    )
}

export default NewPassword;