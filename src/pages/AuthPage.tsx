import React from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

import {
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
  } from '@mantine/core';
  
  export function AuthenticationTitle(): JSX.Element {

    const {data : session} = useSession() 
    // ALGO PARA EL BOTON DE SIGN IN

    const AuthShowcase: React.FC = () => {
      const { data: sessionData } = useSession();
    
      const { data: secretMessage } = api.example.getSecretMessage.useQuery(
        undefined, // no input
        { enabled: sessionData?.user !== undefined },
      );
    
      return (
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-2xl text-white">
            {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
            {secretMessage && <span> - {secretMessage}</span>}
          </p>
          <button
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>
        </div>
      );
    };

    return ( 
        <div className="container mx-auto max-w-md my-35">
        
        <div className="border-solid border border-gray rounded-md shadow-md p-6">
          <div className="flex justify-center font-bold py-1 text-xl mb-3 ">
            <h1 className="text-5xl font-bold text-black px-12">
              Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
            </h1>
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
            <label className = "text-md px-1 font-semibold">
              Contraseña
              <input
                type="password"
                className="block w-full border border-gray-300 rounded-md py-2 px-3 "
                placeholder="Password"
                required
              />
            </label>
          </div>
          <div className="flex justify-between items-center text-xs mb-3">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox accent-orange-500  mr-1.5" />
             Recuerdame
            </label>
            <button className="text-orange-500">
              Olvidaste tu contraseña?
            </button>
          </div>

          <div>
          <button className="w-full bg-orange-500 text-white rounded-xl py-2 mb-1 "
           onClick={() => signIn()}>Iniciar sesión</button>
          </div>
          <div className = "flex justify-center mb-1 text-gray-500">
            <label>
              - o -
            </label>
          </div>
          <button className="w-full bg-white-500 border border-sm border-black text-black rounded-xl py-2">
            Iniciar sesión con google
          </button>
          <p className="text-center text-gray-500 text-sm  py-2">
          Do not have an account yet?{' '}<br></br>
          <button className="text-sm text-orange-500">
            Create account
          </button>
        </p>
        </div>
      </div>
    );
  }