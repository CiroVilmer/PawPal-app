import React, {useState} from "react";
import { Input, PasswordInput,Stack } from "@mantine/core";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FormWrapper } from "./FormWrapper";



const NewPassword:React.FC = () => {

    const [passwordShown, setPasswordShown] = useState(false);

    return(
        
        <FormWrapper title="">

                <h1 className="flex justify-center text-5xl font-bold py-1 text-black px-12 mb-3">
                Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
                </h1>
                
                <label className="flex justify-center text-center font-normal text-lg mb-10">
                    Lorem ipsum dolor sit amet consectetur. Quam quam imperdiet cursus fusce aliquam.  
                </label>
                <Stack maw={390} mx="auto">
                    <PasswordInput
                        label="Contraseña"
                        placeholder="contraseña123"
                        visibilityToggleIcon={({ reveal, size }) => reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                    />
                    <PasswordInput
                        label="Confirmar contraseña"
                        placeholder="contraseña123"
                        visibilityToggleIcon={({ reveal, size }) => reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                            
                    />
                </Stack>
            
        </FormWrapper>
    )
}

export default NewPassword;