import React, { useState } from "react";
import { HiChatAlt2, HiSpeakerphone, HiMap } from "react-icons/hi";
import { IoHome } from 'react-icons/io5';
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
      className={`flex flex-col items-center gap-1 text-center w-[70px] p-[4px] md:p-0 text-xl md:text-2xl mt-[4px] rounded-md  ${router.pathname == path ? "text-orange-300 bg-[#ffebd47a] md:bg-transparent" : ""}`}
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
    
      
    <div className={`" bg-gray-300 fixed  font-Poppins ${mediumScreen ? `top-0 rounded-e-[25px] h-screen border-solid px-1 flex justify-center duration-500 ${!isOpen ? ' w-12 ':'w-72'}` : " px-6 w-full bottom-0 h-14 text-[12px]"}`}>
      <div className={mediumScreen ? `absolute top-6 z-20 duration-500 ease-in-out ${isOpen ? "translate-x-[230px]" : ""}`: "hidden"}>
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      <ul className={` relative ${mediumScreen ? "flex flex-col top-20 gap-4 items-center" : "flex flex-grow flex-row justify-between"}`}>
        
        <NavigationItem path="/publicaciones" icono={<IoHome />} name="Inicio" />
        <Divider className={mediumScreen ? "w-4 bg-gray-300":"hidden"}/>
        <NavigationItem path="/mapa" icono={<HiMap />} name="Mapa" />
        <Divider className={mediumScreen ? "w-4 bg-gray-300":"hidden"}/>
        <NavigationItem path="/refugios" icono={<HiSpeakerphone />} name="Refugios" />
        <Divider className={mediumScreen ? "w-4 bg-gray-300":"hidden"}/>
        <NavigationItem path="/chats" icono={<HiChatAlt2 />} name="Chat " />
        
      </ul>
    </div>
    
  );
};

export default Navigation;
