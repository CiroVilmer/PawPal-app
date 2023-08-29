import React from 'react';
import toast, { Toast, Toaster } from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { api } from '~/utils/api';
import {MdOutlineImage} from 'react-icons/md'
import {useMediaQuery} from '@mantine/hooks';
import styles from './postCreate.module.css';
import * as Yup from "yup"


function PostForm() : JSX.Element{

  const {mutate: createNewPost} = api.post.createPost.useMutation();

  const initialValues = {
    title: '',
    location: '',
    animal: '',
    breed: '',
    age: '',
    description: '',
    contact: '',
    image: '',
  }

  const postSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
    animal: Yup.string().required('Required'),
    breed: Yup.string().required('Required'),
    age: Yup.string().required('Required'),
    description: Yup.string().required('Required').max(200, "Max 200 characters"),
    contact: Yup.string().required('Required'),
    image: Yup.string(),
  })
    
  const onSubmit = (values: {title: string, location: string, animal: string, breed: string, age: string, description: string, image: string, contact:string}) => {
    console.log('Form values:', values);

    //location parsing

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
        
        <Formik initialValues={initialValues} validationSchema={postSchema} onSubmit={onSubmit}>
        {({ errors, touched}) => (
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
                  <Field type="text" id="title" name="title" placeholder='Firulais' className='w-[300px] text-sm rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                {errors.title && touched.title ? <div className='text-red-500'>{errors.title}</div> : null}
                </div>
                
                <div className = 'flex flex-col gap-1'>
                  <label htmlFor="location" className='font-semibold'>Ubicación</label>
                  <Field type="text" id="location" name="location" placeholder='Saenz Valiente 1174, Martínez' className='w-[300px] text-sm rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                {errors.location && touched.location ? <div className='text-red-500'>{errors.location}</div> : null}
                </div>
              </div>
              <div className = {mediumScreen ? 'flex flex-row gap-2' : 'flex flex-row gap-2'}>
                <div className = 'flex flex-col gap-1'>
                  <label htmlFor="" className = 'font-semibold'>Especie</label>
                  <Field type="text" id="animal" name="animal" placeholder='Perro' className='w-[145px] text-sm rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                 {errors.animal && touched.animal ? <div className='text-red-500'>{errors.animal}</div> : null}
                </div>
                
                <div className = 'flex flex-col gap-1'>
                  <label htmlFor="location" className='font-semibold'>Raza</label>
                  <Field type="text" id="breed" name="breed" placeholder='Border Collie' className='w-[145px] text-sm rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                {errors.breed && touched.breed ? <div className='text-red-500'>{errors.breed}</div> : null}
                </div>

                
              </div>
              
              <div className='flex flex-col gap-1 mb-3'>
                <label htmlFor="location" className=' font-semibold '>Rango de edad</label>
                <div className="flex flex-col space-y-2 w-[300px]">
                  
                  <Field type="range" className="cursor-grab range-input w-full" min="1" max="10" step="3"></Field>
                  <ul className="flex justify-between w-full px-[10px]">
                    <li className="flex justify-center relative"><span className="absolute text-gray-400 text-xs">Cachorro</span></li>
                    <li className="flex justify-center relative"><span className="absolute text-gray-400 text-xs">Joven</span></li>
                    <li className="flex justify-center relative"><span className="absolute text-gray-400 text-xs">Adulto</span></li>
                    <li className="flex justify-center relative"><span className="absolute text-gray-400 text-xs">Mayor</span></li>

                  </ul>
                </div>
              </div>

            
              <div className = 'flex flex-col gap-1'>
                <label htmlFor="location" className='font-semibold '>Descripcion</label>
                               
                {/* <Field 
                  maxLength={100} 
                  type="text" 
                  id="descripcion" 
                  name="descripcion" 
                  placeholder='Color, caracter, collar...' 
                  autoComplete='off' 
                  rows={4} 
                  className=' w-[300px] text-sm rounded-md h-24 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'
                /> */}
                <Field as="textarea"
                  id="description"
                  name="description"
                  className="w-[300px] rounded-md h-24 p-4 flex items-center outline-none text-sm border-gray-200 border-[1px] focus:border-orange-400 duration-500"
                  autoComplete="off"
                  spellCheck="false"
                  rows={4}
                  placeholder="Color, caracter, collar..."
                ></Field>
                {errors.description && touched.description ? <div className='text-red-500'>{errors.description}</div> : null}
              </div>


              <button type="submit" className='flex bg-orange-200 rounded-lg h-10 w-[320px] p-4 items-center justify-center'>Submit</button>
          </Form>
        )}
        </Formik>

        <Toaster
        position="top-center"
        reverseOrder={false}
      />

      </div>
    
    
  );

}

export default PostForm;