import React, { useState } from 'react';
import Link from 'next/link';
import { api } from "~/utils/api";
import { signIn, signOut, useSession } from "next-auth/react";
import { Formik, useFormik } from 'formik';
import { register_validate } from 'lib/validate';
import { boolean, number, z } from "zod";
import { FiEye, FiEyeOff } from 'react-icons/fi'
import 'react-toastify/dist/ReactToastify.css';
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


async function handleGoogleSignin() {
  signIn('google', { callbackUrl: "http://localhost:3000" })
}


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

  async function onSubmit(values: { email: string; name: string; surName: string; password: string;}) {
    console.log(values)
    
    await createAccount(values, {
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

        <div className="flex h-screen items-end md:items-center max-w-screen justify-center  lg:justify-start" style={{ backgroundImage: 'url(/Group-2.png)', backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
          <div className="md:border-solid md:border md:shadow-lg rounded-t-2xl mb-15 lg:ml-28 md:rounded-xl p-8 bg-slate-50" >
            
            <div className="flex justify-center font-bold py-1 text-xl mb-4">
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
                <Input.Wrapper withAsterisk label="Confirmar contraseña" className='mb-9'>
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

              <button className="w-full bg-orange-400 text-white rounded-xl py-2 mb-1 hover:bg-orange-500 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-1 transform transition duration-400 ease-in active:scale-[.98]" type='submit'>
                Crear cuenta
              </button>

            </form>

            <div className="flex flex-row items-center  mb-1 gap-4 text-gray-400">
              <div className="border-t grow ml-8 border-gray-200"></div>
              <label> o </label>
              <div className=" border-t grow mr-8 border-gray-200"></div>
            </div>

            <button type="button" onClick={handleGoogleSignin} className="w-full border-2 border-black rounded-xl bg-white text-black  hover:text-white hover:bg-gray-800  active:bg-white active:text-black py-2 transform transition duration-400 ease-in active:scale-[.98]">
              Crear cuenta con google
            </button>
            <p className="text-center text-gray-500 text-sm pt-1">
              ¿Ya eres un miembro?{' '}<br></br>

              <button className="text-sm text-orange-500 hover:underline transform transition duration-100 ease-out active:scale-[.99]">
                <Link href="/logIn">Iniciar sesión</Link>
              </button>
            </p>

          </div>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </div>
      );
    };

    export default CreateAccount;


