"use server";

import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { revalidateTag } from "next/cache";

import Student from "@/models/student";
import { connectToDB } from "@/lib/mongoClient";

export async function updateProfilePicture(formData) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    await connectToDB();

    const data = Object.fromEntries(formData);

    const arrayBuffer = await data.file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        })
        .end(buffer);
    });

    await Student.findByIdAndUpdate(
      data.id,
      { profile_picture: (result as UploadApiResponse).secure_url },
      { new: true }
    );

    revalidateTag("profile");

    return { success: true, message: "Updated successfully" };
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
}
