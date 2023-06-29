import Link from "next/link"
import React, {ReactNode} from 'react'

type formProps = {
    children : ReactNode,
}
const FormWrapper : React.FC<formProps> = ({children}) => {
    
    return(
        <>
        <div className="flex h-screen items-end md:items-center max-w-screen justify-center  lg:justify-start" style={{ backgroundImage: 'url(/Group-2.png)', backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
            <div className="md:flex md:flex-row-reverse md:gap-72">
                <img src="/Doggie.png" alt="dog" />
          
                <div className="md:border-solid md:border md:shadow-md rounded-t-2xl mb-15 lg:ml-44 md:rounded-xl p-8 bg-white" >
                    
                    <div className="flex justify-center font-bold py-1 text-xl mb-4">
                        <button>
                            <Link href="/">
                            <h1 className="text-5xl font-bold text-black">
                                Paw<span className="text-[rgb(252,119,80,100%)]">Pal</span>
                            </h1>
                            </Link>
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default FormWrapper;