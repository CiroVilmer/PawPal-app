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
                
                <div className="sticky h-auto flex flex-col items-center justify-start bg-amber-200 text-white">
                    <h2 className="text-4xl pt-28">¿Cómo funciona nuestra aplicación?</h2>
                    
                    
                    <div className="flex justify-center flex-col md:flex-row mt-36 p-4 gap-16">
                        
                        <div className="flex justify-center bg-white shadow-md border-2 border-orange-300 w-80 h-96 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                            <img src="/mapa.jpg" alt="mapa" className="absolute top-52 mx-auto h-36 w-44 rounded-full shadow-md border-2 border-orange-400"/>
                        </div>
                        <div className="flex justify-center bg-white shadow-md border-2 border-orange-300 w-80 h-96 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                            <img src="/publicaciones.png" alt="mapa" className="absolute top-52 mx-auto h-36 w-44 rounded-full bg-white shadow-md border-2 border-orange-400"/>
                        </div>
                        <div className="flex justify-center bg-white shadow-md border-2 border-orange-300 w-80 h-96 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                        </div>

                    </div>
                    
                    
                </div>
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-stone-300 text-white">
                    <h2 className="text-4xl">facu se la come</h2>
                    <p>y ciro se la da</p>
                </div>
               
            </div>   
            <Footer/>
            
        </div>
        
    )
}