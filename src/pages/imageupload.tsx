import { env } from "process";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloudname: process.env.CLOUDINARY_USER_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,

  secure: true
});

console.log(cloudinary.config());

// const Formulario = () => {
//     return(
//         <form>
//             <label  className="flex flex-col mb-4  items-center justify-center md:w-[450px] w-[290px] h-44 md:h-44 border-2 border-gray-300 px-4 rounded-lg cursor-pointer bg-gray-200">
//                 <input id="dropzone-file" type="file" className="hidden" />
//             </label>
//             <button type="submit" className="w-[220px] y-12 ">enviar</button>
//         </form>
//     )
// }

// export default Formulario;