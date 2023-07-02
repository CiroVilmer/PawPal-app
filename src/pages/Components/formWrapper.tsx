import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useMediaQuery } from "@mantine/hooks"; 


interface FormWrapperProps {
  children: ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {

    const largeScreen = useMediaQuery("(min-width: 1100px)");
        

  return (
    <div className={ largeScreen ? "flex w-full h-screen justify-start" : "flex h-full w-full items-center justify-center"}>

        {/* <div className='z-20 absolute bottom-[0%] right-[0%] w-24 h-24'><img src="/logoPawPal.png" alt="logo" /> </div> */}
        <img src='/Group-2.png' className={ largeScreen ? "flex bg-cover h-screen w-screen absolute saturate-100 z-0" : "hidden" } alt="background"></img>
        {/* <div className="z-30 bg-orange-400 saturate-150 flex h-screen items-end md:items-center justify-center lg:justify-start">
            <div className=' z-10 md:absolute md:shadow-gray-700 md:right-[0%] md:bg-white md:bg-cover md:shadow-2xl md:-inset-x-20 md:rounded-r-full md:w-screen md:h-screen'></div> */}

            <div className="md:flex md:flex-row-reverse md:items-center md:gap-64">
                <img src="/perrito-gatito.png" alt="dog" className={ largeScreen ? 'z-20 drop-shadow-md w-80 h-80 ' : 'hidden'}/>
            
                <div className="z-20 shadow-inner md:border-solid md:border md:shadow-md rounded-t-2xl mb-15 lg:ml-44 md:rounded-xl p-8 bg-white ">
                    <div className="flex justify-center font-bold py-1 text-xl mb-4">
                        <button>
                            <Link href="/">
                                <h1 className="text-5xl font-bold text-black">
                                    Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
                                </h1>
                            </Link>
                        </button>
                    </div>
                
                    {children}
                </div>
            </div>
        </div>
    
  );
};

export default FormWrapper;
