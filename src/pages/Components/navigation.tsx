import React, { useState } from "react";
import { HiChatAlt2, HiMap, HiUserGroup } from "react-icons/hi";
import { IoHome } from 'react-icons/io5';
import {  FaUser } from 'react-icons/fa';
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import HamburgerButton from "./LandingComponents/hamburger";
import { Divider } from "@mui/material";



const NavigationItem = ({ path, icono, name }: { path: string; icono: JSX.Element; name: string }) => {
  const router = useRouter();
  const mediumScreen = useMediaQuery("(min-width: 768px)");

  return (
    <Link
      href={path}
      className={`flex flex-col items-center gap-1 text-center w-[70px] p-[4px]  md:p-0 text-xl md:text-2xl mt-[4px] rounded-md  ${router.pathname == path ? "text-orange-300 bg-[#ffebd47a] md:bg-transparent" : "text-stone-400"}`}
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
    
      
    <div className={`" bg-white fixed  font-Poppins ${mediumScreen ? `top-0 left-0 rounded-e-[0px] shadow-lg h-screen border-solid px-1  duration-500 ${!isOpen ? ' w-12':'w-52'}` : " px-6 w-full bottom-0 left-0 h-14 text-[12px]"}`}>
      <div className={mediumScreen ? `flex mt-8 z-20 duration-500 ease-in-out ${isOpen ? "justify-end mr-4" : "justify-center"}`: "hidden"}>
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      <ul className={`  ${mediumScreen ? "flex flex-col top-20 gap-4 items-center mt-8" : "flex flex-grow flex-row justify-between"}`}>
        
        <NavigationItem path="/publicaciones" icono={<IoHome />} name="Inicio" />
        <Divider className={mediumScreen ? "w-4 bg-gray-300 opacity-30":"hidden"}/>
        <NavigationItem path="/mapa" icono={<HiMap />} name="Mapa" />
        <Divider className={mediumScreen ? "w-4 bg-gray-300 opacity-30":"hidden"}/>
        <NavigationItem path="/refugios" icono={<HiUserGroup />} name="Refugios" />
        <Divider className={mediumScreen ? "w-4 bg-gray-300 opacity-30":"hidden"}/>
        <NavigationItem path="/chats" icono={<HiChatAlt2 />} name="Chat " />
        <div className={mediumScreen ? "bottom-10 fixed rounded-full" : ""}> 
          <div className={mediumScreen ? "w-8 h-8 bg-slate-200 border-stone-400 rounded-full border-2 justify-center flex" : ""}> 
            <NavigationItem path="/perfil" icono={<FaUser />} name="Perfil" />
          </div>
        </div>
      </ul>
    </div>
    
  );
};

export default Navigation;