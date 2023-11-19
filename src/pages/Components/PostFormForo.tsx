import React, { useState } from 'react';
import toast, { Toast, Toaster } from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { api } from '~/utils/api';
import {MdOutlineImage} from 'react-icons/md'
import {useMediaQuery} from '@mantine/hooks';
import styles from './postCreate.module.css';
import * as Yup from "yup"
import { getSession, useSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';


const PostFormForo = () => {

    const {data: session, status} = useSession();

    const {mutate: createNewPost} = api.post.createForumPost.useMutation();
  
    const initialValues = {
      title: '',
      description: '',
      type: '',
      author: '',
    }
    
    const postSchema = Yup.object().shape({
      title: Yup.string().required('Required'),
      type: Yup.string().required('Required'),
      description: Yup.string().required('Required').max(700, "Max 700 characters"),
      
    })
      
    const onSubmit = (values: {title: string, type:string, description: string, author: string}) => {
      console.log('Form values:', values);
  
      //location parsing
  
      values.author = session?.user?.email as string; 
      
      createNewPost (values, {
        onSuccess: () =>{
          toast.success("Post Created")
        },
        onError: (error:any) => {
          toast.error("Error creating post")
        } 
      })
    };
    if (status === 'authenticated') {
        return (
            <div className='flex items-center justify-center flex-col font-Poppins '>
                <h1 className='text-5xl text-orange-400 font-semibold'>Crear Publicacion</h1>
                <Formik initialValues={initialValues} validationSchema={postSchema} onSubmit={onSubmit}>
                {({ errors, touched}) => (
                    <Form className='flex flex-col mt-12 gap-4'>
                        <div className='flex flex-col items-center gap-10'>
                            <section className='flex flex-col gap-4'>
                                <div className="flex flex-row justify-between">
                                    <div className='flex flex-col'>
                                        <label className="font-semibold" htmlFor="postType"> Tipo de publicación </label>
                                        <Field as="select" type="text" name="type" id="type" className='w-[145px] px-3 font-Poppins md:w-[250px] text-sm rounded-md h-9  border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'>
                                            <option hidden>- Seleccione una opcion -</option>
                                            <option value="informacion">Informacion</option>
                                            <option value="pregunta">Pregunta</option>
                                            <option value="evento">Evento</option>
                                            <option value="otro">Otro</option>
                                        </Field>
                                        {errors.type && touched.type ? <div className='text-red-500 text-xs'>{errors.type}</div> : null}
                                    </div>
                                
                                    <div className='flex flex-col'>
                                        <label htmlFor="title" className = 'font-semibold'>Titulo</label>
                                        <Field type="text" name='title' id='title' placeholder="Texto..." className="w-[300px] text-md rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500"/>
                                        {errors.title && touched.title ? <div className='text-red-500 text-xs'>{errors.title}</div> : null}
                                    </div>
                                </div>
                                <div className = 'flex flex-col'>
                                    <label htmlFor="location" className='font-semibold'>Descripcion</label>
                                                    
                                    <Field as="textarea"
                                        id="description"
                                        name="description"
                                        className="md:w-[600px] w-auto max-h-[100px] rounded-md h-20 p-4 flex items-center outline-none border-gray-200 border-[1px] focus:border-orange-400 duration-500"
                                        autoComplete="off"
                                        spellCheck="false"
                                        rows={4}
                                        placeholder="Texto...">
                                    </Field>
                                    {errors.description && touched.description ? <div className='text-red-500 text-xs'>{errors.description}</div> : null}
                                </div>
                            </section> 
                            <div className="flex items-center justify-between">
                                <button type="submit" className='flex bg-orange-300 hover:bg-transparent border-orange-300 border-2 text-white hover:text-orange-300 font-semibold duration-500 rounded-lg h-12 text-lg md:w-[420px] w-[320px] p-4 items-center justify-center'>Crear publicación</button>
                            </div>
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
        );
    }
    else{
        return (
          <body className='flex items-center justify-center h-full flex-col gap-2'>          
            <h1 className="font-Poppins lg:text-7xl text-5xl font-bold text-orange-400 mb-6">Oops...</h1>
            <h2 className="font-Poppins lg:text-2xl text-lg font-semibold text-gray-400">Parece que aún no has iniciado sesión</h2>
            <h3 className="font-Poppins lg:text-lg text-md text-center md:max-w-none max-w-[260px]">Registrate o inicia sesión para poder crear una publicación</h3>
            <div className="flex flex-row lg:gap-8 gap-2 mt-8">
              <button className='border-2 lg:w-44 w-40 h-12 text-lg border-orange-400 bg-orange-400 text-white p-1 rounded-md hover:text-orange-400 hover:bg-white active:bg-black active:text-white transform transition duration-300 ease-in active:scale-[.98]'>
                <Link href={'/createAccount'}>Crear cuenta</Link>
              </button>
  
              <button className='border-2 lg:w-44 w-40 h-12 text-lg border-[#144F60] azul text-white p-1 rounded-md hover:text-[#144F60] hover:bg-white active:azul active:text-white transform transition duration-300 ease-in active:scale-[.98]'>
                <Link href={'/logIn'}>Iniciar sesión</Link> 
              </button>
            </div>
          </body>
        )
      }
};


export default PostFormForo;
