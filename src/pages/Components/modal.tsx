import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import Card from '@mantine/core';
import { AiFillPlusCircle } from 'react-icons/ai';
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";
import { MdOutlineImage } from 'react-icons/md';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PostForm from "../postCreate";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { handleGetCurrentMapCenter } from "../Map/LeafletMap"; // Asegúrate de ajustar la ruta



const ModalExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const mediumScreen = useMediaQuery("(min-width: 710px)");

  const handleButtonClick = () => {
    // Llama a handleGetCurrentMapCenter cuando se presiona el botón
    handleGetCurrentMapCenter();
    onOpen(); // Cierra el modal si se desea
  };


  return (
    <>
      <div onClick={handleButtonClick}>
        <button className='fixed z-30 bottom-16 md:bottom-10 border-2 rounded-full border-orange-400 right-6 text-5xl drop-shadow-xl text-[#ffa826b6] hover:scale-105 duration-500'>
            {mediumScreen ? <AiFillPlusCircle/> : <Link href='/postCreate'><AiFillPlusCircle/></Link>}
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay className="bg-[#000] !opacity-40 z-0" />
        <ModalContent className="z-30 !m-auto !w-max min-w-[350px] !max-w-[85%] md:top-[2vh]"> 
          <ModalBody>
            <div className="md:w-[640px] h-auto py-4 flex flex-col items-center justify-center z-30 bg-white rounded-xl">
              {/* Ajusta el botón para llamar a handleButtonClick */}
              <button onClick={onClose} className='flex justify-center items-center text-gray-400 absolute right-[10px] top-[15px] z-20 w-10 h-8 text-4xl'>
                <IoIosCloseCircleOutline/>
              </button>
              <div className='z-10'>
                <PostForm/>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalExample;