"use server";

import { v2 as cloudinary } from "cloudinary";

export async function uploadImage(images) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const imageToUpload = images.map((image) => {
    return (async () => {
      const result = await cloudinary.uploader.upload(image);
      return result;
    })();
  });

  try {
    let uploadedImages = await Promise.all(imageToUpload);
    return { success: true, images: uploadedImages };
  } catch (error) {
    return { success: false, message: "Error uploading images" };
  }
}
