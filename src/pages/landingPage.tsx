import React from "react"
import { Header } from "./Components/LandingComponents/landingHeader"
export function LandingPage(): JSX.Element{
    return(
        <div>
            <Header/>
            
            <h1 className="flex justify-start mt-28 ml-20 text-5xl font-bold ">Bienvenido a PawlPal</h1>
        </div>
    )
}