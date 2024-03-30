"use server";

export async function uploadImage() {
  try {
    console.log("here");
    return { success: true, message: "Image uploaded successfully" };
  } catch (error) {
    return { success: false, message: "Error uploading image" };
  }
}
