"use client";

import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

import { TextEditor } from "./text-editor";
import { Button } from "../ui/button";
import { updateBio } from "@/actions/update_bio";
import { toast } from "../ui/use-toast";

export const Bio = ({ bio, email }) => {
  const [currentBio, setCurrentBio] = useState(bio);
  const [editable, setEditable] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (bio) {
      setShowEditor(true);
    }
  }, [bio]);

  const handleSave = async () => {
    setLoading(true);
    const response = await updateBio(email, currentBio);
    if (response.success === true) {
      toast({
        title: response.message,
      });
    } else {
      toast({
        title: response.message,
        variant: "destructive",
      });
    }
    setLoading(false);
    setEditable(false);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-foreground font-bold text-lg">Your bio</h2>

        {currentBio && !editable ? (
          <Button
            variant={"ghost"}
            onClick={() => {
              setEditable(true);
              setShowEditor(true);
            }}
            className="hover:bg-transparent flex items-center gap-2 group hover:text-primary"
          >
            <FaEdit size={20} className="" /> <span className="">Edit</span>
          </Button>
        ) : null}
      </div>
      {showEditor && (
        <div className="shadow-xl rounded-lg px-7 py-12 mt-7 outline outline-1 outline-transparent dark:outline-primary flex flex-col gap-10">
          <TextEditor
            bio={currentBio}
            editable={editable}
            setBio={setCurrentBio}
          />
          {editable && (
            <Button
              className="w-fit self-end"
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? "Saving ..." : "Save"}
            </Button>
          )}
        </div>
      )}

      {currentBio === "" && showEditor === false ? (
        <div className="my-7 flex flex-col justify-center items-center gap-3 h-[30vh]">
          <p className="text-foreground">
            You haven&#39;t add bio yet, please add your bio here
          </p>
          <Button
            onClick={() => {
              setEditable(true);
              setShowEditor(true);
            }}
          >
            Add a bio
          </Button>
        </div>
      ) : null}
    </>
  );
};
