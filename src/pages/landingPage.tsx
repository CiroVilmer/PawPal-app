import React from "react"
import { Header } from "./Components/LandingComponents/landingHeader"
import { Footer } from "./Components/LandingComponents/landingFooter"

export function LandingPage(): JSX.Element{
    return(
        <div>
            <Header/>
            <div className="relative">
                <div className="sticky top-7 h-screen flex flex-col bg-orange-300">
                    <div className="flex flex-col justify-center">
                        <h1 className="mt-48 ml-20 text-5xl font-bold ">Bienvenido a PawPal!</h1>
                        <h2 className="ml-20 text-2xl font-normal pt-6 w-96 text-gray-700">Lorem ipsum dolor sit amet consectetur. Quam quam imperdiet cursus fusce aliquam.  </h2>

                    </div>
                    
                </div> 
                
                <div className="sticky h-auto flex flex-col items-center justify-start bg-stone-200 text-white">
                    <h2 className="text-4xl pt-28">¿Cómo funciona nuestra aplicación?</h2>
                    
                    
                    <div className="flex justify-center flex-col md:flex-row mt-44 gap-14 mb-20 ">
                        <div className="bg-slate-50 w-80 h-auto flex flex-col items-center p-8 rounded-lg shadow-lg group">
                            <div className="bg-cover aspect-square w-44 -mt-24 bg-center rounded-lg shadow-sm transition-all duration-500 z-20" style={{ backgroundImage: 'url(mapa-personitas.png)' }}></div>
                            <div id="content-wrapper" className="flex flex-col opacity-0 group-hover:opacity-100 invisible group-hover:visible h-0 group-hover:h-full delay-200 z-10">
                                <div id="content" className="flex flex-col items-center -mt-28  group-hover:mt-2 transition-all duration-300 delay-600">
                                    <h1 className="font-bold text-2xl tracking-wide text-slate-900">Mapa</h1>
                                    <p className="font-light text-center text-slate-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque at sequi, fugiat aut molestias, est voluptas eveniet perspiciatis fuga esse aspernatur odio numquam! Modi provident quos saepe reprehenderit aliquam amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 w-80 h-auto flex flex-col items-center p-8 rounded-lg shadow-lg group">
                            <div className="bg-cover  aspect-square w-44 -mt-24 bg-center rounded-lg shadow-sm  transition-all duration-500 z-20" style={{ backgroundImage: 'url(/publicaciones.png)' }}></div>
                            <div id="content-wrapper" className="flex flex-col opacity-0 group-hover:opacity-100 invisible group-hover:visible h-0 group-hover:h-full delay-200 z-10">
                                <div id="content" className="flex flex-col items-center -mt-28  group-hover:mt-2 transition-all duration-300 delay-600">
                                    <h1 className="font-bold text-2xl tracking-wide text-slate-900">Publicaciones</h1>
                                    <p className="font-light text-center text-slate-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque at sequi, fugiat aut molestias, est voluptas eveniet perspiciatis fuga esse aspernatur odio numquam! Modi provident quos saepe reprehenderit aliquam amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 w-80 h-auto flex flex-col items-center p-8 rounded-lg shadow-lg group">
                            <div className="bg-cover  aspect-square w-44 -mt-24 bg-center rounded-lg shadow-sm  transition-all duration-500 z-20" style={{ backgroundImage: 'url(/chat.jpg)' }}></div>
                            <div id="content-wrapper" className="flex flex-col opacity-0 group-hover:opacity-100 invisible group-hover:visible h-0 group-hover:h-full delay-200 z-10">
                                <div id="content" className="flex flex-col items-center -mt-28  group-hover:mt-2 transition-all duration-300 delay-600">
                                    <h1 className="font-bold text-2xl tracking-wide text-slate-900">Chat</h1>
                                    <p className="font-light text-center text-slate-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque at sequi, fugiat aut molestias, est voluptas eveniet perspiciatis fuga esse aspernatur odio numquam! Modi provident quos saepe reprehenderit aliquam amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-orange-300 text-white">
                    <h2 className="text-4xl">facu se la come</h2>
                    <p>y ciro se la da</p>
                </div>

                <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-amber-200 text-white">
                    <h2 className="text-4xl">facu se la come</h2>
                    <p>y ciro se la da</p>
                </div>
               
            </div>   
            <Footer/>
            
        </div>
        
    )
}