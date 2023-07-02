import React, {useState} from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import CreateAccount from './createAccount';
import Link from 'next/link';
import { useFormik } from 'formik';
import login_validate from 'lib/validate';
import { useRouter } from 'next/router';
import {FiEyeOff, FiEye} from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';


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
import { time } from 'console';
import FormWrapper from './Components/formWrapper';

  async function handleGoogleSignin() {
    signIn('google',{callbackUrl:"http://localhost:3000/homepage"})
  }


export function LogInForm(): JSX.Element {
    

  const router = useRouter()
  const { mutate: findUser} = api.user.findUser.useMutation();


    
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
      toast.error("Email o contraseña incorrectos")

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
      
    <FormWrapper title='Iniciar sesión' question='¿Todavía no creaste una cuenta?' link='/createAccount' linkTo='Crear cuenta' buttonText='Iniciar sesión'>
      <form action={''} onSubmit={formik.handleSubmit}>
        <div>
          <Input.Wrapper withAsterisk label = "Correo electronico" className='w-80 mb-5'> 
            <Input
              type="email"
              id="email"         
              placeholder="ejemplo@gmail.com"
              {...formik.getFieldProps('email')}
              required
            />
            {formik.errors.email && formik.touched.email ? <div className = "text-red-500 text-xs px-1">{formik.errors.email}</div> : null}
          </Input.Wrapper>  
          <Input.Wrapper withAsterisk label="Contraseña" className='mb-2'>
            <PasswordInput
              placeholder="password"
              required
              size='sm'
              style = {{width: '400'}}
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
          <button className="text-orange-500 text-xs hover:underline transform transition duration-100 ease-out active:scale-[.99]">
            <Link href = "/passwordRecovery">¿Olvidaste tu contraseña?</Link>
            </button>
        </Flex>
        <div>
          <button className="w-full bg-orange-400 text-white rounded-xl py-2 mb-1 hover:bg-orange-500 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-1 transform transition duration-400 ease-in active:scale-[.98]" type='submit'>
            Iniciar sesión
          </button>
        </div>
      </form>
            
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </FormWrapper>
  );
}

export default LogInForm;