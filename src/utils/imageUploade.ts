import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


export const imageUploader = async (file: File) => {
    try {
        // Convert File object to a temporary URL
        const url = URL.createObjectURL(file);

        // Upload using temporary URL
        const res = await cloudinary.uploader.upload(url, {
            folder: 'test',
        });

        // Revoke temporary URL after upload
        URL.revokeObjectURL(url);

        return res.secure_url;
    } catch (error) {
        console.log(error);
    }
}
