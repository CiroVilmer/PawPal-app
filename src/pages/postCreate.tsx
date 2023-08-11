import React from 'react';
import toast, { Toast, Toaster } from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { api } from '~/utils/api';
import {MdOutlineImage} from 'react-icons/md'
import {useMediaQuery} from '@mantine/hooks'

const postForm: React.FC = () : JSX.Element =>{

    const {mutate: createNewPost} = api.post.createPost.useMutation();

    const initialValues = {
        title: '',
        location: '',
      }
    
    const onSubmit = (values: {title: string, location: string}) => {
      console.log('Form values:', values);

      createNewPost(values, {
        onSuccess: () =>{
          toast.success("Post Created")
        },
        onError: (error:any) => {
          toast.error("Error creating post")
        }
      })

    };

    const mediumScreen = useMediaQuery("(min-width: 768px)");
    
    return (

        <div className = {mediumScreen ? 'h-screen w-full background flex justify-center font-Poppins' : "p-6 h-screen w-screen background flex justify-center font-Poppins"}>
        
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className = 'flex flex-col gap-6 items-center'>
            <div className={mediumScreen ? "flex items-center justify-center w-full mt-10" : "flex items-center justify-center w-full"}>
              <label  className="flex flex-col items-center justify-center md:w-[380px] w-[290px] h-44 md:h-64 border-2 border-gray-300 px-4 rounded-lg cursor-pointer bg-gray-200 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center pb-6">
                  <i className='text-[110px] text-gray-700'><MdOutlineImage/></i>
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Clickeá para subir</span></p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
              <div className = {mediumScreen ? 'flex flex-row gap-2' : 'flex flex-col gap-2'}>
                <div className = 'flex flex-col gap-1'>
                  <label htmlFor="title" className = 'font-semibold'>Nombre</label>
                  <Field type="text" id="title" name="title" placeholder='Firulais' className='w-[220px] text-sm rounded-md h-9 p-4 border-gray-400 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                </div>
                
                <div className = 'flex flex-col gap-1'>
                  <label htmlFor="location" className='font-semibold'>Ubicación</label>
                  <Field type="text" id="location" name="location" placeholder='Saenz Valiente 1174, Martínez' className='w-[300px] text-sm rounded-md h-9 p-4 border-gray-400 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                </div>
              </div>
              <div className = {mediumScreen ? 'flex flex-row gap-2' : 'flex flex-row gap-2'}>
                <div className = 'flex flex-col gap-1'>
                  <label htmlFor="" className = 'font-semibold'>Especie</label>
                  <Field type="text" id="especie" name="especie" placeholder='Perro' className='w-[145px] text-sm rounded-md h-9 p-4 border-gray-400 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                </div>
                
                <div className = 'flex flex-col gap-1'>
                  <label htmlFor="location" className='font-semibold'>Raza</label>
                  <Field type="text" id="raza" name="raza" placeholder='Border Collie' className='w-[145px] text-sm rounded-md h-9 p-4 border-gray-400 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                </div>

                
              </div>
              <div className = 'flex flex-col gap-1'>
                  <label htmlFor="location" className='font-semibold '>Descripcion</label>
                  <Field type="text" id="descripcion" name="descripcion" placeholder='Color, caracter, collar...' className='w-[300px] text-sm rounded-md h-16 p-4 border-gray-400 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                </div>
              <button type="submit" className='flex bg-orange-200 rounded-lg fixed bottom-5 h-10 w-[320px] p-4 items-center justify-center'>Submit</button>
          </Form>
        </Formik>

        <Toaster
        position="top-center"
        reverseOrder={false}
      />

      </div>
    
  );

}

export default postForm;