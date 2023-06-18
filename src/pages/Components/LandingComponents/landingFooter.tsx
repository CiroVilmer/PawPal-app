import React from 'react';
import Link from 'next/link';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
export function Footer(): JSX.Element {
    return(
        <div className='w-full flex flex-col bg-stone-200 py-20'>
            <div className='flex flex-row items-center justify-center gap-3'>
            
                <div className="flex-grow border-t ml-8 border-gray-300"></div>
                
                <button id="instagram" className=" bg-white border-2 hover:border-0 border-gray-300 bg-gradient-to-b w-8 h-8 text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white text-gray-400 transform hover:-translate-y-1 rounded-full duration-500 ">
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
                <div className="flex-grow border-t mr-8 border-gray-300"></div>

            </div>
        </div>
    )
}