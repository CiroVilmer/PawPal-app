import React   from 'react';
import { signIn } from "next-auth/react";
import Link from 'next/link';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import login_validate from 'lib/validate';
import { useRouter } from 'next/router';
import {FiEyeOff, FiEye} from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from "yup"

import 
  {
    PasswordInput,
    Checkbox,
    Input,
    Flex,
  } from '@mantine/core';
import FormWrapper from './Components/formWrapper';

function LogInForm(): JSX.Element {
  
  const router = useRouter()
    
  const logInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
    .min(8, "Mínimo 8 caracteres")
    .max(40, "La contraseña es muy larga")
  })

  const initialValues = {
    email: '',
    password: '',
  }

  async function onSubmit(values: { email: string, password: string }) {
    console.log('Form values:', values);

    const response = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "https://pawpalweb.vercel.app/homepage"
    })

    if (response?.ok) {
      console.log("User Logged in")
      void router.push("/homepage")
    }

    if (!response?.ok) {
      console.log("User not Logged in")
      toast.error("Email o contraseña incorrectos")
    }
    }
    
    return ( 
      
    <FormWrapper title='Iniciar sesión' buttonText='Iniciar sesión'>
      <Formik initialValues={initialValues} validationSchema={logInSchema} onSubmit={onSubmit}> 
      {({ errors, touched}) => (

      
      <Form>
        <div className='text-center text-gray-500 text-sm mb-3'> 
          ¿Todavía no creaste una cuenta?{' '}<br></br>
          <button className="text-sm text-orange-500 hover:underline transform transition duration-100 ease-out active:scale-[.99]">            
            <Link href = "/createAccount">Crear cuenta</Link>
          </button>
        </div>
        <div>
          <Input.Wrapper withAsterisk label = "Correo electronico" className='mb-5 w-[258px] md:w-80 font-Poppins'> 
            <Field
              type="email"
              id="email"       
              name="email"  
              placeholder=""
              required
            />
           {errors.email && touched.email && <div>{errors.email}</div>}

          </Input.Wrapper>  
          <Input.Wrapper withAsterisk label="Contraseña" className='mb-2 w-[258px] md:w-80 font-Poppins'>
            <Field
              placeholder=""
              type="password"
              id="password"
              name="password"
              required
              size='sm'
              style = {{width: '400'}}
              //visibilityToggleIcon={({ reveal, size }) =>
              //reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
            />              
          </Input.Wrapper>
              
        </div>        
        <Flex className="flex items-center mb-8 " direction={"row"} justify={"space-between"}>
          <a className='flex flex-row gap-[6px]'>
            <Checkbox
              color='orange'
              size={"xs"}
            />
            <label className="text-gray-500 text-xs">Recordarme</label>
          </a>
          <button className="text-orange-500 text-xs hover:underline transform transition duration-100 ease-out active:scale-[.99]">
            <Link href = "/passwordRecovery">¿Olvidaste tu contraseña?</Link>
          </button>
        </Flex>
        <div>
          <button className="w-full bg-orange-400 text-white rounded-xl py-2 mb-1 hover:bg-orange-500 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-1 transform transition duration-400 ease-in active:scale-[.98]" type='submit'>
            Iniciar sesión
          </button>
        </div>
        
      </Form>
      )}
      </Formik>
        
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </FormWrapper>
  );


}

export default LogInForm;