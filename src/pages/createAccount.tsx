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
import * as Yup from "yup"


export function CreateAccount() {

  const { mutate: createAccount } = api.user.createUser.useMutation();

  const router = useRouter()

  const registerSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    surName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
    .min(8, "Mínimo 8 caracteres")
    .max(40, "La contraseña es muy larga")
    .required("Required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match').required("Required")
  })

  const initialValues = {
    name: '',
    surName: '',
    email: '',
    password: '',
    confirmPassword: '',
   }


  function onSubmit(values: { email: string, name: string, surName: string, password: string}) {
    
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
          <Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={onSubmit} >
          {({ errors, touched}) => (
          <Form>
          <div className='text-center text-gray-500 text-sm mb-3 font-normal'> 
            ¿Ya eres miembro?{' '}<br></br>
            <button className="text-sm text-orange-500 hover:underline transform transition duration-100 ease-out active:scale-[.99]">            
              <Link href = "/logIn">Iniciar sesión</Link>
            </button>
          </div>
            <Flex className='flex flex-row justify-between'>
              <Input.Wrapper withAsterisk label="Nombre" className='font-Poppins flex flex-col'>
                <Field
                  type="string"
                  id="name"
                  name="name"
                  placeholder=""
                  size='sm'
                  className='w-32 md:w-36 outline-none border-[1px] rounded-lg h-8 mb-1 p-4 focus:border-orange-400 duration-300'
                  required
                />
               {errors.name && touched.name && <div className="text-red-500 text-xs">{errors.name}</div>}
              </Input.Wrapper>
              <Input.Wrapper withAsterisk label="Apellido" className='font-Poppins flex flex-col'>
                <Field
                  type="string"
                  id="surName"
                  name="surName"
                  placeholder=""
                  className='w-28 md:w-36 outline-none border-[1px] rounded-lg h-8 mb-1 p-4 focus:border-orange-400 duration-300'
                  size='sm'
                  required
                />
                {errors.surName && touched.surName && <div className="text-red-500 text-xs">{errors.surName}</div>}

              </Input.Wrapper>
            </Flex>

            <div>

              <Input.Wrapper withAsterisk label="Correo electrónico" className='font-Poppins flex flex-col'>
                <Field
                  type="string"
                  id="email"
                  name="email"
                  placeholder=""
                  size='sm'
                  className='outline-none border-[1px] rounded-lg w-full h-8 mb-1 p-4 focus:border-orange-400 duration-300'
                  required
                />
               {errors.email && touched.email && <div className="text-red-500 text-xs">{errors.email}</div>}
              </Input.Wrapper>
              <Input.Wrapper withAsterisk label="Contraseña" className='font-Poppins flex flex-col'>
                <Field
                  placeholder=""
                  type="password"
                  id="password"
                  name="password"
                  required
                  className='w-[258px] md:w-80 outline-none border-[1px] rounded-lg h-8 mb-1 p-4 focus:border-orange-400 duration-300'
                  // visibilityToggleIcon={({ reveal, size }) =>
                  //   reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                />
                {errors.password && touched.password && <div className="text-red-500 text-xs">{errors.password}</div>}

              </Input.Wrapper>
              <Input.Wrapper withAsterisk label="Confirmar contraseña" className='mb-9 font-Poppins flex flex-col'>
                <Field
                  placeholder=""
                  required
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className='w-[258px] md:w-80 outline-none border-[1px] rounded-lg h-8 mb-1 p-4 focus:border-orange-400 duration-300'
                  // visibilityToggleIcon={({ reveal, size }) =>
                  //   reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                />
                {errors.confirmPassword && touched.confirmPassword && <div className="text-red-500 text-xs">{errors.confirmPassword}</div>}

              </Input.Wrapper>
            </div>

          <div>
          <button className="w-full bg-orange-400 text-white rounded-xl py-2 mb-1 hover:bg-orange-500 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-1 transform transition duration-400 ease-in active:scale-[.98]" type='submit'>
            Crear cuenta
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

    export default CreateAccount;


