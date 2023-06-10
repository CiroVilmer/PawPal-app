import React, {useState} from 'react';
import Link from 'next/link';
import { api } from "~/utils/api";
import { signIn, signOut, useSession } from "next-auth/react";
import { Formik, useFormik } from 'formik';
import { register_validate } from 'lib/validate';
import { number, z } from "zod";
import { FiEye, FiEyeOff } from 'react-icons/fi'
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
  NumberInput,
  Flex
} from '@mantine/core';
import { object } from 'zod';

async function handleGoogleSignin() {
    signIn('google',{callbackUrl:"http://localhost:3000"})
}


export function CreateAccount(): JSX.Element  
{

  const { mutate: createAccount } = api.user.createUser.useMutation();
    const [passwordShown, setPasswordShown] = useState(false);

    const formik = useFormik({
      initialValues: {
        name: '',
        surName: '',
        dni: 0,
        email: '',
        password: '',
      },
      validate: register_validate,
      onSubmit
    })

    async function onSubmit(values: { email: string; name: string; surName:string;  password: string; dni: number; }) {
      console.log(values)

      createAccount(values, {
        onSuccess: () => {
          console.log("User Created");
        },
        onError: (error) => {

          console.log(error);
          console.log("User not Created");
          //alertar al usuario que el mail puede estar en uso
        }
      })
    }

  return (
    
    <div className="flex h-screen items-center max-w-screen-lg p-3 container  justify-center lg:ml-28 lg:justify-start">
      <div className="border-solid border border-gray rounded-md w-62 shadow-md p-8">
        <div className="flex justify-center font-bold py-1 text-xl mb-3">
          <h1 className="text-5xl font-bold text-black">
            Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
          </h1>
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
              {formik.errors.name && formik.touched.name ? <div className = "text-red-500 text-xs">{formik.errors.name}</div> : null}
            </Input.Wrapper>

            <Input.Wrapper withAsterisk label="Apellido">
                <Input
                  type="string"
                  id="last_name"
                  placeholder="Urizar"
                  required
                  {...formik.getFieldProps('surName')}
  
                />
              
              {formik.errors.surName && formik.touched.surName ? <div className = "text-red-500 text-xs">{formik.errors.surName}</div> : null} 
            </Input.Wrapper>
          </Flex>
  
          <div>
            <Input.Wrapper id="dni" withAsterisk label="Documento">
              <Input
                type='number'
                id="dni"
                placeholder="47026956"
                maxLength={8}
                required
                {...formik.getFieldProps('dni')}
              />
              
              {formik.errors.dni && formik.touched.dni ? <div className = "text-red-500 text-xs">{formik.errors.dni}</div> : null}
            </Input.Wrapper>
            
            <Input.Wrapper withAsterisk label="Correo electrónico">
              <Input
                type="string"
                id="email"
                placeholder="Ejemplo@gmail.com"
                required
                {...formik.getFieldProps('email')}
              />
              {formik.errors.email && formik.touched.email ? <div className = "text-red-500 text-xs">{formik.errors.email}</div> : null}
            </Input.Wrapper>
            <Input.Wrapper withAsterisk label="Contraseña" className='mb-6'>
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
              
                

          <button className="w-full bg-orange-500 text-white rounded-xl py-2 hover:bg-orange-600" type='submit'>
            Crear cuenta 
          </button>  

        </form>

        <div className = "flex justify-center mb-1 text-gray-500">
          <label>
            - o -
          </label>
        </div>
        <button type="button" onClick={handleGoogleSignin} className="w-full bg-white-500 border border-sm border-black text-black rounded-xl py-2 hover:bg-gray-100">
          Crear cuenta con google
        </button>
        <p className="text-center text-gray-500 text-sm pt-1">
          ¿Ya eres un miembro?{' '}<br></br>

          <button className="text-sm text-orange-500 hover:underline">     
            <Link href = "/">Iniciar sesión</Link>
          </button>
        </p>   
          
      </div>
    </div>
  );
};

export default CreateAccount;

function setInputValue(arg0: string) {
  throw new Error('Function not implemented.');
}
