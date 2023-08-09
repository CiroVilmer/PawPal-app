import React from "react";
import Footer from "./Components/LandingComponents/landingFooter";
import Header from "./Components/LandingComponents/landingHeader";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { Divider } from '@mui/material';

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
  <div className="bg-slate-50 w-80 mb-16 h-auto flex flex-col items-center p-7 rounded-lg shadow-lg group grow-0 lg:hover:scale-105 lg:hover:shadow-2xl duration-700 ">
    <div className="bg-cover aspect-square w-36 -mt-24 bg-center rounded-lg shadow-sm transition-all duration-1000 transform-gpu z-20" style={{ backgroundImage }}></div>
    <div id="content-wrapper" className="flex flex-col opacity-100 visible h-full delay-200 z-10">
      <div id="content" className="flex flex-col items-center mt-2 opacity-100 transition-all duration-1000 delay-600">
        <h1 className="font-bold text-2xl tracking-wide text-[#144F60] mt-4">{title}</h1>
        <Divider className='h-4 w-36'></Divider>
        <p className=" font-light text-[15px] text-center text-slate-700 mt-4">{description}</p>
      </div>
    </div>
  </div>
);

const Pics: React.FC<objetivoPicsProps> = ({image, title, description}) => (
  <div className="flex flex-col">
    <div className="flex justify-center">
      <img src={image} alt='' className="flex justify-center scale-[.85] mb-2 border-4 border-[#144F60] rounded-2xl select-none pointer-events-none hover:scale-[.90] duration-500"/>
    </div>
    <h1 className='flex justify-center text-md font-bold mb-1'>{title}</h1>
    <p className='text-xs text-center max-w-[288px] lg:px-7'>{description}</p>
  </div>
);
export function scrollUp(){
  window.scrollTo({top:0, behavior: 'smooth'})
}



