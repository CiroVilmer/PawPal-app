import React, { ReactNode } from 'react';
import Link from 'next/link';

interface FormWrapperProps {
  children: ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
  return (
    <div>

        <div className='z-20 absolute bottom-[0%] right-[0%] w-24 h-24'><img src="/logoPawPal.png" alt="logo" /> </div>
        {/* <img src='/Group-2.png' className="lg:absolute lg:inset-0 lg:scale-100 bg-cover lg:h-screen lg:w-screen saturate-150 top-[0%]  z-0 lg:rotate-0 -rotate-90" alt="background"></img> */}
        <div className="z-30 bg-orange-400 saturate-150 flex h-screen items-end md:items-center justify-center lg:justify-start">
            <div className=' z-10 md:absolute md:shadow-gray-700 md:right-[0%] md:bg-white md:bg-cover md:shadow-2xl md:-inset-x-20 md:rounded-r-full md:w-screen md:h-screen'></div>

            <div className="md:flex md:flex-row-reverse md:items-center md:gap-64">
                <img src="/perrito-gatito.png" alt="dog" className='z-20 lg:drop-shadow-md w-80 h-80 lg:mr-44'/>
            
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
    </div>
  );
};

export default FormWrapper;
