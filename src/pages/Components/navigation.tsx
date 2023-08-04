import React, { useState } from "react";
import { HiHome, HiChatAlt2, HiSpeakerphone, HiMap } from "react-icons/hi";
import Link from "next/link";


const NavigationItem = ({ path, icono, name}: { path: string; icono: JSX.Element; name: string;}) => {
  return (
    <Link href={path}>
      <div className={`flex flex-col gap-1 items-center mt-2`}>
        <i className={`text-lg`}>{icono}</i>
        <span className="">{name}</span>
      </div>
    </Link>
  );
};

const Navigation = () => {
  const [active, setActive] = useState(true);
  
  

  return (
    <div className="bg-white px-6 w-full h-14 absolute bottom-0 font-Poppins text-[12px]">
      <ul className="flex relative flex-row gap-x-12 px-6 justify-center">
        <div className="flex flex-row flex-grow justify-between ">
          <NavigationItem path="/publicaciones" icono={<HiHome />} name="Inicio"/>
          <NavigationItem path="/mapa" icono={<HiMap />} name="Mapa"/>
          <NavigationItem path="/refugios" icono={<HiSpeakerphone />} name="Refugios"/>
          <NavigationItem path="/chats" icono={<HiChatAlt2 />} name="Chat"/>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
