import React, { useState } from "react";
import { HiChatAlt2, HiMap, HiUserGroup } from "react-icons/hi";
import { IoHome } from 'react-icons/io5';
import {  FaUser } from 'react-icons/fa';
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import HamburgerButton from "./LandingComponents/hamburger";
import { Divider } from "@mui/material";
import {ImArrowLeft2} from 'react-icons/im';
import {FaRegEnvelope} from 'react-icons/fa';



const NavigationItem = ({ path, icono, name }: { path: string; icono: JSX.Element; name: string }) => {
  const router = useRouter();
  const mediumScreen = useMediaQuery("(min-width: 768px)");

  return (
    <Link
      href={path}
      className={`flex flex-col justify-center items-center gap-1 text-center w-auto min-w-[48px] p-[4px]  md:p-0 text-xl md:text-2xl mt-[4px] rounded-md  ${router.pathname == path ? "text-orange-300 bg-[#ffebd47a] md:bg-transparent" : "text-stone-400"}`}
    >
      {icono}
      <span className={mediumScreen ? "hidden" : "text-xs font-medium"}>{name}</span>
    </Link>
  );
};

const Navigation = () => {

  const mediumScreen = useMediaQuery("(min-width: 768px)");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">

      { mediumScreen ? <a className='hidden'></a> : <div className={`bg-white w-32 h-auto rounded-t-[2px] fixed -bottom-16 opacity-0 left-2 ${isOpen ? "-translate-y-32 opacity-100 duration-1000" : ""}`}>
        <div className={`${isOpen ? "flex flex-col gap-4 items-start mx-3 py-2" : "hidden"} `}>
          
            <Link href='/contacto'>
                <div className="flex flex-row gap-2 text-gray-400 items-center">
                  <FaRegEnvelope className="text-xl"/>
                  <span className="text-sm font-medium">Contacto</span>
                </div>
            </Link>
            <Divider className="w-full bg-gray-100 opacity-10"/>
            <Link href='/'>
                <div className="flex flex-row gap-2 text-gray-400 items-center">
                  <ImArrowLeft2 className="text-xl"/>
                  <span className="text-sm font-medium">Volver</span>
                </div>
            </Link>
            <Divider className="w-full bg-gray-100 opacity-10"/>
            <Link href='/perfil'>
                <div className="flex flex-row gap-2 text-gray-400 items-center">
                  <FaUser className="text-xl"/>
                  <span className="text-sm font-medium">Perfil</span>
                </div>
            </Link>
          </div>
        </div>
      
      }
   
    <div className={`" bg-white fixed  font-Poppins ${mediumScreen ? `top-0 left-0 rounded-e-[0px] shadow-lg h-screen border-solid px-1  duration-500 ${!isOpen ? ' w-12':'w-52'}` : " px-6 w-full bottom-0 left-0 h-14 text-[12px]"}`}>
      
      <ul className={`  ${mediumScreen ? "flex flex-col top-20 gap-4 items-center mt-8" : "flex  flex-row justify-between"}`}>
        { mediumScreen ? <a className='hidden'></a> : <NavigationItem path="" icono={<HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen}/>} name=''/>}
        <NavigationItem path="/publicaciones" icono={<IoHome />} name="Inicio" />
        <Divider className={mediumScreen ? "w-4 bg-gray-300 opacity-30":"hidden"}/>
        <NavigationItem path="/foro" icono={<HiUserGroup />} name="Refugios" />
        <Divider className={mediumScreen ? "w-4 bg-gray-300 opacity-30":"hidden"}/>
        <NavigationItem path="/mapa" icono={<HiMap />} name="Mapa" />
        <Divider className={mediumScreen ? "w-4 bg-gray-300 opacity-30":"hidden"}/>
        <NavigationItem path="/chats" icono={<HiChatAlt2 />} name="Chat " />
        <div className={mediumScreen ? "bottom-10 fixed rounded-full flex flex-col gap-8 items-center" : "hidden"}>
          <div className={mediumScreen ? "" : "hidden"}> 
            <NavigationItem path="/contacto" icono={<FaRegEnvelope className="text-2xl"/>} name="Back"/>
          </div> 
         
          <div className={mediumScreen ? "" : "hidden"}> 
            <NavigationItem path="/" icono={<ImArrowLeft2 />} name="Back" />
          </div> 
          <div className={mediumScreen ? "w-7 h-7 bg-slate-200 border-stone-400 rounded-full border-[3px] flex justify-center" : ""}> 
            <NavigationItem path="/perfil" icono={<FaUser />} name="Perfil" />
          </div>
        </div>
      </ul>
    </div>
    </div>
  );
};

export default Navigation;