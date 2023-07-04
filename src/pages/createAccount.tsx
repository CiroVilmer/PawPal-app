import React, { useState } from 'react';
import Link from 'next/link';
import { api } from "~/utils/api";
import { signIn, signOut, useSession } from "next-auth/react";
import { Formik, useFormik } from 'formik';
import { register_validate } from 'lib/validate';
import { boolean, number, z } from "zod";
import { FiEye, FiEyeOff } from 'react-icons/fi'
import toast, { Toaster } from 'react-hot-toast';
import { TRPCError } from '@trpc/server';

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
Input,
NumberInput,
Flex
} from '@mantine/core';
import { object } from 'zod';
import { on } from 'events';
import { BsCcCircle } from 'react-icons/bs';
import { useRouter } from 'next/router';
import FormWrapper from './Components/formWrapper';


export function CreateAccount(): JSX.Element {

  const { mutate: createAccount } = api.user.createUser.useMutation();
  const [passwordShown, setPasswordShown] = useState(false);

  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      name: '',
      surName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: register_validate,
    onSubmit

  })

  function onSubmit(values: { email: string; name: string; surName: string; password: string;}) {
    console.log(values)
    
     createAccount(values, {
      onSuccess: () => {
        console.log("User Created")
        toast.success("Usuario creado")
        void router.push("/homepage")

      },
      onError: (error) => {
        console.log(error)
        toast.error("Email en uso")
      }
    })
    

  }

      return (

        <FormWrapper title='Crear cuenta' question='¿Ya eres miembro?' link='/logIn' linkTo='Iniciar sesión' buttonText='Crear cuenta'>
                    
                
              <form action="" onSubmit={formik.handleSubmit}>

                <Flex direction={"row"} gap={"md"}>

                  <Input.Wrapper withAsterisk label="Nombre">
                    <Input
                      type="string"
                      id="first_name"
                      placeholder="Pepe"
                      size='sm'
                      style={{ width: 150 }}
                      required
                      {...formik.getFieldProps('name')}
                    />
                    {formik.errors.name && formik.touched.name ? <div className="text-red-500 text-xs">{formik.errors.name}</div> : null}
                  </Input.Wrapper>

                  <Input.Wrapper withAsterisk label="Apellido">
                    <Input
                      type="string"
                      id="last_name"
                      placeholder="Urizar"
                      style={{ width: 150 }}
                      size='sm'
                      required
                      {...formik.getFieldProps('surName')}

                    />

                    {formik.errors.surName && formik.touched.surName ? <div className="text-red-500 text-xs">{formik.errors.surName}</div> : null}
                  </Input.Wrapper>
                </Flex>

                <div>


                  <Input.Wrapper withAsterisk label="Correo electrónico">
                    <Input
                      type="string"
                      id="email"
                      placeholder="ejemplo@gmail.com"
                      size='sm'
                      required
                      {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email && formik.touched.email ? <div className="text-red-500 text-xs">{formik.errors.email}</div> : null}
                  </Input.Wrapper>
                  <Input.Wrapper withAsterisk label="Contraseña">
                    <PasswordInput
                      placeholder="password"
                      required

                      {...formik.getFieldProps('password')}
                      visibilityToggleIcon={({ reveal, size }) =>
                        reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                    />

                    {formik.errors.password && formik.touched.password ? <div className="text-red-500 text-xs">{formik.errors.password}</div> : null}
                  </Input.Wrapper>
                  <Input.Wrapper withAsterisk label="Confirmar contraseña" className='mb-9'>
                    <PasswordInput
                      placeholder="password"
                      required

                      {...formik.getFieldProps('confirmPassword')}
                      visibilityToggleIcon={({ reveal, size }) =>
                        reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                    />

                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div className="text-red-500 text-xs">{formik.errors.confirmPassword}</div> : null}
                  </Input.Wrapper>
                </div>
              </form>
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


