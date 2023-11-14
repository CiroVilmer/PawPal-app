import { env } from "process";
import { v2 as cloudinary } from 'cloudinary'

// Require the cloudinary library
// Return "https" URLs by setting secure: true
cloudinary.config({
    cloudname: env.CLOUDINARY_USER_NAME,
    api_key: env.CLOUDINARY_API_KEY,
    api_secret: env.CLOUDINARY_API_SECRET,

  secure: true
});

// Log the configuration
console.log(cloudinary.config());

const Formulario = () => {
    return(
        <form>
            <label  className="flex flex-col mb-4  items-center justify-center md:w-[450px] w-[290px] h-44 md:h-44 border-2 border-gray-300 px-4 rounded-lg cursor-pointer bg-gray-200">
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <button type="submit" className="w-[220px] y-12 ">enviar</button>
        </form>
    )
}

export default Formulario;