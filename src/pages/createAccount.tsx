import React, { useState } from 'react';
import Link from 'next/link';
import { api } from "~/utils/api";
import { signIn, signOut, useSession } from "next-auth/react";
import { Formik, useFormik } from 'formik';
import { register_validate } from 'lib/validate';
import { boolean, number, z } from "zod";
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

async function handleGoogleSignin() {
  signIn('google', { callbackUrl: "http://localhost:3000" })
}


export function CreateAccount(): JSX.Element {

  const { mutate: createAccount } = api.user.createUser.useMutation();
  const [passwordShown, setPasswordShown] = useState(false);

  const userCreatedAlert = () => toast.success("Usuario creado con éxito", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

  const userNotCreatedAlert = () => toast.error("Usuario no creado", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  })


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

  async function onSubmit(values: { email: string; name: string; surName: string; password: string; }) {
    console.log(values)
    
    try {
      const response = await createAccount(values);
      console.log(response)
      userCreatedAlert();
    }
     catch (error) {
      if (error instanceof TRPCError) {
        userNotCreatedAlert();
      }
  }
  }

      return (

        <div className="flex h-screen items-center max-w-screen-lg p-3 container  justify-center lg:ml-28 lg:justify-start">
          <div className="border-solid border border-gray rounded-xl w-62 shadow-md p-8">
            
            <div className="flex justify-center font-bold py-1 text-xl mb-3">
              <button>
                <Link href="/">
                  <h1 className="text-5xl font-bold text-black">
                    Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
                  </h1>
                </Link>
              </button>
            </div>

            <form action="" onSubmit={formik.handleSubmit}>

              <Flex direction={"row"} gap={"md"}>

                <Input.Wrapper withAsterisk label="Nombre">
                  <Input
                    type="string"
                    id="first_name"
                    placeholder="Pepe"
                    size='sm'
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
                    placeholder="Ejemplo@gmail.com"
                    required
                    {...formik.getFieldProps('email')}
                  />
                  {formik.errors.email && formik.touched.email ? <div className="text-red-500 text-xs">{formik.errors.email}</div> : null}
                </Input.Wrapper>
                <Input.Wrapper withAsterisk label="Contraseña">
                  <PasswordInput
                    placeholder="Password"
                    required

                    {...formik.getFieldProps('password')}
                    visibilityToggleIcon={({ reveal, size }) =>
                      reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                  />

                  {formik.errors.password && formik.touched.password ? <div className="text-red-500 text-xs">{formik.errors.password}</div> : null}
                </Input.Wrapper>
                <Input.Wrapper withAsterisk label="Confirmar contraseña" className='mb-6'>
                  <PasswordInput
                    placeholder="Password"
                    required

                    {...formik.getFieldProps('confirmPassword')}
                    visibilityToggleIcon={({ reveal, size }) =>
                      reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                  />

                  {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div className="text-red-500 text-xs">{formik.errors.confirmPassword}</div> : null}
                </Input.Wrapper>
              </div>

              <button className="w-full bg-orange-400 text-white rounded-xl py-2 mb-1 hover:bg-orange-500 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-1" type='submit'>
                Crear cuenta
              </button>

            </form>

            <div className="flex justify-center mb-1 text-gray-500">
              <label>
                - o -
              </label>
            </div>
            <button type="button" onClick={handleGoogleSignin} className="w-full border-2 border-black bg-white text-black  hover:text-white hover:bg-gray-800 focus:text-black focus:bg-white rounded-xl py-2">
              Crear cuenta con google
            </button>
            <p className="text-center text-gray-500 text-sm pt-1">
              ¿Ya eres un miembro?{' '}<br></br>

              <button className="text-sm text-orange-500 hover:underline">
                <Link href="/logIn">Iniciar sesión</Link>
              </button>
            </p>

          </div>
          <ToastContainer />
        </div>
      );
    };

    export default CreateAccount;