const LandingPage: React.FC = () : JSX.Element => {
  
  const largeScreen = useMediaQuery("(min-width: 1140px)");
  return (
    <div>
        <Header />
      
        <div className="flex justify-center flex-col w-full md:relative font-Poppins">
            <div className="flex lg:items-center items-start sticky -top-36 lg:top-0 h-auto lg:h-screen background">
              <div className={largeScreen ? "flex flex-row items-center flex-grow justify-between ml-20" : "flex flex-col p-5 justify-center mt-28"}>
                <div className="flex flex-col">
                  <h1 className="font-bold flex lg:mb-6 mb-12  text-4xl justify-center text-center lg:justify-start md:text-left">Bienvenido a Paw<span className = 'text-[#FE8A2A]'>Pal</span>!</h1>
                  <p className="font-normal flex text-lg lg:max-w-2xl lg:text-left text-center mb-8">
                    Nuestro objetivo es brindar al público una forma fácil y rápida para encontrar a su mascota extraviada. 
                    Para esto nos planteamos como fin, crear una app donde fomentar una red de usuarios unida para conseguir un beneficio generalizado.<br></br>
                    ¡Únete a la comunidad para encontrar a tu mascota o ayudar a aquellos en busca de su hogar!                    
                  </p>
                  <div className={largeScreen ? "" :"flex justify-center mt-8"}>
                    <button className='p-1 w-36 h-14 rounded-md transform text-[#144F60] font-semibold border-2 border-[#144F60] transition duration-300 ease-in hover:bg-[#144F60] hover:text-white active:scale-[.98]'>
                      <Link href='./createAccount' >Empezar ahora</Link>
                    </button>
                  </div>
                </div>
                <div className={largeScreen ? "drop-shadow-xl scale-[75%] " : "hidden"}><img  src="petting-dog.png" alt=""/></div>
              </div>
            </div>

            <div className="sticky h-auto flex flex-col items-center justify-start bg-[#FE8A2A] px-5 md:p-0">
              <h1 className="text-3xl md:text-4xl pt-16 text-center font-semibold text-white mb-5">¿Cómo funciona nuestra <span className='text-[#144F60] underline'>aplicación</span>?</h1>
              <p className='text-center text-lg max-w-2xl text-white'>
                Los usuarios pueden realizar publicaciones sobre animales perdidos/encontrados, verlos en un mapa y acceder a puntos de interés cercanos. 
                También ofrecemos funciones para refugios y abrir canales de comunicación.              
              </p>

              <div className="flex justify-center flex-col lg:flex-row mt-44 gap-14 mb-20 group">
                <Card
                  backgroundImage="url(mapa-personitas.png)"
                  title="Mapa"
                  description="Nuestro mapa no solo mostrará la ubicación de animales avistados, sino que también recibirás alertas en tiempo real sobre estos para mantenerte actualizado sobre la presencia de diferentes especies en tu zona o en áreas de tu interés."
                />

                <Card
                  backgroundImage="url(/publicaciones.png)"
                  title="Publicaciones"
                  description="En esta sección, podrás encontrar fotos y descripciones de animales perdidos o encontrados y su ubicacion. Si has perdido o encontrado un amigo peludo, puedes publicar aquí la información relevante."
                />

                <Card
                  backgroundImage="url(/chat.jpg)"
                  title="Chat"
                  description="Conectate con otros dueños o refugios sin salir de la aplicación. Simplificá tus comunicaciones y encontrá el apoyo que necesitas en tiempo real. Descubre a otros usuarios dispuestos a ayudar y compartir experiencias."
                />
              </div>
            </div>

            <div className="sticky -top-64 lg:-top-5 h-auto background flex items-center md:p-0">
              <div className={largeScreen ? "flex flex-row-reverse items-center flex-grow px-32  justify-between py-24" : "flex flex-col justify-start gap-8 py-12 px-5"}>
                <div className="flex flex-col">
                  <h1 className="font-semibold md:font-bold flex lg:justify-end justify-center lg:text-right text-center text-3xl md:text-4xl mb-6">¿Cuál es nuestro objetivo?</h1>
                  <p className="flex md:text-lg lg:max-w-[530px] text-md justify-end lg:text-right text-center">
                    
                  Nuestro objetivo es brindar a los dueños la posibilidad de encontrar servicios para sus mascotas, buscar o difundir mascotas perdidas, y al mismo tiempo ayudar a los refugios a difundir, concientizar y buscar voluntarios.                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 self-center">
                    <Pics
                      image="/Concientizar.png"
                      title="Concientizar"
                      description="Generar conciencia sobre la adopción y el cuidado responsable de los animales."
                    />
                    <Pics
                      image="/Ayudar.png"
                      title="Ayudar"
                      description="Pretendemos ayudar a refugios y dueños en la busqueda de hogares para mascotas."
                    />
                    <Pics
                      image="/Facilitar.png"
                      title="Facilitar"
                      description="Facilitar la búsqueda mascotas perdidas y la interacción entre usuarios y refugios."
                    />  
                    <Pics
                      image="/Difundir.png"
                      title="Difundir"
                      description="Difundimos información relevante sobre adopciones y mascotas perdidas/encontradas."
                    />
                </div>
              </div>   
            </div>

            <div className={largeScreen ? "sticky top-0 h-screen flex items-center justify-start orange-bg" : "sticky top-0 h-auto flex items-start py-48 justify-start bg-stone-300"}>
              <div className="flex flex-row items-center flex-grow justify-between mx-32">
                <div className="flex flex-col justify-start text-white">
                  <h1 className="font-bold mb-6 text-4xl text-left max-w-[580px]">Ponete en <span className = "text-[#144F60]">contacto</span> con nosotros!</h1>
                  <p className="font-normal flex text-lg lg:max-w-xl text-left mb-8">
                    Nos encantaría escuchar tus comentarios y responder a tus preguntas. Estamos comprometidos en brindarte la mejor experiencia posible. No dudes en ponerte en contacto con nosotros                  </p>
                  <button onClick={() => window.open ('https://www.instagram.com/pawpal_app/')} className=' p-1 w-36 h-14 text-md text-white rounded-md azul transform transition duration-300 ease-in hover:scale-105 active:scale-[.98]'>Contacto</button>
                </div>
                <div className={largeScreen ? "drop-shadow-xl select-none pointer-events-none" : "hidden"}><img  src="/gatito-libros.png" alt="fotoProv"/></div>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default LandingPage;