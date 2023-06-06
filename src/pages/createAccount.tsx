import React, {useState} from 'react';
import Link from 'next/link';
import { api } from "~/utils/api";
import { signIn, signOut, useSession } from "next-auth/react";
import 
  {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Input
  } from '@mantine/core';

export function CreateAccount(): JSX.Element  
{
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setPasswordShown(!passwordShown)
    }
  return (
    
    <div className="container max-w-md mr-auto absolute mt-10 left-28">
        
        <div className="border-solid border border-gray rounded-md shadow-md p-6">
          <div className="flex justify-center font-bold py-1 text-xl mb-3 ">
            <h1 className="text-5xl font-bold text-black px-12">
              Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
            </h1>
          </div>

            <div className="position-center">
            <div className="flex justify-center items-center">
        <div className = "flex flex-row">
            <label className="text-md px-1 font-semibold">
                Nombre
                <input
                    type="text"
                    className="block border border-gray-300 rounded-md py-2 px-2"
                    placeholder="Pepe"
                    required
                />
            </label>
            </div>

                <div className="flex justify-center items-center">
                    <label className="text-md px-1 font-semibold">
                        Apellido
                        <input
                            type="text"
                            className="block border border-gray-300 rounded-md py-2 px-2"
                            placeholder="Urizar"
                            required
                    />
                    </label>
                </div>
            </div>
        </div>
        <div className = "jutify-center items-center">
            <label className = "text-md px-1 font-semibold"> 
                Documento
                <input
                    type="text"
                    className="block w-full border border-gray-300 rounded-md py-2 px-3"
                    placeholder="1111111111"
                    required
                />
            </label>
        </div>

            <div className = "jutify-center items-center">
                <label className = "text-md px-1 font-semibold"> 
                Correo electronico
                <input
                    type="text"
                    className="block w-full border border-gray-300 rounded-md py-2 px-3"
                    placeholder="ejemplo@gmail.com"
                    required
                />
                </label>
            </div>
          <div>
            <label className="text-md px-1 font-semibold relative">
              Contraseña
              <input
                type={passwordShown ? 'text' : 'password'}
                className="block w-full border border-gray-300 rounded-md py-2 px-3 pr-10"
                placeholder="Password"
                required
              />
              <button
                className="bg-transparent border-none p-2 text-gray-500 dark:text-gray-400"
                onClick={togglePassword}
              >
                {passwordShown ? 'Hide' : 'Show'}
              </button>
            </label>
          </div>

          <button className="w-full bg-orange-500 text-white rounded-xl py-2 hover:bg-orange-600">
            Crear cuenta 
          </button>
          

          <div className = "flex justify-center mb-1 text-gray-500">
            <label>
              - o -
            </label>
          </div>
          <button className="w-full bg-white-500 border border-sm border-black text-black rounded-xl py-2 hover:bg-gray-100">
            Crear cuenta con google
          </button>
          <p className="text-center text-gray-500 text-sm  py-2">
            Ya eres un miembro?{' '}<br></br>

            <button className="text-sm text-orange-500 hover:underline">
            
              <Link href = "/">Iniciar sesión</Link>
             
          </button>
          </p>   
          
        </div>
    </div>
  );
};

export default CreateAccount;