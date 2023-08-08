import React, { useState } from 'react';
import Link from 'next/link';
import { api } from "~/utils/api";
import { useFormik } from 'formik';
import { register_validate } from 'lib/validate';
import { FiEye, FiEyeOff } from 'react-icons/fi'
import toast, { Toaster } from 'react-hot-toast';
import { PasswordInput, Input, Flex } from '@mantine/core';
import { useRouter } from 'next/router';
import FormWrapper from './Components/formWrapper';


export function CreateAccount(): JSX.Element {

  const { mutate: createAccount } = api.user.createUser.useMutation();

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
              <form action="" onSubmit={formik.handleSubmit}>
              <div className='text-center text-gray-500 text-sm mb-3 font-normal'> 
                ¿Ya eres miembro?{' '}<br></br>
                <button className="text-sm text-orange-500 hover:underline transform transition duration-100 ease-out active:scale-[.99]">            
                  <Link href = "/logIn">Iniciar sesión</Link>
                </button>
              </div>
                <Flex className='flex flex-row justify-between'>

                  <Input.Wrapper withAsterisk label="Nombre" className='font-Poppins'>
                    <Input
                      type="string"
                      id="first_name"
                      placeholder=""
                      size='sm'
                      className='w-32 md:w-36'
                      required
                      {...formik.getFieldProps('name')}
                    />
                    {formik.errors.name && formik.touched.name ? <div className="text-red-500 text-xs">{formik.errors.name}</div> : null}
                  </Input.Wrapper>

                  <Input.Wrapper withAsterisk label="Apellido" className='font-Poppins'>
                    <Input
                      type="string"
                      id="last_name"
                      placeholder=""
                      className='w-28 md:w-36'
                      size='sm'
                      required
                      {...formik.getFieldProps('surName')}

                    />

                    {formik.errors.surName && formik.touched.surName ? <div className="text-red-500 text-xs">{formik.errors.surName}</div> : null}
                  </Input.Wrapper>
                </Flex>

                <div>


                  <Input.Wrapper withAsterisk label="Correo electrónico" className='font-Poppins'>
                    <Input
                      type="string"
                      id="email"
                      placeholder=""
                      size='sm'
                      required
                      {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email && formik.touched.email ? <div className="text-red-500 text-xs">{formik.errors.email}</div> : null}
                  </Input.Wrapper>
                  <Input.Wrapper withAsterisk label="Contraseña" className='font-Poppins'>
                    <PasswordInput
                      placeholder=""
                      required
                      className='w-[258px] md:w-80'
                      {...formik.getFieldProps('password')}
                      visibilityToggleIcon={({ reveal, size }) =>
                        reveal ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                    />

                    {formik.errors.password && formik.touched.password ? <div className="text-red-500 text-xs">{formik.errors.password}</div> : null}
                  </Input.Wrapper>
                  <Input.Wrapper withAsterisk label="Confirmar contraseña" className='mb-9 font-Poppins'>
                    <PasswordInput
                      placeholder=""
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


