import React, { useState } from "react";
import { HiChatAlt2, HiSpeakerphone, HiMap } from "react-icons/hi";
import { IoHome } from 'react-icons/io5';
import Link from "next/link";
import { useRouter } from "next/router";

const NavigationItem = ({ path, icono, name }: { path: string; icono: JSX.Element; name: string; }) => {
  const router = useRouter();

  return (
    <Link
      href={path}
      className={`${
        router.pathname == path ? "text-orange-300" : ""
        } flex flex-col items-center gap-1 text-center text-xl mt-2`}>
      {icono}
      <span className="text-xs font-medium ">{name}</span>
    </Link>
  );
};

const Navigation = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="bg-white px-6 w-full h-14 fixed bottom-0 font-Poppins text-[12px]">
      <ul className="flex relative flex-row gap-x-12 px-6 justify-center">
        <div className="flex flex-row flex-grow justify-between ">
          <NavigationItem path="/publicaciones" icono={<IoHome />} name="Inicio" />
          <NavigationItem path="/mapa" icono={<HiMap />} name="Mapa" />
          <NavigationItem path="/refugios" icono={<HiSpeakerphone />} name="Refugios" />
          <NavigationItem path="/chats" icono={<HiChatAlt2 />} name="Chat" />
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
