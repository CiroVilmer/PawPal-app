import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const imageUploader = async (file: any) => {
    try {
        const res = await cloudinary.uploader.upload(file, {
            folder: 'test',
        });
        return res.secure_url;
    } catch (error) {
        console.log(error);
    }
}

