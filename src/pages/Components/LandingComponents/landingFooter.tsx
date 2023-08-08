import React from 'react';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';

const Footer : React.FC = () : JSX.Element => {
    return(
        <div className='w-full flex flex-col bg-white py-10'>
            <div className='flex flex-row items-center justify-center gap-3'>
            
                
                <button 
                    id="instagram" 
                    className=" bg-white border-2 hover:border-0 border-gray-300 bg-gradient-to-b w-8 h-8 text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white text-gray-400 transform hover:-translate-y-1 rounded-full duration-500 "
                    onClick={() => window.open ('https://www.instagram.com/pawpal_app/')}

                    >
                    <BsInstagram className="mx-auto w-4 h-4"/>
                    
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

export default Footer;