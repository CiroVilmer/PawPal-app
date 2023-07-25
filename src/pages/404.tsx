import { Divider } from "@mui/material";
import Link from "next/link";
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';

const NotFoundPage = () => {
    return (
        <div className="not-found flex items-center justify-center flex-col h-screen">
            <h1 className="text-9xl font-extrabold text-orange-400 mb-10 pointer-events-none select-none">Ooops...</h1>
            <h2 className="text-4xl font-semibold text-orange-400 mb-14 pointer-events-none select-none">404 - PAGE NOT FOUND</h2>
            <p className="text-lg text-slate-400 text-left w-[770px] mb-12 select-none">Parece que la pagina que estas buscando no existe, ha sido eliminada o su nombre ha cambiado.
            <br></br>Para volver al inicio puedes hace click en el botón</p>
            <button className="border-2 rounded-full p-3 border-orange-400 hover:bg-orange-400 bg-white hover:scale-[115%] hover:text-white transition-all duration-700 mb-10">
                <Link href = "/">Volver al inicio</Link>
            </button>
            <Divider className="w-[470px] text-slate-600"></Divider>
            <div className='flex flex-row mt-6 gap-3'>
                <button 
                    id="instagram" 
                    className=" bg-white border-2 hover:border-0 border-gray-300 bg-gradient-to-b w-8 h-8 text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white text-gray-400 transform hover:-translate-y-1 rounded-full duration-500 "
                    onClick={() => window.open ('https://www.instagram.com/pawpal_app/')}
                    ><BsInstagram className="mx-auto w-4 h-4"/>
                </button>
                <button id="twitter" className="bg-white border-2 transform hover:-translate-y-1   w-8 h-8 rounded-full duration-500 text-gray-400 border-gray-300 hover:bg-blue-400 hover:text-white text-2xl">
                    <BsTwitter className="mx-auto w-4 h-4"/>
                </button>
                <button id="facebook" className="bg-white border-2 transform hover:-translate-y-1   w-8 h-8 rounded-full text- duration-500 text-gray-400 border-gray-300 hover:bg-blue-800 hover:text-white text-2xl">
                    <BsFacebook className="mx-auto w-4 h-4"/>
                </button>
                <button id="mail" className=" bg-white border-2 hover:border-0 border-gray-300 bg-gradient-to-b w-8 h-8 text-2xl hover:bg-red-600 min-w-wull hover:text-white text-gray-400 transform hover:-translate-y-1 rounded-full duration-500 ">
                    <SiGmail className="mx-auto w-4 h-4"/>
                </button>
            </div>
        </div>
    )
}

export default NotFoundPage;