import React, {useState} from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import CreateAccount from './createAccount';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useRef } from 'react';
import login_validate from 'lib/validate';
import { useRouter } from 'next/router';
import {FiEyeOff, FiEye} from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    Input,
    Flex
  } from '@mantine/core';
import { staticGenerationAsyncStorage } from 'next/dist/client/components/static-generation-async-storage';
import { router } from '@trpc/server';
import { any } from 'zod';

  async function handleGoogleSignin() {
    signIn('google',{callbackUrl:"http://localhost:3000/homepage"})
  }


  export function AuthenticationTitle(): JSX.Element {
    

    const router = useRouter()
    const { mutate: findUser} = api.user.findUser.useMutation();
    
    const tostError = () => toast.error("Usuario o contraseña incorrectos", {
      
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
    })

    
    const formik = useFormik({
      initialValues:{
        email: '',
        password:''
      },
      validate: login_validate,
      onSubmit
      })
    async function onSubmit (values: any){
      console.log(values)

      const status = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "http://localhost:3000/homepage"
      })

      console.log(status)

      if(status?.ok){
        console.log("User Logged in") 
        
        void router.push("/homepage")
      }

      if(!status?.ok){
        console.log("User not Logged in")
        tostError()
        //alertar al usuario que el email o la contraseña son incorrectos
      }
    }


    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setPasswordShown(!passwordShown)
    }

    
    return ( 
      
      <div className="flex h-screen items-center max-w-screen-lg  p-3 container justify-center lg:ml-28 lg:justify-start">
        <div className="border-solid border border-gray rounded-xl shadow-md p-8 ">
          <div className="flex justify-center font-bold py-1 mb-16">
            <h1 className="text-5xl font-bold text-black px-12">
              Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
            </h1>
             
          </div>
          <form action="" onSubmit={formik.handleSubmit}>
            <div>
              <Input.Wrapper withAsterisk label = "Correo electronico" className='w-96 mb-5'> 
                <Input
                  type="email"
                  id="email"
                  placeholder="ejemplo@gmail.com"
                  {...formik.getFieldProps('email')}
                  required
                />
                {formik.errors.email && formik.touched.email ? <div className = "text-red-500 text-xs px-1">{formik.errors.email}</div> : null
                }
              </Input.Wrapper>
            
            
              <Input.Wrapper withAsterisk label="Contraseña" className='mb-2'>
                <PasswordInput
                  placeholder="Password"
                  required
                  {...formik.getFieldProps('password')}
                  visibilityToggleIcon={({ reveal, size }) =>
                  reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                />
                
                {formik.errors.password && formik.touched.password ? <div className = "text-red-500 text-xs">{formik.errors.password}</div> : null}
              </Input.Wrapper>
              
            </div>
              
            <Flex className="flex items-center mb-8" direction={"row"} justify={"space-between"}>
              <Checkbox
                color='orange'
                size={"xs"}
                label="Recuerdame"
              />
              <button className="text-orange-500 text-xs hover:underline">
                <Link href = "/forgotPassword">¿Olvidaste tu contraseña?</Link>
              </button>
            </Flex>

            
            <div>
              <button className="w-full bg-orange-500 text-white rounded-md py-2 mb-1 hover:bg-orange-600" type='submit'>
                Iniciar sesión
                
              </button>
            </div>

          </form>
          <div className = "flex justify-center mb-1 text-gray-500">
            <label>
              - o -
            </label>
          </div>

          <button type="button" onClick={handleGoogleSignin} className="w-full bg-white-500 border border-sm border-black text-black rounded-md py-2 hover:bg-gray-100">
            Iniciar sesión con google
          </button>

         
          <p className="text-center text-gray-500 text-sm  py-2">
            ¿Todavía no creaste una cuenta?{' '}<br></br>
            
            <button className="text-sm text-orange-500 hover:underline">            
              <Link href = "/createAccount">Crear cuenta</Link>
            </button>
          </p>   
          
        </div>
        <ToastContainer/>
      </div>
    );
  }