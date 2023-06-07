import React, {useState} from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import CreateAccount from './createAccount';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useRef } from 'react';

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
  } from '@mantine/core';

  async function handleGoogleSignin() {
    signIn('google',{callbackUrl:"http://localhost:3000"})
  }


  export function AuthenticationTitle(): JSX.Element {
    const {data : session} = useSession() 
    // ALGO PARA EL BOTON DE SIGN IN

    const formik = useFormik({
      initialValues:{
        email: '',
        password:''
      },
      onSubmit
      })
    async function onSubmit (values: any){
      console.log(values)
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setPasswordShown(!passwordShown)
    }

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
      <div className="container max-w-md mr-auto absolute mt-15 left-28">
        
        <div className="border-solid border border-gray rounded-md shadow-md p-8">
          <div className="flex justify-center font-bold py-1 text-xl mb-3 ">
            <h1 className="text-5xl font-bold text-black px-12">
              Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
            </h1>
          </div> 
          <form action="" onSubmit={formik.handleSubmit}>
          <div className = "jutify-center items-center">
            <label className = "text-md px-1 font-semibold"> 
              Correo electronico
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full border border-gray-300 rounded-md py-2 px-3"
                placeholder="ejemplo@gmail.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                required
              />
            </label>
          </div>
          <div className="mb-2">
              <label className="text-md px-1 font-semibold relative">
                Contraseña
                <div className="relative flex">
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    name= "password"
                    className="block w-full border border-gray-300 rounded-md py-2 px-2 pr-2" // Added pr-10 for button spacing
                    onChange={formik.handleChange}
                    value={formik.values.password}                    
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
          <div className="flex justify-between items-center text-xs mb-3">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox accent-orange-500  mr-1.5" />
             Recuerdame
            </label>
            <button className="text-orange-500 hover:underline">
              Olvidaste tu contraseña?
            </button>
          </div>

          <div>
          <button className="w-full bg-orange-500 text-white rounded-xl py-2 mb-1 hover:bg-orange-600" type='submit'>
            Iniciar sesión
            
          </button>
          </div>

          </form>
          <div className = "flex justify-center mb-1 text-gray-500">
            <label>
              - o -
            </label>
          </div>
          <button type="button" onClick={handleGoogleSignin} className="w-full bg-white-500 border border-sm border-black text-black rounded-xl py-2 hover:bg-gray-100">
            Iniciar sesión con google
          </button>
         
          <p className="text-center text-gray-500 text-sm  py-2">
            Do not have an account yet?{' '}<br></br>

            <button className="text-sm text-orange-500 hover:underline">
            
              <Link href = "/createAccount">Crear cuenta</Link>
             
          </button>
          </p>   
          
        </div>
      </div>
    );
  }