import React, {useState} from 'react';
import Link from 'next/link';
import { Flex, Menu, Text, Button } from '@mantine/core';
import HamburgerButton from './hamburger';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';



export function Header():JSX.Element {

    const [isOpen, setIsOpen] = useState(false);


    return(
        <div className= 
            "container mx-auto flex items-center border-b-2 px-5 py-2 h-20 shadow-sm"
        >
            
            <button className='flex flex-row items-center'>
                <img src='/logoPawPal.png' alt='logo'/>
                <h1 className='font-bold text-xl'> Paw<span className='text-orange-500'>Pal</span> </h1>
            </button>
            <div className="grow">
                <Flex direction={'row'} className='hidden md:flex md:items-center md:justify-end md:gap-3 lg:gap-8'>
                    <button>Inicio</button>
                    <button>Mapa</button>
                    <button>Contacto</button>
                    <button className='border-2 border-black p-1 w-36 rounded-md hover:bg-zinc-100 hover:transition-colors'><Link href={'/createAccount'}>Crear cuenta</Link></button>
                    <button className='border-2 border-black bg-black text-white p-1 w-36 rounded-md'><Link href={'/logIn'}>Iniciar sesión</Link> </button>
                    
                </Flex>
                <div className='flex items-center justify-end md:hidden'>
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <button><HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen}/></button>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>Application</Menu.Label>
                            <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
                            <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
                            <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
                            <Menu.Item
                                icon={<IconSearch size={14} />}
                                rightSection={<Text size="xs" color="dimmed">⌘K</Text>}
                            >
                                Search
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Label>Danger zone</Menu.Label>
                            <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
                            <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item>

                        </Menu.Dropdown>
                    </Menu>
                </div>

            </div>

        </div>
    )
}