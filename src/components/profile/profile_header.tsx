"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCamera } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

import { InitialsAvatar } from "../common/initials_avatar";
import { Button } from "../ui/button";
import { updateProfilePicture } from "@/actions/update_profile_picture";
import { toast } from "../ui/use-toast";
import { useUser } from "@/hooks/useUser";

export const ProfileHeader = ({ data }) => {
  const [image, setImage] = useState(data.profile_picture);
  const [loading, setLoading] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const { refetch } = useUser();

  const handleSave = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", image);
      formData.append("id", data._id);
      const response = await updateProfilePicture(formData);
      if (response.success) {
        refetch();
        toast({
          title: response.message,
        });
        setShowUpdate(false);
      } else {
        toast({
          title: response.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center gap-5">
      <div className="w-[100px]  aspect-square overflow-hidden rounded-full p-1 group outline outline-4 outline-slate-300 hover:outline-primary transition-[outline-color] duration-300">
        <label
          htmlFor="profile_picture"
          className="relative w-full h-full cursor-pointer"
        >
          {image ? (
            <>
              <img
                src={image instanceof File ? URL.createObjectURL(image) : image}
                alt="Profile Picture"
                className="rounded-full object-cover w-full h-full"
              />
            </>
          ) : (
            <InitialsAvatar
              name={data.fullname}
              className="w-full h-full"
              fallbackClassName="text-lg md:text-2xl"
            />
          )}

          <input
            type="file"
            accept="image/*"
            id="profile_picture"
            className="hidden"
            onChange={(e) => {
              setImage(e.target.files![0] || "");
              setShowUpdate(true);
            }}
          />

          <div className="absolute top-0 left-0 grid place-items-center w-full h-full rounded-full bg-black/50 translate-y-[calc(100%+8px)] group-hover:translate-y-0 transition-transform duration-300">
            <FaCamera className="text-white text-2xl" />
          </div>
        </label>
      </div>
      <div className="flex items-center justify-between  w-full">
        <div>
          <h1 className="text-lg lg:text-xl font-semibold">{data.fullname}</h1>
          <p>{data.email}</p>

          <Link
            href={"/profile/results"}
            className="text-primary flex items-center gap-1 mt-2 hover:underline"
            target="_blank"
          >
            <span>Show my results</span>
            <FaExternalLinkAlt className="inline" size={13} />
          </Link>
        </div>
        {showUpdate && (
          <Button
            className="disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
            onClick={handleSave}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        )}
      </div>
    </div>
  );
};
