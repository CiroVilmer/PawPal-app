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


const ModalExample = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const mediumScreen = useMediaQuery("(min-width: 710px)");

    return (
     
    <>
      <div onClick={onOpen}>
        <button className='fixed z-30 bottom-16 md:bottom-10 border-2 rounded-full border-orange-400 right-6 text-5xl drop-shadow-xl text-[#ffa826b6] hover:scale-105 duration-500'>
            {mediumScreen ? <AiFillPlusCircle/> : <Link href='/postCreate'><AiFillPlusCircle/></Link>}
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay className="bg-[#000] !opacity-20 z-0" />
        <ModalContent className="z-30 !m-auto !w-max min-w-[350px] !max-w-[85%] md:top-[2vh]"> 
          <ModalBody>
            <div className="md:w-[640px] h-[600px] p-8 flex flex-col items-center justify-center z-30 bg-white rounded-xl">
              <PostForm/>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    ); };
    export default ModalExample;