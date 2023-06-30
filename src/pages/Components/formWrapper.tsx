import React, { ReactNode } from 'react';
import Link from 'next/link';

interface FormWrapperProps {
  children: ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
  return (
    <div className="flex h-screen items-end md:items-center max-w-screen justify-center lg:justify-start" style={{ backgroundImage: 'url(/Group-2.png)', backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
      <div className="md:flex md:flex-row-reverse">
        <img src="/Doggie.png" alt="dog" className=' invisible md:visible md:flex md:jusitfy-end md:items-center md:scale-75 md:mr-36 md:ml-32'/>
      
        <div className="md:border-solid md:border md:shadow-md rounded-t-2xl mb-15 lg:ml-44 md:rounded-xl p-8 bg-white">
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
