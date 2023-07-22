import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useMediaQuery } from "@mantine/hooks";
import { signIn } from "next-auth/react";


interface FormWrapperProps {
  children: ReactNode;
  title: string;
  buttonText: string;
 
}
const handleGoogleSignin = () => {
    signIn('google', { callbackUrl: "http://localhost:3000/homepage" }).catch((error) => {
      console.error(error);
    });
};

const FormWrapper: React.FC<FormWrapperProps> = ({ children, title, buttonText }) => {

    const largeScreen = useMediaQuery("(min-width: 1100px)");
    

  return (
    <div className={ largeScreen ? "flex w-full h-screen justify-start" : "flex h-screen w-screen justify-center items-end bg-orange-400"}>

        <img src='/Group-2.png' className={ largeScreen ? "flex bg-cover h-screen w-screen absolute saturate-100 z-0" : "hidden" } alt="background"></img>
        

            <div className="md:flex md:flex-row-reverse md:items-center md:gap-64">
                <img src="/perrito-gatito.png" alt="dog" className={ largeScreen ? 'z-20 drop-shadow-md w-80 h-80' : 'hidden'}/>
            
                <div className={largeScreen ? "z-20 border-solid md:border shadow-md ml-44 rounded-xl p-8 bg-white md:w-auto w-screen mt-20 md:mt-0" : "p-8 w-screen h-full rounded-t-2xl bg-white shadow-inner shadow-slate-300"}>
                    
                    <div className="flex flex-col justify-center font-bold py-1 text-xl mb-2">
                        
                        <button>
                            <Link href="/">
                                <h1 className="text-4xl font-bold text-stone-600">
                                    {title}
                                </h1>
                            </Link>
                        </button>
                        
                    </div>
                
                    {children}
                    <div>
                        
                        <div className="flex flex-row items-center  mb-1 gap-4 text-gray-400">
                            <div className="border-t grow ml-8 border-gray-200"></div>
                            <label> o </label>
                            <div className=" border-t grow mr-8 border-gray-200"></div>
                        </div>

                        <button type="button" onClick={() => handleGoogleSignin()} className="mb-6 w-full border border-black rounded-xl bg-white text-black  hover:text-white hover:bg-gray-800  active:bg-white active:text-black py-2 transform transition duration-400 ease-in active:scale-[.98]">
                            {buttonText} con google
                        </button>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    
  );
};

export default FormWrapper;
