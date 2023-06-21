import React from "react";
import { Footer } from "./Components/LandingComponents/landingFooter";
import {Header} from "./Components/LandingComponents/landingHeader";

interface CardProps {
  backgroundImage: string;
  title: string;
  description: string;
}

interface objetivoPicsProps{
  image:string;
  title:string;
  description:string;
}
//Diseño de las cards
const Card: React.FC<CardProps> = ({ backgroundImage, title, description }) => (
  <div className="bg-slate-50 w-80 mb-16 h-auto flex flex-col items-center p-8 rounded-lg shadow-lg group grow-0 hover:scale-110 duration-700">
    <div className="bg-cover aspect-square w-44 -mt-24 bg-center rounded-lg shadow-sm transition-all duration-1000 transform-gpu group-hover:scale-75 z-20" style={{ backgroundImage }}></div>
    <div id="content-wrapper" className="flex flex-col opacity-100 visible h-full delay-200 z-10">
      <div id="content" className="flex flex-col items-center mt-2 opacity-100 transition-all duration-1000 delay-600">
        <h1 className="font-bold text-2xl tracking-wide text-slate-900">{title}</h1>
        <p className="font-light text-center text-slate-700">{description}</p>
      </div>
    </div>
  </div>
);

const Pics: React.FC<objetivoPicsProps> = ({image, title, description}) => (
  <div className="flex flex-col">
    <div className="flex justify-center">
      <img src="/fotoProvisoria.png" alt={image} className="flex justify-center scale-[.85] mb-2 shadow-orange-500 shadow-lg hover:scale-[.90] duration-500"/>
    </div>
    <h1 className='flex justify-center text-md font-bold mb-1'>{title}</h1>
    <p className='text-xs text-center max-w-xs px-7'>{description}</p>
  </div>
);

export function LandingPage(): JSX.Element {
  return (
    <div>
        <Header />
      
        <div className="flex justify-center flex-col w-full md:relative">
            <div className="sticky top-7 h-screen bg-orange-300">
                <div className="flex flex-row gap-48">
                    <div className="flex flex-col mt-20 lg:mt-48 ml-20">
                        <h1 className="font-bold flex mb-6 justify-start text-5xl">Bienvenido a PawPal!</h1>
                        <h2 className="font-normal flex text-xl lg:max-w-xl justify-start text-left mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti repudiandae praesentium fugiat quia, saepe asperiores ut! Facere ullam amet quaerat natus! Ad deserunt ea architecto! Modi vel animi distinctio.
                        </h2>
                        <button className='border-2 p-1 w-36 h-12 rounded-md border-black hover:bg-orange-100 active:bg-orange-200 transform transition duration-300 ease-in hover:scale-110 active:scale-[.98]'>Empezar ahora</button>

                    </div>
                    <div className="mt-24 drop-shadow-2xl"><img  src="/Cool-dog.png" alt="perro"/></div>
                </div>
            </div>

            <div className="sticky h-auto flex flex-col items-center justify-start bg-stone-400 ">
              <h2 className="text-4xl pt-28 text-center font-semibold text-black mb-5">¿Cómo funciona nuestra aplicación?</h2>
              <h3 className='text-center text-black text-lg max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis recusandae, quasi totam voluptatum perferendis. Earum laboriosam, eius quaerat laborum iure nostrum, odit soluta consequatur obcaecati omnis et. Fuga, adipisci.</h3>

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

            <div className="sticky -top-3 h-auto bg-orange-300">
              <div className="flex flex-row-reverse items-center my-24">
                <div className="flex flex-col mr-8">
                  <h1 className="font-bold flex mb-6 ml-20 justify-end text-right text-5xl">¿Cuál es nuestro objetivo?</h1>
                  <h2 className="font-normal flex text-xl ml-20 lg:max-w-xl justify-end text-right">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti repudiandae praesentium fugiat quia, saepe asperiores ut! Facere ullam amet quaerat natus! Ad deserunt ea architecto! Modi vel animi distinctio.
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <Pics
                      image="/fotoProvisoria"
                      title="Concientizar"
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error quo at accusantium, voluptatem tenetur."
                    />
                    <Pics
                      image="/fotoProvisoria"
                      title="Ayudar"
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error quo at accusantium, voluptatem tenetur."
                    />
                    <Pics
                      image="/fotoProvisoria"
                      title="Facilitar"
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error quo at accusantium, voluptatem tenetur."
                    />
                    <Pics
                      image="/fotoProvisoria"
                      title="Difundir"
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error quo at accusantium, voluptatem tenetur."
                    />
                </div>
              </div>   
            </div>

            <div className="sticky top-0 h-screen flex flex-col items-center justify-start bg-stone-400">
            <h1 className="text-5xl mt-28">facu se la come</h1>
            <p>y ciro se la da</p>
            </div>
        </div>
        <Footer />
    </div>
  );
}