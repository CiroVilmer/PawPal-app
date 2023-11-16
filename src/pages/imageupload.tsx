import React, { useState } from "react";
import { imageUploader } from "~/server/api/imageUploade";



const Formulario : React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      setSelectedFile(files[0]!);
    }
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile!);
    formData.append("upload_preset", "pawpalupload-unsigned");
    formData.append("api_key", process.env.CLOUDINARY_API_KEY!);

    const result = fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_USER_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
      
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="flex flex-col mb-4 items-center justify-center md:w-[450px] w-[290px] h-44 md:h-44 border-2 border-gray-300 px-4 rounded-lg cursor-pointer bg-gray-200">
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      <button type="submit" className="w-[220px] y-12">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;