import React, { useState } from 'react';
import Link from 'next/link';
import { api } from "~/utils/api";
import { register_validate } from 'lib/validate';
import { FiEye, FiEyeOff } from 'react-icons/fi'
import toast, { Toaster } from 'react-hot-toast';
import { PasswordInput, Input, Flex } from '@mantine/core';
import { useRouter } from 'next/router';
import FormWrapper from './Components/formWrapper';
import { Field, Form, Formik, useFormik } from 'formik';

export function CreateAccount() {

  const { mutate: createAccount } = api.user.createUser.useMutation();

  const router = useRouter()


  const initialValues = {
    name: '',
    surName: '',
    email: '',
    password: '',
    confirmPassword: '',
   }


  function onSubmit(values: { email: string; name: string; surName: string; password: string;}) {
    console.log(values)
    
     createAccount(values, {
      onSuccess: () => {
        console.log("User Created")
        toast.success("Usuario creado")
        void router.push("/logIn")

      },
      onError: (error: any) => {
        console.log(error)
        toast.error("Email en uso")
      }
    })
    

  }


  return (
    <FormWrapper title='Crear cuenta' buttonText='Crear cuenta'>
            {/* link='/logIn' */}
            {/* question='¿Ya eres miembro?' */}
            {/* linkTo='Iniciar sesión' */}
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
          <div className='text-center text-gray-500 text-sm mb-3 font-normal'> 
            ¿Ya eres miembro?{' '}<br></br>
            <button className="text-sm text-orange-500 hover:underline transform transition duration-100 ease-out active:scale-[.99]">            
              <Link href = "/logIn">Iniciar sesión</Link>
            </button>
          </div>
            <Flex className='flex flex-row justify-between'>
              <Input.Wrapper withAsterisk label="Nombre" className='font-Poppins'>
                <Field
                  type="string"
                  id="name"
                  name="name"
                  placeholder=""
                  size='sm'
                  className='w-32 md:w-36'
                  required
                />
              </Input.Wrapper>
              <Input.Wrapper withAsterisk label="Apellido" className='font-Poppins'>
                <Field
                  type="string"
                  id="surName"
                  name="surName"
                  placeholder=""
                  className='w-28 md:w-36'
                  size='sm'
                  required
                />
              </Input.Wrapper>
            </Flex>

            <div>

              <Input.Wrapper withAsterisk label="Correo electrónico" className='font-Poppins'>
                <Field
                  type="string"
                  id="email"
                  name="email"
                  placeholder=""
                  size='sm'
                  required
                />
              </Input.Wrapper>
              <Input.Wrapper withAsterisk label="Contraseña" className='font-Poppins'>
                <Field
                  placeholder=""
                  type="password"
                  id="password"
                  name="password"
                  required
                  className='w-[258px] md:w-80'
                  // visibilityToggleIcon={({ reveal, size }) =>
                  //   reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                />
              </Input.Wrapper>
              <Input.Wrapper withAsterisk label="Confirmar contraseña" className='mb-9 font-Poppins'>
                <Field
                  placeholder=""
                  required
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  // visibilityToggleIcon={({ reveal, size }) =>
                  //   reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                />
              </Input.Wrapper>
            </div>
          </Form>
          </Formik> 
          <div>
          <button className="w-full bg-orange-400 text-white rounded-xl py-2 mb-1 hover:bg-orange-500 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-1 transform transition duration-400 ease-in active:scale-[.98]" type='submit'>
            Crear cuenta
          </button>
      
          </div>
          <Toaster
          position="top-center"
          reverseOrder={false}
        />
    </FormWrapper>
        
      
  );
}

    export default CreateAccount;


