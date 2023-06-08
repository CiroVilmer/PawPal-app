import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useState } from 'react';
import { api } from "~/utils/api";
import {Carousel} from '@mantine/carousel';
import { CarouselSlide } from '@mantine/carousel/lib/CarouselSlide/CarouselSlide';



function Demo() {
    return (
      <Carousel
        withIndicators
        height={200}
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
        ]}
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    );
  }

export function forgotPassword():JSX.Element
{
    
    return( 
        
        //<div className="container max-w-md mr-auto absolute mt-15 left-28">
        <div className = "flex justify-start max-w-md mt-20 ml-28">        
            
            <div className="border-solid border border-gray rounded-md shadow-md p-8 ">
                <div>
                    <h1 className="flex justify-center text-5xl font-bold py-1 text-black px-12 mb-3">
                        Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
                    </h1>
                    <div className="flex justify-center mt-8 mb-5">
                        <button className="text-md text-gray-800">         
                        <Link href = "/">Volver al <span className = "text-orange-600 hover:underline">Log in</span></Link>   
                        </button>
                    </div>
                    <label className="flex justify-center text-center font-normal text-lg mb-10">
                        Lorem ipsum dolor sit amet consectetur. Quam quam imperdiet cursus fusce aliquam.  
                    </label>
                    <form>
                        <label className = "text-md px-1 font-semibold"> 
                        Correo electronico
                        </label>
                        <input
                        type="string"
                        id="email"
                        className="block w-full border border-gray-300 rounded-md py-2 px-2 font-normal mb-12"
                        placeholder="ejemplo@gmail.com"
                        required
                        //{...formik.getFieldProps('email')}
                        />
                        {/* {formik.errors.email && formik.touched.email ? <div className = "text-red-500 text-xs">{formik.errors.email}</div> : null} */}

                    </form>    

                    <div>
                        <button className="w-full bg-orange-500 text-white rounded-md py-2 mb-1 hover:bg-orange-600" type='submit'>
                            Continuar
                        </button>
                    </div>

                    
                </div> 
                    
                
                
                           
            </div>
        </div>
        
        
    )
}

export default forgotPassword;