import React from 'react';
import toast, { Toast, Toaster } from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { api } from '~/utils/api';
import {MdOutlineImage} from 'react-icons/md'
import {useMediaQuery} from '@mantine/hooks';
import styles from './postCreate.module.css';
import * as Yup from "yup"
import { getSession, useSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';


function PostForm() : JSX.Element{

  const {data: session, status} = useSession();

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
    author: "",
  }
  
  const postSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
    animal: Yup.string().required('Required'),
    breed: Yup.string().required('Required'),
    //age: Yup.string(),
    description: Yup.string().required('Required').max(200, "Max 200 characters"),
    //contact: Yup.string().required('Required'),
    //image: Yup.string(),
  })
    
  const onSubmit = (values: {title: string, location: string, animal: string, breed: string, age: string, description: string, image: string, contact:string, author: string}) => {
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
    
  if (status === "authenticated") {
  return (

    <div className = {mediumScreen ? 'z-40 p-0 h-auto w-auto bg-transparent' : "p-6  h-screen w-screen background flex justify-center font-Poppins"}>
        
        <Formik initialValues={initialValues} validationSchema={postSchema} onSubmit={onSubmit}>
        {({ errors, touched}) => (
          <Form className = 'flex flex-col gap-6 md:gap-4 items-center'>
            <div className = 'flex flex-col gap-1'>
            <div className={mediumScreen ? "w-full" : "flex items-center justify-center w-full"}>
              <label  className="flex flex-col mb-4 mt-4 items-center justify-center md:w-full w-[290px] h-44 md:h-52 border-2 border-gray-300 px-4 rounded-lg cursor-pointer bg-gray-200">
                <div className="flex flex-col items-center pb-6">
                  <i className='text-[110px] text-gray-700'><MdOutlineImage/></i>
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Clickeá para subir</span></p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
              <div className = {mediumScreen ? 'flex flex-row gap-2' : 'flex flex-col gap-2'}>
                <div className = 'flex flex-col'>
                  <label htmlFor="title" className = 'font-semibold'>Nombre</label>
                  <Field type="text" id="title" name="title" placeholder='Firulais' className='w-[300px] text-md rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                {errors.title && touched.title ? <div className='text-red-500 text-xs'>{errors.title}</div> : null}
                </div>
                
                <div className = 'flex flex-col'>
                  <label htmlFor="location" className='font-semibold'>Ubicación</label>
                  <Field type="text" id="location" name="location" placeholder='Saenz Valiente 1174, Martínez' className='w-[300px] text-md rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                {errors.location && touched.location ? <div className='text-red-500 text-xs'>{errors.location}</div> : null}
                </div>
              </div>
              <div className = {mediumScreen ? 'flex flex-row gap-2' : 'flex flex-row gap-2'}>
                <div className = 'flex flex-col'>
                  <label htmlFor="" className = 'font-semibold'>Especie</label>
                  <Field as="select" type="text" id="animal" name="animal" className='w-[145px] px-3 font-Poppins md:w-[300px] text-sm rounded-md h-9  border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'>
                  <option hidden selected>Selecciona una opcion</option>
                    <option value="dog">Perro</option>
                    <option value="cat">Gato</option>
                    <option value="other">Otro</option>
                  </Field>
                 {errors.animal && touched.animal ? <div className='text-red-500 text-xs'>{errors.animal}</div> : null}
                </div>
                
                <div className = 'flex flex-col'>
                  <label htmlFor="location" className='font-semibold'>Raza</label>
                  <Field type="text" id="breed" name="breed" placeholder='Border Collie' className='w-[145px] md:w-[300px] text-md rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                {errors.breed && touched.breed ? <div className='text-red-500 text-xs'>{errors.breed}</div> : null}
                </div>

                
              </div>
              <div className='flex flex-row gap-2'>
                <div className='flex flex-col'>
                  <label htmlFor="location" className=' font-semibold '>Edad</label>
                    
                  <Field as="select" type="text" name="age" id="age" className='w-[145px] px-3 font-Poppins md:w-[300px] text-sm rounded-md h-9  border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'>
                    {/* <li className="flex justify-center relative"><span className="absolute text-gray-400 text-xs">Cachorro</span></li>
                    <li className="flex justify-center relative"><span className="absolute text-gray-400 text-xs">Joven</span></li>
                    <li className="flex justify-center relative"><span className="absolute text-gray-400 text-xs">Adulto</span></li>
                    <li className="flex justify-center relative"><span className="absolute text-gray-400 text-xs">Mayor</span></li> */}
                    <option hidden selected>Selecciona una opcion</option>
                    <option value="cachorro">Cachorro</option>
                    <option value="joven">Joven</option>
                    <option value="adulto">Adulto</option>
                    <option value="mayor">Mayor</option>
                  </Field>

                  
                  
                </div>
                <div className='flex flex-col'>
                  <label className='font-semibold'>Contacto</label>
                  <Field type="phone" id="contact" name="contact" placeholder='+11 1323-3213' className='w-[145px] md:w-[300px] text-md rounded-md h-9 p-4 border-gray-200 border-[1px] outline-none focus:border-orange-400 duration-500'/>
                {errors.contact && touched.contact ? <div className='text-red-500 text-xs'>{errors.contact}</div> : null}
                </div>
              </div>

              
              <div className = 'flex flex-col'>
                <label htmlFor="location" className='font-semibold'>Descripcion</label>
                               
                <Field as="textarea"
                  id="description"
                  name="description"
                  className="md:w-[600px] w-auto max-h-[100px] rounded-md h-12 p-4 flex items-center outline-none text-sm border-gray-200 border-[1px] focus:border-orange-400 duration-500"
                  autoComplete="off"
                  spellCheck="false"
                  rows={4}
                  placeholder="Color, caracter, collar..."
                ></Field>
                {errors.description && touched.description ? <div className='text-red-500 text-xs'>{errors.description}</div> : null}
              </div>
          </div>
              <div className = 'absolute bottom-4'>
                <button type="submit" className='flex bg-orange-300 hover:bg-transparent border-orange-300 border-2 text-white hover:text-orange-300 font-semibold duration-500 rounded-lg h-12 text-lg md:w-[420px] w-[320px] p-4 items-center justify-center'>Crear publicación</button>
              </div>
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
    else{
      return (
        <h1>Not Logged in</h1>
      )
    }
}


export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const session = await getSession({ req });

  if (!session) {
      console.log("Not Signed in")
      // return {
      //     redirect: {
      //         destination: "/logIn",
      //         permanent: false,
      //     },
      // };
  }

  return {
      props: { session },
  };
}

export default PostForm;