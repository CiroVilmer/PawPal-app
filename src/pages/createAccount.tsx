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
    
    <div className="container max-w-md mr-auto absolute mt-16 left-28">
        
        <div className="border-solid border border-gray rounded-md shadow-md p-8">
          <div className="flex justify-center font-bold py-1 text-xl mb-3">
            <h1 className="text-5xl font-bold text-black px-12">
              Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
            </h1>
          </div>

          <div className="flex justify-center items-center position-center mb-2">
            
            <div className = "flex flex-row">
              <label className="text-md pr-2 font-semibold">
                Nombre
                <input
                  className="block border border-gray-300 rounded-md py-1 px-2 w-40"
                  type="text"
                  id="first_name"
                  placeholder="Pepe"
                  required
                 />
              </label>
            </div>

            <div>
              <label className="text-md pl-1 font-semibold">
                Apellido
                <input
                  className="block border border-gray-300 rounded-md py-1 px-2"
                  type="text"
                  id="last_name"
                  placeholder="Urizar"
                  required
                />
              </label>
            </div>
          </div>

        <div>
            <label className = "text-md px-1 font-semibold"> 
                Documento
                <input
                    type="text"
                    className="block w-full border border-gray-300 rounded-md py-2 px-2 w-62"
                    placeholder="1111111111"
                    required
                />
            </label>
        </div>
            <div>
                <label className = "text-md px-1 font-semibold"> 
                Correo electronico
                <input
                    type="email"
                    id="email"
                    className="block w-full border border-gray-300 rounded-md py-2 px-2"
                    placeholder="Ejemplo@gmail.com"
                    required
                />
                </label>
            </div>
            <div>
              <label className="text-md px-1 font-semibold relative">
                Contraseña
                <div className="relative flex">
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    className="block w-full border border-gray-300 rounded-md py-2 px-2 pr-2" // Added pr-10 for button spacing
                    placeholder="Password"
                    required
                  />
                  <button
                    className="ml-auto bg-transparent border-none p-2 text-gray-500"
                    onClick={togglePassword}
                  >
                    {passwordShown ? 'Hide' : 'Show'}
                  </button>
                </div>
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