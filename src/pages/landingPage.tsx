import React from "react";
import { Footer } from "./Components/LandingComponents/landingFooter";
import {Header} from "./Components/LandingComponents/landingHeader";

interface CardProps {
  backgroundImage: string;
  title: string;
  description: string;
}
//Diseño de las cards
const Card: React.FC<CardProps> = ({ backgroundImage, title, description }) => (
  <div className="bg-slate-50 w-80 mb-16 h-auto flex flex-col items-center p-8 rounded-lg shadow-lg group grow-0 hover:scale-110 duration-700">
    <div className="bg-cover aspect-square w-44 -mt-24 bg-center rounded-lg shadow-sm transition-all duration-1000 transform-gpu group-hover:scale-75 z-20" style={{ backgroundImage }}></div>
    <div id="content-wrapper" className="flex flex-col opacity-0 group-hover:opacity-100 invisible group-hover:visible h-0 group-hover:h-full delay-200 z-10">
      <div id="content" className="flex flex-col items-center -mt-28 group-hover:mt-2 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-600">
        <h1 className="font-bold text-2xl tracking-wide text-slate-900">{title}</h1>
        <p className="font-light text-center text-slate-700">{description}</p>
      </div>
    </div>
  </div>
);

export function LandingPage(): JSX.Element {
  return (
    <div>
        <Header />
      
        <div className="flex justify-center flex-col w-full md:relative">
            <div className="sticky top-7 h-screen bg-orange-300">
                <div className="flex flex-row gap-48">
                    <div className="flex flex-col mt-20 lg:mt-48">
                        <h1 className="font-bold flex mb-6 ml-20 justify-start text-5xl">Bienvenido a PawPal!</h1>
                        <h2 className="font-thin flex text-xl ml-20 lg:max-w-xl justify-start text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti repudiandae praesentium fugiat quia, saepe asperiores ut! Facere ullam amet quaerat natus! Ad deserunt ea architecto! Modi vel animi distinctio.
                        </h2>
                    </div>
                    <div className="mt-24 drop-shadow-2xl"><img  src="/Cool-dog.png" alt="perro"/></div>
                </div>
            </div>

            <div className="sticky h-auto flex flex-col items-center justify-start bg-stone-200 text-white">
            <h2 className="text-4xl pt-28 text-center">¿Cómo funciona nuestra aplicación?</h2>

            <div className="flex justify-center flex-col lg:flex-row mt-44 gap-14 mb-20 group">
                <Card
                backgroundImage="url(mapa-personitas.png)"
                title="Mapa"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque at sequi, fugiat aut molestias, est voluptas eveniet perspiciatis fuga esse aspernatur odio numquam! Modi provident quos saepe reprehenderit aliquam amet."
                />

                <Card
                backgroundImage="url(/publicaciones.png)"
                title="Publicaciones"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque at sequi, fugiat aut molestias, est voluptas eveniet perspiciatis fuga esse aspernatur odio numquam! Modi provident quos saepe reprehenderit aliquam amet."
                />

                <Card
                backgroundImage="url(/chat.jpg)"
                title="Chat"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque at sequi, fugiat aut molestias, est voluptas eveniet perspiciatis fuga esse aspernatur odio numquam! Modi provident quos saepe reprehenderit aliquam amet."
                />
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
        <Footer />
    </div>
  );
}
