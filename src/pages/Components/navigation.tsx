import React, { useState } from "react";
import { HiHome, HiChatAlt2, HiSpeakerphone, HiUserCircle } from "react-icons/hi";
import Link from "next/link";

function NavigationItem({
    path,
    icono,
    name,
  }: {
    path: string;
    icono: JSX.Element;
    name: string;
}){
  
    return (
      <Link href={path}>
        {icono}
        <span className="">{name}</span>
      </Link>
    );
  }

const Navigation = () => {
  const [active, setActive] = useState(0);
  const Menus = [
    { name: "Inicio", icono: <HiHome />, path: "/publicaciones" },
    { name: "Explorar", icono: <HiSpeakerphone />, path: "" },
    { name: "Chat", icono: <HiChatAlt2 />, path: "/chats" },
  ];

  return (
    <div className="bg-slate-200 px-6 w-full h-16 rounded-t-2xl absolute bottom-0">
      <ul className="flex relative flex-row gap-x-12 px-6 justify-center">
        <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow"></span>
        <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow1"></span>
        {Menus.map((menu, i) => (
          <li className="w-16" key={i}>
            
              <main className="flex flex-col items-center mt-6" onClick={() => setActive(i)}>
                <span className={`text-2xl z-10 duration-500 ${i === active ? "active -mt-2 text-orange-400" : ""}`}>
                  {menu.icono}
                </span>
                <span
                  className={`font-semibold ${active === i ? "-translate-y-[0.5px] duration-700 opacity-100 text-sm" : "opacity-0 translate-y-12"
                    }`}
                >
                  {menu.name}
                </span>
              </main>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
