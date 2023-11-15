import React, { useState } from "react";
import { imageUploader } from "~/utils/imageUploade";


const Formulario : React.FC = () => {
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);


  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;

  //   if (files && files.length > 0) {
  //     setSelectedFile(files[0]!);
  //   }
  // };

  // const handleSubmit = (e: React.FormEvent): void => {
  //   e.preventDefault();

  //   if (selectedFile) {
  //     try {
  //       const imageUrl = imageUploader(selectedFile);
  //       console.log('Image uploaded:', imageUrl);
  //       // You can handle the uploaded URL as needed (e.g., store in state, send to server, etc.)
  //     } catch (error) {
  //       console.error('Error uploading image:', error);
  //     }
  //   }
  // };

  return (
    // <form onSubmit={handleSubmit}>
    //   <label className="flex flex-col mb-4 items-center justify-center md:w-[450px] w-[290px] h-44 md:h-44 border-2 border-gray-300 px-4 rounded-lg cursor-pointer bg-gray-200">
    //     <input
    //       id="dropzone-file"
    //       type="file"
    //       className="hidden"
    //       onChange={handleFileChange}
    //     />
    //   </label>
    //   <button type="submit" className="w-[220px] y-12">
    //     Enviar
    //   </button>
    // </form>
    <form></form>
  );
};

export default Formulario;