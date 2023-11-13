import React from 'react';
import { useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { AiFillPlusCircle } from 'react-icons/ai';
import Link from 'next/link';
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';
import PostFormForo from './PostFormForo';



const ModalForo = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const mediumScreen = useMediaQuery("(min-width: 710px)");

    return (
        <body>
            <div onClick={onOpen}>
                <button className='fixed z-30 bottom-16 md:bottom-10 border-2 rounded-full border-orange-400 right-6 text-5xl drop-shadow-xl text-[#ffa826b6] hover:scale-105 duration-500'>
                    {mediumScreen ? <AiFillPlusCircle/> : <Link href='/postCreate'><AiFillPlusCircle/></Link>}
                </button>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay className="bg-[#000] !opacity-30 z-0" />
                <ModalContent className="z-30 !m-auto !w-max min-w-[350px] !max-w-[85%] relative pt-[10%]"> 
                    <ModalBody>
                        <div className="md:w-auto h-auto flex items-start p-12 justify-center z-30 bg-white rounded-xl">
                            <PostFormForo/>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </body>
    )
}

export default ModalForo;