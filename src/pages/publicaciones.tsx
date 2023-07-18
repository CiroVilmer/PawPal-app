import React from "react";
import {useMediaQuery} from "@mantine/hooks";
import Navigation from "./Components/navigation";


const Publicaciones: React.FC = () : JSX.Element => {
    const largeScreen = useMediaQuery('(min-width: 1040px)');
    return (
        <div>
            <div className="min-h-screen flex items-center flex-col justify-start mt-10">
                <h1 className="mb-16">Publicaciones</h1>
                <div className="max-w-3xl mx-auto px-8 sm:px-0">
                    <div className="sm:w-7/12 sm:mx-auto">
                        <div role="tablist" aria-label="tabs" className="relative w-max mx-auto h-8 grid grid-cols-2 items-center px-[3xl] rounded-full bg-slate-300 overflow-hidden shadow-2xl shadow-90">
                            <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" className="relative block h-10 px-6 tab rounded-full">
                                <span className="text-gray-800">Perdidos</span>
                            </button>
                            <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" className="relative block h-10 px-6 tab rounded-full">
                                <span className="text-gray-800">Encontrados</span>
                            </button>
                        </div>

                    </div>

                </div>
                
            </div>
            <footer><Navigation></Navigation></footer>
        </div>
    )

}

export default Publicaciones;